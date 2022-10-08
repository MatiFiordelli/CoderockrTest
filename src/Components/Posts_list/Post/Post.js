import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { DataContext } from '../../Main.js'


export default function Post(){
    const {data} = useContext(DataContext)
    const [index, setIndex] = useState(-1)
    const { id }  = useParams()
    
    const findIndex = (id) => {
        for(let i in data){
            if(data[Number(i)].id === id){
                setIndex(Number(i))
                return
            }
        }
    }
    

    const formattedDate = () => {
        if(index!==-1){
            let date = data[index].date.split('-')
            let day = date[2].substr(0,2)
            if(day[0]==='0') day = day.slice(1,2)
            
            const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec' ]
            const month = months[ Number(date[1])-1 ]

            const year = date[0]
            return `${month} ${day}, ${year}`
        }
    }

    useEffect(()=>{
        const el = document.querySelector('.posts-list-container')
        el.style.display = 'none'
        window.scrollTo(0,0)

        return ()=>{
            el.style.display = 'grid'
            window.scrollTo(0,0)
        }        
    }, [])

    useEffect(()=>{
        data!=='' && findIndex(id)
    },[data])
    
    
    return(
        <div className="full-post">
            <div className="full-post-top">
            {index!==-1 &&
                <img className="singlepost__image" 
                    src={data[index].imageUrl} 
                    alt="Image Article" 
                    title={data[index].imageUrl} />
            } 
            {index!==-1 &&
                <div className="full-post-top__intro">
                    <div className="full-post-top__intro--date">
                        {formattedDate()}
                    </div>
                    <div className="full-post-top__intro--name">
                        {data[index].author}
                    </div>
                    <div className="full-post-top__intro--title">
                        {data[index].title}
                    </div>
                </div>
            }
            </div>

            {index!==-1 &&    
            <div className="full-post-details">
                {data[index].article}
            </div>
            }
        </div>
    )
}