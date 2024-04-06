import React from "react";
import { BackgroundGradientAnimation } from "../ui/GradientAnimation";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { cn } from "../../lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
} from "@tabler/icons-react";

const Login = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
    console.log(e.target.username.value);
    console.log(e.target.password.value);
  };
  return (
    <div>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex  text-white font-bold px-4 pointer-events-none text-2xl text-center mt-5 ">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Toyota Kirloskar Auto Parts
          </p>
        </div>

        <div>
          <div className="max-w-md w-full mx-auto z-10 inset-0 rounded-none md:rounded-2xl p-4 md:p-8  relative shadow-input bg-gradient-to-b from-black/10 to-black/10 mt-24">
            <h2 className="font-bold text-xl text-neutral-200">
              Welcome to TKAP
            </h2>

            <form className="my-8" onSubmit={handleSubmit}>
              {/* <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
                <LabelInputContainer>
                  <Label htmlFor="firstname">First name</Label>
                  <Input id="firstname" placeholder="Tyler" type="text" />
                </LabelInputContainer>
                <LabelInputContainer>
                  <Label htmlFor="lastname">Last name</Label>
                  <Input id="lastname" placeholder="Durden" type="text" />
                </LabelInputContainer>
              </div> */}
              <LabelInputContainer className="mb-4">
                <Label htmlFor="username" className="text-neutral-200">
                  Username
                </Label>
                <Input
                  id="username"
                  placeholder="Gnanesh"
                  type="username"
                  className="bg-gradient-to-b from-white/80 to-white/20"
                />
              </LabelInputContainer>
              <LabelInputContainer className="mb-4">
                <Label htmlFor="password" className="text-neutral-200">
                  Password
                </Label>
                <Input
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  className="bg-gradient-to-b from-white/80 to-white/20"
                />
              </LabelInputContainer>
              {/* <LabelInputContainer className="mb-4">
                <Label htmlFor="password" className="text-neutral-200">
                  Password
                </Label>
                <Input
                  id="password"
                  placeholder="••••••••"
                  type="password"
                  className="bg-gradient-to-b from-white/80 to-white/20"
                />
              </LabelInputContainer> */}

              <button
                className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
                type="submit"
              >
                Sign up &rarr;
                <BottomGradient />
              </button>

              <div className="bg-gradient-to-r from-transparent via-neutral-300 dark:via-neutral-700 to-transparent my-8 h-[1px] w-full" />
            </form>
          </div>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default Login;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      {/* <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" /> */}
    </>
  );
};

const LabelInputContainer = ({ children, className }) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
