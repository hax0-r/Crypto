import { useEffect, useState } from "react";
import UserDashboardLeftBar from "../../../Components/Dashboard/UserDashboard/UserDashboardLeftBar";
import { Input } from "../../../Components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../../Components/ui/select";
import paymentService, {
  PaymentMethodData,
  PaymentMethodType,
} from "../../../services/paymentService";
import transactionService from "../../../services/transactionService";
import { toast } from "react-toastify";
import { Button } from "../../../Components/ui/button";
import authService from "../../../services/authService";
import { AxiosError } from "axios";

interface UserProfile {
  balance: number;
}

const Withdrawal = () => {
  // State for user's payment methods
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethodData[]>([]);
  const [selectedPaymentMethodId, setSelectedPaymentMethodId] =
    useState<string>("");
  // State for withdrawal amount
  const [amount, setAmount] = useState<string>("");
  // State for loading indicators
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  // State for user profile data (balance)
  const [userProfile, setUserProfile] = useState<UserProfile | null>(null);

  // Fetch user's payment methods and profile data on component mount
  useEffect(() => {
    fetchPaymentMethods();
    fetchUserProfile();
  }, []);

  // Function to fetch user's payment methods
  const fetchPaymentMethods = async () => {
    try {
      setIsLoading(true);
      const response = await paymentService.getPaymentMethods();
      if (response.success && response.data) {
        setPaymentMethods(response.data);
        // If there's a default payment method, select it
        const defaultMethod = response.data.find((method) => method.isDefault);
        if (defaultMethod) {
          setSelectedPaymentMethodId(defaultMethod.id);
        } else if (response.data.length > 0) {
          setSelectedPaymentMethodId(response.data[0].id);
        }
      }
    } catch (error) {
      console.error("Error fetching payment methods:", error);
      toast.error("Failed to load payment methods. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Function to fetch user's profile data (to get balance)
  const fetchUserProfile = async () => {
    try {
      const response = await authService.getProfile();
      if (response.success && response.data) {
        setUserProfile(response.data);
      }
    } catch (error) {
      console.error("Error fetching user profile:", error);
      toast.error(
        "Failed to load your account balance. Please refresh the page."
      );
    }
  };

  // Function to format amount with PKR and commas
  const formatAmount = (value: number): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "PKR",
      minimumFractionDigits: 2,
    }).format(value);
  };

  // Function to handle withdrawal submission
  const handleWithdrawal = async () => {
    // Validate input
    if (!selectedPaymentMethodId) {
      toast.error("Please select a payment method");
      return;
    }

    const amountValue = parseFloat(amount);
    if (isNaN(amountValue) || amountValue <= 0) {
      toast.error("Please enter a valid withdrawal amount");
      return;
    }

    if (amountValue < 5000) {
      toast.error("Minimum withdrawal amount is PKR 5,000");
      return;
    }

    if (amountValue > 50000) {
      toast.error("Maximum withdrawal amount is PKR 50,000");
      return;
    }

    if (userProfile && amountValue > userProfile.balance) {
      toast.error("Insufficient balance for this withdrawal");
      return;
    }

    try {
      setIsSubmitting(true);
      const response = await transactionService.createWithdrawal({
        amount: amountValue,
        paymentMethodId: selectedPaymentMethodId,
      });

      if (response.success) {
        toast.success("Withdrawal request submitted successfully");
        // Reset form
        setAmount("");
        // Refresh user profile to update balance
        fetchUserProfile();
      } else {
        toast.error(response.message || "Failed to process withdrawal request");
      }
    } catch (error: unknown) {
      console.error("Error processing withdrawal:", error);
      const axiosError = error as AxiosError<{ message: string }>;
      const errorMessage =
        axiosError.response?.data?.message ||
        "Failed to process withdrawal. Please try again.";
      toast.error(errorMessage);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Function to get formatted name for payment method
  const getPaymentMethodName = (type: PaymentMethodType): string => {
    switch (type) {
      case PaymentMethodType.JAZZCASH:
        return "JazzCash";
      case PaymentMethodType.EASYPAISA:
        return "EasyPaisa";
      case PaymentMethodType.BANK:
        return "Bank Account";
      default:
        return type;
    }
  };

  return (
    <UserDashboardLeftBar breadcrumb="Withdrawal">
      <h2 className="md:text-3xl text-xl mt-4 tracking-wide font-semibold">
        Withdrawal Money
      </h2>
      <div className="flex md:flex-row flex-col mt-6 items-start justify-between md:gap-20 gap-8">
        <div className="md:max-w-[50%] w-full">
          <p className="text-sm mb-2 font-normal">Select Method</p>

          {isLoading ? (
            <div className="py-3 px-4 border rounded-md bg-[#ffffff10] text-[#ffffff80]">
              Loading payment methods...
            </div>
          ) : paymentMethods.length === 0 ? (
            <div className="py-3 px-4 border rounded-md bg-[#ffffff10] text-[#ffffff80]">
              No payment methods found. Please add one in Payment Methods
              section.
            </div>
          ) : (
            <Select
              value={selectedPaymentMethodId}
              onValueChange={setSelectedPaymentMethodId}
              disabled={isLoading || isSubmitting}
            >
              <SelectTrigger className="w-full foucs:outline-none">
                <SelectValue placeholder="Select a payment method" />
              </SelectTrigger>
              <SelectContent className="bg-[#1d1130] text-white">
                <SelectGroup>
                  <SelectLabel className="text-white opacity-60">
                    Select Method
                  </SelectLabel>
                  {paymentMethods.map((method) => (
                    <SelectItem
                      key={method.id}
                      value={method.id}
                      className="py-2.5"
                    >
                      {getPaymentMethodName(method.type)}{" "}
                      {method.isDefault && "(Default)"} - {method.accountNumber}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          )}

          <p className="text-sm mb-2 mt-8">Withdraw Amount</p>
          <Input
            placeholder="PKR 5,000.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            min="5000"
            max="50000"
            disabled={isSubmitting}
          />

          <Button
            className="w-full rounded-lg p-6 text-white bg-[#5f29b7] cursor-pointer transition-all duration-500 hover:bg-[#5f29b7]/80 mt-4"
            onClick={handleWithdrawal}
            disabled={
              !selectedPaymentMethodId ||
              isSubmitting ||
              !amount ||
              paymentMethods.length === 0
            }
          >
            {isSubmitting ? "Processing..." : "Request Withdrawal"}
          </Button>
        </div>
        <div className="md:max-w-[50%] w-full">
          <h2 className="text-xl capitalize mt-4 tracking-wide font-semibold">
            Wallet:{" "}
            {userProfile ? formatAmount(userProfile.balance) : "Loading..."}
          </h2>

          <p className="text-[#ffffffaf] md:mt-8 mt-5">
            You can withdraw your profits at any time and re-invest it by making
            another deposit. Withdrawal amount processing usually requires one
            business day.
            <br />
            <br />
            Sending capital withdrawal request stops the profit earning on
            demanded amount.
            <br />
            <br />
            We keep your investment safe and secure. Fulfilling capital request
            takes around 30 to 90 business days depending on your investment
            plan.
          </p>
        </div>
      </div>
    </UserDashboardLeftBar>
  );
};

export default Withdrawal;
