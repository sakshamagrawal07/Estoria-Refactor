'use client'

import { CalendarDays, Camera, Feather, House, Menu, Phone, Users } from "lucide-react"
import "./globals.css"
import { usePathname } from "next/navigation"
import { useState } from "react";

export default function NavBar() {

    const currPath :string  = usePathname();

    const [menuOpen, setmenuOpen] = useState(false);

    const links = [
        {name : "Home" , path : "/"},
        { name : "Gallery" , path : "/gallery" },
        { name : "Events" , path : "/timeline" },
        { name : "Our Team" , path : "/team" },
        { name : "Our Wings" , path : "/wings" },
    ]
    
        

    const isOpen= (path : string)=>{
        return currPath === path;
    }


   
    return (
        <header className=" text-white sticky top-0 left-0 bottom-0 right-0 z-10 flex mb-9" style={{zIndex:1000000000}}>
              <section style={{
                    display:"flex",
                    alignItems:"center", 
                    justifyContent: "space-between",
                    minWidth:"100%",
                    
              }} className="mx-auto p-10 ">  
                    
                  <h5 className="flex text-5xl font-medium  samkaran w-full lg:w-auto text-wrap min-w-20">
                      <a href="/" className="flex gap-10 items-center">
                      <img  className="w-20 h-20 " src="./logo2.png" alt="Estoria" />
                      <span>Estoria </span></a>
                  </h5>
                  <div>
                      <button id="mobile-open-button " className="text-3xl lg:hidden focus:outline-none self-end " onClick={()=>setmenuOpen(!menuOpen)}>
                          { menuOpen?<>&#10006;</>:<>&#9776;</>}
                      </button>
                      <nav className="hidden lg:flex space-x-8 text-2xl" aria-label="main" >
                            <ul className="flex gap-6 ">
                           
                            { links.map( (link, index)=><li key={index} className="hover:opacity-80 underline-offset-2"> <a href={link.path}  className={(isOpen(link.path))?"underline":" " } > {link.name}</a></li> 
                            )}
                            </ul>
                            
                      </nav>
                  </div>
              </section>
              

                {
                    menuOpen && (
                        <section id="mobile-menu" className="top-0 justify-center absolute  w-full origin-top  flex-col bg-black text-5xl -z-10 lg:hidden" >
                   
                            <nav className="flex min-h-screen flex-col items-center py-8 justify-center  " aria-label="mobile">

                                {
                                    links.map((link, index)=>(
                                        <a key ={index} href={link.path} className="w-full py-6 text-center hover:opacity-70"><span className={(isOpen(link.path))?"underline":" " }>{link.name}</span></a>
                                
                                    ))
                                }

                      
                            </nav>
                        </section>
                    )
                }

              
                        
                        

               

              
          </header>
    )
}