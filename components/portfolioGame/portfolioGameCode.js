import Link from "next/link";

import styles from "@/styles/portfoliogame.module.css";

export function PortfolioGameCode() {
    return (
        <>
            <div className={styles.infoContainer}>
                <p>To see the source code, check it out on my GitHub!</p>
                <Link href="https://github.com/xKaimac/Resume-Game">
                    <img className={styles.icon} 
                         src="https://res.cloudinary.com/dhfmjugt0/image/upload/v1679919741/github_sign_d6629583be.png?updated_at=2023-03-27T12:22:22.545Z" />
                </Link>
            </div>
        </>
    )
}