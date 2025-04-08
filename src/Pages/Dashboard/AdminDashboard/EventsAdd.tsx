import { Button } from "../../../Components/ui/button"
import { Input } from "../../../Components/ui/input"
import { GoGift } from "react-icons/go";
const EventsAdd = () => {
    return (
        <>
            <div className="bg-[#171022] w-full min-h-screen p-5">

                <h3 className="text-3xl text-[#ffffffe5] mb-1">
                    Add Event
                </h3>

                <form className="mt-5 text-white">
                    <Input placeholder="Title" />
                    <textarea rows={9} className="border w-full placeholder:text-sm placeholder:text-[#6a696b] mt-3 rounded-lg border-[#625d69] p-3" placeholder="Write Description"></textarea>
                    <Button className="w-full " size={"lg"}> <GoGift className="text-white" />Add Event</Button>
                </form>


            </div>
        </>
    )
}

export default EventsAdd