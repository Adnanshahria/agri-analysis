import { useState, useEffect } from 'react';
import { differenceInDays, differenceInHours } from 'date-fns';

// Exam date: January 3, 2026
export const EXAM_TARGET_DATE = new Date('2026-01-03T00:00:00');

export function useCountdown(targetDate: Date = EXAM_TARGET_DATE) {
    const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0 });

    useEffect(() => {
        const calculateTime = () => {
            const now = new Date();
            if (now > targetDate) {
                return { days: 0, hours: 0 };
            }
            const days = differenceInDays(targetDate, now);
            const totalHours = differenceInHours(targetDate, now);
            const hours = totalHours % 24;
            return { days, hours };
        };

        setTimeLeft(calculateTime());
        const timer = setInterval(() => {
            setTimeLeft(calculateTime());
        }, 1000 * 60); // Update every minute

        return () => clearInterval(timer);
    }, [targetDate]);

    return timeLeft;
}
