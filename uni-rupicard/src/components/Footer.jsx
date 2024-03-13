import React from "react";
import StickyContact from "./StickyContact/StickyContact";
import { useAuthContext } from "./Context/Context";

const Footer = () => {
  const { isFirstPageVisible } = useAuthContext();
  return (
    <>
      <div className="py-12 lg:py-[100px] bg-gradient-to-r from-green-200 to-yellow-200 download-bg">
        <div className=" w-full max-w-7xl mx-auto px-6 md:px-4  md:flex md:justify-around items-center my-4">
          <p className="mb-6 sm:mb-0 text-[28px] font-medium md:text-[42px] leading-tight">
            {" "}
            Download now to get Started
          </p>
          <div class="flex space-x-4">
            <button class="bg-transparent text-white py-2 px-8 rounded-xl border border-black flex items-center">
              <div style={{ height: 30, width: 30 }}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  enable-background="new 0 0 24 24"
                  viewBox="0 0 24 24"
                  id="google-play">
                  <path
                    fill="#ffc107"
                    d="m23 12c0 .75-.42 1.41-1.03 1.75l-5.2 2.89-4.4-4.64 4.4-4.64 5.2 2.89c.61.34 1.03 1 1.03 1.75z"></path>
                  <path
                    fill="#03a9f4"
                    d="m12.37 12-10.8 11.39c-.36-.36-.57-.85-.57-1.39v-20c0-.54.21-1.03.57-1.39z"></path>
                  <path
                    fill="#f44336"
                    d="m12.37 12 4.4 4.64-12.8 7.11c-.29.16-.62.25-.97.25-.56 0-1.07-.23-1.43-.61z"></path>
                  <path
                    fill="#4caf50"
                    d="m16.77 7.36-4.4 4.64-10.8-11.39c.36-.38.87-.61 1.43-.61.35 0 .68.09.97.25z"></path>
                </svg>
              </div>
              <span className="ml-1">Google Play</span>
            </button>

            <button class="bg-transparent text-white py-2 px-8 rounded-xl border border-black flex items-center">
              <div style={{ height: 30, width: 30 }}>
                <svg
                  viewBox="0 0 32 32"
                  width="32"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="m9.438 31.401c-.63-.422-1.193-.938-1.656-1.536-.516-.615-.984-1.266-1.422-1.938-1.021-1.495-1.818-3.125-2.375-4.849-.667-2-.99-3.917-.99-5.792 0-2.094.453-3.922 1.339-5.458.651-1.198 1.625-2.203 2.797-2.906 1.135-.708 2.453-1.094 3.786-1.12.469 0 .974.068 1.51.198.385.109.854.281 1.427.495.729.281 1.13.453 1.266.495.427.156.786.224 1.068.224.214 0 .516-.068.859-.172.193-.068.557-.188 1.078-.411.516-.188.922-.349 1.245-.469.495-.146.974-.281 1.401-.349.521-.078 1.036-.104 1.531-.063.948.063 1.813.266 2.589.557 1.359.547 2.458 1.401 3.276 2.615-.349.214-.667.458-.969.734-.651.573-1.198 1.25-1.641 2.005-.573 1.026-.865 2.188-.859 3.359.021 1.443.391 2.714 1.12 3.813.521.802 1.208 1.484 2.047 2.047.417.281.776.474 1.12.604-.161.5-.333.984-.536 1.464-.464 1.078-1.016 2.109-1.667 3.083-.578.839-1.031 1.464-1.375 1.88-.536.635-1.052 1.12-1.573 1.458-.573.38-1.25.583-1.938.583-.469.021-.932-.042-1.38-.167-.385-.13-.766-.271-1.141-.432-.391-.177-.792-.333-1.203-.453-.51-.135-1.031-.198-1.552-.198-.536 0-1.057.068-1.547.193-.417.12-.818.26-1.214.432-.557.234-.927.391-1.141.458-.427.125-.87.203-1.318.229-.693 0-1.339-.198-1.979-.599zm9.14-24.615c-.906.453-1.771.646-2.63.583-.135-.865 0-1.75.359-2.719.318-.828.745-1.573 1.333-2.24.609-.693 1.344-1.266 2.172-1.677.88-.453 1.719-.698 2.521-.734.104.906 0 1.797-.333 2.76-.307.854-.76 1.641-1.333 2.344-.583.693-1.302 1.266-2.115 1.682z" />
                </svg>
              </div>
              <span className="ml-1">App Store</span>
            </button>
          </div>
        </div>
      </div>
      <section className="py-12 lg:py-[100px] bg-black-800 lg:py-[120px]">
        <footer className="flex flex-col items-center bg-black-12 text-white pt-[30px] px-4 md:px-14 md:pt-[50px] pb-40">
          <div className="w-full max-w-[1240px] min-h-[auto]">
            <div className="flex flex-col md:flex-row items-center justify-start">
              <div className="flex flex-col w-full lg:w-1/2 items-start">
                <div className="mx-0 md:m-0">
                  <svg
                    className="Logo_logo_white__zowGB"
                    width="120"
                    height="90"
                    viewBox="0 0 85 60"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M54.894 39.5039H48.6641V19.77H54.894V39.5039ZM30.4021 25.9999V39.504H24.1723V22.3647C24.1723 21.6765 24.4457 21.0165 24.9322 20.5301C25.4188 20.0435 26.0787 19.77 26.7669 19.77H42.3312C43.0195 19.77 43.6793 20.0435 44.1657 20.5301C44.6523 21.0165 44.9257 21.6765 44.9257 22.3647V39.504H38.696V25.9999H30.4021ZM14.2345 33.2742V19.7702H20.4644V36.9095C20.4644 37.5977 20.1909 38.2576 19.7044 38.744C19.2179 39.2307 18.5579 39.5041 17.87 39.5041H2.30544C1.61752 39.5041 0.957379 39.2307 0.470894 38.744C-0.0157201 38.2576 -0.289062 37.5977 -0.289062 36.9095V19.7702H5.9407V33.2742H14.2345Z"
                      fill="white"></path>
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M65.289 19.7708C65.289 21.8685 63.5858 23.5717 61.4882 23.5717C59.3905 23.5717 57.6875 21.8685 57.6875 19.7708C57.6875 17.6732 59.3905 15.9702 61.4882 15.9702C63.5858 15.9702 65.289 17.6732 65.289 19.7708Z"
                      fill="white"></path>
                  </svg>
                </div>

                <div className="text-grey-dark text-[13px] lg:text-base">
                  <p className="text-left w-full sm:w-[400px] md:w-[280px] lg:[w-360px]">
                    Indiqube Sigma No.3/B, Nexus Koramangala 3rd Block SBI
                    Colony, Koramangala, Bengaluru, Karnataka 560034
                  </p>
                  <p className="text-left w-full sm:w-[400px] md:w-[280px] lg:[w-360px]">
                    Contact Us: 080 68216821
                  </p>
                  <p className="text-left w-full sm:w-[400px] md:w-[280px] lg:[w-360px]">
                    Email: mailto: care@uni.club
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-[#D9D9D9] h-[1px] w-full max-w-[1240px] mt-8"></div>
          <div className="py-4 w-full max-w-[1240px] min-h-[auto] flex justify-between">
            <p className="text-[#FFFFFF]">
              Grievance Redressal Mechanism - SBM Bank India
            </p>
            <p className="text-[#FFFFFF] ml-auto">CSR Policy</p>
          </div>
          <div className="spacer-gradient h-[1px] w-full max-w-[1240px] mx-0 mb-5 md:mb-8"></div>
          <div className="flex w-full max-w-[1240px] flex-col justify-center md:flex-row md:justify-between">
            <div className="flex w-full flex-wrap flex-1 justify-center md:justify-start">
              <div className="h-10 w-30 py-0 px-[18px] h-[60px]">Instagram</div>
              <div className="h-10 w-30 py-0 px-[18px] h-[60px]">LinkedIn</div>
              <div className="h-10 w-30 py-0 px-[18px] h-[60px]">Twitter</div>
              <div className="h-10 w-30 py-0 px-[18px] h-[60px]">Facebook</div>
              <div className="h-10 w-30 py-0 px-[18px] h-[60px]">Careers</div>
            </div>
            <div className="p-0 pb-5 flex justify-center flex-wrap">
              <span className="h-[60px]">
                Credit Card KFS<span className="px-2">|</span>
              </span>
              <span className="h-[60px]">
                Credit Card T&Cs<span className="px-2">|</span>
              </span>
              <span className="h-[60px]">
                Uni T&Cs
                <span className="px-2">|</span>
              </span>
              <span className="h-[60px]">Lending Partner TnCs</span>
            </div>
          </div>
        </footer>
      </section>
      {!isFirstPageVisible && <StickyContact />}
    </>
  );
};

export default Footer;
