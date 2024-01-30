import React from "react";
import Link from "next/link";
const Button = ({ onClick, children, kw, bgColor,txtColor }) => {
  const handleClick = () => {
    onClick({ count: 1, kw }); 
  };

  return (
    <Link
      href="tel:+14695624188"
      onClick={handleClick}
      style={{
        backgroundColor: bgColor,
        color: txtColor,
        padding: "10px 12px",
      }}
    >
      {children}
    </Link>
  );
};

export default Button;
