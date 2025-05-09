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

const Deposit = () => {
    return (
        <UserDashboardLeftBar breadcrumb="Deposit">

            <h2 className="md:text-3xl text-xl mt-4 tracking-wide font-semibold">Deposit Money</h2>
            <div className="flex md:flex-row flex-col mt-6 items-start justify-between md:gap-20 gap-8">

                <div className="md:max-w-[50%] w-full">


                    <p className="text-sm mb-2 font-normal ">Payment Method</p>
                    <Select defaultValue="easypasia" onValueChange={(value) => console.log(value)}>
                        <SelectTrigger className="w-full foucs:outline-none ">
                            <SelectValue placeholder="Select a payment method" />
                        </SelectTrigger>
                        <SelectContent className="bg-[#1d1130] text-white">
                            <SelectGroup>
                                <SelectLabel className="text-white opacity-60">Payment Method</SelectLabel>
                                <SelectItem className="py-2.5" value="easypasia">Easypasia</SelectItem>
                                <SelectItem className="py-2.5" value="jazzcash">Jazz cash</SelectItem>
                                <SelectItem className="py-2.5" value="paypal">Paypal</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <p className="text-sm mb-2 mt-8">Deposit Amount</p>
                    <Input placeholder="PKR 5,000" />

                    {/* <p className="text-sm mb-2 mt-8">Upload Proof</p>
                    <div className="flex items-center justify-center w-full">
                        <label
                            htmlFor="dropzone-file"
                            className="flex flex-col items-center justify-center w-full h-64 border-2 border-[#ffffff52] border-dashed rounded-lg cursor-pointer  hover:bg-[#3723597e] transition-all duration-500 "
                        >
                            <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                <IoCloudUploadOutline className="text-3xl mb-2 text-gray-400" />
                                <p className="mb-2 text-sm text-center text-gray-400 ">
                                    <span className="font-medium">Click to upload</span> or drag and drop
                                </p>
                                <p className="text-xs text-gray-400 ">
                                    SVG, PNG or JPG
                                </p>
                            </div>
                            <input id="dropzone-file" type="file" className="hidden" />
                        </label>
                    </div> */}

                    <button className="w-full rounded-lg p-3 text-white bg-[#5f29b7] cursor-pointer transition-all duration-500 hover:bg-[#5f29b7]/80 mt-4">Continue</button>
                </div>
                <div className="md:max-w-[50%] w-full">
                    <h2 className="text-xl capitalize mt-4 tracking-wide font-semibold">Secure & Flexible Deposit Policy</h2>

                    <h3 className="text-lg font-medium mb-2 md:mt-8 mt-5">Seamless Transactions for Uninterrupted Trading</h3>
                    <p className="text-[#ffffffaf] md:leading-relaxed">
                        At wealth way trade, we ensure a smooth and secure deposit process, allowing traders to fund their accounts effortlessly. Our deposit policy is designed to provide flexibility, security, and convenience
                    </p>
                    <ul className="list-disc mt-5 pl-5 text-[#ffffffd5] space-y-3">
                       <li> Minimum Deposit: PKR 5,000 per transaction</li>
                       <li> Maximum Limit: No daily cap – deposit as much as you need</li>
                       <li> Instant Processing: Fast and secure transactions for uninterrupted trading</li>
                       <li> Multiple Payment Methods: Choose from a variety of deposit options to suit your needs</li>
                    </ul>
                </div>

            </div>

        </UserDashboardLeftBar>
    )
}

export default Deposit