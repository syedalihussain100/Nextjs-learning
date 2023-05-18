import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}

function Navigation() {
  return (
    <nav>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About Us</Link>
      <Link href={"/blog"}>Blog</Link>
      <Link href={"/course"}>Course</Link>
      <Link href={"/service"}>Service</Link>
      <Link href={"/contact"}>Contact Us</Link>
    </nav>
  );
}
