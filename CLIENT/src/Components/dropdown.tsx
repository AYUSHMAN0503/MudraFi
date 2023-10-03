import {
  
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  
} from "@material-tailwind/react";

import {
  
  ChevronDownIcon,
  
} from "@heroicons/react/24/outline";
import React from 'react'

interface propsType {
    menuItems:
        {
            label: string;
            icon?: any;
        }[];
    title: string;
}

function Dropdown({ menuItems, title }: propsType) {
    
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
 
  const closeMenu = () => setIsMenuOpen(false);
  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="filled"
          color="gray"
          className="flex items-center gap-3 rounded-lg py-2 px-4"
        >
          <p className="text-md text-white">
            {title} 
          </p>
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {menuItems.map(({ label, icon },) => {
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className={`flex items-center gap-2 rounded`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={"inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  )
}

export default Dropdown;