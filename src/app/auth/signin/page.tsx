"use client";
import Input from "@/components/Input";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
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
          <motion.div
            initial={{ top: "-50%" }}
            animate={{ top: "inherit" }}
            transition={{
              duration: 1,
            }}
            exit={{ top: "150%" }}
            className="drop-shadow-2xl w-30 h-[400px] absolute  border-[1px]  border-black rounded-lg py-[30px] px-[20px]"
          >
            <form className="flex flex-col" onSubmit={handleFormState}>
              <p className="text-black font-bold text-xl">
                Log into your{" "}
                <p className="text-[#a29bfe] font-bold">account</p>
              </p>

              <p className="mt-[20px] text-[14px] text-[lightgrey]">
                You don't have an account?
                <Link className="text-[#a29bfe] font-bold" href="#">
                  Create one
                </Link>
              </p>
              <label>E-mail:</label>
              <Input
                type="text"
                name=""
                value={email}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setEmail(e.target.value)
                }
              />
              <label>Password:</label>
              <Input
                type="text"
                value={password}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setPassword(e.target.value)
                }
              />
              <button type="submit">Sign In</button>
            </form>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}

export default SignIn;
