import React from 'react';

interface StartPageProps {
  onStart: () => void;
}

const StartPage: React.FC<StartPageProps> = ({ onStart }) => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-8rem)]">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Stress Less, Live More</h1>
      <button
        onClick={onStart}
        className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300 text-lg md:text-xl"
      >
        START
      </button>
    </div>
  );
};

export default StartPage;