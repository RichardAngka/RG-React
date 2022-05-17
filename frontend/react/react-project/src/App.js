import "./App.css";
import LikeDislikeButton from "./components/LikeDislikeButton";
// TODO: answer here

function App() {
  // TODO: answer here
  return (
    <div aria-label="App">
      <h1 aria-label="App Title">App Title</h1>
      <LikeDislikeButton likeCount={1} dislikeCount={0} isLiked />
    </div>
  );
}

export default App;
