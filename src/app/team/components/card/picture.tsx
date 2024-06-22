// import styles from "./card.module.css"
import "./global.css"

export default function Picture({src}:{src:string}) {
    return (
        <div className="picture">
            <img className="imgFluid" src={src}/>;
        </div>
    )
}