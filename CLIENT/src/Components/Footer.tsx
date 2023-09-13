import Logo from "../../logo/logo-no-background.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const backgroundImageUrl =
    "https://images.unsplash.com/photo-1615992174118-9b8e9be025e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80";

  return (
    <div>
      <div
        className="flex items-end w-full  "
        style={{
          backgroundColor: "black",
          backgroundImage: `url('${backgroundImageUrl}')`,
          backgroundSize: "cover",
          backgroundPosition: "bottom",
          width: "100%",
        }}
      >
        <footer className="w-full text-gray-700 body-font bg-black slg:bg-transparent p-0 slg:p-5">
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
                  <a className="tewhite text-white cursor-pointer ">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
                    </svg>
                  </a>
                  <a className="ml-3 text-white cursor-pointer ">
                    <svg
                      fill="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-3 text-white cursor-pointer">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <rect width={20} height={20} x={2} y={2} rx={5} ry={5} />
                      <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01" />
                    </svg>
                  </a>
                  <a className="ml-3 text-white cursor-pointer ">
                    <svg
                      fill="currentColor"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={0}
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="none"
                        d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                      ></path>
                      <circle cx={4} cy={4} r={2} stroke="none" />
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
                    <Link to="/Pool" className="text-white cursor-pointer">Pools</Link>
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
            <p className="text-sm text-transparent bg-clip-text bg-gradient-to-r from-orange-200 to-orange-400 capitalize xl:text-center">
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
