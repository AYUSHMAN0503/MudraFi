import Logo from "../../logo/logo-no-background.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

 

  return (
    <div>
      <div
        className="flex items-end w-full  "
        style={{
         backgroundSize: "cover",
          backgroundPosition: "bottom",
          width: "100%",
        }}
      >
        <footer className="w-full text-gray-700 body-font  p-0 slg:p-5 lg:p-5">
          <div className="container flex flex-col flex-wrap px-5 pt-20 pb-12 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap">
            <div className="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
              <a className="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                <Link to="/">
                  {" "}
                  <img src={Logo} alt="" width={200} onClick={scrollToTop} />
                </Link>
              </a>
              <p className="mt-2 text-sm text-white">
                Your Asset Management Dex.
              </p>
              <div className="mt-4">
                <span className="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start">
                  <a className="text-white cursor-pointer" href="https://youtube.com/">
                  <svg style={{color: 'red'}} xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-youtube w-7 h-7" viewBox="0 0 16 16"> <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" fill="red"></path> </svg>
                  </a>
                  
                  <a className="ml-3 text-white cursor-pointer" href="https://github.com/">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-6 h-6" viewBox="0 0 64 64">
                      <path d="M32 0a32.021 32.021 0 0 0-10.1 62.4c1.6.3 2.2-.7 2.2-1.5v-6c-8.9 1.9-10.8-3.8-10.8-3.8-1.5-3.7-3.6-4.7-3.6-4.7-2.9-2 .2-1.9.2-1.9 3.2.2 4.9 3.3 4.9 3.3 2.9 4.9 7.5 3.5 9.3 2.7a6.93 6.93 0 0 1 2-4.3c-7.1-.8-14.6-3.6-14.6-15.8a12.27 12.27 0 0 1 3.3-8.6 11.965 11.965 0 0 1 .3-8.5s2.7-.9 8.8 3.3a30.873 30.873 0 0 1 8-1.1 30.292 30.292 0 0 1 8 1.1c6.1-4.1 8.8-3.3 8.8-3.3a11.965 11.965 0 0 1 .3 8.5 12.1 12.1 0 0 1 3.3 8.6c0 12.3-7.5 15-14.6 15.8a7.746 7.746 0 0 1 2.2 5.9v8.8c0 .9.6 1.8 2.2 1.5A32.021 32.021 0 0 0 32 0z"></path>
                    </svg>
                  </a>
                </span>
              </div>

            </div>
            <div className="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left justify-end text-lg">
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <Link 
                      to="/SwapInterface"
                      className="text-white cursor-pointer"
                      onClick={scrollToTop}
                      >
                        Swap
                      </Link>
                  </li>
                  <li className="mt-3">
                    <a className="text-white cursor-pointer">Tokens</a>
                  </li>
                  <li className="mt-3">
                    <Link to="/Pool" className="text-white cursor-pointer"onClick={scrollToTop}>Pools</Link>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <a className="text-white cursor-pointer">AI Analytics </a>
                  </li>
                  <li className="mt-3">
                    <Link 
                      to="/AboutUs"
                      className="text-white cursor-pointer"
                      onClick={scrollToTop}
                      >
                        About us
                    </Link>
                  </li>
                </nav>
              </div>
              <div className="w-full px-4 lg:w-1/4 md:w-1/2">
                <nav className="mb-10 list-none">
                  <li className="mt-3">
                    <Link
                      to="/privacypolicy"
                      className="text-white cursor-pointer"
                      onClick={scrollToTop}
                    >
                      Privacy Policy
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link
                      to="/termsofservice"
                      className="text-white cursor-pointer"
                      onClick={scrollToTop}
                    >
                      Terms of Service
                    </Link>
                  </li>
                  <li className="mt-3">
                    <Link
                      to="/ReviewPage" 
                      className="text-white cursor-pointer"
                      onClick={scrollToTop}
                      >
                        Review
                    </Link>
                  </li>
                </nav>
              </div>
            </div>
          </div>
          <hr />
          <div className="container px-5 py-4 mx-auto">
            <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r bg-text xl:text-center">
              © 2023 MudraFi. All rights reserved | Created by WEB3 SAILORS for
              HackaTRON.
            </p>
            <p className="text-sm text-white mt-3">
              IMPORTANT DISCLAIMER: All content provided herein our website,
              hyperlinked sites, associated applications, forums, blogs,
              convivial media accounts and other platforms (“Site”) is for your
              general information only, procured from third party sources. We
              make no warranties of any kind in cognation to our content,
              including but not inhibited to precision and updatedness. No part
              of the content that we provide constitutes financial exhortation,
              licit exhortation or any other form of exhortation denoted for
              your concrete reliance for any purport. Any utilization or
              reliance on our content is solely at your own risk and discretion.
              You should conduct your own research, review, analyse and verify
              our content afore relying on them. Trading is a highly precarious
              activity that can lead to major losses, please consequently
              consult your financial advisor afore making any decision. No
              content on our Site is designated to be a solicitation or offer.
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Footer;

{
  /*IMPORTANT DISCLAIMER: All content provided herein our website, hyperlinked sites, associated applications, forums, blogs, convivial media accounts and other platforms (“Site”) is for your general information only, procured from third party sources. We make no warranties of any kind in cognation to our content, including but not inhibited to precision and updatedness. No part of the content that we provide constitutes financial exhortation, licit exhortation or any other form of exhortation denoted for your concrete reliance for any purport. Any utilization or reliance on our content is solely at your own risk and discretion. You should conduct your own research, review, analyse and verify our content afore relying on them. Trading is a highly precarious activity that can lead to major losses, please consequently consult your financial advisor afore making any decision. No content on our Site is designated to be a solicitation or offer. */
}
