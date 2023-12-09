import React from "react"
import Link from "next/link"
import { FaFacebookF } from "react-icons/fa"
import { GrInstagram } from "react-icons/gr"
import { FaPinterestP } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"
import styles from "./socialMediaLinks.module.scss"

export default function SocialMediaLinks() {
  return (
    <ul className={styles["social-media-links-wrapper"]}>
      <Link href={"#"}>
        <li className={styles["facebook"]}>
          <FaFacebookF />
        </li>
      </Link>
      <Link href={"#"}>
        <li className={styles["instagram"]}>
          <GrInstagram />
        </li>
      </Link>
      <Link href={"#"}>
        <li className={styles["pinterest"]}>
          <FaPinterestP />
        </li>
      </Link>
      <Link href={"#"}>
        <li className={styles["x"]}>
          <FaXTwitter />
        </li>
      </Link>
    </ul>
  )
}
