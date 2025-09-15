import React from 'react'

function Signin() {
  return (
    <>
        <div className="max-w-7xl mx-auto bg-black sm:px-6 lg:px-8">
          <div>
            <form action="post" method="get" class>
                <label for="user" placeholder="can be username or email">Username</label>
                <input type="text" name="name" id="name" required />
                <label for="password" placeholder="Password@123">Password</label>
                <input type="text" name="password" id="password" required />
            </form>
          </div>
        </div>
    </>
  )
}

export default Signin