import { useState } from "react"

// Удаляем посты по ид
const removePostById = (postId: any) => {
  setPosts((prevPosts) => prevPosts.filter((post: { id: any; }) => post.id !== postId));
  setLikedPosts((prevLiked) => prevLiked.filter((id: any) => id !== postId));
};
useEffect(()=>{
  async function getProducts(){
      const response = await fetch('https://fakestoreapi.com/products')
      const products = await response.json()
  }
  getProducts()
},[])

// Лайканые посты

const ButtonLike = () => {
const [likes, setLikes] = useState(0);
const [isLiked, setIsLiked] = useState(false);

const handleLike = () => {
  setLikes(likes + 1);
  setIsLiked(true); 
};

return (
  <div>
      <p>Количество лайков: {likes}</p>
      <button onClick={handleLike} disabled={isLiked}>
          {isLiked ? 'Лайк уже поставлен' : 'Лайкнуть'}
          <hr />
      </button>
  </div>
);
};

export default ButtonLike;

function useEffect(arg0: () => void, arg1: string[]) {
throw new Error('Function not implemented.');
}

function setPosts(arg0: (prevPosts: any) => any) {
throw new Error('Function not implemented.');
}

function setLikedPosts(arg0: (prevLiked: any) => any) {
throw new Error('Function not implemented.');
}

