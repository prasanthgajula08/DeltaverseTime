import React, { useState, useEffect } from 'react';

const timeZones = [
  { city: 'New York', zone: 'America/New_York' },
  { city: 'London', zone: 'Europe/London' },
  { city: 'Tokyo', zone: 'Asia/Tokyo' },
  { city: 'Sydney', zone: 'Australia/Sydney' },
  { city: 'Dubai', zone: 'Asia/Dubai' },
  { city: 'Paris', zone: 'Europe/Paris' },
];

export default function WorldClock() {
  const [times, setTimes] = useState<Record<string, string>>({});

  useEffect(() => {
    const updateTimes = () => {
      const newTimes: Record<string, string> = {};
      timeZones.forEach(({ city, zone }) => {
        newTimes[city] = new Date().toLocaleTimeString('en-US', {
          timeZone: zone,
          hour12: true,
          hour: 'numeric',
          minute: '2-digit',
          second: '2-digit',
        });
      });
      setTimes(newTimes);
    };

    updateTimes();
    const interval = setInterval(updateTimes, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {timeZones.map(({ city }) => (
        <div
          key={city}
          className="bg-white/5 rounded-lg p-6 backdrop-blur-sm hover:bg-white/10 transition-all duration-200"
        >
          <h3 className="text-xl font-semibold mb-2">{city}</h3>
          <div className="text-3xl font-mono">{times[city]}</div>
        </div>
      ))}
    </div>
  );
}