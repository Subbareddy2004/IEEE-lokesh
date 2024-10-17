import React from 'react';

const Level1: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold mb-6">Level 1: Laugh Out Loud</h2>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Jokes</h3>
        <ul className="list-disc pl-6 space-y-2">
          <li>Laugh a minute</li>
          <li>Knock knock jokes are really...</li>
          <li>Punny jokes</li>
        </ul>
      </div>
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md">
        <h3 className="text-lg md:text-xl font-semibold mb-4">Funny Video</h3>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
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

export default Level1;