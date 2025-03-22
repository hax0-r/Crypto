import React from 'react'
import { FiUser } from 'react-icons/fi'

const RightBar = () => {
    return (
        <>
            <div className='bg-[#171022] w-96  p-4'>

                <div className="flex items-center justify-between gap-5">
                    <button className='bg-[#5f29b7] text-white px-16 py-3 rounded-lg cursor-pointer hover:opacity-80 transition-all duration-500'>Payment</button>
                    <div className="w-12 h-12 hover:opacity-80 transition-all duration-500 cursor-pointer bg-[#5f29b760] flex items-center justify-center text-white rounded-full ">
                        <FiUser className='text-2xl' />
                    </div>
                </div>

                <div className="mt-7">
                    <label htmlFor="" className='text-zinc-500 text-sm'>Amount</label>
                    <input type="number" className='p-3 w-full mt-1 border border-[#3f2b5f] rounded-lg text-white' placeholder='5,000' value={2500} />
                    <div className="flex items-center gap-2 mt-2">
                        <button className='bg-[#5f29b760] w-full py-0.5 rounded-full text-2xl text-white cursor-pointer'>-</button>
                        <button className='bg-[#5f29b760] w-full py-0.5 rounded-full text-2xl text-white cursor-pointer'>+</button>
                    </div>
                </div>

            </div>
        </>
    )
}

export default RightBar