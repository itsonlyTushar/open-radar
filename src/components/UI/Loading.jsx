import React from "react";
import { ImSpinner2 } from "react-icons/im";

function Loading({textSize}) {
  return (
    <div className="flex justify-center items-center mx-auto h-screen">
        <ImSpinner2 className={`animate-spin ${textSize} text-center`}/>
    </div>
  )
}

export default Loading