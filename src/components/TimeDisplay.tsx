import React from 'react';

interface TimeDisplayProps {
  currentTime: Date;
}

export default function TimeDisplay({ currentTime }: TimeDisplayProps) {
  const hours = currentTime.getHours().toString().padStart(2, '0');
  const minutes = currentTime.getMinutes().toString().padStart(2, '0');
  const seconds = currentTime.getSeconds().toString().padStart(2, '0');
  const date = currentTime.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="text-center">
      <div className="mb-8">
        <div className="text-8xl font-bold tracking-tight mb-4 font-mono">
          <span className="inline-block w-32 bg-white/5 rounded-lg px-4 py-2">{hours}</span>
          <span className="mx-2 animate-pulse">:</span>
          <span className="inline-block w-32 bg-white/5 rounded-lg px-4 py-2">{minutes}</span>
          <span className="mx-2 animate-pulse">:</span>
          <span className="inline-block w-32 bg-white/5 rounded-lg px-4 py-2">{seconds}</span>
        </div>
        <div className="text-xl text-purple-200">{date}</div>
      </div>
    </div>
  );
}