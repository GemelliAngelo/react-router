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
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col">
              <i className="fa-brands fa-github"></i>
            </th>
            <th scope="col">Anteprima</th>
            <th scope="col">Categorie</th>
            <th scope="col"></th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <th className="align-middle" scope="row">
                {post.title}
              </th>
              <td>
                <img src={apiUrl + post.image} width="140" />
              </td>
              <td className="align-middle">
                {post.categories.map((category) => (
                  <span key={category} className="badge text-bg-info ms-2">
                    {category}
                  </span>
                ))}
              </td>
              <td className="align-middle">
                <i
                  type="button"
                  className="fa-solid fa-up-right-and-down-left-from-center"
                ></i>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
