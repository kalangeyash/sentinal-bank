import React from "react";
import Heading from "./Heading";
import LOGO from "../assets/Bank.png"

function Appbar() {
  return (
    <div className="shadow h-14 flex justify-between">
      <div className="flex justify-center h-full ml-4 pt-4 pl-4">
        <div className="flex pt-1 font-bold">Sentinal Bank</div>
        <div className="max-h-1 max-w-12 px-2"><img src ={LOGO}/></div>
        {/* <Heading label= {"Sentinal Bank"}/> */}
      </div>
      <div className="flex pt-1 mr-3">
        <div className="flex flex-col justify-center  h-full mr-4">Hello</div>
        <div className=" rounded-full h-12 w-12 bg-slate-200 flex justify-center">
          <div className="flex flex-col justify-center h-full text-xl">U</div>
        </div>
      </div>
    </div>
  );
}

export default Appbar;
