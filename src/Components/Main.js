import React from 'react'
import Menu from './Menu/Menu.js'
import Posts from './Posts_list/Posts.js'

export default function Main(){
    return(
        <main className='main'>
            <Menu/>
            <Posts/>
        </main>
    )
}