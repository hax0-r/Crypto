import { Route, Routes } from "react-router"
import Home from "../Pages/Home"
import Platform from "../Pages/Dashboard/Platform"

const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/platform" element={<Platform />} />
            </Routes>
        </>
    )
}

export default Router