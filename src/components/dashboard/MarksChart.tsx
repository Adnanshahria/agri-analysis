import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const subjectData = [
    { name: 'জীববিজ্ঞান', marks: 30, color: '#10b981' },
    { name: 'রসায়ন', marks: 20, color: '#f59e0b' },
    { name: 'পদার্থবিজ্ঞান', marks: 20, color: '#3b82f6' },
    { name: 'গণিত', marks: 20, color: '#ef4444' },
    { name: 'ইংরেজি', marks: 10, color: '#a855f7' },
];

export function MarksChart() {
    const data = {
        labels: subjectData.map(s => `${s.name} (${s.marks})`),
        datasets: [
            {
                data: subjectData.map(s => s.marks),
                backgroundColor: subjectData.map(s => s.color),
                borderWidth: 0,
                hoverOffset: 6,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right' as const,
                labels: {
                    color: '#cbd5e1',
                    font: { family: "'Hind Siliguri', sans-serif", size: 11 },
                    padding: 10,
                    usePointStyle: true,
                    pointStyle: 'circle',
                    boxWidth: 8,
                },
            },
        },
        cutout: '65%',
    };

    return (
        <div className="h-40 w-full max-w-sm mx-auto">
            <Doughnut data={data} options={options} />
        </div>
    );
}
