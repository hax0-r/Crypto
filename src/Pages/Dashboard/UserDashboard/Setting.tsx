import UserDashboardLeftBar from '../../../Components/Dashboard/UserDashboard/UserDashboardLeftBar'
import { Button } from '../../../Components/ui/button'
import { SlGraph } from "react-icons/sl";
import { Input } from '../../../Components/ui/input';
import { Link } from 'react-router';

const Setting = () => {
    return (
        <UserDashboardLeftBar breadcrumb="Setting">
            <section className="relative pt-40 pb-24">
                <img
                    src="/images/bgTrade.png"
                    alt="cover-image"
                    className="w-full rounded-lg absolute top-0 left-0 z-0 h-60 object-cover"
                />
                <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
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
                            Passionate about financial markets and smart investments
                            </p>
                        </div>
                        <Link to={"platform"}>
                            <Button className="rounded-full py-6">
                                <SlGraph className='ml-2' />
                                <span className="pr-2 capitalize text-base leading-7 text-white">
                                    Go to Trading
                                </span>
                            </Button>
                        </Link>
                    </div>
                    <div className="max-w-lg w-full">
                        <label htmlFor="" className='text-sm opacity-70'>E-Mail</label>
                        <Input placeholder='E-mail' defaultValue={"EmmaSmith@gmail.com"} className='mt-1' readOnly />
                    </div>
                </div>
            </section>

        </UserDashboardLeftBar>
    )
}

export default Setting