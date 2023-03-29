import styles from "@/styles/oldwebsite.module.css";

export function OldWebsiteIframe() {
    return (
        <>
            <iframe className={styles.game} 
                    src="https://portfolio-site-gamma-snowy.vercel.app" 
                    name="myiFrame"  
                    allowfullscreen >
            </iframe>
        </>
    )
}