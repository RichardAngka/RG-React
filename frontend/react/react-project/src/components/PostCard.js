// TODO: answer here
import LikeDislikeButton from "./LikeDislikeButton";

export default function PostCard({
  image,
  caption,
  username,
  userId,
  date,
  dislikeCount,
  isDisliked = false,
  isLiked = false,
  likeCount,
  id,
}) {
  // TODO: answer here

  return (
    <div aria-label="Post Card" key={userId}>
      <image src={image} aria-label="Post Image" />
      <h4 aria-label="Post User Name">{username}</h4>
      <p aria-label="Post Caption">{caption}</p>
      <date aria-label="Post Date">{date}</date>
      <LikeDislikeButton
        dislikeCount={dislikeCount}
        isDisliked={isDisliked}
        isLiked={isLiked}
        likeCount={likeCount}
        id={id}
      />
    </div>
  );
}
