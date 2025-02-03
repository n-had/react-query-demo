"use client";

import { Post } from "@/definitions";
import axios from "axios";
import { useEffect, useState } from "react";

function PostsTraditional() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:4000/posts");
      setPosts(response.data);
    } catch (error) {
      console.log(error);
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    fetchPosts();
  }, []);
  if (isLoading) return <div className="p-36 text-center">Loading</div>;
  if (isError) return <div className="p-36 text-center">Error</div>;
  return (
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-center text-lg">Posts (Traditional)</h1>
      {posts.map((post) => (
        <div
          className="p-4 border m-4 rounded-lg dark:border-gray-800"
          key={post.id}
        >
          <h2 className="text-xl font-bold">{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsTraditional;
