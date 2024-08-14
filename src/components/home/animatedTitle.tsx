'use client'

import "./globals.css"
import { useEffect, useRef } from "react";

export default function AnimatedTitle() {

  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current;
    //@ts-ignore
    const ctx = canvas.getContext('2d');
    const w = window.innerWidth;
    const h = window.innerHeight;
    const rate = 70;
    const arc = 100;
    const size = 7;
    const speed = 15;
    const parts = new Array();
    const colors = ["red", "#f57900", "yellow", "#ce5c00", "#5c3566"];
    const mouse = { x: 0, y: 0 };
    //@ts-ignore
    canvas.width = w;
    //@ts-ignore
    canvas.height = h;

    let time = 0;

    function create() {
      for (let i = 0; i < arc; i++) {
        parts.push({
          x: Math.ceil(Math.random() * w),
          y: Math.ceil(Math.random() * h),
          toX: Math.random() * 5 - 1,
          toY: Math.random() * 2 - 1,
          c: colors[Math.floor(Math.random() * colors.length)],
          size: Math.random() * size,
        });
      }
    }

    function particles() {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < arc; i++) {
        const li = parts[i];
        let distanceFactor = DistanceBetween(mouse, parts[i]);
        distanceFactor = Math.max(Math.min(15 - distanceFactor / 10, 10), 1);
        ctx.beginPath();
        ctx.arc(li.x, li.y, li.size * distanceFactor, 0, Math.PI * 2, false);
        ctx.fillStyle = li.c;
        ctx.strokeStyle = li.c;
        if (i % 2 === 0) ctx.stroke();
        else ctx.fill();

        li.x = li.x + li.toX * (time * 0.05);
        li.y = li.y + li.toY * (time * 0.05);

        if (li.x > w) li.x = 0;
        if (li.y > h) li.y = 0;
        if (li.x < 0) li.x = w;
        if (li.y < 0) li.y = h;
      }
      if (time < speed) time++;
      requestAnimationFrame(particles);
    }

    function DistanceBetween(p1:any, p2:any) {
      const dx = p2.x - p1.x;
      const dy = p2.y - p1.y;
      return Math.sqrt(dx * dx + dy * dy);
    }

    function MouseMove(e:any) {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    }

    window.addEventListener('mousemove', MouseMove, false);
    create();
    particles();

    return () => {
      window.removeEventListener('mousemove', MouseMove, false);
    };
  }, []);

  return (
    <div className="container flex-col">
      <div className="logo">
        <img src="../../../../../logo2.png" id="logo" alt="logo" />
      </div>

      <div className="heading"><span className="heading-text">EST</span>Ó<span className="heading-text">RIA</span></div>
      <div className="sub-heading">
        <span className="sub-heading-text">DYNAMICS of stages and screens</span>
      </div>

      <canvas id="canvas" ref={canvasRef}></canvas>
    </div>
  );
}
