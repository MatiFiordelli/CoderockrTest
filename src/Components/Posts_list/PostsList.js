import React, { useState, useEffect, useContext, useRef } from 'react'
import { createRoot } from 'react-dom/client'
import { DataContext } from '../Main'
import { SpinnerContext } from '../Main'

import DoublePostLeft from './DoublePostLeft'
import DoublePostRight from './DoublePostRight'
import SinglePost from './SinglePost'
import Spinner from '../Spinner/Spinner.js'

export default function PostsList(){
    const {data} = useContext(DataContext)
    const {spinner, setSpinner} = useContext(SpinnerContext)
    const [posted, setPosted] = useState(0) //amount of articles posted currently

    const articleFormat = (f, i, format)=> {
        //1:doubleLeftImage, 2:singleRight, 3:doubleRightImage, 4:singleRight, m:mobile
        if(f==='m'){ 
            return (<article key={posted+i}><SinglePost/></article>) 
        } else{
            if(format===1){
                return (<article key={posted+i}><DoublePostLeft/></article>)
            }
            if(format===2){
                return (<article key={posted+i}><SinglePost position="left"/>  </article>)
            }
            if(format===3){
                return (<article key={posted+i}><DoublePostRight/></article>)
            }
            if(format===4){
                return (<article key={posted+i}><SinglePost position="right"/> </article>)
            }
        }
    }

    const detectDevice = () => {
        let width = window.screen.width
        if(width<=1125){
            return ('mobile')
        }else{
            return ('pc')
        }
    }

    
    const arrayComponents = useRef([])
    const loadArrayOfComponents = () => {
        setSpinner(true)
        let postAmount = 8 //amount of articles displayed per time
        let postTotal = Object.entries(data).length
        let arrayTemp = arrayComponents.current
        let format = 0

        for(let i=0; i<postAmount; i++){
            if(detectDevice()==='mobile'){ //mobile or pc
                arrayTemp.push(articleFormat('m', i))
            }else{
                format+=1
                if(format>4)format=1 //verrrrr
                arrayTemp.push(articleFormat('p', i, format))
            }
        }
        arrayComponents.current = arrayTemp
        if(arrayComponents.current !== []){
            root.render([...arrayComponents.current])
        }
        setPosted(posted + 8)
        setSpinner(false)
        return arrayComponents.current

    }
    
    const[root, setRoot] = useState()
    const el = useRef()
    useEffect(()=>{
        el.current = document.querySelector('.posts-list')
        setRoot(createRoot(el.current))
    },[])

    useEffect(()=>{ 
        if(data!==''){ loadArrayOfComponents() }
    },[data])

    return(
        <>
            {spinner && (<Spinner/>)}
            <div className="posts-list"/>
            <button type="button" className="btnLoadMore" onClick={()=>loadArrayOfComponents()}>Load More</button>
        </>
    )
}