import DashboardCard from '../../../Components/Dashboard/DashboardCard';
import { Button } from '../../../Components/ui/button'
import { GrUserAdmin } from "react-icons/gr";
import { GrMoney } from "react-icons/gr";
import { RiStackshareLine } from "react-icons/ri";
import { BsCurrencyDollar } from "react-icons/bs";
import ReferralTable from '../../../Components/Dashboard/UserDashboard/ReferralTable';
import TransactionsTable from '../../../Components/Dashboard/UserDashboard/TransactionsTable';
import { useNavigate } from 'react-router';
import { BiArrowBack } from "react-icons/bi";

const UserDetail = () => {

    const navigate = useNavigate()

    return (
        <>
            <div className="bg-[#171022] w-full min-h-screen p-5">

                <button onClick={() => navigate(-1)} className='flex items-center gap-3 text-white mb-3 opacity-80 cursor-pointer'><BiArrowBack /> Back               </button>
                
                
                <section className="relative pt-40 pb-24">
                    <img
                        src="/images/bgTrade.png"
                        alt="cover-image"
                        className="w-full rounded-lg absolute top-0 left-0 z-0 h-60 object-cover"
                    />
                    <div className="w-full max-w-7xl mx-auto">
                        <div className="flex items-center justify-center sm:justify-start relative z-10 mb-5">
                            <img
                                src="https://pagedone.io/asset/uploads/1705471668.png"
                                alt="user-avatar-image"
                                className="border-4 border-solid border-[#6d45b9] rounded-full object-cover"
                            />
                        </div>
                        <div className="flex items-center justify-center flex-col sm:flex-row max-sm:gap-5 sm:justify-between mb-5">
                            <div className="block">
                                <h3 className="text-3xl text-[#ffffffe5] mb-1 max-sm:text-center">
                                    Emma Smith
                                </h3>
                                <p className="font-normal text-base leading-7 text-gray-400  max-sm:text-center">
                                    EmmaSmith@gmail.com
                                </p>
                                {/* <p className="font-normal text-base leading-7 text-gray-400  max-sm:text-center">
                                    This User not Purchase any plan yet.
                                </p> */}
                                <p className="font-normal text-base leading-7 text-yellow-500  max-sm:text-center">
                                    Smart Bot Plan <span className='text-xs'>( Active )</span>
                                </p>
                                <p className="text-[#ffffff56] text-sm tracking-wider  max-sm:text-center">
                                    1d 29min left
                                </p>
                            </div>
                            <Button className="rounded-full py-6">
                                <GrUserAdmin className='ml-2' />
                                <span className="pr-2 capitalize text-base leading-7 text-white">
                                    Make as Admin
                                </span>
                            </Button>
                        </div>
                        <div className="">
                            <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-2">
                                <DashboardCard title="Account Balance" amount="$ 1,000" description="Funds available for trading." icon={BsCurrencyDollar} />
                                <DashboardCard title="Total Profit" amount="$ 5,000" description="Earnings eligible for withdrawal." icon={GrMoney} />
                                <DashboardCard title="Referred Friends" amount="3" description="Friends you've successfully invited." icon={RiStackshareLine} />
                            </div>
                        </div>

                        <h2 className='text-3xl text-[#ffffffe5] mb-1 max-sm:text-center mt-10 capitalize'>Payment Account attacted</h2>
                        <div className="flex flex-col gap-5 mt-5">
                            <div className="flex items-center gap-3">
                                <img src="/images/paypal.png" className='w-14 opacity-90' alt="" />
                                <p className='text-lg text-white'>paypal</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <img src="/images/jazzcash.png" className='w-14 opacity-80' alt="" />
                                <p className='text-lg text-white'>Jazzcash</p>
                            </div>
                        </div>

                        <div className="flex md:flex-row flex-col-reverse md:items-center gap-2 mt-8">
                            <input type="text" className='w-full text-white p-2 border border-[#ffffff3b] rounded-lg' value="https://wealthwaytrade.com/register?referral=1234567890" readOnly />
                            <Button className='bg-[#6d45b9]'>Referal Link</Button>
                        </div>

                        <h2 className='text-3xl text-[#ffffffe5] mb-1 max-sm:text-center mt-10 capitalize'>Referred Friends</h2>
                        <ReferralTable />
                        <h2 className='text-3xl text-[#ffffffe5] mb-1 max-sm:text-center md:mt-10 mt-6 capitalize'>Transactions</h2>
                        <TransactionsTable />
                        <Button onClick={() => navigate(-1)} className='mt-5 w-full'> <BiArrowBack />
                        Back To Admin Dashboard</Button>
                    </div>
                </section >

            </div>
        </>
    )
}

export default UserDetail