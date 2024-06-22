// import styles from "./card.module.css"
import "./global.css"

interface TeamContentProp{
    firstName : string;
    lastName : string;
    position : string;
}

export default function TeamContent({firstName,lastName,position} : TeamContentProp) {
    // const spanClass = `${styles.nameSpan} ${styles.samkaran}`
    const spanClass = "nameSpan samkaran"
    return (
        <div className="team-content">
            <h1 className="name">{firstName.substring(0,1)}<span className={spanClass}>{firstName.substring(1)}</span> {lastName.substring(0,1)}<span className={spanClass}>{lastName.substring(1)}</span></h1>
            <h4 className="title">{position}</h4>
        </div>
    )
}