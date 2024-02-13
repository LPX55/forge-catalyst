'use client'
import FlipClockCountdown from '@leenguyen/react-flip-clock-countdown';
import '@leenguyen/react-flip-clock-countdown/dist/index.css';
import React, { useState, useEffect } from 'react';

export default function CountdownComponent(){
    'use client'
    const [time, setTime] = useState(new Date(Date.UTC(2024, 0, 3, 17, 0, 0)).getTime());

    useEffect(() => {
        const toTime = new Date(Date.UTC(2024, 0, 3, 17, 0, 0)).getTime()
        setTime(toTime)
    }, 
  []);
 {
    return (
        <div className="flip-clock md:scale-[1.8] origin-top mb-8">
        <FlipClockCountdown to={time} renderMap={[true, true, true, true]}
        labels={['DAYS', 'HOURS', 'MIN.', 'SEC.']} labelStyle={{ fontSize: 10, fontWeight: 500, textTransform: 'uppercase', fontFamily: 'monospace' }}
        digitBlockStyle={{ width: 18, height: 30, fontSize: 16, backgroundColor: '#171717' }} className="w-full font-mono mx-auto" showSeparators={false} separatorStyle={{size: 1}}/>
        </div>
    );
  }
}
