import React from 'react'
import Menu from './Menu/Menu.js'
import PostsList from './Posts_list/PostList.js'
import Post from './Post/Post.js'
import Contact from './Contact/contact.js'

export default function Main(){
    return(
        <main className='main'>
            
            {/*<Contact/>
            <Post/>*/}
            <Menu/>
            <PostsList/>
        </main>
    )
}