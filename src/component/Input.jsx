import React, { useState } from "react";

export default function NameInput() {
  const [name, setName] = useState("");

  return (
    <div className="p-6 text-center ">
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        className="border p-2 rounded"
      />
      <p className="mt-6 text-gray-700">
        {name ? `Hello, ${name}!` : "Please enter your name."}
      </p>
    </div>
  );
}
