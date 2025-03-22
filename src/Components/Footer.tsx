import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa"
import { Link } from "react-router"
import logo from "../assets/logo.png"
import { FaArrowRightLong } from "react-icons/fa6"

const Footer = () => {
    return (
        <div>
            <footer className="w-full md:mt-20 mt-10 bg-[#171022]">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 md:pt-10 pt-8">
                    {/*Grid*/}
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 py-10 max-sm:max-w-sm max-sm:mx-auto gap-y-8">
                        <div className="col-span-full mb-10 lg:col-span-2 lg:mb-0">
                            <Link
                                to="/"
                                className="flex justify-center lg:justify-start gap-3"
                            >
                                <img src={logo} className="h-12 rounded-lg" alt="Logo" />
                                <h2 className="text-xl font-semibold leading-tight">Wealth <br /> Way Trade</h2>
                            </Link>
                            <p className="py-8 text-sm text-gray-200 lg:max-w-xs text-center lg:text-left">
                                Trusted in more than 100 countries &amp; 5 million customers. Have any
                                query ?
                            </p>
                            <button className="bg-[#5f29b7] text-white lg:flex hidden items-center gap-3 px-7 cursor-pointer transition-all duration-500 hover:bg-[#5f29b7]/80 py-3 rounded-full">Sign In<FaArrowRightLong />
                            </button>
                        </div>
                        {/*End Col*/}
                        <div className="lg:mx-auto text-left ">
                            <h4 className="text-lg text-gray-100 font-medium mb-7">Quick Links</h4>
                            <ul className="text-sm  transition-all text-zinc-400 duration-500">
                                <li className="mb-6">
                                    <Link
                                        to="/"
                                        className="hover:text-primery transition-all duration-500"
                                    >
                                        Home
                                    </Link>
                                </li>
                                <li className="mb-6">
                                    <Link
                                        to="javascript:;"
                                        className=" hover:text-primery transition-all duration-500"
                                    >
                                        About Us
                                    </Link>
                                </li>
                                <li className="mb-6">
                                    <Link
                                        to="javascript:;"
                                        className=" hover:text-primery transition-all duration-500"
                                    >
                                        Features
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        to="javascript:;"
                                        className=" hover:text-primery transition-all duration-500"
                                    >
                                        Contact Us
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/*End Col*/}
                        <div className="lg:mx-auto text-left">
                            <h4 className="text-lg text-gray-100 font-medium mb-7">Resources</h4>
                            <ul className="text-sm  transition-all text-zinc-400 duration-500">
                                <li className="mb-6">
                                    <Link
                                        to="javascript:;"
                                        className="hover:text-primery transition-all duration-500"
                                    >
                                        FAQs
                                    </Link>
                                </li>
                                <li className="mb-6">
                                    <Link
                                        to="javascript:;"
                                        className=" hover:text-primery transition-all duration-500"
                                    >
                                        Privacy Policy
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/*Grid*/}
                    <div className="py-7 border-t border-gray-200">
                        <div className="flex items-center justify-center flex-col lg:justify-between lg:flex-row">
                            <span className="text-sm text-gray-300 ">
                                ©<Link to="/">Wealth Way Trade</Link> 2025, All rights
                                reserved.
                            </span>
                            <div className="flex mt-4 space-x-4 sm:justify-center lg:mt-0 ">
                                <Link
                                    to="javascript:;"
                                    className="w-9 h-9 rounded-full bg-[#5f29b7] flex justify-center items-center transition-all duration-500 hover:bg-[#5f29b7]/80"
                                >
                                    <FaInstagram className="text-white" />
                                </Link>
                                <Link
                                    to="javascript:;"
                                    className="w-9 h-9 rounded-full bg-[#5f29b7] flex justify-center items-center transition-all duration-500 hover:bg-[#5f29b7]/80"
                                >
                                    <FaLinkedinIn className="text-white" />
                                </Link>
                                <Link
                                    to="javascript:;"
                                    className="w-9 h-9 rounded-full bg-[#5f29b7] flex justify-center items-center transition-all duration-500 hover:bg-[#5f29b7]/80"
                                >
                                    <FaFacebookF className="text-white" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer