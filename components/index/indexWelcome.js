import styles from "@/styles/Home.module.css";

export function IndexWelcome() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
              <h1 className={styles.title}>Welcome to My Portfolio.</h1>
            </div>
            <div className={styles.right}>
              <img src="https://res.cloudinary.com/dhfmjugt0/image/upload/v1680126242/ezgif_1_55ad0192dc_c9f36b04dc.gif?updated_at=2023-03-29T21:44:03.491Z" alt="Image could not be loaded" />
            </div>
        </div>
    )
}