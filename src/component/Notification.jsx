import React, { useState } from "react";

export default function ShowDetails() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="p-6 text-center">
      <button
        onClick={() => setShowInfo(!showInfo)}
        className="px-4 py-2 bg-indigo-600 text-white rounded"
      >
        {showInfo ? "Hide Details" : "Show Details"}
      </button>

      {showInfo && (
        <p className="mt-4 text-gray-700">
          This is some extra information that only appears when you click the
          button!
        </p>
      )}
    </div>
  );
}
