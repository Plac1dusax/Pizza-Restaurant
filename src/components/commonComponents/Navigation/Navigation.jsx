import React from "react"
import Link from "next/link"
import SiteLogo from "../SiteLogo/SiteLogo"
import SocialMediaLinks from "../SocialMediaLinks/SocialMediaLinks"
import styles from "./navigation.module.scss"

export default function Navigation() {
  return (
    <nav className={styles["nav-wrapper"]}>
      <div className={styles["nav-content"]}>
        <SiteLogo />
        <ul className={styles["page-navigation"]}>
          <li>
            <Link href={"/"}>Home</Link>
          </li>
          <li>
            <Link href={"/about"}>About</Link>
          </li>
          <li>
            <Link href={"/"}>Menu</Link>
          </li>
          <li>
            <Link href={"/"}>Pizza</Link>
          </li>
          <li>
            <Link href={"/"}>Blog</Link>
          </li>
          <li>
            <Link href={"/"}>Contact Us</Link>
          </li>
        </ul>
        <SocialMediaLinks />
      </div>
    </nav>
  )
}
