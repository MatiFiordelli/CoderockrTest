import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Contact from '../Contact/Contact.js'
import Post from '../Posts_list/Post/Post.js'

export default function Routess() {
    return(
        <>
            <Routes>
                <Route exact path="/" element=""></Route>
                <Route exact path="/contact" element={<Contact/>}></Route>
                <Route exact path="/post/:id" element={<Post/>}></Route>
            </Routes>
        </>
    )
}