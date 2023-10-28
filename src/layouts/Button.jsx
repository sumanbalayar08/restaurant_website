import React from "react";

const Button = (props) => {
  return (
    <div>
      <button className=" px-6 py-1 border-2 border-gray-300 text-brightColor hover:bg-orange-400 hover:text-white transition-all rounded-full">
        {props.title}
      </button>
    </div>
  );
};

export default Button;
