import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="mt-auto">
      <div className="flex flex-col items-center p-4">
        <div className="font-bold text-gray-400 text-xs md:text-sm">
          © {new Date().getFullYear()} userwei&apos;s Profile
        </div>
      </div>
    </footer>
  );
};

export default Footer;
