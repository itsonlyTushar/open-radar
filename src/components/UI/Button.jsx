import React from "react";


function Button({disabled, onClick, btnTitle }) {
  return (
    <button
      disabled={disabled}
      className="w-full max-w-xs bg-white border border-black rounded-md p-2 hoverEffect disabled:opacity-50 disabled:cursor-not-allowed"
      onClick={onClick}
    >
      {btnTitle}
    </button>
  );
}

export default Button;
