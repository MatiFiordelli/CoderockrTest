import React, { useState, useEffect } from 'react'
import TextsPost from './TextsPost.js'

export default function SinglePost(props){
    const [positionX, setPositionX] = useState('')

    useEffect(()=>{
        if(props.position === 'left'){
            setPositionX('singlepost position-left')
        } else{
            setPositionX('singlepost position-right')
        }
    },[])

    return(
            <article className={positionX}>
                <div className="singlepost__image">
                    foto
                </div>
                <div className="singlepost__texts">
                    <TextsPost origin="single"/>
                </div>
                <div className="texts-post-arrow">
                » 
                </div>
            </article>
    )
}