import React from "react";

function Card({title, text, images, coinType, chance}) {
    // add function for either adding to cart or just staright buying
  return (
    <>
      <div className="w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-2xl h-[32rem] sm:h-[36rem] p-2 m-auto bg-white/20 text-white shadow-md rounded-md overflow-hidden flex flex-col justify-between my-4">
        <img src={images} showHover={false} />
        <div className="p-4 flex flex-col flex-1">
          <h5 className="text-lg font-semibold mb-2">{title}</h5>
          <p className="p-3">{text}</p>
          <div className="flex justify-center flex-wrap">
            <p className="p-3 flex items-center">
              {/* maybe use FontAwsome */}
              {coinType}
            </p>
            <p className="p-3 flex items-center">
              {/* maybe use FontAwsome */}
              {chance}
            </p>
          </div>
        </div>
        <button
        //   onClick={() => payment(100000)}
          className="inline-block px-4 py-2 bg-amber-600 text-white rounded hover:bg-amber-700 hover:cursor-pointer transition delay-75 duration-200 ease-in-out mt-2"
        >
          {linkText}
        </button>
      </div>
    </>
  );
}

export default Card;
