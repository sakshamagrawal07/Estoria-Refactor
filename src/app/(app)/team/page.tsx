"use Client";

import Card from "@/components/team/card";
import Wing from "@/components/team/wing";

export default function Teams() {

    const obj = {
        firstName: "Saksham",
        lastName: "Agrawal",
        position: "member"
    }
    return (
        <div className="flex flex-col gap-2">
            <div className="flex flex-row gap-2">
                {/* <div className="header-logo">
                    <img src="../logo.jpg" alt="logo" />
                </div> */}
                <div className="header"><span className="samkaran">OUR</span>T<span className="samkaran">EAM</span></div>
            </div>
            <div className="container">
                {/* <TopRow /> */}
                <div className="col-12 col-sm-6 col-md-4 col-lg-3"></div>
                <div className="topRow flex">
                    <Card {...obj} />
                    <Card {...obj} />
                </div >
                <Wing />
                <hr className="sectionBreak" />
                <Wing />
            </div>
        </div>
    )
}