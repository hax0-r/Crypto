import { useState } from 'react'
import UserDashboardLeftBar from '../../../Components/Dashboard/UserDashboard/UserDashboardLeftBar'
import { Button } from '../../../Components/ui/button'
import { Input } from '../../../Components/ui/input'

const PaymentMethod = () => {

  const [selectedMethod, setSelectedMethod] = useState<string>("paypal")

  return (
    <UserDashboardLeftBar breadcrumb="PaymentMethod">
      <h2 className="md:text-3xl text-xl mt-4 tracking-wide font-semibold">Payment Method</h2>

      <div className="flex lg:flex-row flex-col justify-between gap-10 mt-5">
        <div className="md:max-w-[50%] w-full ">
          <div className="w-full p-5 cursor-pointer border border-[#171022] transition-all duration-500 hover:border-[#ffffff62] rounded-lg bg-[#ffffff1c] hover:bg-[#ffffff25]">
            <div onClick={() => setSelectedMethod("paypal")} className="flex justify-between gap-5 items-center">
              <div className="">
                <h3 className='text-lg'>Paypal Account</h3>
                <p className='text-sm opacity-50 mt-1'>123*********</p>
              </div>
              <img src="/images/paypal.png" className='h-14 opacity-90' alt="" />
            </div>
            {
              selectedMethod == "paypal" && (
                <form action="" className='fadeIn'>
                  <div className="grid mt-6 md:grid-cols-2 gap-4 grid-cols-1 ">
                    <div className="">
                      <label htmlFor="" className='text-sm opacity-80'>Full Name</label>
                      <Input className='w-full mt-2' placeholder='Enter your full name' />
                    </div>
                    <div className="">
                      <label htmlFor="" className='text-sm opacity-80'>Card Number</label>
                      <Input className='w-full mt-2' placeholder='Enter your Card Number' />
                    </div>
                    <div className="">
                      <label htmlFor="" className='text-sm opacity-80'>Card expiration</label>
                      <Input className='w-full mt-2' placeholder='Enter Card expiration' />
                    </div>
                    <div className="">
                      <label htmlFor="" className='text-sm opacity-80'>CVV</label>
                      <Input className='w-full mt-2' placeholder='Enter your CVV number' />
                    </div>
                  </div>
                  <Button className='w-full mt-4'>Save</Button>
                </form>
              )
            }
          </div>

          <div className="w-full p-5 mt-2 cursor-pointer border border-[#171022] transition-all duration-500 hover:border-[#ffffff62] rounded-lg bg-[#ffffff1c] hover:bg-[#ffffff25]">
            <div onClick={() => setSelectedMethod("easypasia")} className="flex justify-between gap-5 items-center">
              <div className="">
                <h3 className='text-lg'>EasyPasia Account</h3>
                <p className='text-sm opacity-50 mt-1'>+ 92*********</p>
              </div>
              <img src="/images/easypaisa.png" className='h-14 opacity-80' alt="" />
            </div>
            {
              selectedMethod == "easypasia" && (
                <form action="" className='fadeIn'>
                  <div className="grid mt-6 md:grid-cols-2 gap-4 grid-cols-1 ">
                    <div className="">
                      <label htmlFor="" className='text-sm opacity-80'>Full Name</label>
                      <Input className='w-full mt-2' placeholder='Enter your full name' />
                    </div>
                    <div className="">
                      <label htmlFor="" className='text-sm opacity-80'>Number</label>
                      <Input className='w-full mt-2' placeholder='Enter your Easypasia Number' />
                    </div>
                    <div className="lg:col-span-2">
                      <label htmlFor="" className='text-sm opacity-80'>CNIC</label>
                      <Input className='w-full mt-2' placeholder='Enter your CNIC number' />
                    </div>
                  </div>
                  <Button className='w-full mt-4'>Save</Button>
                </form>
              )}
          </div>

        </div>
        <div className="md:max-w-[50%] w-full lg:border-l-2 border-[#ffffff27] lg:pl-7">
          <h2 className="text-xl  tracking-wide capitalize">Your save Accounts</h2>

          <div className="w-full p-5 lg:mt-8 mt-4 border border-[#171022] transition-all duration-500 rounded-lg bg-[#ffffff1c]">
            <div className="flex justify-between gap-5 items-center">
              <div className="">
                <h3 className='text-lg'>Jazzcash Account</h3>
                <p className='text-sm opacity-50 mt-1'>+ 92 283467288</p>
              </div>
              <img src="/images/jazzcash.png" className='h-14 opacity-80' alt="" />
            </div>
          </div>
        </div>
      </div>

    </UserDashboardLeftBar>
  )
}

export default PaymentMethod