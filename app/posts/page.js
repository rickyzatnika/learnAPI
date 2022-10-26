import { use } from "react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_KEY,
    "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RAPID_HOST,
  },
};

async function getPost() {
  const posts = await fetch(
    `${process.env.NEXT_PUBLIC_RAPID_API}/news`,
    options
  );

  return posts.json();
}
export default function Posts() {
  const posts = use(getPost());
  console.log(posts);
  return (
    <>
      <div>
        {posts.map((post, i) => (
          <ul key={i}>
            <h1>{post.source}</h1>

            <li>{post.title}</li>
          </ul>
        ))}
      </div>
    </>
  );
}
