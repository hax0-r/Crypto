import { Link, useNavigate } from 'react-router'
import logo from '../assets/logo.png'
import { IoCloseOutline } from 'react-icons/io5'
import { FaArrowRightLong } from 'react-icons/fa6'
import { useState } from 'react'
import { toast } from 'react-toastify'

const CreateAccount = () => {
    const navigate = useNavigate()
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validateEmail = (email: string) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name || !email || !password || !confirmPassword) {
            toast.error("All fields are required");
            return;
        }
        if (!validateEmail(email)) {
            toast.error("Please enter a valid email");
            return;
        }
        if (password.length <= 8) {
            toast.error("Passwords must be 8 characters");
            return;
        }
        if (password !== confirmPassword) {
            toast.error("Passwords do not match");
            return;
        }

        toast.success("Welcome, Name");
        navigate("/")
    };
    return (
        <>
        <div className="bg-black">
            <div className="w-full  relative min-h-screen bgSignIn bg-cover bg-center">
                <Link to={"/"} className="md:flex hidden absolute top-5 left-5 text-white items-center gap-3">
                    <img src={logo} alt="logo" className="h-10 rounded-lg" />
                    <h2 className="text-lg font-semibold leading-tight">Wealth <br /> Way Trade</h2>
                </Link>
                <div className="max-w-7xl flex items-center justify-center md:p-5 p-3 min-h-screen w-full mx-auto ">
                    <div className="w-full">

                        <div className="w-full md:mt-16 mt-8 bg-black rounded-3xl md:p-8 p-4">

                            <div className="flex items-center justify-between">
                                <h2 className='text-white font-medium text-4xl '>Register</h2>
                                <Link to={"/"}>
                                    <IoCloseOutline className='text-[#5f29b7] cursor-pointer text-5xl' />
                                </Link>
                            </div>
                            <form onSubmit={handleSubmit} className="text-white mt-8 grid md:grid-cols-2 grid-cols-1 gap-5">
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full border-b-2 border-[#685C7B] py-3 md:text-lg placeholder:text-[#685C7B]"
                                    placeholder="Name"

                                />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="w-full border-b-2 border-[#685C7B] py-3 md:text-lg placeholder:text-[#685C7B]"
                                    placeholder="E-Mail"

                                />
                                <input
                                    type="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="w-full mt-5 border-b-2 border-[#685C7B] py-3 md:text-lg placeholder:text-[#685C7B]"
                                    placeholder="Password"

                                />
                                <input
                                    type="password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    className="w-full mt-5 border-b-2 border-[#685C7B] py-3 md:text-lg placeholder:text-[#685C7B]"
                                    placeholder="Confirm Password"

                                />
                                <button
                                    type="submit"
                                    className="bg-[#5f29b7] md:col-span-2 w-full justify-center mt-8 flex items-center gap-3 md:px-12 px-9 cursor-pointer transition-all duration-500 hover:bg-[#5f29b7]/80 md:py-4 py-3 text-xl rounded-full"
                                >
                                    Create an account <FaArrowRightLong />
                                </button>
                            </form>

                            <p className='text-[#7A6E8C] md:text-lg md:mt-28 mt-16'>Already have account?</p>
                            <Link to={"/sign-in"} className="border-[#5f29b7] border text-white w-full justify-center mt-4 flex items-center gap-3 md:px-12 px-9 cursor-pointer transition-all duration-500 hover:bg-[#5f29b7]/80 md:py-4 py-3 text-xl rounded-full">Sign In<FaArrowRightLong className='text-[#B689FF]' />
                            </Link>
                        </div>

                    </div>

                </div>
            </div>
        </div>
        </>
    )
}

export default CreateAccount