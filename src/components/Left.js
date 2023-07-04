import React, { useState } from "react";
import listLeft from "../utils/listLeft.js";
import pic from "../images/image 68.png";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

function Left() {
  const [slide, setSlide] = useState(false);

  const handleShow = () => {
    setSlide(!slide);
  };

  return (
    <div>
      <div
        className={`flex flex-col bg-white max-[1200px]:fixed max-[1200px]:top-0 max-[1200px]:left-[-100%] ${
          slide
            ? "max-[1200px]:left-[0%]"
            : "max-[1200px]:left-[-100%] z-[1000]"
        } max-[1024px]:relative max-[1024px]:left-[0] transition-all duration-500 ease-in-out`}
      >
        <div className="topContainer">
          {listLeft.map((item, index) => (
            <div className="flex items-center justify-between border-solid border-2 border-[#E7EBE3] py-[24px] px-[32px] my-7 w-[20rem] max-[1024px]:w-full max-[1024px]:justify-start max-[1024px]:gap-[1rem]">
              <div className="right">
                <img src={item.url} alt="" />
              </div>
              <div className="left">
                <div className="text-[16px] text-[#383838] font-normal">
                  {item.title}
                </div>
                {index === 3 ? (
                  <div className="text-[14px] text-[#6B6B6B] font-normal  border-dotted border-b-2 border-[#849D6A]">
                    <span className="text-[#849D6A]">{item.subTitle}</span>
                    {item.icon && (
                      <span className="text-[#849D6A]">{item.icon}</span>
                    )}
                  </div>
                ) : (
                  <div className="text-[14px] text-[#6B6B6B] font-normal">
                    <span>{item.subTitle}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="bottomContainer relative w-[20rem] max-[1024px]:w-full">
          <img src={pic} alt="12" className="absolute top-0 right-0 w-full " />

          <div className="absolute w-[8rem] flex flex-col flex-wrap top-[1rem] right-[10rem] max-[1024px]:relative max-[1024px]:block max-[1024px]:w-full max-[1024px]:right-0 max-[1024px]:text-center max-[1024px]:mt-[3rem]">
            <div className="uppercase font-bold text-[12px]">Tasty Healthy</div>
            <div className="uppercase font-semibold text-[22px]">
              Fresh Vegetables
            </div>
          </div>

          <div className="uppercase font-bold border-solid border-[#41544A] border-l-2 text-[14px] absolute top-[4.4rem] right-[0.5rem] pl-2 max-[1024px]:relative max-[1024px]:block max-[1024px]:border-none max-[1024px]:text-center max-[600px]:top-3">
            SHOP NOW
          </div>
        </div>
      </div>

      <div
        className="hidden max-[1200px]:block fixed top-[20%] left-0 max-[1024px]:hidden"
        onClick={handleShow}
      >
        <DoubleArrowIcon className="text-white bg-red-500 !text-[2rem] rounded-full animate-bounce" />
      </div>
    </div>
  );
}

export default Left;
