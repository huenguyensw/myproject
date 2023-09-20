import React from 'react'
import styleForm from '../styles/style.module.css'


const Banner = () => {
  return (
    <div className={styleForm.bannerContainer}>
      <p className={styleForm.title} >Wellcome My App</p>
      <img className={styleForm.image} src='../banner.avif'></img>
    </div>
  )
}

export default Banner



