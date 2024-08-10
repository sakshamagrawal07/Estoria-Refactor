'use client'

import { CalendarDays, Camera, Feather, House, Menu, Phone, Users } from "lucide-react"
import "./globals.css"
import { useState } from "react"

export default function NavBar() {

    const [isOpen, setIsOpen] = useState(false);

    const handleHamburgerClick = () => {
      if (isOpen) {
        setIsOpen(false);
        setTimeout(() => {
          const navbar = document.querySelector(".navbar") as HTMLElement;
          if (navbar) {
            navbar.style.display = "none";
          }
        }, 750);
      } else {
        const navbar = document.querySelector(".navbar") as HTMLElement;
        if (navbar) {
          navbar.style.display = "flex";
          setIsOpen(true);
        }
      }
    };

    return (
        <>
            <div className="hamburger" onClick={handleHamburgerClick}><Menu size={40} /></div>
            <div className={`navbar ${isOpen ? "open" : "closed"}`}>
                <ul>
                    <li>
                        <a href="/"><House /></a><span className="tooltip">HOME</span>
                    </li>
                    <li>
                        <a href="/timeline"><CalendarDays /></a><span className="tooltip">EVENTS</span>
                    </li>
                    <li>
                        <a href="/gallery"><Camera /></a><span className="tooltip">GALLERY</span>
                    </li>
                    <li>
                        <a href="/team"><Users /></a><span className="tooltip">OUR TEAM</span>
                    </li>
                    <li>
                        <a href="/wings"><Feather /></a><span className="tooltip">OUR WINGS</span>
                    </li>
                    <li>
                        <a href="/#contactUs"><Phone /></a><span className="tooltip">CONTACT US</span>
                    </li>
                </ul>
            </div>
        </>
    )
}