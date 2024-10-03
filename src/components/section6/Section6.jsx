"use client";
import Image from 'next/image';
import React from 'react';
import "./styles.scss"
import img1 from "../../assets/productivity/img1.svg";
import img2 from "../../assets/productivity/img2.svg";
import img3 from "../../assets/productivity/img3.svg";

const Section6=()=> {
  return (
    <div className='EnhancingProductivity'>

      <div className='Enhcontainer'>
        <h4>{("Enhancing Productivity").toLocaleUpperCase()}</h4>
        <h1>Streamlined Decisions and Global Collaboration</h1>
     

      <div className='three-container'>

        <div className='box1'>
          <Image src={img1} alt='ekai' />
          <p>
            Save hours for critical <br />
            thinking and creative work
          </p>
        </div>
        <div className='box2'>
          <Image src={img2} alt='ekai' />
          <p>
            Faster decision making by <br /> removing blockers
          </p>
        </div>
        <div className='box3'>
          <Image src={img3} alt='ekai' />
          <p>
            Enable cross time zone team <br /> collaboration
          </p>
        </div>

      </div>
      </div>

    </div>
  )
}

export default Section6