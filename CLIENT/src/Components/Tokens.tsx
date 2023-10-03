import React from 'react';
import Dropdown from './dropdown';
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";

import { Input } from "@material-tailwind/react";

import Table from './table';

interface tokens {
  label: string;
  icon: any;
}

interface timeFrames {
  label: string;
  icon?: any;
}

function Tokens() {
const tokens: tokens[] = [
  {
    label: "Lorem",
    icon: UserCircleIcon,
  },
  {
    label: "Lorem",
    icon: Cog6ToothIcon,
  },
  {
    label: "Lorem",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Lorem",
    icon: LifebuoyIcon,
  },
]

const timeFrames: timeFrames[] = [
  {
    label: "1H",
    icon: UserCircleIcon,
  },
  {
    label: "1D",
    icon: Cog6ToothIcon,
  },
  {
    label: "1W",
    icon: InboxArrowDownIcon,
  },
  {
    label: "Lorem",
    icon: LifebuoyIcon,
  },
]
  return (
    <div className="flex items-center justify-center pt-10">
      <div className="flex flex-col gap-2 p-6 font-mono w-5/6 sm:w-3/4">
        {/* heading */}
        <div className="w-full pb-2">
          <h1 className="text-white text-3xl font-medium">
            Top Tokens on MudraFi
          </h1>
        </div>
        {/* options */}
        <div className="w-full flex flex-row flex-wrap gap-2 py-4">
          
        </div>
        {/* Main Tokens Table */}
        <Table />
      </div>
    </div>
  );
}

export default Tokens