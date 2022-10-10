import { useState, useEffect, useContext } from 'react'
import { DataContext } from '../Main'
import { SpinnerContext } from '../Main'

export default function FetchData(){
    const {setData} = useContext(DataContext)
    const {setSpinner} = useContext(SpinnerContext)
    const [setError] = useState('')
    
    const assignData = (response)=>{
        setData(response)
    }
    
    useEffect(()=>{
            setSpinner(true)
            const url = `https://stormy-shelf-93141.herokuapp.com/articles`
            fetch(url)
            .then(data=>data.json())
            .then(response=>{
                if(response!==''){
                    assignData(response)
                    setSpinner(false)
                }
            })
            .catch((error)=>{setError(error)})
    },[])
}