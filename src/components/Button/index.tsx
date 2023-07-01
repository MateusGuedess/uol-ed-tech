import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  className: string;
  size?: string;
  type?: "submit";
  onClick?: () => void;
}

function Button({ children, size, className, type, onClick }: ButtonProps) {
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
