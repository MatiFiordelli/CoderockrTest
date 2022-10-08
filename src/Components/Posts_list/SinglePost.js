import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { DataContext } from '../Main.js'
import TextsPost from './TextsPost.js'

export default function SinglePost(props){
    const {data} = useContext(DataContext)
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
                <img className="singlepost__image" 
                    src={data[props.index].imageUrl} 
                    alt="Image Article" 
                    title={data[props.index].title} />

                <div className="singlepost__texts">
                    <TextsPost origin="single" index={props.index}/>
                </div>
                <div className="texts-post-arrow">
                    <Link to={`/post/${data[props.index].id}`}>»</Link>
                </div>
            </article>
    )
}