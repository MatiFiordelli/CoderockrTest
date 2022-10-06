import React, { useState, useEffect } from 'react'

export default function TextsPost(props){
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
                Sydney Legros
            </div>

            <div className={titleClass}>
                Possimus saepe et illum molestiae et quibusdam
            </div>

            <div className={detailsClass}>
                Excepturi quod aliquid impedit earum consequatur eos. In quo fuga ad odio beatae
            </div>
        </div>
    )
}