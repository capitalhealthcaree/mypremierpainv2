import React from "react";
import api from "../../utils/api";
import Button from "./Button";

const IncrementButton = ({ kw, bgColor,txtColor }) => {
  const handleClick = async () => {
    try {
      const payload = {
        count: 1,
        kw: kw,
      };
      const success = await api.post("/counter", payload);
      if (success) {
      } else {
      }
    } catch (error) {
      console.error("Error incrementing counter:", error);
    }
  };

  return <Button onClick={handleClick} bgColor={bgColor} txtColor={txtColor}>469-562-4188</Button>;
};

export default IncrementButton;
