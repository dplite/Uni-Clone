import React, { useState } from "react";

const StickyContact = () => {
  const [tel, setTel] = useState("");
  const [checked, setChecked] = useState(false);
  return (
    <section className="sm:block fixed bottom-0 w-screen bg-gray-200 py-5 z-10">
      <div className="mx-auto max-w-7xl px-12 w-full flex justify-between">
        <div className="flex justify-between items-center block w-full">
          <div className="flex w-full flex-row justify-between items-center">
            <form>
              <div className='flex bg-black p-1 pl-2 rounded-xl justify-between"'>
                <div className='flex items-center"'>
                  <input
                    className="bg-black border-0 outline-none text-white p-1 placeholder-[#7E8587] w-44"
                    placeholder="Enter Phone Number"
                    value={tel}
                    type="number"
                    onChange={(e) => setTel(e.target.value)}
                  />
                  <span className="w-6 flex items-center justify-end h-full"></span>
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
                className="mr-2"
                checked={checked}
                onChange={() => setChecked(!checked)}
                id="consent-msg"
              />
              <div className="flex-col">
                <p
                  for="consent-msg"
                  className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer">
                  You agree to be contacted by Uni Cards over Call, SMS, Email
                  or
                </p>
                <p
                  for="consent-msg"
                  className="consent text-white md:text-black text-[10px] leading-3 cursor-pointer">
                  WhatsApp to guide you through your application.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StickyContact;
