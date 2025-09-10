import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faCopy, faPhone } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center gap-4 py-4 bg-gray-400">
        <h1 className="text-3xl font-bold hover:text-emerald-600 transition-colors duration-300 transform hover:scale-110 transform-gpu ">Gerador de senhas</h1>
        <ul className="flex flex-wrap items-center justify-center gap-2 text-sm font-medium ">

          <li className="hover:text-emerald-600">
            <a href="#"> <FontAwesomeIcon icon={faHouse} className="w-4 h-4 text-2xl" /></a>
          </li>

          <li className="hover:text-emerald-600">
            <a href="#"><FontAwesomeIcon icon={faCopy} className="w-4 h-4 text-2xl" /></a>
          </li>

          <li className="hover:text-emerald-600">
            <a href="#">
              <FontAwesomeIcon icon={faPhone}  className="w-4  h-4 text-2xl"  />
            </a>
          </li>

        </ul>

      </div>
    </>
  );
};

export default Header;
