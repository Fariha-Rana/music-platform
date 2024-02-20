import React from "react";
function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">
      {Array(1)
        .fill(0)
        .map((el, index) => (
          <div
            key={index}
            className="flex flex-row bg-gray-300 shadow-lg border-r-4 w-[20rem] items-center gap-2 p-2 rounded"
          >
            <div className="rounded-full bg-gray-600 w-[4.5rem] h-[4.5rem] animate-pulse"></div>
            <div className="flex flex-col gap-2 w-9/12">
              <span className="w-11/12 bg-gray-600 h-2 rounded-full animate-pulse"></span>
              <span className="w-9/12 bg-gray-600 h-2 rounded-full animate-pulse"></span>
            </div>
          </div>
        ))}
    </div>
  );
}

export default Loader;
