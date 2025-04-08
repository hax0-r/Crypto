import UserDashboardLeftBar from "../../../Components/Dashboard/UserDashboard/UserDashboardLeftBar"
import { Input } from "../../../Components/ui/input"
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "../../../Components/ui/select"


const Withdrawal = () => {
    return (
        <UserDashboardLeftBar breadcrumb="Deposit">

            <h2 className="md:text-3xl text-xl mt-4 tracking-wide font-semibold">Withdrawal Money</h2>
            <div className="flex md:flex-row flex-col mt-6 items-start justify-between md:gap-20 gap-8">

                <div className="md:max-w-[50%] w-full">


                    <p className="text-sm mb-2 font-normal ">Select Method</p>
                    <Select defaultValue="easypasia" onValueChange={(value) => console.log(value)}>
                        <SelectTrigger className="w-full foucs:outline-none ">
                            <SelectValue placeholder="Select a payment method" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1d1130] text-white">
                            <SelectGroup>
                                <SelectLabel className="text-white opacity-60">Select Method</SelectLabel>
                                <SelectItem className="py-2.5" value="easypasia">Easypasia</SelectItem>
                                <SelectItem className="py-2.5" value="jazzcash">Jazz cash</SelectItem>
                                <SelectItem className="py-2.5" value="paypal">Paypal</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <p className="text-sm mb-2 mt-8">Withdraw Amount</p>
                    <Input placeholder="PKR 1000.00" />

                    <button className="w-full rounded-lg p-3 text-white bg-[#5f29b7] cursor-pointer transition-all duration-500 hover:bg-[#5f29b7]/80 mt-4">Request</button>
                </div>
                <div className="md:max-w-[50%] w-full">
                    <h2 className="text-xl capitalize mt-4 tracking-wide font-semibold">Wallet: 300.00 Rs</h2>

                    <p className="text-[#ffffffaf] md:mt-8 mt-5">You can withdraw your profits at any time and re-invest it by making another deposit. Withdraw amount processing usually requires one business day.
                        <br /><br />
                        Sending capital withdrawl request stops the profit earning on demanded amount.
                        <br /><br />
                        We keep your investment safe and secure. Fulfilling capital request takes around 30 to 90 business days depending on your investment plan.

                    </p>
                </div>

            </div>

        </UserDashboardLeftBar>
    )
}

export default Withdrawal