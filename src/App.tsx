import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import StartPage from './components/StartPage';
import Dashboard from './components/Dashboard';
import Level1 from './components/Level1';
import Level2 from './components/Level2';
import Level3 from './components/Level3';
import NoteSection from './components/NoteSection';

function App() {
  const [currentPage, setCurrentPage] = useState('start');
  const [menuOpen, setMenuOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'start':
        return <StartPage onStart={() => setCurrentPage('dashboard')} />;
      case 'dashboard':
        return <Dashboard />;
      case 'level1':
        return <Level1 />;
      case 'level2':
        return <Level2 />;
      case 'level3':
        return <Level3 />;
      default:
        return <StartPage onStart={() => setCurrentPage('dashboard')} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <header className="bg-blue-600 text-white p-4 flex justify-between items-center">
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-2xl">
          {menuOpen ? <X /> : <Menu />}
        </button>
        <h1 className="text-xl md:text-2xl font-bold">Stress Less, Live More</h1>
      </header>
      <div className="flex flex-grow">
        {menuOpen && (
          <nav className="bg-blue-500 text-white p-4 w-64 fixed h-full z-10 transition-transform duration-300 ease-in-out transform md:relative md:translate-x-0"
               style={{ transform: menuOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
            <ul className="space-y-2">
              <li><button onClick={() => { setCurrentPage('dashboard'); setMenuOpen(false); }} className="w-full text-left py-2 px-4 hover:bg-blue-600 rounded">Dashboard</button></li>
              <li><button onClick={() => { setCurrentPage('level1'); setMenuOpen(false); }} className="w-full text-left py-2 px-4 hover:bg-blue-600 rounded">Level 1</button></li>
              <li><button onClick={() => { setCurrentPage('level2'); setMenuOpen(false); }} className="w-full text-left py-2 px-4 hover:bg-blue-600 rounded">Level 2</button></li>
              <li><button onClick={() => { setCurrentPage('level3'); setMenuOpen(false); }} className="w-full text-left py-2 px-4 hover:bg-blue-600 rounded">Level 3</button></li>
            </ul>
          </nav>
        )}
        <main className="flex-grow p-4 overflow-auto">
          {renderPage()}
          <NoteSection />
        </main>
      </div>
    </div>
  );
}

export default App;