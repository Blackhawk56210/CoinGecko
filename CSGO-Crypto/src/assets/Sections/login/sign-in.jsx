import React from "react";
import { NavLink } from "react-router";

function Signin() {
  return (
    <>
      <div className="max-w-7xl mx-auto bg-black sm:px-6 lg:px-8">
        <div className="bg-gray-900">
          <form action="post" method="get">
            {/* grid-col layout maybe?? ~~ add other form requirements later decide on layout*/}
            <label htmlFor="user" placeholder="can be username or email" className="text-white mr-3">
              Username
            </label>
            <input type="text" name="name" id="name" required className="bg-white border rounded-md" />
            <label htmlFor="password" placeholder="Password@123" className="text-white mr-3 pl-5">
              Password
            </label>
            <input type="text" name="password" id="password" required className="bg-white border rounded-md" />
          </form>
        </div>
      </div>
    </>
  );
}

export default Signin;
