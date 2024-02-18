import { Outlet } from "react-router-dom";

import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function BasePage() {
    return (
        <>
            <Header />
            <main className=" h-full">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}