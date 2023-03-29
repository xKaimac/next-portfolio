import Link from "next/link";

import styles from "@/styles/oldwebsite.module.css";

export function OldWebsiteCode() {
    return (
        <>
            <div className={styles.infoContainer}>
                <p>
                    To see the source code, check it out on my GitHub!
                </p>
                <Link href="https://github.com/xKaimac/Porfolio-site">
                    <img className={styles.icon} 
                         src="https://res.cloudinary.com/dhfmjugt0/image/upload/v1679919741/github_sign_d6629583be.png?updated_at=2023-03-27T12:22:22.545Z" />
                </Link>
            </div>
        </>
    )
}