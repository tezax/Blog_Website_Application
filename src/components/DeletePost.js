const handleDelete = (id) => {
  setPosts(posts.filter((post) => post.id !== id));
};

return (
  <div>
    {/* ...existing code... */}
    {filteredPosts.map((post) => (
      <div key={post.id}>
        <h2>{post.title}</h2>
        <p>{post.body.substring(0, 100)}...</p>
        <Link to={`/post/${post.id}`}>Read More</Link>
        <button onClick={() => handleDelete(post.id)}>Delete</button>
      </div>
    ))}
  </div>
);
