import { gsap } from "gsap";

import React from 'react'

function animatedtext() {
    gsap.to(".box", {
        scrollTrigger: ".box", // start the animation when ".box" enters the viewport (once)
        x: 500,
      });
  return (
    <div className="box">animatedtext</div>
  )
}

export default animatedtext