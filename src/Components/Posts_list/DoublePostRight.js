import React, { useContext } from 'react'
import { DataContext } from '../Main.js'
import TextsPost from './TextsPost.js'

export default function DoublePostRight(props){
    const {data, setData} = useContext(DataContext)

    return(
        <>
            <article className="doublepost">
                <div className="doublepost__texts doublepost__texts--position1reverse">
                    <TextsPost origin="double" index={props.index-1}/>
                    <div className="texts-post-arrow">
                    »
                    </div>
                </div>
                <div><img className="doublepost__image doublepost__image--position1reverse" 
                    src={data[props.index-1].imageUrl} 
                    alt="Image Article" 
                    title={data[props.index-1].title} />
                </div>
                <div className="doublepost__texts doublepost__texts--position2reverse">
                    <TextsPost origin="double" index={props.index}/>
                    <div className="texts-post-arrow">
                    »
                    </div>
                </div>
                <img className="doublepost__image doublepost__image--position2reverse" 
                    src={data[props.index].imageUrl} 
                    alt="Image Article" 
                    title={data[props.index].title} />
            </article>
        </>
    )
}