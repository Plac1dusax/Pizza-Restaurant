import React from "react"
import Image from "next/image"
import Link from "next/link"
import styles from "./siteLogo.module.scss"

export default function SiteLogo({ isLarge }) {
  return (
    <Link href={"/"}>
      <div
        className={
          isLarge
            ? `${styles["logo-wrapper"]} ${styles["logo-large"]}`
            : `${styles["logo-wrapper"]} `
        }
      >
        <Image src={"/images/common/logo.webp"} fill />
      </div>
    </Link>
  )
}
