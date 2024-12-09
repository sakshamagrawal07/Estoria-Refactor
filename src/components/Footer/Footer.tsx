import { Github, Instagram, Linkedin, Mail, Phone } from "lucide-react"
// import "../home/globals.css"
import "./globals.css"

import Link from "next/link";
import { useEffect, useState } from "react";
import { aboutUs, events, ourTeam, slider } from "@/data/home";



export default function Footer() {

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
        backgroundImage: "linear-gradient(180deg, #090913 0%, #010101 90%)",
       
       
    }
    const style5 = {
        border: 0
    }

    return (
        <footer  className="flex p-10 flex-col lg:flex-row bg-slate-900 text-white">
        <section className="lg:w-1/3 p-10 lg:p-5 flex  flex-col justify-center items-center gap-10 ">
        
            
            <img  className="w-fit h-fit  max-h-96 justify-center align-middle items-center " src="https://i.ibb.co/CMpS6Pr/logo2.png" alt="Estoria" />
            <h1 className="text-center text-9xl">Estoria</h1>
            <h2 className="p-l-20 p-r-20 text-center text-6xl">Dynamics of Stages and Screen</h2>
          
          
          </section>
        <section className="lg:w-1/3  flex-col px-20 hidden lg:flex">
          <h1 className="text-7xl py-10 font-bold">Browse</h1>
    
          <ul className="text-5xl hover:*:underline my-6 space-y-16 > * + *  ">
            <li><a href="">Home</a></li>
            <li><a href="">Gallery</a></li>
            <li><a href="">Events</a></li>
            <li><a href="">Our team</a></li>
            <li><a href="">Our wings</a></li>
          </ul>
        </section>
        <section className="lg:w-1/3 flex  flex-col justify-center items-center  px-20 py-20 text-center lg:py-0 ">
           
                <h1 className= "text-7xl px-5 py-10 font-bold" >Contact Us</h1>
                    <ul className="felx flex-col text-4xl p-5 space-y-5 > * + * *:grid" >
                        <li ><span>Sameer Jain (Club Lead)</span><strong className="flex justify-center align-middle items-center gap-4"> <span className="text-7xl">✆</span> +91 1234567890</strong> </li> 
                        <li ><span>Sameer Jain (Co-lead)</span> <strong className="flex justify-center align-middle items-center gap-4"> <span className="text-7xl">✆</span> +91 1234567890</strong> </li> 
                        <li>Email us at <strong>estoria@estoria.com</strong></li>
                       
                    </ul>
                  <h2 className="text-4xl p-5 font-bold">  Find us At : </h2>
                  
                  <iframe className="max-w-full rounded-3xl" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3726.064267689423!2d79.02379987471234!3d20.94993409048242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd4c0529518230f%3A0x45b76be0621cbb88!2sIndian%20Institute%20of%20Information%20Technology%2C%20Nagpur%20(IIITN)!5e0!3m2!1sen!2sin!4v1713753805056!5m2!1sen!2sin" width="600" height="450"  allowFullScreen={false} loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>            
        </section>
      </footer>
    )
}