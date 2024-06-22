import Card from "../card/card";
// import styles from "../page.module.css"
import "./global.css";

const obj = {
    firstName: "Saksham",
    lastName: "Agrawal",
    position: "member"
}

export default function TopRow() {
    // const divClass = `${styles.topRow} ${styles.flex}`
    const divClass = "topRow flex"
    return (
        <>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3"></div>
            <div className={divClass}>
                <Card {...obj} />
            </div >
        </>
    )
}