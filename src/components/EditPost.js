import React, { useState } from "react";

const EditPost = ({ post, onSave }) => {
  const [title, setTitle] = useState(post.title);
  const [body, setBody] = useState(post.body);

  const handleSave = () => {
    onSave({ ...post, title, body });
  };

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea value={body} onChange={(e) => setBody(e.target.value)} />
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditPost;
