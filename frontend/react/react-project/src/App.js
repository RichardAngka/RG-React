import axios from "axios";
import { useState, useEffect } from "react";
import { API_URL } from "./api/config";
import "./App.css";
import Navbar from "./components/Navbar";
import PostCard from "./components/PostCard";
import UploadForm from "./components/UploadForm";
// TODO: answer here

function App() {
  // TODO: answer here
  const [postCardData, setPostCardData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${API_URL}/post/list`, {
        withCredentials: true,
      });

      setPostCardData(result?.data.data);
    };
    fetchData();
  }, []);

  return (
    <div aria-label="App">
      <Navbar />
      <UploadForm />
      {postCardData.map((item) => (
        <PostCard
          key={item.id}
          caption={item.content}
          image={item.image}
          id={item.id}
          username={item.author.name}
          userId={item.author.id}
          date={item.createdAt}
          dislikeCount={item.dislikeCount}
          likeCount={item.likeCount}
          isDisliked={item.disliked}
          isLiked={item.liked}
        />
      ))}
    </div>
  );
}

export default App;
