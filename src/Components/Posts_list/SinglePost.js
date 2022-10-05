import React from 'react'
import TextsPost from './TextsPost.js'

export default function SinglePost(){
    return(
        <>
            <article className="singlepost">
                <div className="singlepost__image">
                    foto
                </div>
                <div className="singlepost__texts">
                    <TextsPost/>
                </div>
                <div className="texts-post-arrow">
                »
                </div>
            </article>
        </>
    )
}