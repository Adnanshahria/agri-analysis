import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
import type { TopicData } from '@/types';
import { cn } from '@/lib/utils';
import { useMemo } from 'react';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

interface TrendChartProps {
    data: TopicData[];
    colorTheme?: string; // hex color
}

export function TrendChart({ data, colorTheme = '#3b82f6' }: TrendChartProps) {
    // Process data: Top 10 chapters by prediction to keep chart readable on laptop
    const processedData = useMemo(() => {
        const sorted = [...data].sort((a, b) => b.pred26 - a.pred26).slice(0, 10);
        return {
            labels: sorted.map(d => {
                // Clean name: remove "01. " and " (Out)" and truncate
                return d.name.replace(/^\d+\.\s+/, '').replace(/\s+\(Out\)$/i, '').substring(0, 12);
            }),
            datasets: [
                {
                    label: '22-23',
                    data: sorted.map(d => d.c22 || 0),
                    backgroundColor: '#334155',
                    borderRadius: 4,
                },
                {
                    label: '23-24',
                    data: sorted.map(d => d.c23 || 0),
                    backgroundColor: '#475569',
                    borderRadius: 4,
                },
                {
                    label: '24-25',
                    data: sorted.map(d => d.c25 || 0),
                    backgroundColor: '#64748b',
                    borderRadius: 4,
                },
                {
                    label: 'Prediction',
                    data: sorted.map(d => d.pred26),
                    backgroundColor: colorTheme,
                    borderRadius: 4,
                    borderWidth: 2,
                    borderColor: '#facc15', // Gold border for prediction
                },
            ],
        };
    }, [data, colorTheme]);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'top' as const,
                labels: { color: '#94a3b8' },
            },
            tooltip: {
                backgroundColor: 'rgba(15, 23, 42, 0.95)',
                titleColor: '#fff',
                bodyColor: '#cbd5e1',
                borderColor: 'rgba(255,255,255,0.1)',
                borderWidth: 1,
                padding: 12,
                cornerRadius: 8,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
                grid: { color: 'rgba(255,255,255,0.05)' },
                ticks: { color: '#64748b' },
            },
            x: {
                grid: { display: false },
                ticks: { color: '#64748b', maxRotation: 45, minRotation: 45, font: { size: 10 } },
            },
        },
    };

    return (
        <div className={cn("h-[280px] w-full")}>
            <Bar data={processedData} options={options} />
        </div>
    );
}
