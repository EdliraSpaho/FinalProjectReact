import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";

interface LikeButtonProps {
  isLiked: boolean;
  onClick: () => void;
}

const LikeButton: React.FC<LikeButtonProps> = ({ isLiked, onClick }) => {
  return (
    <button onClick={onClick}>
      {isLiked ? <AiFillHeart color="red" size={20} /> : <AiOutlineHeart size={20} />}
    </button>
  );
};

export default LikeButton;
