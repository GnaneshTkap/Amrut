import React from "react";
import { BackgroundGradientAnimation } from "../ui/GradientAnimation";

const Login = () => {
  return (
    <div>
      <BackgroundGradientAnimation>
        <div className="absolute z-50 inset-0 flex  text-white font-bold px-4 pointer-events-none text-2xl text-center mt-5 ">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Toyota Kirloskar Auto Parts
          </p>
        </div>
      </BackgroundGradientAnimation>
    </div>
  );
};

export default Login;
