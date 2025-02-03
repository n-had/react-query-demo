"use client";

import { Post } from "@/definitions";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function PostsRQ() {
  const result = useQuery({
    queryKey: ["posts"],
    queryFn: () => {
      return axios.get("http://localhost:4000/posts");
    },
  });
  const { data, isLoading, isError, error } = result;

  if (isLoading) return <div className="p-36 text-center">Loading</div>;
  if (isError) return <div className="p-36 text-center">{error.message}</div>;

  return (
    <div className="max-w-screen-lg mx-auto">
      <h1 className="text-center text-lg">Posts RQ</h1>
      {data?.data.map((post: Post) => (
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

export default PostsRQ;
