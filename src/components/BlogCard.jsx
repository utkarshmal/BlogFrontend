import { Link } from "react-router-dom";

export default function BlogCard({ post }) {
  return (
    <div className="blog-card">
      <h3>{post.title}</h3>
      <p>{post.content?.substring(0, 100)}...</p>
      <Link to={`/blogs/${post._id}`}>Read More</Link>
    </div>
  );
}