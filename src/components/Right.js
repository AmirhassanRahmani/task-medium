import React, { useEffect, useState } from "react";
import listLeaves from "../utils/listLeaves";
import listIcons from "../utils/listIcons";
import Slider from "./Slider";
import circle from "../images/image 4.jpg";
import MenuIcon from "@mui/icons-material/Menu";

function Right() {
  const [id, setId] = useState(circle);
  const [side, setSide] = useState(false);

  const handleShow = () => {
    setSide(!side);
  };

  return (
    <div className="flex gap-8 max-[1024px]:justify-center relative">
      <div className="menu hidden max-[1024px]:block max-[1024px]:absolute max-[1024px]:right-0 max-[1024px]:z-20" onClick={handleShow}>
        <MenuIcon className="bg-red-500 text-white animate-pulse"/>
      </div>
      <div
        className={`flex flex-col h-[528px] items-start justify-between max-[1024px]:justify-start max-[1024px]:fixed max-[1024px]:top-0 max-[1024px]:right-[-100%] ${
          side ? "max-[1024px]:right-[0%]" : ""
        } transition-all duration-500 ease-in-out`}
      >
        <div className="leavesContainer ">
          {listLeaves.map((item, index) => (
            <div
              className="leaf w-[56px] h-[56px] rounded-[8px] bg-[#ACC294] my-2"
              key={index}
            >
              <img
                src={item}
                alt={index}
                className="w-full h-full object-fill"
              />
            </div>
          ))}
        </div>
        <div className="iconsContainer">
          {listIcons.map((item, index) => (
            <div className="icon w-[56px] h-[56px] my-2" key={index}>
              <img
                src={item}
                alt={index}
                className="w-full h-full object-fill"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="grid place-items-center max-[1024px]:gap-8 max-[1024px]:mb-8">
        <div className=" w-[378.893px] h-[339.731px]">
          <img src={id} alt="vector" className="w-full h-full object-fill" />
        </div>
        <Slider id={id} setId={setId} />
      </div>
    </div>
  );
}

export default Right;
