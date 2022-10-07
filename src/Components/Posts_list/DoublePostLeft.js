import React, { useContext } from 'react'
import { DataContext } from '../Main.js'
import TextsPost from './TextsPost.js'

export default function DoublePostLeft(props){
    const {data, setData} = useContext(DataContext)
    console.log(props.index)
    return(
        <>
            <article className="doublepost">
                <img className="doublepost__image doublepost__image--position1" 
                    src={data[props.index-1].imageUrl} 
                    alt="Image Article" 
                    title={data[props.index-1].title} />

                <div className="doublepost__texts doublepost__texts--position1">
                    <TextsPost origin="double" index={props.index-1}/>
                    <div className="texts-post-arrow">
                    »
                    </div>
                </div>
                <img className="doublepost__image doublepost__image--position2" 
                    src={data[props.index].imageUrl} 
                    alt="Image Article" 
                    title={data[props.index].title} />

                <div className="doublepost__texts doublepost__texts--position2">
                    <TextsPost origin="double" index={props.index}/>
                    <div className="texts-post-arrow">
                    »
                    </div>
                </div>
            </article>
        </>
    )
}