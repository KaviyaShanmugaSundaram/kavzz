import React, { useState } from "react";
import "../Styles/Login.css";
import "../Styles/MobileMedia.css";
import "../Styles/DesktopMedia.css";
import "../Styles/MacMedia.css";
import { useDispatch } from "react-redux";
import { login } from "../Redux/UserSlice";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const submitHandle = (e) => {
    e.preventDefault();
    dispatch(
      login({
        username: username,
        password: password,
        LoggedIn: true,
      })
    );
  };

  return (
    <div className="Whole">
      <div className="Card">
        <div className="Logo">
          <img
            src={require("../Images/instagram-new.webp")}
            alt="insta-img"
            className="InstagramLogo"
          />
        </div>
        <form
          onSubmit={(e) => {
            submitHandle(e);
          }}
        >
          <div className="DetailCard">
            <input
              type="text"
              placeholder="Username"
              className="UserNameField"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
              value={username}
            />
            <input
              type="password"
              placeholder="Password"
              className="PasswordField"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              value={password}
            />
          </div>

          <div className="SubmitCard">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
