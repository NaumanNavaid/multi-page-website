import Link from 'next/link'
import React from 'react'
import styles from "./header.module.css"

const header = () => {
  return (
    <div className={styles.header}>
       <ul className={styles.ul}>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        </ul>   







     </div>
  )
}

export default header