import React, { useState, useEffect, useContext } from 'react'
import { DataContext } from '../Main.js'

export default function TextsPost(props){
    const {data} = useContext(DataContext)
    const [textsPostOrigin, setTextPostOrigin] = useState('')
    const [nameClass, setNameClass] = useState('')
    const [titleClass, setTitleClass] = useState('')
    const [detailsClass, setDetailsClass] = useState('')
    
    useEffect(()=>{
        if(props.origin === 'double'){
            setTextPostOrigin('texts-post-double')
            setNameClass('texts-post__name-double')
            setTitleClass('texts-post__title-double')
            setDetailsClass('texts-post__details-double')
        }else {
            setTextPostOrigin('texts-post-single')
            setNameClass('texts-post__name-single')
            setTitleClass('texts-post__title-single')
            setDetailsClass('texts-post__details-single')
        }
    }, [])

    return(
        <div className={textsPostOrigin}>
            <div className={nameClass}>
                {props.index!==undefined && data[props.index].author} 
            </div>

            <div className={titleClass}>
                {props.index!==undefined && data[props.index].title} 
            </div>

            <div className={detailsClass}>
                {props.index!==undefined && data[props.index].article} 
            </div>
        </div>
    )
}