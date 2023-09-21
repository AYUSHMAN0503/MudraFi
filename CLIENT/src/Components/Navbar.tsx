import React from "react";

import {
  Navbar,
  MobileNav,
  Typography,
  IconButton,
  Button,
  Input,
} from "@material-tailwind/react";
import Logo from "../../logo/logo-no-background.png";
import { Link } from "react-router-dom";
export function NavbarDefault() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList1 = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-12">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link
          to="/SwapInterface"
          className="flex items-center text-xl text-white"
        >
          Swap
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-xl text-white">
          Tokens
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/Pool" className="flex items-center text-xl text-white">
          Pools
        </Link>
      </Typography>
    </ul>
  );
      const navList2 = (
        <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
          <div className="relative flex w-full gap-2 md:w-max text-white">
            <Input
             
              type="search"
              label="Type here..."
              className="pr-20"
              containerProps={{
                className: "min-w-[288px]",
              
              }}
            />
            <Button
              size="sm"
              color="blue"
              className="!absolute right-1 top-1 rounded bg-button "
            >
              Search
            </Button>
          </div>
          <Typography
            as="li"
            variant="small"
            color="blue-gray"
            className="p-1 font-normal"
          >
            <a href="/AiDashboard" className="flex items-center text-xl text-white">
              AI Analytics
            </a>
          </Typography>
          <Button className="bg-button h-12 rounded-lg  font-normal text-sm">Connect</Button>
        </ul>
      );
 
  return (
    <Navbar className="max-w-full bg-black/30 backdrop-blur-md  text-white/90 fixed rounded-2xl mt-1.5 py-2 px-6 lg:px-20 lg:py-4 z-10 border-none">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="hidden lg:block">{navList1}</div>
        <Link to="/">
          <img src={Logo} alt="" width={200} />
        </Link>
        <div className="hidden lg:block">{navList2}</div>

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="White"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="White"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <MobileNav open={openNav}>
        <div className="container mx-auto">
          {navList1}
          {navList2}
        </div>
      </MobileNav>
    </Navbar>
  );
}
