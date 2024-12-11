import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ShowPostPage() {
  const navigate = useNavigate();
  const postId = useParams().id;
  const apiUrl = import.meta.env.VITE_API_URL;

  const [post, setPost] = useState();

  useEffect(() => {
    fetchShowPost(postId);
  }, []);

  const fetchShowPost = (id) => {
    const url = `${apiUrl}/posts/${id}`;
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          if (res.status == 404) {
            navigate("not-found");
          }
          throw new Error("OPS! Qualcosa è andato storto");
        }
        return res.json();
      })
      .then((data) => {
        setPost(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div className="container">
      {post && (
        <div className="card my-3">
          <div className="row g-0">
            <div className="col-md-4">
              <img
                src={apiUrl + post.image}
                className="img-fluid rounded-start"
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p className="card-text">{post.content}</p>
                <p className="card-text">
                  {post.categories.map((category) => (
                    <span
                      key={category}
                      className="fs-5 badge text-bg-info ms-2"
                    >
                      {category}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
