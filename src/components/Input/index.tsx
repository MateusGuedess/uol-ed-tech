import { ChangeEvent } from "react";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
  id: string;
  className: string;
}

function Input({
  type = "text",
  value = "",
  onChange,
  name = "",
  id = "",
  className = "",
}: Partial<InputProps>) {
  return (
    <input
      style={{ border: "1.5px solid #e9e9e9" }}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
      id={id}
      className={`${className} h-[35px] rounded-lg`}
    />
  );
}

export default Input;
