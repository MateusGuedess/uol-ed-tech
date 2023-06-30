import { ChangeEvent } from "react";

interface InputProps {
  type: "text" | "number" | "email" | "password";
  value: string | number;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

function Input({
  type = "text",
  value = "",
  onChange,
  name = "",
}: Partial<InputProps>) {
  return (
    <input
      style={{ border: "1px solid red" }}
      type={type}
      value={value}
      onChange={onChange}
      name={name}
    />
  );
}

export default Input;
