// import styles from "../page.module.css"
import  "./global.css";


export default function SectionTitle({ title }: { title: string }) {
    // const divClass = `${styles.flex} ${styles.flexRow} ${styles.gap2}`
    // const heading = `${styles.header} ${styles.subHeading}`
    const divClass = "flex flexRow gap2"
    const heading = "header subHeading"
    return (
        <div className={divClass}>
            <div className={heading}>{title.substring(0, 1)}<span className="samkaran">{title.substring(1)}</span></div>
        </div>
    )
}