import React, { useRef, useState, useEffect } from "react";

const SecondPage = () => {
  const targetRef = useRef(null);
  const [isInViewport, setIsInViewport] = useState(0);
  console.log(isInViewport, "ojo");

  useEffect(() => {
    const options = {
      root: null, // Use the viewport as the root
      rootMargin: "0px", // No margin around the root
      threshold: 0.5, // Trigger when 50% of the target is in the viewport
    };

    const handleIntersection = (entries) => {
      console.log(entries, "et");
      entries.forEach((entry) => {
        setIsInViewport((prev) => {
          return entry.isIntersecting ? prev + 1 : prev;
        });
      });
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (targetRef.current) {
      observer.observe(targetRef.current);
    }

    // Cleanup the observer when the component is unmounted
    return () => {
      if (targetRef.current) {
        observer.unobserve(targetRef.current);
      }
    };
  }, []);

  return (
    <div className="py-12 md:py-[150px] ">
      <section ref={targetRef}>
        {
          <div className="w-full max-w-7xl mx-auto px-6 md:px-4 ">
            <div
              className={`${
                isInViewport === 1 ? "slide-from-bottom" : ""
              } flex flex-col justify-center md:text-center text-[28px] md:text-[40px] leading-[34px] md:leading-[1.2]  md:pb-16 font-medium`}>
              <p style={{ opacity: 1, transform: "none" }}>
                Earn 1% assured cashback
                <span className="text-[#9EA7AE]"> on your spends. Get</span> 5X
              </p>
              <p style={{ opacity: 1, transform: "none" }}>
                more value than cashback
                <span className="text-[#9EA7AE]"> at the Uni Store. Enjoy</span>
              </p>
              <p style={{ opacity: 1, transform: "none" }}>
                round the clock
                <span className="text-[#9EA7AE]">
                  {" "}
                  Whatsapp support. And it's
                </span>
              </p>

              <p style={{ opacity: 1, transform: "none" }}>
                lifetime free
                <span className="text-[#9EA7AE]">
                  {" "}
                  ; no joining fee, no annual charges.
                </span>
              </p>
            </div>
          </div>
        }
        <div
          className="flex md:justify-center py-12"
          style={{ opacity: 1, transform: "none" }}>
          <div class="bg-down flex w-[96px] md:w-[150px] h-[96px] md:h-[150px] rounded-[50%] justify-center">
            <img
              alt="down_arrow"
              src="https://www.uni.cards/images/down_arrow.svg"
              loading="lazy"
              className="w-9 md:w-14 css-0"
            />
          </div>
        </div>
      </section>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-4  lg:px-8">
        <div className="flex justify-center flex-col">
          <div
            className="flex md:items-center flex-col-reverse md:flex-row
                
                w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8">
            <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
              <div className="w-full md:w-[300px] lg:w-[510px]">
                <div>
                  <span style={{ fontWeight: 700 }}>
                    1% assured cashback on your spends.
                  </span>
                  <span style={{ fontWeight: 400, color: "#9EA7AE" }}>
                    The more you spend, the more you earn.
                  </span>
                </div>
              </div>
              <div class="info-caption">
                <div className="leading-5 mt-10 font-normal text-[13px] md:text-lg text-[#9EA7AE]">
                  Not applicable on fuel purchase, rent &amp; wallet transfers,
                  ATM withdrawals &amp; international transactions.
                </div>
              </div>
            </div>
            <div className="w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]">
              <div className="flex justify-center overflow-hidden">
                <div className="relative w-[280px] lg:w-[448px]">
                  <img
                    src="https://www.uni.cards/images/one_percent_cashback.png"
                    class=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex md:items-center flex-col-reverse md:flex-row-reverse
                
            w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8">
            <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
              <div className="w-full md:w-[300px] lg:w-[510px]">
                <div>
                  <span style={{ fontWeight: 700 }}>
                    5x more value than your cashback,
                  </span>
                  <span style={{ fontWeight: 400, color: "#9EA7AE" }}>
                    only at the Uni Store.
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]">
              <div className="flex justify-center overflow-hidden">
                <div className="relative w-[280px] lg:w-[448px]">
                  <img
                    src="https://www.uni.cards/images/five_x_rewards.png"
                    class=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            className="flex md:items-center flex-col-reverse md:flex-row
                
            w-full font-medium justify-center  md:pt-[70px] py-0 md:py-[60px] md:px-8">
            <div className="flex flex-col justify-start text-3xl leading-8 lg:text-[40px] text-[#1C2132] lg:leading-[1.2]">
              <div className="w-full md:w-[300px] lg:w-[510px]">
                <div>
                  <span style={{ fontWeight: 700 }}>Zero Forex Markup.</span>
                  <span style={{ fontWeight: 400, color: "#9EA7AE" }}>
                    Go international, without any fees.
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full my-10 md:my-0 lg:pt-0 lg:w-[50%]">
              <div className="flex justify-center overflow-hidden">
                <div className="relative w-[280px] lg:w-[448px]">
                  <img
                    src="https://www.uni.cards/images/forex_globe.png"
                    class=""
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex mt-40 font-medium justify-start md:justify-center text-[28px] leading-[34px] md:text-[40px] md:leading-[1.2] md:text-center">
            <p>
              Lifetime <span className="text-green-500">free. </span>
              <span className="block sm:inline-block md:text-center">
                No joining fee.
              </span>
              <span class="block md:text-center"> No annual charges. </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondPage;
