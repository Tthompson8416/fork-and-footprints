import React from "react";

import belgiumFlag from "../assets/flags/belgium.svg";
import belizeFlag from "../assets/flags/belize.svg";
import canadaFlag from "../assets/flags/canada.svg";
import croatiaFlag from "../assets/flags/croatia.svg";
import franceFlag from "../assets/flags/france.svg";
import germanyFlag from "../assets/flags/germany.svg";
import italyFlag from "../assets/flags/italy.svg";
import mexicoFlag from "../assets/flags/mexico.svg";
import netherlandsFlag from "../assets/flags/netherlands.svg";
import portugalFlag from "../assets/flags/portugal.svg";
import spainFlag from "../assets/flags/spain.svg";

const Divider = ({ country }) => {
  let imageSrc;

  switch (country.name.toLowerCase()) {
    case "belgium":
      imageSrc = belgiumFlag;
      break;
    case "belize":
      imageSrc = belizeFlag;
      break;
    case "canada":
      imageSrc = canadaFlag;
      break;
    case "croatia":
      imageSrc = croatiaFlag;
      break;
    case "france":
      imageSrc = franceFlag;
      break;
    case "germany":
      imageSrc = germanyFlag;
      break;
    case "italy":
      imageSrc = italyFlag;
      break;
    case "mexico":
      imageSrc = mexicoFlag;
      break;
    case "netherlands":
      imageSrc = netherlandsFlag;
      break;
    case "portugal":
      imageSrc = portugalFlag;
      break;
    case "spain":
      imageSrc = spainFlag;
      break;

    default:
      imageSrc = null;
  }

  return (
    <div className="bg-blue-500 text-white py-4 flex items-center justify-center space-x-12">
      {imageSrc && (
        <img src={imageSrc} alt={country.name} className="w-24 h-16 sm:w-36 sm:h-24" />
      )}
      <span className="text-4xl font-semibold">{country.name}</span>
    </div>
  );
};

export default Divider;
