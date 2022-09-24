import React,{useContext} from 'react'
import {globalinfo} from './App'
import SuperChild from './SuperChild'
const Child = () => {
    const {AppColor} = useContext(globalinfo)
   
  return (
   <>
    <h1 style={{color:AppColor}}>Child Component</h1> 
    <SuperChild/>
   </>
  )
}

export default Child;