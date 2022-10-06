import React from 'react'
import Menu from './Menu/Menu.js'
import PostsList from './Posts_list/PostsList.js'
import Post from './Post/Post.js'

export default function Main(){
    return(
        <>
            <Menu/>
           <PostsList/>
           {/* <Post/> */} 
        </>
    )
}