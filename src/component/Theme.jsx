import React, { useState } from "react";

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-gray-900"
      }`}
    >
      <h1 className="text-3xl font-bold mb-6">
        {darkMode ? "Dark Mode 🌙" : "Light Mode ☀️"}
      </h1>

      <button
        onClick={() => setDarkMode(!darkMode)}
        className={`px-6 py-2 rounded-lg font-medium transition-colors duration-300 ${
          darkMode
            ? "bg-black text-gray-900 hover:bg-gray-200"
            : "bg-gray-900 text-white hover:bg-gray-700"
        }`}
      >
        Toggle Theme
      </button>
    </div>
  );
}
