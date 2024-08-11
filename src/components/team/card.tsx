// "use client"

import { Github, Instagram, Linkedin } from "lucide-react";
import "./global.css"

export interface CardProp {
    src?: string;
    firstName: string;
    lastName: string;
    position: string;
    insta?: string;
    linkedIn?: string;
    github?: string;
}

export default function Card(prop: CardProp) {
    return (
        <div className="ourTeam">
            <div className="picture">
                <img className="imgFluid" src={prop.src !== undefined ? prop.src : "../../../../../img1.jpeg"} />
            </div>
            <div className="team-content">
                <h1 className="name">{prop.firstName.substring(0, 1)}<span className="nameSpan samkaran">{prop.firstName.substring(1)}</span> {prop.lastName.substring(0, 1)}<span className="nameSpan samkaran">{prop.lastName.substring(1)}</span></h1>
                <h4 className="title">{prop.position}</h4>
            </div>
            <ul className="social">
                {/* {prop.insta !== undefined && <li><a href={prop.insta} aria-hidden="true"><i className="icon fa-brands fa-instagram"></i></a></li>} */}
                {prop.insta !== undefined && <li><a href={prop.insta} aria-hidden="true"><Instagram /></a></li>}
                {/* {prop.linkedIn !== undefined && <li><a href={prop.linkedIn} aria-hidden="true"><i className="icon fa-brands fa-linkedin"></i></a></li>} */}
                {prop.linkedIn !== undefined && <li><a href={prop.linkedIn} aria-hidden="true"><Linkedin /></a></li>}
                {/* {prop.github !== undefined && <li><a href={prop.github}><i className="icon fa-brands fa-github"></i></a></li>} */}
                {prop.github !== undefined && <li><a href={prop.github}><Github /></a></li>}
            </ul>
        </div>
    )
}