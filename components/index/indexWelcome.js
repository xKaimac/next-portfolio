import styles from "@/styles/Home.module.css";

export function IndexWelcome() {
    return (
        <div className={styles.container}>
            <div className={styles.left}>
              <h1 className={styles.title}>Welcome to My Portfolio.</h1>
            </div>
            <div className={styles.right}>
              <img src="https://res.cloudinary.com/dhfmjugt0/image/upload/v1680128222/ezgif_com_gif_maker_a621f6de87.gif?updated_at=2023-03-29T22:17:02.884Z" alt="Image could not be loaded" />
            </div>
        </div>
    )
}