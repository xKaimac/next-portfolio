import React from 'react';
import Link from 'next/link';

import styles from "@/styles/oldwebsite.module.css";

export default function oldwebsite() {
  return (
    <div className={styles.container}>
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>
                
            </h1>
        </div>
        <iframe className={styles.game} src="https://portfolio-site-gamma-snowy.vercel.app" name="myiFrame" height= "1000px" width="1000px" allowfullscreen ></iframe>
        <br/>
        <p>To see the source code, check it out on my GitHub!</p>
        <Link href="https://github.com/xKaimac/Porfolio-site">
            <img src="https://res.cloudinary.com/dhfmjugt0/image/upload/v1679919741/github_sign_d6629583be.png?updated_at=2023-03-27T12:22:22.545Z" />
        </Link>
    </div>
  )
}