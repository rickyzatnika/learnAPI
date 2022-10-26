import Link from "next/link";

export default function Navbar() {
  return (
    <>
      <nav style={{ padding: "10px " }}>
        <Link href="/" style={{ padding: "10px" }}>
          Home
        </Link>

        <Link href="/posts" style={{ padding: "10px" }}>
          Post
        </Link>
        <Link href="/about" style={{ padding: "10px" }}>
          About
        </Link>
      </nav>
    </>
  );
}
