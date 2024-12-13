import { useEffect, useState } from "react";
import PostsList from "../components/PostsList";

export default function PostsPage() {
  return (
    <div className="container">
      <h1 className="my-4">Posts</h1>
      <PostsList />
    </div>
  );
}
