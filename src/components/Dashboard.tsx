import React, { useEffect, useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface StressLevel {
  timestamp: string;
  level: number;
}

const Dashboard: React.FC = () => {
  const [stressLevels, setStressLevels] = useState<StressLevel[]>([]);

  // Fetch the stress data from the backend
  const fetchStressData = async () => {
    try {
      const response = await fetch('https://backend-stress.vercel.app');
      const data = await response.json();

      const newLevel: StressLevel = {
        timestamp: new Date().toISOString(), // Use current time for the new entry
        level: data.stress_level // Fetch the actual stress level from the backend
      };

      setStressLevels(prevLevels => [newLevel, ...prevLevels.slice(0, 29)]); // Keep only the last 30 entries
    } catch (error) {
      console.error('Error fetching stress data:', error);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchStressData();

    // Fetch new data every 5 seconds
    const interval = setInterval(fetchStressData, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Dashboard</h2>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Stress Levels</h3>
        <div className="w-full h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={stressLevels}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis
                dataKey="timestamp"
                tickFormatter={(timestamp) => new Date(timestamp).toLocaleTimeString()}
              />
              <YAxis domain={[0, 10]} />
              <Tooltip labelFormatter={(label) => new Date(label).toLocaleString()} />
              <Line type="monotone" dataKey="level" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Recent Stress Levels</h3>
        <ul className="space-y-1">
          {stressLevels.slice(0, 5).map((level, index) => (
            <li key={index}>
              {new Date(level.timestamp).toLocaleString()}: {level.level}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;