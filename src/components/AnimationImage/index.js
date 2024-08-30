import React from 'react'
import TransitionImage from "../../assets/intergation.svg"
import "./styles.scss"

export default function index() {
  return (
    <div className='main-image-animation'>
        <h1>See how it works!</h1>
        <img src={TransitionImage} alt="ekai"/>
    </div>
  )
}
