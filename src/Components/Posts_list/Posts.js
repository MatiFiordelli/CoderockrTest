import React from 'react'
import DoublePostLeft from './DoublePostLeft'
import DoublePostRight from './DoublePostRight'
import SinglePost from './SinglePost'

export default function Posts(){
    return(
        <div className="posts-list">
            <article className="asd">
                <DoublePostLeft/>
                <SinglePost/>
                <DoublePostRight/>
            </article>
        </div>
    )
}