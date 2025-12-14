import { Outlet } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';
import { BottomNav } from './BottomNav';

export function Layout() {
    return (
        <div className="min-h-screen relative flex flex-col md:flex-row">
            <div className="fixed inset-0 bg-black z-[-1]" />

            {/* Desktop Sidebar */}
            <Sidebar />

            {/* Mobile Header */}
            <Header />

            {/* Main Content */}
            <main className="flex-1 md:ml-56 pt-20 md:pt-4 pb-24 md:pb-6 px-4 md:px-5 overflow-x-hidden">
                <div className="max-w-5xl mx-auto">
                    <Outlet />
                </div>
            </main>

            {/* Mobile Bottom Nav */}
            <BottomNav />
        </div>
    );
}
