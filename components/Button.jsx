'use client';

import { useRouter } from 'next/navigation';

const Button = ({ children, onClick, href, className }) => {
  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
    if (href) {
      router.push(href);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`inline-block px-12 py-6 bg-pink-100 text-gray-800 text-3xl font-bold rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-50 transform transition-transform duration-200 hover:scale-105 active:scale-95 cursor-pointer ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
