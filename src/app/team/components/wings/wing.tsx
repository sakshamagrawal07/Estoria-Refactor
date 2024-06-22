import Row from "./row";
import SectionTitle from "./section-title";
import TopRow from "./top-row";
// import styles from "../page.module.css"
import  "./global.css";


export default function Wing(){
    return (
        <div className="section">
            <SectionTitle title="Acting"/>
            <TopRow/>
            <Row/>
        </div>
    )
}