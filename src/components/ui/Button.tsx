import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'green' | 'dark' | 'white' | 'whatsapp' | 'tel';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
  isLoading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'green',
  size = 'md',
  children,
  className = '',
  isLoading = false,
  disabled,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold tracking-wide transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed rounded-2xl hover:-translate-y-0.5 active:translate-y-0";

  const variants = {
    green: "bg-green-600 text-white hover:bg-green-500 hover:shadow-[0_8px_20px_rgba(22,163,74,0.3)] shadow-md focus:ring-green-500 border border-green-500",
    dark: "bg-dark text-white hover:bg-dark-50 hover:shadow-[0_8px_20px_rgba(15,42,29,0.4)] shadow-md focus:ring-dark",
    white: "bg-white text-dark hover:bg-gray-50 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] shadow-md focus:ring-gray-300 border border-gray-200",
    whatsapp: "bg-[#25D366] text-white hover:bg-[#20BE5C] hover:shadow-[0_8px_20px_rgba(37,211,102,0.4)] shadow-md focus:ring-[#25D366]",
    tel: "bg-white text-dark hover:bg-gray-50 hover:shadow-[0_8px_20px_rgba(0,0,0,0.1)] shadow-md focus:ring-gray-300 border border-gray-200",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-5 py-3 text-sm",
    lg: "px-7 py-3 text-sm",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      disabled={isLoading || disabled}
      {...props}
    >
      {isLoading && <Loader2 className="w-4 h-4 mr-2 animate-spin" />}
      {children}
    </button>
  );
};
