'use client'
import "./global.css"
import React, { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

interface CardProp {
  name: string;
  description: string;
}

export default function Card({ name, description }:CardProp) {
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
        {/* <h2>{prop.index}</h2> */}
        <h3 className="mb-10">{name}</h3>
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}