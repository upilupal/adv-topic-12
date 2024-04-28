"use client"

import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { logoutAction } from "@/redux/slices/userSlice";
import React from "react";

const Navbar = () => {
  const { id } = useAppSelector((state) => state.user);

  const dispatch = useAppDispatch();

  const logout = () => {
    localStorage.removeItem("token");
    dispatch(logoutAction());
  }

  return (
    <div className="container mx-auto px-4 flex justify-between items-center py-4 border-b-2 border-slate-300">
      Navbar
      {Boolean(id) ? (
        <div className="flex gap-4">
          <p>Home</p>
          <p>Profile</p>
          <p onClick={logout}>Logout</p>

        </div>
      ) : (
        <div className="flex gap-4">
          <p>Home</p>
          <p>Login</p>
          <p>Register</p>
        </div>
      )}
    </div>
  );
};

export default Navbar;
