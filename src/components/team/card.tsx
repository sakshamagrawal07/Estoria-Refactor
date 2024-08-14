import { Github, Instagram, Linkedin } from "lucide-react";
import "./global.css"

export interface CardProp {
    imageUrl?: string;
    name: string;
    position: string;
    insta?: string|undefined;
    linkedIn?: string|undefined;
    github?: string|undefined;
}

export default function Card({ imageUrl, name, position, insta, linkedIn, github }: CardProp) {
    console.log("linkedin : ",linkedIn)
    const nameBroken = name.split(" ")
    return (
        <div className="ourTeam">
            <div className="picture">
                <img className="imgFluid" src={imageUrl !== undefined ? imageUrl : "../../../../../user.png"} loading="lazy"/>
            </div>
            <div className="team-content">
                <h1 className="name">{nameBroken[0].substring(0, 1)}<span className="nameSpan samkaran">{nameBroken[0].substring(1)}</span> {nameBroken[1]?.substring(0, 1)}<span className="nameSpan samkaran">{nameBroken[1]?.substring(1)}</span></h1>
                <h4 className="title">{position}</h4>
            </div>
            <ul className="social">
                {/* {prop.insta !== undefined && <li><a href={prop.insta} aria-hidden="true"><i className="icon fa-brands fa-instagram"></i></a></li>} */}
                {insta !== undefined && <li><a href={insta} aria-hidden="true"><Instagram /></a></li>}
                {/* {prop.linkedIn !== undefined && <li><a href={prop.linkedIn} aria-hidden="true"><i className="icon fa-brands fa-linkedin"></i></a></li>} */}
                {linkedIn !== undefined && <li><a href={linkedIn} aria-hidden="true"><Linkedin /></a></li>}
                {/* {prop.github !== undefined && <li><a href={prop.github}><i className="icon fa-brands fa-github"></i></a></li>} */}
                {github !== undefined && <li><a href={github}><Github /></a></li>}
            </ul>
        </div>
    )
}