import React, { useState, useEffect } from 'react';
import { Clock, Globe, Timer as TimerIcon, Calendar as CalendarIcon } from 'lucide-react';
import TimeDisplay from './components/TimeDisplay';
import WorldClock from './components/WorldClock';
import Timer from './components/Timer';
import Calendar from './components/Calendar';

function App() {
  const [activeTab, setActiveTab] = useState('time');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-2">Chronos</h1>
          <p className="text-purple-200">Your Personal Time Companion</p>
        </header>

        <nav className="flex justify-center mb-8">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-1">
            <div className="flex space-x-2">
              {[
                { id: 'time', icon: Clock, label: 'Time' },
                { id: 'world', icon: Globe, label: 'World' },
                { id: 'timer', icon: TimerIcon, label: 'Timer' },
                { id: 'calendar', icon: CalendarIcon, label: 'Calendar' },
              ].map(({ id, icon: Icon, label }) => (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`flex items-center px-4 py-2 rounded-md transition-all duration-200 ${
                    activeTab === id
                      ? 'bg-white/20 text-white'
                      : 'hover:bg-white/10 text-purple-200'
                  }`}
                >
                  <Icon className="w-5 h-5 mr-2" />
                  {label}
                </button>
              ))}
            </div>
          </div>
        </nav>

        <main className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-xl">
            {activeTab === 'time' && <TimeDisplay currentTime={currentTime} />}
            {activeTab === 'world' && <WorldClock />}
            {activeTab === 'timer' && <Timer />}
            {activeTab === 'calendar' && <Calendar />}
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;