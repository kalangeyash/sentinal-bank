import React from "react";
import Heading from "./Heading";

function Appbar() {
  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex flex-col justify-center h-full ml-4">
        <div className="flex font-bold">Sentinal Bank</div>
        {/* <Heading label= {"Sentinal Bank"}/> */}
      </div>
      <div className="flex pt-1">
        <div className="flex flex-col justify-center  h-full mr-4">Hello</div>
        <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center">
          <div className="flex flex-col justify-center h-full text-xl">U</div>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
