import { useEffect, useState } from "react";
import { fetchPosts } from "../services/api";
import BlogCard from "../components/BlogCard";

export default function Blogs() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts()
      .then((res) => setPosts(res.data.posts)) // backend returns { posts: [...] }
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="page">
      <h2>All Blogs</h2>
      <div className="blog-list">
        {posts.map((post) => (
          <BlogCard key={post._id} post={post} />
        ))}
      </div>
    </div>
  );
}