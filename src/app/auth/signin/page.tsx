"use client";
import Input from "@/components/Input";
import { AnimatePresence, motion } from "framer-motion";
import { ChangeEvent, FormEvent, useState } from "react";

function SignIn() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleFormState = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Logged");
  };
  return (
    <div className="w-full h-full">
      <div className="w-full h-full flex justify-center items-center relative">
        <AnimatePresence>
          <motion.form
            className="w-30 h-30 absolute"
            onSubmit={handleFormState}
            initial={{ top: "-50%" }}
            animate={{ top: "inherit" }}
            transition={{
              duration: 1,
            }}
            exit={{ top: "150%" }}
          >
            <Input
              type="text"
              name=""
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
            <Input
              type="text"
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
            />
            <button type="submit">Sign In</button>
          </motion.form>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default SignIn;
