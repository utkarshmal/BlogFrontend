import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPostById, likePost, unlikePost, addComment } from "../services/api";

export default function SingleBlog() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);   // <-- new
  const [commentText, setCommentText] = useState("");

  const dummyUserId = "user123";

  useEffect(() => {
  setLoading(true);
  getPostById(id)
    .then(res => {
      console.log("API response:", res);
      setPost(res.data.post);
    })
    .catch(err => console.error(err))
    .finally(() => setLoading(false));
}, [id]);

  const handleLike = async () => {
    if (!post?._id) return;
    try {
      const res = await likePost(post._id, dummyUserId);
      setPost(res.data.post);
    } catch (err) {
      console.error(err);
    }
  };

  const handleUnlike = async () => {
    if (!post?._id) return;
    const userLike = post.likes?.find(l => l.user === dummyUserId);
    if (!userLike) return;
    try {
      const res = await unlikePost(post._id, userLike._id);
      setPost(res.data.post);
    } catch (err) {
      console.error(err);
    }
  };

  const handleAddComment = async () => {
    if (!post?._id || !commentText.trim()) return;
    try {
      const res = await addComment(post._id, dummyUserId, commentText);
      setPost(res.data.post);
      setCommentText("");
    } catch (err) {
      console.error(err);
    }
  };

  // 🔹 Show a loader only while fetching
  if (loading) return <p className="spinner">Loading…</p>;

  // 🔹 Optional: show a message if no post found
  if (!post?._id) return <p>Post not found.</p>;


  return (
    <div className="page">
      <h2>{post.title}</h2>
      <p>{post.body}</p>

      <div>
        <p>Likes: {post.likes?.length || 0}</p>
        <button onClick={handleLike}>Like</button>
        <button onClick={handleUnlike}>Unlike</button>
      </div>

      <div>
        <h3>Comments</h3>
        <ul>
          {post.comments?.map(c => (
            <li key={c._id}>{c.body}</li>
          ))}
        </ul>
        <input
          type="text"
          placeholder="Write a comment…"
          value={commentText}
          onChange={e => setCommentText(e.target.value)}
        />
        <button onClick={handleAddComment}>Add Comment</button>
      </div>
    </div>
  );
}
