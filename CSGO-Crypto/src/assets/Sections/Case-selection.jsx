import React from "react";

function Caseselection() {
  return (
    <>
    <section>
        <div class="max-w-7xl py-15 bg-gray-900 mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-4xl font-bold text-center text-white mb-12">
          Available Cases
        </h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-gray-900 rounded-lg p-6 hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1640695186958-470133dee50f?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8MXx8Y3J5cHRvJTIwdHJhZGluZyUyMGRlc2t8ZW58MXwwfHx8MTc1NzcxMzcwMHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
              alt="Elite Case"
              class="w-full h-32 object-cover rounded mb-4 active-edit-image"
            />
            <h3 class="text-white font-bold mb-2">Elite Case</h3>
            <p class="text-purple-400 mb-4">0.05 BTC</p>
            <button class="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition-colors">
              Open Case
            </button>
          </div>
          <div class="bg-gray-900 rounded-lg p-6 hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1653289755850-fcdfb903d691?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8Mnx8Y3J5cHRvJTIwdHJhZGluZyUyMGRlc2t8ZW58MXwwfHx8MTc1NzcxMzcwMHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
              alt="Pro Case"
              class="w-full h-32 object-cover rounded mb-4"
            />
            <h3 class="text-white font-bold mb-2">Pro Case</h3>
            <p class="text-purple-400 mb-4">0.1 BTC</p>
            <button class="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition-colors">
              Open Case
            </button>
          </div>
          <div class="bg-gray-900 rounded-lg p-6 hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1625120896767-f35ea79b0ec6?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8M3x8Y3J5cHRvJTIwdHJhZGluZyUyMGRlc2t8ZW58MXwwfHx8MTc1NzcxMzcwMHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
              alt="Legendary Case"
              class="w-full h-32 object-cover rounded mb-4"
            />
            <h3 class="text-white font-bold mb-2">Legendary Case</h3>
            <p class="text-purple-400 mb-4">0.5 BTC</p>
            <button class="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition-colors">
              Open Case
            </button>
          </div>
          <div class="bg-gray-900 rounded-lg p-6 hover:scale-105 transition-all duration-300 cursor-pointer">
            <img
              src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w2MzQ2fDB8MXxzZWFyY2h8NHx8Y3J5cHRvJTIwdHJhZGluZyUyMGRlc2t8ZW58MXwwfHx8MTc1NzcxMzcwMHww&amp;ixlib=rb-4.1.0&amp;q=80&amp;w=1080"
              alt="Ultimate Case"
              class="w-full h-32 object-cover rounded mb-4"
            />
            <h3 class="text-white font-bold mb-2">Ultimate Case</h3>
            <p class="text-purple-400 mb-4">1.0 BTC</p>
            <button class="w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded transition-colors">
              Open Case
            </button>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Caseselection;
