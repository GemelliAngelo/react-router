import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostCard from "../components/PostCard";

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
      <h1 className="my-4">DETTAGLIO POST</h1>
      <PostCard />
    </div>
  );
}
