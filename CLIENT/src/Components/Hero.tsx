import React from "react";
import Typewriter from "typewriter-effect";
import Animatedpage from "./AnimatedPage";

const Hero: React.FC = () => {
  return (
    <Animatedpage>
      <div className="relative" id="home">
        <div
          aria-hidden="true"
          className="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40 dark:opacity-20"
        >
          <div className="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400 dark:from-blue-700"></div>
          <div className="blur-[106px] h-32 bg-gradient-to-r from-cyan-300 to-sky-300 dark:to-indigo-600"></div>
        </div>
        <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
          <div className="relative pt-16 ml-auto">
            <div className="lg:w-2/3 text-center mx-auto">
              <h1 className="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-green-400 font-bold text-4xl md:text-6xl xl:text-7xl pb-3">
                A Protocol for
                <Typewriter
                  options={{
                    strings: [
                      '<span class="bg-clip-text text-transparent bg-gradient-to-r from-white to-cyan-400">Swapping</span>', 
                      '<span class="bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-400">Trading</span>', 
                      '<span class="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-white">Asset Management</span>'
                    ],                
                    autoStart: true,
                    loop: true,
                  }}
                />
              </h1>
              <p className="mt-5 bg-clip-text text-transparent bg-gradient-to-r from-white to-white">
              Welcome to Mudrafi, you're asset management dex. Here you can Swap, check prices and do a lot of things. You can also use ai tools containing in AI analytics
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-y-4 gap-x-6">
                <a
                  href="/SwapInterface"
                  className="relative flex h-11  items-center justify-center px-6 before:absolute before:inset-0 before:rounded-full before:bg-white before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max"
                >
                  <span className="relative text-base font-semibold  bg-clip-text text-transparent bg-gradient-to-r  bg-button ">
                    Get started
                  </span>
                </a>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </Animatedpage>
  );
};

export default Hero;
