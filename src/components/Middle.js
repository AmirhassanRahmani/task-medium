import React, { useState } from "react";
import listOfStars from "../utils/listOfStars";
import listHoney from "../utils/listHoney";
import listOfBtns from "../utils/listOfBtns";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import listProduct from "../utils/listProduct";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Middle() {
  let [count, setCount] = useState(1);
  let [price, setPrice] = useState(460000);
  const [id, setId] = useState(null);
  const [active, setActive] = useState(false);
  const [activeMin, setActiveMin] = useState(false);
  const [percent, setPercent] = useState(20);

  const handleIncr = () => {
    if (count >= 10) {
      return setCount(1);
    }
    setCount((count += 1));
    setActiveMin(false);
    setActive(true);
  };

  const handleDecr = () => {
    if (count <= 1) {
      return setCount(1);
    }
    setCount((count -= 1));
    setActive(false);
    setActiveMin(true);
  };

  const handleColor = (index) => {
    if (id === index) {
      return setId(null);
    }
    setId(index);
    setPercent((index + 1) * 20);
  };

  const notify = () => toast("با موفقیت به سبد خرید اضافه شد");
  return (
    // <div className="flex flex-col justify-between">
    <div className="w-[686px]  flex flex-col justify-between max-[1024px]:w-full">
      <h1 className="text-[24px] font-bold leading-4 max-[600px]:text-[16px] max-[600px]:text-center">
        عنوان محصول عنوان محصول عنوان محصول{" "}
      </h1>
      <div className="starsContainer flex items-center justify-between my-5">
        <div className="right flex items-center gap-2 mt-[2rem]">
          {listOfStars.map((star, index) => (
            <span key={index}>
              {index === 4 ? (
                <img src={star} alt="4" className="grayscale w-4 h-4" />
              ) : (
                <img src={star} alt="sth" className="w-4 h-4" />
              )}
            </span>
          ))}
        </div>
        <div className="left flex items-center gap-1">
          <p className="w-4 h-4 rounded-[6px] border-solid border-2 border-orange-400 flex items-center justify-center p-2 text-orange-500">
            !
          </p>
          <p className="text-[16px] text-[#DD794F]">کالای غیراصل</p>
        </div>
      </div>
      <div className="info my-5 text-[#6B6B6B] max-[600px]:text-center max-[600px]:text-justify">
        <p>
          توضیح کوتاه مربوط به محصول توضیح کوتاه مربوط به محصول توضیح کوتاه
          مربوط به محصول توضیح کوتاه مربوط به محصول توضیح کوتاه مربوط به محصول
          توضیح کوتاه مربوط به محصول توضیح کوتاه مربوط به محصول توضیح کوتاه
          مربوط به محصول
        </p>
      </div>

      <div className="honey my-10">
        {listHoney.map((item, index) => (
          <div key={index} className="flex items-center gap-2">
            <p className="text-[16px]">{item.title}</p>
            <p className="text-[#6B6B6B] text-[16px]">{item.info}</p>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between h-[156px] max-[617px]:flex-col max-[617px]:w-full max-[617px]:mb-[3rem]">
        <div className="top flex flex-col justify-between h-full max-[617px]:w-full ">
          <div className="btnsContainer flex items-center justify-between max-[617px]:mb-[2rem]">
            {listOfBtns.map((item, index) => (
              <div
                key={index}
                className={`border-[#C4C6C2] border-2 border-solid rounded-[4px] w-[72px] h-[32px] flex items-center justify-center pt-[8px] px-[16px] pb-[10px] text-[11px]  ${
                  index === id ? "bg-[#849D6A]" : "bg-white"
                } ${
                  id === index ? "text-white" : "text-[#C4C6C2]"
                } cursor-pointer`}
                onClick={() => handleColor(index)}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="selectNumber flex items-center justify-between border-solid border-2 border-[#C4C6C2] px-[16px] py-[10px] w-[232px] h-[58px] rounded-[4px] max-[617px]:w-full max-[617px]:mb-[3rem]">
            <span
              className={`p-[8px] rounded-[6px] text-white cursor-pointer ${
                active ? "bg-[#6B6B6B]" : "bg-[#C4C6C2]"
              }`}
              onClick={handleIncr}
            >
              +
            </span>
            <span>{count}</span>
            <span
              className={`p-[8px] rounded-[6px] text-white cursor-pointer ${
                activeMin ? "bg-[#6B6B6B]" : "bg-[#C4C6C2]"
              }`}
              onClick={handleDecr}
            >
              -
            </span>
          </div>
        </div>

        <div className="bottom flex flex-col justify-between h-full max-[617px]:w-full max-[617px]:block">
          <div className="pricesContainer text-left max-[617px]:text-center">
            <div>
              <span className="bg-[#ACC294] text-white rounded-[4px] px-[8px] py-[6px] mx-2">
                {percent}%
              </span>
              <span className="text-[#C4C6C2]">{price * count}</span>
            </div>
            <div className="mt-4">
              <span className="text-[26px] text-[#86BC42] mx-2 ]">
                {price * count}
              </span>
              <small className="text-[#86BC42]">تومان</small>
            </div>
          </div>

          <ToastContainer />

          <div
            className="shop bg-[#86BC42] flex items-center justify-center gap-2 py-[20px] px-[40px] w-[16rem] rounded-[4px] cursor-pointer max-[617px]:mx-auto"
            onClick={notify}
          >
            <span>
              <ShoppingCartOutlinedIcon className="text-white" />
            </span>
            <span className="text-white">افزودن به سبد خرید</span>
          </div>
        </div>
      </div>

      <div className="productsContainer mt-10 max-[617px]:w-full max-[617px]:mt-[8rem]">
        {listProduct.map((item, index) => (
          <div key={index} className="flex items-center gap-2 mt-4">
            <span>{item.title}</span>
            {index !== 2 && index !== 1 ? <span>{item.info}</span> : null}

            {index === 1 ? (
              <span className="border-dotted border-gray-600 border-b-2 text-[#86BC42]">
                {item.info}
              </span>
            ) : null}

            {index === 2 ? (
              <span className=" flex gap-3">
                <span className="border-dotted border-gray-600 border-b-2 text-[#878787]">
                  {item.info}
                </span>
                <span className="border-dotted border-gray-600 border-b-2 text-[#878787]">
                  {item.info}
                </span>
              </span>
            ) : null}

            {item.icon && <span className="text-[#86BC42]">{item.icon}</span>}
            {item.urls && (
              <span className="flex items-center gap-[24px]">
                {item.urls.map((cell, index) => (
                  <span>
                    <img src={cell} alt="" />
                  </span>
                ))}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Middle;
