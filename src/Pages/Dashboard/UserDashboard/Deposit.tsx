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
import { AxiosError } from "axios";

const Deposit = () => {
  // State for user's payment methods
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethodData[]>([]);
  const [selectedPaymentMethodId, setSelectedPaymentMethodId] =
    useState<string>("");
  // State for deposit amount
  const [amount, setAmount] = useState<string>("");
  // State for transaction reference (for mobile payments)
  const [transactionReference, setTransactionReference] = useState<string>("");
  // State for loading indicators
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  // State to track selected payment method type
  const [selectedMethodType, setSelectedMethodType] =
    useState<PaymentMethodType | null>(null);

  // Fetch user's payment methods on component mount
  useEffect(() => {
    fetchPaymentMethods();
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
          setSelectedMethodType(defaultMethod.type);
        } else if (response.data.length > 0) {
          setSelectedPaymentMethodId(response.data[0].id);
          setSelectedMethodType(response.data[0].type);
        }
      }
    } catch (error) {
      console.error("Error fetching payment methods:", error);
      toast.error("Failed to load payment methods. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Function to handle payment method selection
  const handlePaymentMethodChange = (value: string) => {
    setSelectedPaymentMethodId(value);
    const selectedMethod = paymentMethods.find((method) => method.id === value);
    if (selectedMethod) {
      setSelectedMethodType(selectedMethod.type);
    }
  };

  // Function to handle deposit submission
  const handleDeposit = async () => {
    // Validate input
    if (!selectedPaymentMethodId) {
      toast.error("Please select a payment method");
      return;
    }

    const amountValue = parseFloat(amount);
    if (isNaN(amountValue) || amountValue <= 0) {
      toast.error("Please enter a valid deposit amount");
      return;
    }

    if (amountValue < 5000) {
      toast.error("Minimum deposit amount is PKR 5,000");
      return;
    }

    if (amountValue > 50000) {
      toast.error("Maximum deposit amount is PKR 50,000");
      return;
    }

    // For mobile wallets, require transaction reference
    if (
      (selectedMethodType === PaymentMethodType.EASYPAISA ||
        selectedMethodType === PaymentMethodType.JAZZCASH) &&
      !transactionReference
    ) {
      toast.error(
        "Please enter the transaction reference/ID from your payment"
      );
      return;
    }

    try {
      setIsSubmitting(true);
      const depositData = {
        amount: amountValue,
        paymentMethodId: selectedPaymentMethodId,
        ...(transactionReference && { transactionReference }),
      };

      const response = await transactionService.createDeposit(depositData);

      if (response.success) {
        toast.success("Deposit request submitted successfully");
        // Reset form
        setAmount("");
        setTransactionReference("");
      } else {
        toast.error(response.message || "Failed to process deposit request");
      }
    } catch (error: unknown) {
      console.error("Error processing deposit:", error);
      const axiosError = error as AxiosError<{ message: string }>;
      const errorMessage =
        axiosError.response?.data?.message ||
        "Failed to process deposit. Please try again.";
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

  // Show different UI based on selected payment method type
  const renderTransactionReferenceField = () => {
    if (
      selectedMethodType === PaymentMethodType.EASYPAISA ||
      selectedMethodType === PaymentMethodType.JAZZCASH
    ) {
      return (
        <div className="mt-8">
          <p className="text-sm mb-2">Transaction Reference/ID</p>
          <Input
            placeholder="Enter transaction ID from your payment app"
            value={transactionReference}
            onChange={(e) => setTransactionReference(e.target.value)}
            disabled={isSubmitting}
          />
          <p className="text-xs text-[#ffffff80] mt-1">
            Please enter the transaction ID or reference number from your{" "}
            {getPaymentMethodName(selectedMethodType)} payment.
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <UserDashboardLeftBar breadcrumb="Deposit">
      <h2 className="md:text-3xl text-xl mt-4 tracking-wide font-semibold">
        Deposit Money
      </h2>
      <div className="flex md:flex-row flex-col mt-6 items-start justify-between md:gap-20 gap-8">
        <div className="md:max-w-[50%] w-full">
          <p className="text-sm mb-2 font-normal">Payment Method</p>

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
              onValueChange={handlePaymentMethodChange}
              disabled={isLoading || isSubmitting}
            >
              <SelectTrigger className="w-full foucs:outline-none">
                <SelectValue placeholder="Select a payment method" />
              </SelectTrigger>
              <SelectContent className="bg-[#1d1130] text-white">
                <SelectGroup>
                  <SelectLabel className="text-white opacity-60">
                    Payment Method
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

          <p className="text-sm mb-2 mt-8">Deposit Amount</p>
          <Input
            placeholder="PKR 5,000.00"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            type="number"
            min="5000"
            max="50000"
            disabled={isSubmitting}
          />
          <p className="text-xs text-[#ffffff80] mt-1">
            Minimum deposit amount: PKR 5,000
          </p>

          {renderTransactionReferenceField()}

          <Button
            className="w-full rounded-lg p-6 text-white bg-[#5f29b7] cursor-pointer transition-all duration-500 hover:bg-[#5f29b7]/80 mt-8"
            onClick={handleDeposit}
            disabled={
              !selectedPaymentMethodId ||
              isSubmitting ||
              !amount ||
              paymentMethods.length === 0
            }
          >
            {isSubmitting ? "Processing..." : "Continue with Deposit"}
          </Button>
        </div>
        <div className="md:max-w-[50%] w-full">
          <h2 className="text-xl capitalize mt-4 tracking-wide font-semibold">
            Secure & Flexible Deposit Policy
          </h2>

          <h3 className="text-lg font-medium mb-2 md:mt-8 mt-5">
            Seamless Transactions for Uninterrupted Trading
          </h3>
          <p className="text-[#ffffffaf] md:leading-relaxed">
            At wealth way trade, we ensure a smooth and secure deposit process,
            allowing traders to fund their accounts effortlessly. Our deposit
            policy is designed to provide flexibility, security, and convenience
          </p>
          <ul className="list-disc mt-5 pl-5 text-[#ffffffd5] space-y-3">
            <li> Minimum Deposit: PKR 5,000 per transaction</li>
            <li> Maximum Limit: No daily cap – deposit as much as you need</li>
            <li>
              {" "}
              Instant Processing: Fast and secure transactions for uninterrupted
              trading
            </li>
            <li>
              {" "}
              Multiple Payment Methods: Choose from a variety of deposit options
              to suit your needs
            </li>
          </ul>
        </div>
      </div>
    </UserDashboardLeftBar>
  );
};

export default Deposit;
