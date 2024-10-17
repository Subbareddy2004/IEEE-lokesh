import React from 'react';

const Level3: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Level 3: Diaphragmatic Breathing</h2>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Breathing Techniques</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Box Breathing</li>
          <li>Alternate Nostril Breathing</li>
          <li>4-7-8 Breathing</li>
        </ul>
      </div>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Guided Breathing Exercise</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/8vkYJf8DOsc"
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

export default Level3;