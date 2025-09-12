import React from "react";

function Navbar() {
  return (
    <>
      <div className="max-w-7xl mx-auto bg-black px-4 sm:px-6 lg:px-8" id="el-f9vihvd1">
        <div
          className="flex items-center justify-between h-16"
          id="el-iwm4um8e"
        >
          <div className="flex items-center" id="el-hkneohcc">
            <a
              href="#hero"
              className="text-2xl font-bold text-white"
              id="el-f3onu0op"
              target="_self"
            >
              BCGG
            </a>
          </div>

          <div className="hidden md:block" id="el-ghzn4nlf">
            <ul className="flex space-x-8" id="el-ljgptnpa">
              <li id="el-vtmd74yf">
                <a
                  href="#hero"
                  className="text-gray-300 hover:text-white transition-colors"
                  id="el-quz7t9n6"
                  target="_self"
                >
                  Home
                </a>
              </li>
              <li id="el-owipgaxg">
                <a
                  href="#hero"
                  className="text-gray-300 hover:text-white transition-colors"
                  id="el-bvufnxa6"
                  target="_self"
                >
                  Cases
                </a>
              </li>
              <li id="el-0yxcmpaa">
                <a
                  href="#hero"
                  className="text-gray-300 hover:text-white transition-colors"
                  id="el-s7txsgz2"
                  target="_self"
                >
                  Features
                </a>
              </li>
              <li id="el-wkqf1u7k">
                <a
                  href="#hero"
                  className="text-gray-300 hover:text-white transition-colors"
                  id="el-8xmx5paf"
                  target="_self"
                >
                  Dashboard
                </a>
              </li>
              <li id="el-w68w38qm">
                <a
                  href="#hero"
                  className="text-gray-300 hover:text-white transition-colors"
                  id="el-ptki9hd1"
                  target="_self"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="flex items-center space-x-4" id="el-mhqxlaw2">
            <button
              className="text-gray-300 hover:text-white transition-colors"
              id="el-ciis8819"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="el-46drseyy"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  id="el-99xhx3j8"
                ></path>
              </svg>
            </button>
            <button
              className="text-gray-300 hover:text-white transition-colors relative"
              id="el-sy75iwoa"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="el-xbef2n3t"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  id="el-rba62hs3"
                ></path>
              </svg>
              <span
                className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center"
                id="el-4mbe4c3u"
              >
                0
              </span>
            </button>
            <button
              className="md:hidden text-gray-300 hover:text-white transition-colors"
              id="el-zog550ef"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                id="el-zzy8cm7b"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                  id="el-g9kaittp"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
