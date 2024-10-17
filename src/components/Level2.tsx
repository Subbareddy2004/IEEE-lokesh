import React from 'react';

const Level2: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Level 2: Take a Break</h2>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Relaxation Techniques</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Relax & Recharge</li>
          <li>Calm Down & Take a Break</li>
          <li>Chill Out</li>
        </ul>
      </div>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Relaxation Video</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/5HrkXT5Bc9E"
            frameBorder="0"
            allow="autoplay; encrypted-media"
            allowFullScreen
            className="w-full h-48 md:h-64"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Level2;