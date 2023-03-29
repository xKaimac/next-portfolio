import Head from "next/head";

import styles from "@/styles/blogPosts.module.css";

export function BlogPostsHead() {
  return (
    <>
        <Head>
            <title>{"//"}Blog Posts</title>
        </Head>
        <h1 className={styles.title}>{"//Dev Blog"}</h1>
    </>
  );
}