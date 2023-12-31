import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";

interface TeamMember {
  id: number;
  name: string;
  role: string;
  photo: string;
  instagram: string;
  twitter: string;
  github: string;
  bio: string;
}

const Swap: React.FC<TeamMember> = ({
  name,
  role,
  photo,
  instagram,
  twitter,
  github,
  bio,
}) => {
  const [expanded, setExpanded] = useState(false);

  const handleCardClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`${
        expanded ? "w-full " : "w-full "
      } p-2 cursor-pointer transition-transform transform hover:scale-105`}
      onClick={handleCardClick}
    >
      <div className="bg-white shadow-lg rounded-lg p-6 h-full">
        <div className="flex justify-center">
          <img
            src={photo}
            alt={name}
            className="h-40 w-40 mx-auto rounded-full"
          />
        </div>
        <div className="text-center mt-4">
          <h2 className="text-xl text-gray-900 font-semibold">{name}</h2>
          <p className="text-green-600 text-base">{role}</p>
        </div>
        {!expanded && (
          <div className="mt-4 text-center">
            <a href={instagram} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-gray-600 hover:text-green-500 mr-2"
              />
            </a>
            <a href={twitter} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-gray-600 hover:text-green-500 mr-2"
              />
            </a>
            <a href={github} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon
                icon={faGithub}
                className="text-gray-600 hover:text-green-500"
              />
            </a>
          </div>
        )}
        {expanded && (
          <div className="mt-4 text-center">
            <p className="text-gray-700">{bio}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Swap;
