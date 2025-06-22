"use client";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Link href="pages/pictureoftheday">
        <button>Image of the Day</button>
      </Link>
      <Link href="pages/roverphoto">
        <button>Rover Photo</button>
      </Link>
    </>
  );
}
