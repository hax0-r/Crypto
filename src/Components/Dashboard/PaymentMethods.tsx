import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "../ui/sheet"
import { IoWalletOutline } from "react-icons/io5";
import { PiHandWithdraw } from "react-icons/pi";
import { IoReceiptOutline } from "react-icons/io5";

const PaymentMethods = () => {
    return (
        <>
            <div className="p-5 w-full">
                <h2 className="text-white text-2xl font-medium">Payments</h2>
                <div className="mt-7">
                    <Sheet>
                        <SheetTrigger className="w-full">
                            <div className="flex p-4 bg-[#6d45b9] rounded-lg text-[#F5F5F5] cursor-pointer transition-all duration-500 hover:opacity-80 items-center gap-3">
                                <IoWalletOutline className="text-2xl" />
                                <p>Deposit</p>
                            </div>
                        </SheetTrigger>
                        <SheetContent>
                            hello
                        </SheetContent>
                    </Sheet>
                    <div className="flex mt-3 p-4 bg-[#6d45b9] rounded-lg text-[#F5F5F5] cursor-pointer transition-all duration-500 hover:opacity-80 items-center gap-3">
                        <PiHandWithdraw className="text-2xl" />
                        <p>Withdraw</p>
                    </div>
                    <div className="flex mt-3 p-4 bg-[#6d45b9] rounded-lg text-[#F5F5F5] cursor-pointer transition-all duration-500 hover:opacity-80 items-center gap-3">
                        <IoReceiptOutline className="text-2xl" />
                        <p>Transactions</p>
                    </div>
                </div>

                <Sheet>
                    <SheetTrigger>Open</SheetTrigger>
                    <SheetContent>
                        <SheetHeader>
                            <SheetTitle>Are you absolutely sure?</SheetTitle>
                            <SheetDescription>
                                This action cannot be undone. This will permanently delete your account
                                and remove your data from our servers.
                            </SheetDescription>
                        </SheetHeader>
                    </SheetContent>
                </Sheet>
            </div >
        </>
    )
}

export default PaymentMethods