import React from "react";

function Cases() {
  return (
    <>
      <div className="grid grid-cols-1 p-6 bg-gray-900 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer case-card"
          onclick="openModal('modal1')"
          id="el-5p1ov2tt"
        >
          <img
            src="https://images.unsplash.com/photo-1617507171089-6cb9aa5add36?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8bmVvbiUyMGdhbWluZyUyMHNldHVwfGVufDF8MHx8fDE3NTc3MTM1MzV8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
            alt="Black laptop computer on table"
            className="w-full h-48 object-cover active-edit-image"
            id="el-llmwcbqo"
          />
          <div className="p-6" id="el-j5ywsjxb">
            <h3 className="text-xl font-bold text-white mb-2" id="el-z01gmamw">
              Elite Gaming Case
            </h3>
            <p className="text-gray-400 mb-4" id="el-dtzjxqwh">
              Contains 0.05-0.5 BTC rewards
            </p>
            <div className="flex justify-between items-center" id="el-vkw7iylo">
              <span className="text-2xl font-bold text-purple-400" id="el-fbnjcr0h">
                $99
              </span>
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                id="el-n82p5a6i"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div
          className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer case-card"
          onclick="openModal('modal2')"
          id="el-xbv53su7"
        >
          <img
            src="https://images.unsplash.com/photo-1708032565079-f43e698f4db9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8bmVvbiUyMGdhbWluZyUyMHNldHVwfGVufDF8MHx8fDE3NTc3MTM1MzV8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
            alt="A desk topped with three computer monitors and a keyboard"
            className="w-full h-48 object-cover"
            id="el-p8fovs6j"
          />
          <div className="p-6" id="el-8i464up6">
            <h3 className="text-xl font-bold text-white mb-2" id="el-zfl290d2">
              Pro Setup Case
            </h3>
            <p className="text-gray-400 mb-4" id="el-ufpk1zlt">
              Contains 0.1-1 BTC rewards
            </p>
            <div className="flex justify-between items-center" id="el-wqpdaz8u">
              <span className="text-2xl font-bold text-purple-400" id="el-dfr4sx7v">
                $199
              </span>
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                id="el-v9edid9k"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>

        <div
          className="bg-gray-800 rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 cursor-pointer case-card"
          onclick="openModal('modal3')"
          id="el-fuezdra7"
        >
          <img
            src="https://images.unsplash.com/photo-1679766900523-d8e1a1393d1f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8bmVvbiUyMGdhbWluZyUyMHNldHVwfGVufDF8MHx8fDE3NTc3MTM1MzV8MA&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
            alt="Simple gaming room decoration"
            className="w-full h-48 object-cover"
            id="el-glodm02n"
          />
          <div className="p-6" id="el-grfncgui">
            <h3 className="text-xl font-bold text-white mb-2" id="el-3xbosrvc">
              Legendary Case
            </h3>
            <p className="text-gray-400 mb-4" id="el-bf2xjcym">
              Contains 0.5-5 BTC rewards
            </p>
            <div className="flex justify-between items-center" id="el-zj18qrs7">
              <span className="text-2xl font-bold text-purple-400" id="el-7z2qjkmy">
                $499
              </span>
              <button
                className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                id="el-rzfw0afj"
              >
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cases;
