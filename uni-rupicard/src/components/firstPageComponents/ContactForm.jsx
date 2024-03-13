import React, { useState } from "react";

const ContactForm = () => {
  const [tel, setTel] = useState("");
  const [checked, setChecked] = useState(false);
  return (
    <div className="hidden md:block">
      <div className="flex justify-between items-center  max-w-[94vw]">
        <div className="flex flex-col">
          <form>
            <div className="flex bg-black p-1 pl-2 rounded-xl justify-between">
              <div className="flex items-center">
                <input
                  className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44"
                  type="number"
                  placeholder="Enter Phone No"
                  value={tel}
                  onChange={(e) => setTel(e.target.value)}
                />
                <span className="w-6 flex items-center justify-end h-full">
                  <button type="button"></button>
                  <svg
                    width="14"
                    height="15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.498.498.356 1.72l5.41 5.786L.41 13.233l1.17 1.25 5.355-5.728 5.41 5.786 1.142-1.22-5.41-5.787 5.492-5.873-1.17-1.25-5.491 5.873L1.498.498Z"
                      fill="#fff"></path>
                  </svg>
                </span>
              </div>
              <button
                type="submit"
                className="text-center text-sm leading-7 justify-between pt-2 ml-2 bg-yellow-500 rounded-xl z-10 py-2 px-4 disabled:opacity-80 disabled:cursor-not-allowed"
                disabled="">
                <span>Apply Now</span>
              </button>
            </div>
          </form>
          <div className="consent flex items-center py-4 px-2 max-w-xs">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
              id="consent-msg"
            />
            <label
              for="consent-msg"
              className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer">
              You agree to be contacted by Uni Cards over Call, SMS, Email or
              WhatsApp to guide you through your application.
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
