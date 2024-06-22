// import styles from "./card.module.css"
import "./global.css"

interface SocialLinks{
    insta?:string;
    linkedIn?:string;
    github?:string;
}

export default function Socials({insta,linkedIn,github}:SocialLinks){
    // const instaClass = `${styles.icon} fa-brands fa-instagram`
    // const linkedInClass = `${styles.icon} fa-brands fa-linkedin`
    // const gitHubClass = `${styles.icon} fa-brands fa-github`
    const instaClass = "icon fa-brands fa-instagram"
    const linkedInClass = "icon fa-brands fa-linkedin"
    const gitHubClass = "icon fa-brands fa-github"
    return (
        <ul className="social">
            {insta!==undefined && <li><a href={insta} aria-hidden="true"><i className={instaClass}></i></a></li>}
            {linkedIn!==undefined && <li><a href={linkedIn} aria-hidden="true"><i className={linkedInClass}></i></a></li>}
            {github!==undefined && <li><a href={github}><i className={gitHubClass}></i></a></li>}
        </ul>
    )
}