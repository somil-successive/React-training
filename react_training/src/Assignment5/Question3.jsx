// Add a loading indicator (e.g., a spinner) to the component. Display it while the data is being fetched and hide it once the data is loaded

import React, { useEffect, useState } from "react";

const Question3=()=>{
    const[data,setData]=useState([]);
    const[isLoading,setIsLoading]=useState(false);

    useEffect(()=>{
        fetch()
        .then((response)=>{
            if(!response.ok){
                throw new Error("Error has Occured");
            }else{
                return response.json;
            }
        })
        .then((data)=>{
            setData(data)
        setIsLoading()})
        .catch((error)=>console.error(error))

    },[])
    return(
        <>
        <ul>


        </ul>
        
        
        </>

    )
}