import { Outlet } from "react-router-dom";
import { Sidebar } from "./Sidebar";
import { BottomNav } from "./BottomNav";
import { Header } from "./Header";

export function Layout() {
    return (
        <div className="min-h-screen relative flex flex-col md:flex-row">
            <div className="fixed inset-0 bg-black z-[-1]" />

            {/* Desktop Sidebar */}
            <Sidebar />

            {/* Mobile Top Header */}
            <Header />

            {/* Main Content Area */}
            <main className="flex-1 w-full md:pl-72 min-h-screen transition-all duration-300">
                <div className="h-full w-full max-w-7xl mx-auto p-4 md:p-8 pt-20 md:pt-8 pb-24 md:pb-8">
                    <Outlet />
                </div>
            </main>

            {/* Mobile Bottom Nav */}
            <BottomNav />
        </div>
    );
}
