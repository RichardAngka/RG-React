// TODO: answer here
import axios from "axios";
import { useState } from "react";
import { API_URL } from "../api/config";

export default function LikeDislikeButton({
  id,
  isLiked,
  isDisliked,
  likeCount,
  dislikeCount,
}) {
  // TODO: answer here
  const [like, setLike] = useState(likeCount);
  const [dislike, setDislike] = useState(dislikeCount);
  const [likeStatus, setLikeStatus] = useState(isLiked);
  const [dislikeStatus, setDislikeStatus] = useState(isDisliked);

  const handleLike = () => {
    setLikeStatus((curr) => !curr);
    if (likeStatus) {
      axios.get(`${API_URL}/post/${id}/unlike`, { withCredentials: true });
      return setLike(like - 1);
    }
    axios.get(`${API_URL}/post/${id}/like`, { withCredentials: true });
    setDislike(dislike - 1);
    setLike(like + 1);
  };

  const handleDislike = () => {
    setDislikeStatus((curr) => !curr);
    if (dislikeStatus) {
      axios.get(`${API_URL}/post/${id}/undislike`, { withCredentials: true });
      return setDislike(dislike - 1);
    }
    axios.get(`${API_URL}/post/${id}/dislike`, { withCredentials: true });
    setLike(like - 1);
    setDislike(dislike + 1);
  };

  return (
    <div>
      <button aria-label="Like Button" onClick={handleLike}>
        {likeStatus ? "like" : "unlike"}
      </button>
      <button aria-label="Dislike Button" onClick={handleDislike}>
        {dislikeCount ? "dislike" : "undislike"}
      </button>
      <h1 aria-label="Like Count">{like}</h1>
      <h1 aria-label="Dislike Count">{dislike}</h1>
    </div>
  );
}
