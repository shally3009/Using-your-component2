import React, { useState } from "react";

const LikeButton = ({ isLiked }) => {
  const [liked, setLiked] = useState(isLiked);

  return (
    <button
      className={`like-button ${liked ? "liked" : ""}`}
      onClick={() => setLiked(!liked)}
    >
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
};

export default LikeButton;