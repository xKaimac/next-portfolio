import styles from "@/styles/portfoliogame.module.css";

export function PortfolioGameIframe() {
    return(
        <iframe className={styles.game} 
            src="https://portfolio-site-gamma-snowy.vercel.app/pyGame.html" 
            name="myiFrame" 
            scrolling="no" 
            frameborder="1" 
            marginheight="0px" 
            marginwidth="0px" 
            allowfullscreen>
        </iframe>
    )
}