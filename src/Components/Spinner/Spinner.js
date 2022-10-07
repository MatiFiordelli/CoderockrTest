import React, { useContext } from 'react'
import { SpinnerContext } from '../Main'

export default function Spinner(){
    const {spinner} = useContext(SpinnerContext)

    return(
        <>
        {spinner &&
        (<div className='spinner-container'>
            <div className='spinner-container__circle'/>
        </div>)}
        </>
    )
}