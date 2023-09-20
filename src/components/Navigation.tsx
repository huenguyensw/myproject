import Link from 'next/link'
import React from 'react'
import styleForm from '../styles/style.module.css'


const Navigation = () => {
  return (
    <ul className={styleForm.nav}>
        <li><Link className={styleForm.listItem} id='home' href='/'>Home</Link></li>
        <li><Link className={styleForm.listItem} href='/TodoAppPage'>TODO app</Link></li>
        <li><Link className={styleForm.listItem} href='/ContactPage'>Contact us</Link></li>
      
    </ul>
  )
}

export default Navigation
