import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ShowPostPage() {
  const navigate = useNavigate();
  const postId = useParams().id;
  const apiUrl = import.meta.VITE_API_URL;

  const [post, setPost] = useState();

  useEffect(() => {
    fetchShowPost(postId);
  }, []);

  const fetchShowPost = (id) => {
    const url = `${apiUrl}/posts/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  return (
    <div className="container">
      <h1 className="my-4">SHOW</h1>
    </div>
  );
}
