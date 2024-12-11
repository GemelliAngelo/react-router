import { useEffect, useState } from "react";

export default function PostsPage() {
  const apiUrl = import.meta.env.VITE_API_URL;

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = () => {
    fetch(apiUrl + "/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  };

  return (
    <div className="container">
      <h1 className="my-4">Posts</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">
              <i className="fa-brands fa-github"></i>
            </th>
            <th scope="col">Anteprima</th>
            <th scope="col">Categorie</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <th scope="row">{post.title}</th>
              <td>{post.image}</td>
              {post.categories.map((category) => (
                <td key={category}>{category}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
