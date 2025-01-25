import React, { createContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Контекст для хранения списка избранных постов
const FavoritePostsContext = createContext();

function FavoritePostsProvider({  }) {
  const [favorites, setFavorites] = useState([]);
  return <FavoritePostsContext.Provider value={{ favorites }}>{}</FavoritePostsContext.Provider>;
}

function useFavorites() { return useContext(FavoritePostsContext); }

// Отображаем посты
function PostCard({ post }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFav = favorites.some((p) => p.id === post.id);
  return (
    <div className="post">
      <h3>{post.title}</h3>
      <button onClick={() => toggleFavorite(post)}>{isFav ? "Unlike" : "Like"}</button>
    </div>
  );
}

function Post({ post }) {
  const { favorites, toggleFavorite } = useFavorites();
  const isFav = favorites.some((p) => p.id === post.id);
  return (
    <div>
      <h1>{post.title}</h1>
      <button onClick={() => toggleFavorite(post)}>{isFav ? "Unlike" : "Like"}</button>
    </div>
  );
}
// Массив постов
function App() {
  const posts = [
    { id: 1, title: "Post 1" },
    { id: 2, title: "Post 2" },
    { id: 3, title: "Post 3" },
  ];

  return (
    <FavoritePostsProvider>
      <Router>
        <nav><Link to="/">All Posts</Link></nav>
        <Routes>
          <Route path="/" element={posts.map((post) => <PostCard key={post.id} post={post} />)} />
          {posts.map((post) => (
            <Route key={post.id} path={`/post/${post.id}`} element={<Post post={post} />} />
          ))}
        </Routes>
      </Router>
    </FavoritePostsProvider>
  );
}

export default App;