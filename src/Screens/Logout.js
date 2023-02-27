import React from "react";
import "../Styles/MobileMedia.css";
import "../Styles/DesktopMedia.css";
import "../Styles/MacMedia.css";
import "../Styles/Logout.css";
import { useDispatch } from "react-redux";
import { logout } from "../Redux/UserSlice";

const Logout = () => {
  const dispatch = useDispatch();
  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
  };
  return (
    <div>
      <button
        className="LogoutButton"
        onClick={(e) => {
          handleLogout(e);
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Logout;
