import React, { useState, useEffect, useContext, useRef } from 'react'
import { DataContext } from '../Main'
import { SpinnerContext } from '../Main'
import DoublePostLeft from './DoublePostLeft'
import DoublePostRight from './DoublePostRight'
import SinglePost from './SinglePost'
import Spinner from '../Spinner/Spinner.js'
import FetchData from '../Data/Fetch_data'

export default function PostsList(){
    const {data} = useContext(DataContext)
    const {spinner} = useContext(SpinnerContext)
    const [articleKey, setArticleKey] = useState(0)
    const articleCounter = useRef(-1)
    const [nextPage, setNextPage] = useState(1)

    //1:doubleLeftImage, 2:singleRight, 3:doubleRightImage, 4:singleRight
    const articleFormat = (f, i, format)=> {
        if(f==='mobile'){ 
            articleCounter.current += 1   
            let  idx = articleCounter.current
            if(idx <= Object.keys(data).length){
                return (<article key={articleKey+i}><SinglePost index={idx}/></article>)}
        } 
        if(f==='pc'){
            if(format===1){
                articleCounter.current += 2
                const idx = articleCounter.current
                if(idx <= Object.keys(data).length){
                    return (<article key={articleKey+i}><DoublePostLeft index={idx}/></article>)}
            }
            if(format===2){
                articleCounter.current += 1
                const idx = articleCounter.current
                if(idx <= Object.keys(data).length){
                    return (<article key={articleKey+i}><SinglePost position="left" index={idx}/></article>)}
            }
            if(format===3){
                articleCounter.current += 2
                const  idx = articleCounter.current
                if(idx <= Object.keys(data).length){
                    return (<article key={articleKey+i}><DoublePostRight index={idx}/></article>)}
            }
            if(format===4){
                articleCounter.current += 1
                const  idx = articleCounter.current
                if(idx <= Object.keys(data).length){
                    return (<article key={articleKey+i}><SinglePost position="right" index={idx}/></article>)}
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
    
    const arrayComponent = useRef([])
    const loadArrayOfComponents = () => { 
        let postTotal = Object.entries(data).length - 1
        if(articleCounter.current < postTotal){
            let postAmount = 8//Object.entries(data).length-1 //amount of articles displayed per time
            let arrayTemp = arrayComponent.current
            let format = 0

            for(let i=0; i<postAmount; i++){
                if(detectDevice()==='mobile'){
                    arrayTemp.push(articleFormat('mobile', i))
                }
                if(detectDevice()==='pc'){
                    format>4
                        ?format=1
                        :format+=1                   
                    arrayTemp.push(articleFormat('pc', i, format))
                }
            }
            arrayComponent.current = arrayTemp
            setArticleKey(articleKey + 8)
            return [...arrayComponent.current]
        }
    }
    
    useEffect(()=>{
        if(data!==''){ loadArrayOfComponents() }
    },[data])
    

    //Detects if the scroll reachs the bottom page, for the infinite scroll
    window.onscroll = () =>  {
        if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
            setNextPage(nextPage+1)
            loadArrayOfComponents()
        }
    }
    
    return(
        <div className="posts-list-container">
            <FetchData/>
            {spinner && (<Spinner/>)}
            <div className="posts-list">
                {[...arrayComponent.current]}
            </div>
        </div>
    )
}