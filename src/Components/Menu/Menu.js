import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Contact from '../Contact/contact.js'

export default function Menur(){
    return(
        <header className='menu-container'>
            <ul className='menu'>
                <li className='menu__logo'><Link to="/">Rockr Blog</Link></li>
                <li className='menu__items menu__items--posts'><Link to="/">Posts</Link></li>
                <li className='menu__items menu__items--contact'><Link to="/contact">Contact</Link></li>
            </ul>

            <Routes>
                <Route path="/" element=""></Route>
                <Route path="/contact" element={<Contact/>}></Route>
            </Routes>
        </header>
    )
}