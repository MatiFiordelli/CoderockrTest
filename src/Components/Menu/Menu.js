import React, { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Contact from '../Contact/contact.js'

export default function Menu(){

    /*for mobile devices*/
    const [btnHamburgerEffect, setBtnHamburgerEffect] = useState(false)
    let btnLine1, btnLine2, btnLine3, menuMobile

    btnLine1 = document.querySelector('.hamburger-button__line1')
    btnLine2 = document.querySelector('.hamburger-button__line2')
    btnLine3 = document.querySelector('.hamburger-button__line3')
    menuMobile = document.querySelector('.menu-mobile')

    const showX = () => {
        btnLine1.style.transform = 'translate(0, 11px) rotate(-45deg)'
        btnLine2.style.opacity = '0'
        btnLine3.style.transform = 'translate(0, -11px) rotate(45deg)'
        menuMobile.style.opacity = '1'
        setBtnHamburgerEffect(!btnHamburgerEffect)
    }
    const showHamburger = () => {
        btnLine1.style.transform = 'translate(0, 0px) rotate(0deg)'
        btnLine2.style.opacity = '1'
        btnLine3.style.transform = 'translate(0, 0px) rotate(0deg)'
        menuMobile.style.opacity = '0'
        setBtnHamburgerEffect(!btnHamburgerEffect)
    }

    const buttonMenuEffect = () => {
        !btnHamburgerEffect
            ?showHamburger()
            :showX()
    }/*for mobile devices*/


    //Hide Menu Bar on scroll (Optional Effect)
    const [prevScrollPos, setPrevScrollPos]  = useState(window.pageYOffset)
    window.onscroll = () => {
		let currentScrollPos = window.pageYOffset
        let el = document.querySelector('.menu')
        let el2 = document.querySelector('.hamburger-button')
        let el3 = document.querySelector('.menu-mobile')

		//Controls if the scrollY is up or down
		if (prevScrollPos > currentScrollPos) {
			el.style.top = '0px'
            el2.style.opacity = '1'
            showHamburger()
		}else {
			el.style.top = '-100px'
            el2.style.opacity = '0'
            el3.style.opacity = '0'
		}
		setPrevScrollPos(currentScrollPos)
	}


    return(
        <header className="menu-container">
            {/*menu for other devices*/}
            <ul className="menu">
                <li className="menu__logo"><Link to="/">Rockr Blog</Link></li>
                <li className="menu__items menu__items--posts"><Link to="/">Posts</Link></li>
                <li className="menu__items menu__items--contact"><Link to="/contact">Contact</Link></li>
            </ul>

            {/* menu for mobile devices */}
            <div className="hamburger-button" onClick={()=>buttonMenuEffect()}>
                <div className="hamburger-button__line1"></div>
                <div className="hamburger-button__line2"></div>
                <div className="hamburger-button__line3"></div>
            </div>
            <div className="menu-mobile">
                <li className="menu-mobile__items"><Link to="/">Posts</Link></li>
                <li className="menu-mobile__items"><Link to="/contact">Contact</Link></li>
            </div>

            <Routes>
                <Route path="/" element=""></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
        </header>
    )
}