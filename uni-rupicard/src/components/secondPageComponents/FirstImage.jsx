import React from "react";

const FirstImage = () => {
  return (
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
            Not applicable on fuel purchase, rent &amp; wallet transfers, ATM
            withdrawals &amp; international transactions.
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
  );
};

export default FirstImage;
