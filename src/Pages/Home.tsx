import { FaArrowRightLong } from "react-icons/fa6"
import BodyWrapper from "../BodyWrapper"
import video from '../assets/video.mp4'

const Home = () => {
    return (
        <>
            <BodyWrapper>

                <div className="min-h-[calc(100vh-5.5rem)] overflow-hidden">
                    <video className="w-full h-[calc(100vh-5.5rem)] scale-x-[-1] absolute top-[5.5rem] right-0 object-cover " autoPlay loop muted>
                        <source src={video} type="video/mp4" />
                    </video>
                    <div className="z-10 relative max-w-7xl p-5 w-full mx-auto flex justify-center min-h-[calc(100vh-35vh)] flex-col ">
                        <h1 className="md:text-7xl text-[2.8rem]  font-semibold max-w-2xl md:leading-[1.1] leading-tight capitalize ">Crypto-trading
                            <span className="bg-gradient-to-r pt-3 block NekstLight from-[#5F29B7] to-white bg-clip-text text-transparent">  with bots
                            and smart trades</span></h1>
                        <div className="md:mt-8 mt-5">
                            <button className="bg-[#5f29b7] flex items-center gap-3 md:px-12 px-9 cursor-pointer transition-all duration-500 hover:bg-[#5f29b7]/80 md:py-5 py-4 text-xl rounded-full">Sign Up Now<FaArrowRightLong />
                            </button>
                        </div>
                    </div>
                </div>
            </BodyWrapper>
        </>
    )
}

export default Home