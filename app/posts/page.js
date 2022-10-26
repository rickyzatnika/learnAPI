import { use } from "react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": process.env.RAPID_KEY,
    "X-RapidAPI-Host": process.env.RAPID_HOST,
  },
};

async function getPost() {
  const posts = await fetch(`${process.env.RAPID_API}/news`, options);

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
