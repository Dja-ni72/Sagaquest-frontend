import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="flex justify-between items-center p-4 bg-white shadow-md">
      <div className="font-bold italic text-lg">LOGO</div>
      <nav className="flex gap-6">
        <a className="text-black font-bold no-underline hover:text-gray-700" href="#factions">
          factions
        </a>
        <a className="text-black font-bold no-underline hover:text-gray-700" href="#quiz">
          QUIZ
        </a>
        <a className="text-black font-bold no-underline hover:text-gray-700" href="#profile">
          Profile
        </a>
      </nav>
    </header>
  );
};

export default Header;
