import axios from "axios";
import { useState, useEffect, useContext } from "react";
import { BrowserRouter as Router, Link, Route, Routes } from "react-router-dom";
import { API_URL } from "./api/config";
import "./App.css";
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import Profile from "./components/Profile";
import UploadForm from "./components/UploadForm";
import { SessionContext } from "./context/SessionContext";
// TODO: answer here

function App() {
  // TODO: answer here
  const [postCardData, setPostCardData] = useState([]);
  const { user } = useContext(SessionContext);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${API_URL}/post/list`, {
        withCredentials: true,
      });

      setPostCardData(result?.data.data);
    };

    fetchData();
  }, []);

  const onSubmit = (v) => {
    setPostCardData([v, ...postCardData]);
  };

  return (
    <Router>
      <div aria-label="App">
        <Navbar />
        <UploadForm onSubmit={onSubmit} />
        {postCardData.map((item) => (
          <PostCard
            key={item.id}
            caption={item.content}
            image={item.image}
            id={item.id}
            username={item.author?.name}
            userId={item.author?.id}
            date={item.createdAt}
            dislikeCount={item.dislikeCount}
            likeCount={item.likeCount}
            isDisliked={item.disliked}
            isLiked={item.liked}
          />
        ))}
        <Link to={`/profile/${user?.user?.id}`}>Profile</Link>
      </div>
      <Routes>
        <Route path={`/profile/:UserId`} element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
