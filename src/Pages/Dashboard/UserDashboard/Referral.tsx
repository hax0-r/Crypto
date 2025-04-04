import { Link } from 'react-router';
import UserDashboardLeftBar from '../../../Components/Dashboard/UserDashboard/UserDashboardLeftBar'
import { Button } from '../../../Components/ui/button'
import { useRef } from 'react';
import { toast } from 'react-toastify';

const transactionsData = [
  {
    userId: "U-2023101",
    name: "Jhon",
    date: "12 Mar 2024",
    email: "jhon@gmail.com",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600"
  },
  {
    userId: "U-2023101",
    name: "Ali",
    date: "05 Mar 2024",
    email: "ali@gmail.com",
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600"
  },
  {
    userId: "U-2023101",
    name: "Hamza",
    date: "28 Feb 2024",
    email: "jhon@gmail.com",
    bgColor: "bg-red-50",
    textColor: "text-red-600"
  },
  {
    userId: "U-2023101",
    name: "Jhon",
    date: "20 Feb 2024",
    email: "hamza@gmail.com",
    bgColor: "bg-blue-50",
    textColor: "text-blue-600"
  },
  {
    userId: "U-2023101",
    name: "Jhon",
    date: "15 Feb 2024",
    email: "jhon@gmail.com",
    bgColor: "bg-emerald-50",
    textColor: "text-emerald-600"
  },
];

const Referral = () => {

  const inputRef = useRef<HTMLInputElement>(null);

  const copyToClipboard = () => {
    if (inputRef.current) {
      navigator.clipboard.writeText(inputRef.current.value);
      toast.success("Link copied to clipboard!",{
        // dark color
        style: {
          background: "#261b38",
          color: "#fff",
        },
      });
    }
  };
  return (
    <UserDashboardLeftBar breadcrumb="Referral">
      <div className="grid md:grid-cols-4 grid-cols-1 gap-4 ">
        <div className="w-full p-5 md:col-span-2 flex justify-between overflow-hidden relative rounded-lg bg-[#6d45b9]">
          <div className="md:max-w-[60%] w-full">
            <h3 className='md:text-2xl text-xl'>Invite your friends and earn rewards! 🎉</h3>
            <div className="bg-[#ffffff27] mt-4 p-4 rounded-lg">
              <p className='text-xs opacity-50'>Share your invite link</p>
              <div className="flex items-center gap-2 mt-2">
                <input ref={inputRef} type="text" className='w-full p-2 border border-[#ffffff3b] rounded-lg' value="https://wealthwaytrade.com/register?referral=1234567890" readOnly />
                <Button className='bg-[#6d45b9]' onClick={copyToClipboard}>Copy</Button>
              </div>
            </div>
            {/* <p className='text-sm opacity-70 mt-3'>
              Share your link and get a rewards for each friend who joins.
            </p> */}
          </div>
          <img src="/images/coin.png" className='h-60 md:block hidden absolute -bottom-5 -right-5' alt="" />
        </div>
        <div className="w-full p-5  overflow-hidden md:flex hidden flex-col justify-center relative rounded-lg bg-[#6d45b9]">
          <h3 className='md:text-2xl text-xl'>Monthly Bones</h3>
          <p className='text-sm opacity-70 mt-3'>
            You have earned <span className='text-[#ffb700]'>0.00 USDT</span> this month.
          </p>
          <p className='text-sm opacity-70 mt-3'>
            You have invited <span className='text-[#ffb700]'>0</span> friends this month.
          </p>
          <Button onClick={copyToClipboard} className='bg-[#6134b4] mt-4 capitalize tracking-wide'>
            share your link
          </Button>
        </div>
        <div className="w-full p-5  overflow-hidden md:flex hidden flex-col justify-center relative rounded-lg bg-[#6d45b9]">
          <h3 className='md:text-2xl text-xl'>Boost Your Earnings</h3>
          <p className='text-sm opacity-70 mt-3'>
            Purchase a bot plan and take your trading to the next level. Automate your strategy, increase your profit, and trade faster with better results.
          </p>
          <p className='text-sm opacity-70 mt-3'>

          </p>
          <Link to={'/bot-plan'} className='w-full'>
            <Button className='bg-[#6134b4] capitalize w-full tracking-wide'>
              See Bot plans
            </Button>
          </Link>
        </div>
      </div>

      <div className="overflow-x-auto py-4 ">
        <div className="block">
          <div className="overflow-x-auto w-full border rounded-lg border-[#ffffff80]">
            <table className="w-full rounded-xl">
              <thead>
                <tr className="bg-[#372359] text-nowrap">
                  {["User ID", "Name", "Date", "E-Mail"].map((heading, index) => (
                    <th key={index} className="p-5 text-left font-medium text-white capitalize">
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y text-nowrap divide-[#ffffff5d]">
                {transactionsData.map((history, index) => (
                  <tr key={index} className=" transition-all duration-500 hover:bg-[#ffffff10]">
                    <td className="p-5 text-sm font-medium text-[#fff] opacity-80">{history.userId}</td>
                    <td className="p-5 text-sm font-medium text-[#fff] opacity-80">{history.name}</td>
                    <td className="p-5 text-sm font-medium text-[#fff] opacity-80">{history.date}</td>
                    <td className="p-5 text-sm font-medium text-[#fff] opacity-80">{history.email}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </UserDashboardLeftBar>
  )
}

export default Referral