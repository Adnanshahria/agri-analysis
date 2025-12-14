import { MarksChart } from "@/components/dashboard/MarksChart";
import { HotTopics } from "@/components/dashboard/HotTopics";
import { Countdown } from "@/components/dashboard/Countdown";
import { Rocket } from 'lucide-react';
import { useCountdown } from '@/hooks/useCountdown';

export default function Home() {
    const { days } = useCountdown();

    return (
        <div className="space-y-6 md:space-y-8 animate-fade-in-up">
            {/* Welcome Banner */}
            <section className="glass-panel p-6 rounded-2xl border-l-4 border-l-yellow-500 relative overflow-hidden group">
                <div className="absolute -right-4 -top-4 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
                    <Rocket size={120} />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2 relative z-10">মিশন ২৫-২৬: শেষ মুহূর্তের প্রস্তুতি</h2>
                <p className="text-slate-400 text-sm relative z-10 max-w-lg">
                    হাতে আছে মাত্র <span className="text-yellow-400 font-bold">{days} দিন</span>। নিচের <span className="text-yellow-400 font-semibold">"AI Prediction"</span> গুলো দেখে রিভিশন শুরু করুন।
                </p>
            </section>

            {/* Mobile Countdown (More prominent) */}
            <section className="md:hidden">
                <div className="glass-panel p-6 rounded-2xl bg-gradient-to-br from-neutral-900 to-black border border-white/10">
                    <Countdown compact={false} />
                </div>
            </section>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Marks Distribution */}
                <section className="glass-panel p-6 rounded-2xl">
                    <h3 className="font-bold text-lg text-slate-200 mb-6 border-b border-white/5 pb-2">মার্কস ডিস্ট্রিবিউশন</h3>
                    <MarksChart />
                </section>

                {/* Hot Topics */}
                <section id="hot-topics" className="glass-panel p-6 rounded-2xl h-full">
                    <h3 className="font-bold text-lg text-yellow-400 mb-4 border-b border-white/5 pb-2 flex items-center gap-2">
                        <span className="star-pulse">⭐</span> হট টপিক (হাই প্রায়োরিটি)
                    </h3>
                    <HotTopics />
                </section>
            </div>
        </div>
    )
}
