import React from 'react'
import TextsPost from './TextsPost.js'

export default function DoublePostLeft(){
    return(
        <>
            <article className="doublepost">
                <div className="doublepost__image doublepost__image--position1">
                    foto
                </div>
                <div className="doublepost__texts doublepost__texts--position1">
                    <TextsPost origin="double"/>
                    <div className="texts-post-arrow">
                    »
                    </div>
                </div>
                <div className="doublepost__image doublepost__image--position2">
                    foto
                </div>
                <div className="doublepost__texts doublepost__texts--position2">
                    <TextsPost origin="double"/>
                    <div className="texts-post-arrow">
                    »
                    </div>
                </div>
            </article>
        </>
    )
}