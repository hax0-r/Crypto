import { Route, Routes } from "react-router"
import Home from "../Pages/Home"
import Platform from "../Pages/Dashboard/Platform"
import SignIn from "../Pages/SignIn"
import CreateAccount from "../Pages/CreateAccount"

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/platform" element={<Platform />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/create-account" element={<CreateAccount />} />
            </Routes>
        </>
    )
}

export default Router