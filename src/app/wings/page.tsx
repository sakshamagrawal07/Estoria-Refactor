"use Client"

import Card from "./components/card";
import "./global.css";
// import VanillaTilt from "./vanilla-tilt"

export default function Wings() {

    const cultural = [
        { index: "01", title: "ACTING" },
        { index: "02", title: "POETRY " },
        { index: "03", title: "SCRIPT-WRITING" },
        { index: "04", title: "CINEMATO-GRAPHY" },
    ]
    const nonCultural = [
        { index: "01", title: "MANAGEMENT" },
        { index: "02", title: "MARKETING" },
        { index: "03", title: "COORPORATE & PR" },
        { index: "04", title: "DESIGN" },
        { index: "05", title: "SOCIAL MEDIA" }
    ]

    const culturalCards = [
        <Card {...cultural[0]} />,
        <Card {...cultural[1]} />,
        <Card {...cultural[2]} />,
        <Card {...cultural[3]} />
    ]
    const nonCulturalCards = [
        <Card {...nonCultural[0]} />,
        <Card {...nonCultural[1]} />,
        <Card {...nonCultural[2]} />,
        <Card {...nonCultural[3]} />,
        <Card {...nonCultural[4]} />
    ]

    const allCards = [...culturalCards, ...nonCulturalCards]

    return (
        <>
            <div className="flex flex-row gap-2">
                <div className="header"><span className="samkaran">OUR</span>W<span className="samkaran">INGS</span></div>
            </div>
            <div className="flex flex-row gap-2">
                <div className="header sub-heading">C<span className="samkaran">ULTURAL</span></div>
            </div>
            <div className="content">
                {/* <Card {...cultural[0]} />
                <Card {...cultural[1]} />
                <Card {...cultural[2]} />
                <Card {...cultural[3]} /> */}
                {...culturalCards}
            </div>
            <div className="flex flex-row gap-2">
                <div className="header sub-heading">N<span className="samkaran">ON</span> C<span className="samkaran">ULTURAL</span></div>
            </div>
            <div className="content">
                {...nonCulturalCards}
            </div>
            {/* <script type="text/javascript" src="./vanilla-tilt.js"></script> */}
            {/* {VanillaTilt.init([...culturalCards, ...nonCulturalCards], {
                max: 25,
                speed: 400
            })
            } */}
        </>
    )
}