import React from "react";
import ContactForm from "./firstPageComponents/ContactForm";
import TopBar from "./firstPageComponents/TopBar";

const FirstPage = () => {
  return (
    <div>
      <TopBar />
      <div className="relative h-[100vh] w-full flex items-center justify-center">
        <div className="flex flex-col md:flex-row-reverse mx-auto max-w-[1280px] w-full justify-center z-1 bg-transparent">
          <img
            src="https://www.uni.cards/images/nx-wave/nx_wave_hero.png"
            className="h-auto w-[225px] md:w-[420px] md:h-[420px] max-w-[420px] z-[1] mx-6"
          />
          {/* TEXT LEFT TO IMAGE */}
          <div className="z-10 w-full mt-7 md:mt-0 md:my-auto flex flex-col self-end md:self-center px-6">
            <h1 className="font-normal max-w-[300px] md:max-w-[700px] text-3xl md:text-[3.4rem] md:leading-[54px] text-black md:mb-6">
              <span>
                <strong>NX Wave.</strong>
                The next-gen credit card for those who love rewards.
              </span>
            </h1>
            <div className="mt-4 md:mt-0">
              {/* <p className="font-medium text-sm md:text-base md:mb-9">
                1% Cashback
                <svg
                  class="mx-[8px] mb-[2px] inline leading-5"
                  width="12"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z"
                    fill="#000"
                    styles={"mix-blend-mode:darken"}></path>
                </svg>
              </p> */}
              <p class="font-medium text-sm md:text-base md:mb-9">
                1% Cashback
                <svg
                  class="mx-[8px] mb-[2px] inline leading-5"
                  width="12"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z"
                    fill="#000"
                    styles="mix-blend-mode:darken"></path>
                </svg>
                5x Rewards
                <svg
                  class="mx-[8px] mb-[2px] inline leading-5"
                  width="12"
                  height="12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="m6 0 1.273 4.727L12 6 7.273 7.273 6 12 4.727 7.273 0 6l4.727-1.273L6 0Z"
                    fill="#000"
                    styles="mix-blend-mode:darken"></path>
                </svg>
                Zero Forex Markup
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstPage;
