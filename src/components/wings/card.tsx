'use client'
import "./global.css"
import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface CardProp{
    index:string,
    title:string
}

export default function Card(prop:CardProp){
    const tiltRef = useRef(null);
    useEffect(() => {
        if (tiltRef.current) {
          VanillaTilt.init(tiltRef.current, {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.5,
          });
        }
      }, []);
    
    return (
        <div ref={tiltRef} className="card">
            <div className="content">
                <h2>{prop.index}</h2>
                <h3>{prop.title}</h3>
            </div>
        </div>
    )
}