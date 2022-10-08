import React, { useState } from 'react'
import FetchData from './Data/Fetch_data.js'
import Menu from './Menu/Menu.js'
import PostsList from './Posts_list/PostsList.js'
import Routess from './Routes/Routess.js'

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
                    <Routess/>
                </SpinnerContext.Provider>
            </DataContext.Provider>
        </>
    )
}