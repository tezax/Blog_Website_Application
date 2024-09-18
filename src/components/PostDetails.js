import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { fetchPosts } from "../services/api";

const PostDetails = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const getPost = async () => {
      try {
        const data = await fetchPosts();
        const selectedPost = data.find((p) => p.id === parseInt(id));
        setPost(selectedPost);
      } catch (error) {
        console.error(error.message);
      }
    };
    getPost();
  }, [id]);

  if (!post) return <p>Loading...</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <p>User ID: {post.userId}</p>
      <Link to="/">Back to Home</Link>
    </div>
  );
};

export default PostDetails;
