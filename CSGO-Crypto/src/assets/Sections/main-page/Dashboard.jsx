import React from "react";

function Dashboard() {
  return (
    <>
      <section id="dashboard" class="py-15 bg-gray-900">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 class="text-4xl font-bold text-center text-white mb-12">Your Dashboard</h2>
            
            <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div class="bg-gray-900 rounded-lg p-6">
                    <h3 class="text-2xl font-bold mb-4 text-purple-400">Wallet Balance</h3>
                    <p class="text-3xl font-bold text-white">0.00000000 BTC</p>
                    <p class="text-gray-400">≈ $0.00 USD</p>
                    <button class="mt-4 w-full bg-purple-600 hover:bg-purple-700 text-white py-2 rounded-lg transition-colors">
                        Withdraw
                    </button>
                </div>
                
                <div class="bg-gray-900 rounded-lg p-6">
                    <h3 class="text-2xl font-bold mb-4 text-purple-400">Recent Wins</h3>
                    <div class="space-y-2">
                        <div class="flex justify-between text-sm">
                            <span class="text-gray-400">Elite Case</span>
                            <span class="text-green-400">+0.15 BTC</span>
                        </div>
                        <div class="flex justify-between text-sm">
                            <span class="text-gray-400">Pro Case</span>
                            <span class="text-green-400">+0.25 BTC</span>
                        </div>
                    </div>
                </div>
                
                <div class="bg-gray-900 rounded-lg p-6">
                    <h3 class="text-2xl font-bold mb-4 text-purple-400">Inventory</h3>
                    <p class="text-gray-400">3 Cases Available</p>
                    <button class="mt-4 w-full bg-gray-700 hover:bg-gray-600 text-white py-2 rounded-lg transition-colors">
                        View All
                    </button>
                </div>
            </div>
        </div>
    </section>
    </>
  );
}

export default Dashboard;
