import React from "react";

export default function TextArea({
  placeholder,
  className,
  value,
  onChange,
}: any) {
  return (
    <div>
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`bg-white border border-gray-400 rounded-lg p-5 text-gray-500 ${className}`}
      />
    </div>
  );
}