import React from 'react'
import TextsPost from './TextsPost.js'

export default function DoublePostRight(){
    return(
        <>
            <article className="doublepost">
                <div className="doublepost__texts doublepost__texts--position1reverse">
                    <TextsPost/>
                    <div className="texts-post-arrow">
                    »
                    </div>
                </div>
                <div className="doublepost__image doublepost__image--position1reverse">
                    foto
                </div>
                <div className="doublepost__texts doublepost__texts--position2reverse">
                    <TextsPost/>
                    <div className="texts-post-arrow">
                    »
                    </div>
                </div>
                <div className="doublepost__image doublepost__image--position2reverse">
                    foto
                </div>
            </article>
        </>
    )
}