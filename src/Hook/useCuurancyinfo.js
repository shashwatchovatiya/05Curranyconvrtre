import { useState, useEffect } from "react";

function useCurrancyinfo(currency){
    const[data,setData]=useState({})
    
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`)
        .then((res) => res.json())  // for usind the convert the string t json
        .then((res)=> setData(res[currency]) ) 
        // .then((res)=> setData(res.currency) )
        console.log(data);
    },[currency])
    return data ; 
}
    //console.log(data);

export default useCurrancyinfo ;