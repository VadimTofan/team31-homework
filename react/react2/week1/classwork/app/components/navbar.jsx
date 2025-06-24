"use client";
import styles from "./navbar.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <Link href="/pages/pictureoftheday">
        <button className={pathname === "/pages/pictureoftheday" ? "linkButton linkButtonActive" : "linkButton"}>Image of the Day</button>
      </Link>

      <Link href="/pages/roverphoto">
        <button className={pathname === "/pages/roverphoto" ? "linkButton linkButtonActive" : "linkButton"}>Rover Photo</button>
      </Link>
    </nav>
  );
}
