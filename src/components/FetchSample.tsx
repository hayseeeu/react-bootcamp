import { useEffect, useState } from "react";

type Post = { id: number; title: string };

export function PostList() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);

  return (
    <div className="space-y-2">
      <h2 className="text-xl font-bold">Posts</h2>
      <ul className="list-disc pl-5">
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
