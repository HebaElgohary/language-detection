import React from "react";

export default function ({placeholder,className}: any) {
  return (
    <div>
      <input
     placeholder=   {placeholder}
        type="text"
        className={`bg-white border-1 border-gray-400 rounded-lg !p-5  text-gray-500 ${className} `}
      />
    </div>
  );
}
