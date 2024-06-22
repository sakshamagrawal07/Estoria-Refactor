"use Client";

import TopRow from "./components/wings/top-row";
import Wing from "./components/wings/wing";

export default function Teams() {
    return (
        <>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css"
                integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A=="
                crossOrigin="anonymous" referrerPolicy="no-referrer" />
            <div className="flex flex-row gap-2">
                {/* <div className="header-logo">
                    <img src="../logo.jpg" alt="logo" />
                </div> */}
                <div className="header"><span className="samkaran">OUR</span>T<span className="samkaran">EAM</span></div>
            </div>
            <div className="container">
                <TopRow />
                <Wing />
                <hr className="sectionBreak"/>
                <Wing />
            </div>
        </>
    )
}