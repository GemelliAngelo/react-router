import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function PostsPage() {
  const apiUrl = import.meta.env.VITE_API_URL;

  // const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   fetchPosts();
  // }, []);

  // const fetchPosts = () => {
  //   fetch(apiUrl + "/posts")
  //     .then((res) => res.json())
  //     .then((data) => setPosts(data));
  // };

  return (
    <>
      <div className="container">
        <h1 className="my-4">Posts</h1>
        <table className="table table-dark table-striped">
          <thead>
            <tr className="text-center">
              <th scope="col">Nome</th>
              <th scope="col">Anteprima</th>
              <th scope="col">Categorie</th>
              <th scope="col">Disponibile</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="text-center">
                <th className="align-middle" scope="row">
                  {post.title}
                </th>
                <td>
                  <img src={apiUrl + post.image} width="150" />
                </td>
                <td className="align-middle">
                  {post.categories.map((category) => (
                    <span key={category} className="badge text-bg-info ms-2">
                      {category}
                    </span>
                  ))}
                </td>
                <td className="align-middle">
                  {post.published ? (
                    <i className="fa-solid fa-check"></i>
                  ) : (
                    <i className="fa-solid fa-xmark"></i>
                  )}
                </td>
                <td className="align-middle text-center">
                  <Link to={`/posts/${post.id}`}>
                    <i
                      type="button"
                      className="fa-solid fa-up-right-and-down-left-from-center"
                    ></i>
                  </Link>
                  <i
                    type="button"
                    className="fa-solid fa-trash ms-4 text-danger"
                  ></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
