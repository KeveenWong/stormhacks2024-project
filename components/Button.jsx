import Link from 'next/link'

const Button = ({ children, onClick, href, className }) => {
    return (
      <Link
        href={href}
        onClick={onClick}
        className={`px-12 py-6 bg-pink-100 text-gray-800 text-3xl font-bold rounded-xl shadow-md focus:outline-none focus:ring-2 focus:ring-pink-300 focus:ring-opacity-50 transform transition-transform duration-200 hover:scale-105 active:scale-95 ${className}`}
      >
        {children}
      </Link>
    );
  };
  
  export default Button;
  