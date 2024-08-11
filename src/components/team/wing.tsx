// "use client"

import "./global.css";
import Card from "./card";


export default function Wing() {
    const title = "Acting"
    const obj = {
        firstName: "Saksham",
        lastName: "Agrawal",
        position: "member",
        insta: "https//www.google.com"
    }

    return (
        <div className="section">
            <div className="flex flexRow gap2">
                <div className="header subHeading">
                    {title.substring(0, 1)}
                    <span className="samkaran">
                        {title.substring(1)}
                    </span>
                </div>
            </div>
            <div className="col-12 col-sm-6 col-md-4 col-lg-3"></div>
            <div className="topRow flex">
                <Card {...obj} />
            </div >
            <div className="row">
                <Card {...obj} />
                <Card {...obj} />
                <Card {...obj} />
                <Card {...obj} />
                <Card {...obj} />
            </div >
        </div>
    )
}