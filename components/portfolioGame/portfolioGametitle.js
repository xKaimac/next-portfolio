import styles from '@/styles/portfoliogame.module.css'

export function PortfolioGameTitle() {
    return (
        <h1 className={styles.title}>
            Use the arrow keys, or WASD, to move. 
            Press the spacebar to interact with objects when prompted. 
            Each building has an object that can be interacted with. 
            This is shown with a glowing outline of the object.
        </h1>
    )
}