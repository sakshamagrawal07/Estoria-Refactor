import TeamContent from "./team-content"
import Picture from "./picture"
import Socials from "./social"
// import cardCss from "./card.module.css"
import "./global.css"

export interface CardProp{
    src?:string;
    firstName:string;
    lastName:string;
    position:string;
    insta?:string;
    linkedIn?:string;
    github?:string;
}

export default function Card(prop : CardProp){
    return (
        <div className="ourTeam">
            <Picture src={prop.src!==undefined?prop.src:"../../../../../img1.jpeg"}/>
            <TeamContent firstName={prop.firstName} lastName={prop.lastName} position={prop.position}/>
            <Socials insta={prop.insta} linkedIn={prop.linkedIn} github={prop.github}/>
        </div>
    )
}