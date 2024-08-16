import { LoginOutlined } from "@mui/icons-material";
import React from "react";

export const Header = () => {
  return (
    <>
      <div className="w-full flex items-center justify-between bg-amber-950 text-white px-2">
        <img src="logo1.png" alt="Logo" />
        <h2 className="font-semibold text-2xl">Billing Section</h2>
        <span>
          <LoginOutlined />
          <p>Login</p>
        </span>
      </div>
    </>
  );
};
