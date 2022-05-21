import React, { useEffect, useState } from "react";
import "./Navbar.css";

import { auth, getSession } from "../api/auth";

export default function Navbar() {
  // TODO: answer here
  // const { user, isLoggedIn } = useContext(SessionContext);
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(null);

  useEffect(() => {
    const getUser = async () => {
      const session = await getSession();
      setUser(session?.data);
      if (session?.status === 200) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };
    getUser();
  }, []);

  return (
    <div aria-label="Navbar" className="Navbar-Container">
      <a href="/" aria-label="App Title" className="Instagram-Title-Text">
        Instagram
      </a>
      {isLoggedIn ? (
        <p className="Profile-Name" aria-label="Profile">
          {user.user.name}
        </p>
      ) : (
        <button aria-label="Login" onClick={() => auth()}>
          Login
        </button>
      )}
      <div className="User-CTA">
        <img
          aria-label="App Logo"
          src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c521.png"
          alt="Instagram Logo"
          className="Instagram-Logo"
        />
      </div>
    </div>
  );
}
