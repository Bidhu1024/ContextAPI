import React,{useContext} from 'react'
import {globalinfo} from './App'
const SuperChild = () => {
    const {AppColor,getDay} = useContext(globalinfo)
   const day = "Friday";
  return (
   <>
    <h1 style={{color:AppColor}}>SuperChild Component</h1> 
    <button onClick={()=>getDay(day)}>Click</button>
   </>
  )
}

export default SuperChild;