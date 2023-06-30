import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className: string;
  size?: string;
  type?: "submit";
}

function Button({ children, size, className, type }: ButtonProps) {
  return (
    <button className={className} type={type}>
      {children}
    </button>
  );
}

export default Button;
