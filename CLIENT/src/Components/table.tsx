import React from 'react';

import {
  MagnifyingGlassIcon,
  ChevronUpDownIcon,
} from "@heroicons/react/24/outline";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Input,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Tabs,
  TabsHeader,
  Tab,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";
import { Link } from 'react-router-dom';

const TABLE_HEAD = ["Token name", "Price", "Change", "TVL", "Volume"];
 
const TABLE_ROWS = [
  {
    img: "https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png",
    tokenName: "ETH",
    Price: "$1500",
    Change: "-4.25%",
    TVL: "23/04/18",
    Volume: "$400.5M",
    change: false
  },
  {
    img: "https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png",
    tokenName: "ETH",
    Price: "$1500",
    Change: "-4.25%",
    TVL: "23/04/18",
    Volume: "$400.5M",
    change: false
  },
  {
    img: "https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png",
    tokenName: "ETH",
    Price: "$1500",
    Change: "-4.25%",
    TVL: "23/04/18",
    Volume: "$400.5M",
    change: false
  },
  {
    img: "https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png",
    tokenName: "ETH",
    Price: "$1500",
    Change: "-4.25%",
    TVL: "23/04/18",
    Volume: "$400.5M",
    change: false
  },

  {
    img: "https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png",
    tokenName: "ETH",
    Price: "$1500",
    Change: "-4.25%",
    TVL: "23/04/18",
    Volume: "$400.5M",
    change: false
  },
  {
    img: "https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png",
    tokenName: "ETH",
    Price: "$1500",
    Change: "-4.25%",
    TVL: "23/04/18",
    Volume: "$400.5M",
    change: false
  },
  {
    img: "https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png",
    tokenName: "ETH",
    Price: "$1500",
    Change: "-4.25%",
    TVL: "23/04/18",
    Volume: "$400.5M",
    change: false
  },

  {
    img: "https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png",
    tokenName: "ETH",
    Price: "$1500",
    Change: "-4.25%",
    TVL: "23/04/18",
    Volume: "$400.5M",
    change: false
  },

  {
    img: "https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png",
    tokenName: "ETH",
    Price: "$1500",
    Change: "-4.25%",
    TVL: "23/04/18",
    Volume: "$400.5M",
    change: false
  },
  {
    img: "https://seeklogo.com/images/E/ethereum-logo-EC6CDBA45B-seeklogo.com.png",
    tokenName: "ETH",
    Price: "$1500",
    Change: "-4.25%",
    TVL: "23/04/18",
    Volume: "$400.5M",
    change: false
  },
];

function Table() {
  return (
    <Card className="h-full w-full">
      <CardBody className="overflow-scroll px-0 py-0 rounded-lg">
        <table className="w-full min-w-max table-auto text-left bg-[#2d3436] bg-gradient-to-tl from-[#2d3436] from-0% to-[#000000] to-74%">
          <thead>
            <tr>
              {TABLE_HEAD.map((head, index) => (
                <th
                  key={head}
                  className="cursor-pointer bg-black p-4 transition-colors"
                >
                  <Typography
                    variant="small"
                    className="flex items-center text-gray-300 hover:text-gray-600 justify-between gap-2 font-normal leading-none opacity-70"
                  >
                    {head}{" "}
                    {index !== TABLE_HEAD.length - 1 && (
                      <ChevronUpDownIcon strokeWidth={2} className="h-4 w-4" />
                    )}
                  </Typography>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {TABLE_ROWS.map(
              ({ img,tokenName,Price,Change,TVL,Volume, change}, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "p-4"
                  : "p-4 border-white-50";

                return (
                  <tr key={tokenName} className='hover:bg-gray-900 cursor-pointer'>
                    <td className={classes}>
                      <div className="flex items-center gap-3">
                        <Avatar src={img} alt={tokenName} size="sm" />
                        <div className="flex flex-col">
                          <Typography
                            variant="small"
                            color="white"
                            className="font-normal"
                          >
                            {tokenName}
                          </Typography>
                        </div>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="flex flex-col">
                        <Typography
                          variant="small"
                          color="white"
                          className="font-normal"
                        >
                          {Price}
                        </Typography>
                      </div>
                    </td>
                    <td className={classes}>
                      <div className="w-max">
                        <Chip
                          variant="gradient"
                          size="sm"
                          value={Change}
                          color={change ? "green" : "red"}
                        />
                      </div>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal"
                      >
                        {TVL}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="white"
                        className="font-normal"
                      >
                        {Volume}
                      </Typography>
                    </td>
                  </tr>
                );
              }
            )}
          </tbody>
        </table>
      </CardBody>
    </Card>
  );
}

export default Table;