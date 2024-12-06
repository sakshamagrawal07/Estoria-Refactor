import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react"
import "./globals.css"
import Slider from "./slider"
import Link from "next/link";
import { useEffect, useState } from "react";
import { aboutUs, events, ourTeam, slider } from "@/data/home";

export interface HomeCard {
    _id?: string;
    description?: string;
    imageUrls: string[];
    cardType?: string;
    image?: string;
    title?: string;
}

export default function Card() {

    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch('../../admin/api/home')
    //         .then(response => {
    //             console.log("JSON RES", response);
    //             return response.json();
    //         })
    //         .then(res => {
    //             const fetchedData = res.message;
    //             setData(fetchedData); // Assuming setData is a useState function

    //             console.log("RES : ", fetchedData);
    //         })
    //         .catch(error => {
    //             console.error("Error fetching data:", error);
    //         });

    // }, []);

    //@ts-ignore
    // const aboutUs: HomeCard[] = data?.filter((card) => card.cardType === "About Us")
    //@ts-ignore
    // const events: HomeCard[] = data?.filter((card) => card.cardType === "Events")
    //@ts-ignore
    // const ourTeam: HomeCard[] = data?.filter((card) => card.cardType === "Our Team")
    // @ts-ignore
    // const slider: HomeCard[] = data?.filter((card) => card.cardType === "Slider")

    // useEffect(() => {
    //     console.log("About us : ", aboutUs)
    // }, [aboutUs])


    

    const style1 = {
        background: "linear-gradient(180deg, #010101 0%, #292929 90%)"
    }
    const style2 = {
        background: "linear-gradient(180deg, #292929 0%, #0f1019 90%)"
    }
    const style3 = {
        backgroundImage: "linear-gradient(180deg, #212125 0%, #090913 90%)"
    }
    const style4 = {
        backgroundImage: "linear-gradient(180deg, #090913 0%, #010101 90%)"
    }
    const style5 = {
        border: 0
    }

    return (
        <>
            <div className="container flex-col" style={style1}>
                <div className="bg-1"></div>
                <div className="left">
                    <div className="flex flex-row gap-2">
                        <div className="header">A<span className="samkaran">BOUT</span><span className="samkaran"> US</span></div>
                    </div>
                </div>
                <div className="right flex">
                    <div className="sub-container flex-row">
                        <div className="sub-left flex text">
                            {aboutUs[0]?.description ? aboutUs[0].description : "Loding..."}
                        </div>
                        <div className="sub-right">
                            <div className="gallery">
                                {
                                    aboutUs[0]?.imageUrls ?
                                        aboutUs[0]?.imageUrls?.map((img, index) => {
                                            return (
                                                <img src={img} alt="Estoria" key={index} loading="lazy" />
                                            )
                                        }) :
                                        <>
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container" style={style2}>
                <div className="bg-1"></div>
                <div className="left">
                    <div className="flex flex-row gap-2">
                        <div className="header">E<span className="samkaran">VENTS</span></div>
                    </div>
                </div>
                <div className="right flex">
                    <div className="sub-container flex-row-reverse">
                        <div className="sub-left flex text">
                            {events[0]?.description ? events[0].description : "Loding..."}
                        </div>
                        <div className="sub-right">
                            <div className="gallery">
                                {
                                    events[0]?.imageUrls ?
                                        events[0]?.imageUrls?.map((img, index) => {
                                            return (
                                                <img src={img} alt="Estoria" key={index} loading="lazy" />
                                            )
                                        }) :
                                        <>
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Slider data={slider} />

            <div className="container" style={style3}>
                <div className="bg-1"></div>
                <div className="left">
                    <div className="flex flex-row gap-2">
                        <div className="header">O<span className="samkaran">UR</span> <span className="samkaran">Team</span></div>
                    </div>
                </div>
                <div className="right flex">
                    <div className="sub-container flex-row">
                        <div className="sub-left flex text">
                            {ourTeam[0]?.description ? ourTeam[0].description : "Loading..."}
                        </div>
                        <div className="sub-right">
                            <div className="gallery">
                                {
                                    ourTeam[0]?.imageUrls ?
                                        ourTeam[0]?.imageUrls?.map((img, index) => {
                                            return (
                                                <img src={img} alt="Estoria" key={index} loading="lazy" />
                                            )
                                        }) :
                                        <>
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                            <img src="../../../../../logo1.jpg" alt="Estoria" loading="lazy" />
                                        </>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container" style={style4} id="contactUs">
                <div className="bg-1"></div>
                <div className="top">
                    <div className="flex flex-row gap-2">
                        <div className="header"><span className="samkaran">CONTACT</span> U<span className="samkaran">S</span></div>
                    </div>
                </div>
                <div className="lower flex flex-row">
                    <div className="sub-container flex-row-reverse h-[1px]">
                        <div className="sub-left flex text h-full">
                            <div className="w-full h-full flex flex-wrap flex-col">
                                <div className="flex justify-between w-full items-start contact-us">
                                    <div className="flex flex-col w-1/2 h-1/2 p-10">
                                        <div className="mr-2 rounded-full w-12 h-12 flex"><Phone size={35} /></div>
                                        <p className="title">CALL US :</p>
                                        <p className="contact-name">Sameer Jain (Club Lead)</p>
                                        <p className="phone">+91 1234567890</p>
                                        <p className="contact-name">Sameer Jain (Club Co-Lead)</p>
                                        <p className="phone">+91 1234567890</p>
                                    </div>
                                    <div className="flex flex-col w-1/2 h-1/2">
                                        <div className="mr-2 rounded-full w-12 h-12 flex"><Mail size={35} /></div>
                                        <p className="title">EMAIL US :</p>
                                        <p>estoria@iiitn.ac.in</p>
                                    </div>
                                </div>
                                <div className="flex flex-col">
                                    <p className="title">FOLLOW US ON :</p>
                                    <div className="flex justify-between mt-2 w-auto">
                                        <Link href="https://www.instagram.com/estoria_iiitn/" rel="noopener noreferrer" target="_blank" >
                                            <Instagram className="social-icons" size={30} />
                                        </Link>
                                        {/* <Link href="/" color="warning" className="text-black" rel="noopener noreferrer" target="_blank" >
                                            <Linkedin className="social-icons" size={30} />
                                        </Link> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sub-right">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.064267689423!2d79.02379987471234!3d20.94993409048242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0529518230f%3A0x45b76be0621cbb88!2sIndian%20Institute%20of%20Information%20Technology%2C%20Nagpur%20(IIITN)!5e0!3m2!1sen!2sin!4v1713753805056!5m2!1sen!2sin" width="600" height="450" style={style5} allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}