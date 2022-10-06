import React from 'react'
import DoublePostLeft from './DoublePostLeft'
import DoublePostRight from './DoublePostRight'
import SinglePost from './SinglePost'

export default function PostsList(){
    return(
        <div className="posts-list">
            <article>
                <DoublePostLeft/>
            </article>
            <article>
                <SinglePost position="left"/>  
            </article>
            <article>
                <DoublePostRight/>
            </article>
            <article>
                <SinglePost position="right"/>  
            </article>
        </div>
    )
}