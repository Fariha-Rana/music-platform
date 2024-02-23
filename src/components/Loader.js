"use client"
import { TailSpin } from "react-loader-spinner";

import React from "react";

function Loader() {
  return (
    <div className="flex justify-center items-center h-screen">   
    <div className=""
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <TailSpin color="#00BFFF" height={80} width={80} />
    </div>
    </div>
  );
}

export default Loader;
