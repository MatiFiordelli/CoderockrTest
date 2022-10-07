import React, { useState, useEffect } from 'react'
import FetchData from './Data/Fetch_data.js'

import Menu from './Menu/Menu.js'
import PostsList from './Posts_list/PostsList.js'
import Post from '././Posts_list/Post/Post.js'

export const DataContext = React.createContext()
export const SpinnerContext = React.createContext()

export default function Main(){
    const [data, setData] = useState('')
    const [spinner, setSpinner] = useState(true)

    return(
        <>
            <DataContext.Provider value={{data, setData}}>
                <SpinnerContext.Provider value={{spinner,setSpinner}}>
                    <FetchData/>
                    <Menu/>
                
                    <PostsList/>
                    {/* <Post/> */} 
                </SpinnerContext.Provider>
            </DataContext.Provider>
        </>
    )
}