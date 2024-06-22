import Card from "../card/card";
import  "./global.css";

const obj = {
    firstName:"Saksham",
    lastName:"Agrawal",
    position: "member",
    insta : "https//www.google.com"
}

export default function Row() {
    return (
        // <div className={styles.row}>
        <div className="row">
            <Card {...obj}/>          
            <Card {...obj}/>
            <Card {...obj}/>          
            <Card {...obj}/>          
            <Card {...obj}/>          
        </div >
    )
}