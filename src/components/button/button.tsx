import { ButtonHTMLAttributes } from "react";

export function Button({
  children,
  ...rest
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className="flex items-center justify-center rounded-lg text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none 
    focus-visible:ring-2 focus-visible:ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-500 text-white hover:bg-blue-900 h-10 px-4 py-2
    "
      {...rest}
    >
      {children}
    </button>
  );
}
