import { Moon, Bell, HelpCircle, Info, Send, User } from 'lucide-react';

export default function Settings() {
    return (
        <div className="space-y-6 animate-fade-in-up">
            <h1 className="text-3xl font-bold text-white">সেটিংস</h1>

            <div className="glass-panel rounded-2xl overflow-hidden divide-y divide-white/5">
                <div className="p-4 flex items-center justify-between hover:bg-white/5 cursor-pointer transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-slate-800 rounded-lg text-slate-400">
                            <Moon size={20} />
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-slate-200">ডার্ক মোড</h3>
                            <p className="text-xs text-slate-500">অলওয়েজ অন</p>
                        </div>
                    </div>
                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-blue-600">
                        <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                    </div>
                </div>

                <div className="p-4 flex items-center justify-between hover:bg-white/5 cursor-pointer transition-colors">
                    <div className="flex items-center gap-4">
                        <div className="p-2 bg-slate-800 rounded-lg text-slate-400">
                            <Bell size={20} />
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-slate-200">নোটিফিকেশন</h3>
                            <p className="text-xs text-slate-500">অন</p>
                        </div>
                    </div>
                    <div className="relative inline-flex h-6 w-11 items-center rounded-full bg-slate-700">
                        <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-white transition" />
                    </div>
                </div>
            </div>

            <div className="glass-panel rounded-2xl overflow-hidden divide-y divide-white/5">
                <div className="p-4 flex items-center gap-4 hover:bg-white/5 cursor-pointer transition-colors">
                    <div className="p-2 bg-slate-800 rounded-lg text-slate-400">
                        <HelpCircle size={20} />
                    </div>
                    <h3 className="text-sm font-medium text-slate-200">হেল্প সেন্টার</h3>
                </div>
                <div className="p-4 flex items-center gap-4 hover:bg-white/5 cursor-pointer transition-colors">
                    <div className="p-2 bg-slate-800 rounded-lg text-slate-400">
                        <Info size={20} />
                    </div>
                    <h3 className="text-sm font-medium text-slate-200">অ্যাপ সম্পর্কে</h3>
                </div>
            </div>

            {/* Developer Info Section */}
            <div className="glass-panel rounded-2xl overflow-hidden">
                <div className="p-4 border-b border-white/5">
                    <div className="flex items-center gap-3">
                        <div className="p-2 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg text-blue-400">
                            <User size={20} />
                        </div>
                        <div>
                            <h3 className="text-sm font-bold text-white">Developer Info</h3>
                            <p className="text-xs text-slate-400">Mohammed Adnan Shahria</p>
                        </div>
                    </div>
                </div>

                <div className="divide-y divide-white/5">
                    <a
                        href="https://t.me/adnanshahria"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-4 flex items-center gap-4 hover:bg-white/5 transition-colors"
                    >
                        <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400">
                            <Send size={20} />
                        </div>
                        <div className="flex-1">
                            <h3 className="text-sm font-medium text-slate-200">Telegram</h3>
                            <p className="text-xs text-slate-500">@adnanshahria</p>
                        </div>
                        <span className="text-xs text-blue-400 font-medium">Open →</span>
                    </a>
                </div>
            </div>

            <div className="text-center pt-8 opacity-50">
                <p className="text-xs text-slate-500">এগ্রিক্লাস্টার ইনসাইট</p>
                <p className="text-[10px] text-slate-600">ভার্সন ১.০.০</p>
            </div>
        </div>
    );
}
