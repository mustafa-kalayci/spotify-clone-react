import React from "react";
import { Icon } from "../../Icons";
import { useNavigate } from "react-router-dom";
function Navigation() {
  const navigate = useNavigate();
  return (
    <nav className="flex  gap-x-4">
      <button
        onClick={() => navigate(-1)}
        className="w-8 h-8 flex items-center justify-center bg-black rounded-full  bg-opacity-70"
      >
        <Icon size={22} name="prev" />
      </button>
      <button
        onClick={() => navigate(1)}
        className="w-8 h-8 flex items-center justify-center bg-black rounded-full  bg-opacity-70"
      >
        <Icon size={22} name="next" />
      </button>
    </nav>
  );
}

export default Navigation;
