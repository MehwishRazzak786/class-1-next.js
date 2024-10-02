import Footer from "@/Components/Footer";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <ul className="flex gap-40 bg-blue-500 justify-center">
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/about">ABOUT</Link>
        </li>
        <li>
          <Link href="/gallery">GALLERY</Link>
        </li>
        <li>
          <Link href="/contact-us">CONTACT US</Link>
        </li>
      </ul>

      <h1 className="one">This Is Contact Page...</h1>
      <Footer />
    </>
  );
}
