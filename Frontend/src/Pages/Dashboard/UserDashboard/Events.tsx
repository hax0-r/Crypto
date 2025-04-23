import UserDashboardLeftBar from '../../../Components/Dashboard/UserDashboard/UserDashboardLeftBar'
import { PiCalendarDotsThin } from "react-icons/pi";


const Events = () => {
    return (
        <UserDashboardLeftBar breadcrumb="Events">

            <div className="flex items-center justify-center text-[#8b8891] flex-col mt-10">
                <PiCalendarDotsThin className='md:text-[10rem] text-8xl opacity-25' />
                <h3 className='md:text-lg text-center '>There are Currently no upcoming events, but check back soon!</h3>
            </div>

        </UserDashboardLeftBar>
    )
}

export default Events