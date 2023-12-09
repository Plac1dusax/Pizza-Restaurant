import React from "react"
import Navigation from "@/components/commonComponents/Navigation/Navigation"
import styles from "../styles/home.module.scss"

export default function Home() {
  return (
    <div className={styles["homepage-wrapper"]}>
      <Navigation />
    </div>
  )
}
