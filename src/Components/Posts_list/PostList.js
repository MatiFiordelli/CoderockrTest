import React from 'react'
import DoublePostLeft from './DoublePostLeft'
import DoublePostRight from './DoublePostRight'
import SinglePost from './SinglePost'

export default function PostsList(){
    return(
        <div className="posts-list">
            <article className="asd">
                <DoublePostLeft/>
            </article>
            {<article className="asd">
                <SinglePost/>  
            </article>}
            <article className="asd">
                <DoublePostRight/>
            </article>
        </div>
    )
}