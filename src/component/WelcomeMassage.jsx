import React, { useState } from "react";

export default function Welcome () {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="p-6 text-center">
      {isLoggedIn ? (
        <h1 className="text-1xl font-bold text-green-600">Welcome back! 👋</h1>
      ) : (
        <h1 className="text-2xl font-bold text-red-600">Please log in 🔐</h1>
      )}

      <button
        onClick={() => setIsLoggedIn(!isLoggedIn)}
        className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {isLoggedIn ? "Log Out" : "Log In"}
      </button>
    </div>
  );
}
