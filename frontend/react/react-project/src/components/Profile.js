import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getSession } from "../api/auth";
import { API_URL } from "../api/config";
import Logo from "../logo.svg";

export default function Profile() {
  // TODO: answer here
  let { UserId } = useParams();
  const [profile, setProfile] = useState({});
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getSession();

    axios
      .get(`${API_URL}/profile/${UserId}`, { withCredentials: true })
      .then((res) => {
        setProfile(res.data.data.profile);
        setPosts(res.data.data.posts);
      });
  }, [UserId]);

  return (
    <>
      <div className="app-logo">
        <Link to="/" aria-label="App Title">
          <img src={Logo} alt="logo" height="50px" aria-label="App Logo" />
        </Link>
      </div>
      <h4>{profile.name}</h4>
      <div>
        {posts.length > 0 &&
          posts.map((item, index) => {
            return (
              <div aria-label="Post Card" key={index}>
                <img
                  aria-label="Post Image"
                  src={item.image}
                  alt=""
                  style={{ height: "50px" }}
                />
                <div>
                  <Link to={`/profile/${profile.id}`}>{profile.name}</Link>
                  <p>{item.content}</p>
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
}
