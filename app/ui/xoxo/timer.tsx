'use client'

import { roboto } from '@/app/ui/font';
import { useState, useEffect } from 'react';

const Timer = () => {
    const [seconds, setSeconds] = useState(600);

    useEffect(() => {
        if (seconds <= 0) return;

        const interval = setInterval(() => {
            setSeconds(prev => prev - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, [seconds]);

    const formatTime = (time: number) => {
        const minutes = Math.floor(time / 60);
        const secs = time % 60;
        return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
    };

    return (
        <div className='bg-[#EDEDED] w-36 h-24 rounded-xl content-center'>
            <h1 className={`${roboto.className} font-black text-4xl text-center`}>{formatTime(seconds)}</h1>
        </div>
    )
}

export default Timer;