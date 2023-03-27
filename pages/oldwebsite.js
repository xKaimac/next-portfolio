import React from 'react';

import styles from "@/styles/oldwebsite.module.css";

export default function oldwebsite() {
  return (
    <div className={styles.container}>
        <div className={styles.titleContainer}>
            <h1 className={styles.title}>
                
            </h1>
        </div>
        <iframe className={styles.game} src="http://public-start.surge.sh/pyGame" name="myiFrame" scrolling="no" frameborder="1" marginheight="0px" marginwidth="0px" width="1000px" allowfullscreen ></iframe>
        <br/>
    </div>
  )
}