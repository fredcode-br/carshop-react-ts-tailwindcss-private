import { Outlet } from "react-router-dom";

import SideBar from "../../components/SideBar";

export default function AdminBasePage() {
  return (
    <div className="flex h-screen">
        <SideBar />
        <div className="flex-1 overflow-x-hidden overflow-y-auto">
            <main className="px-10 py-12 ">
                <Outlet />
            </main>
        </div>
    </div>
  );
}
