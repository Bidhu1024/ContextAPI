import React,{useContext} from 'react'
import {globalinfo} from './App'
import SuperChild from './SuperChild'
const ThirdChild = () => {
    const {AppColor} = useContext(globalinfo)
   
  return (
   <>
    <h1 style={{color:AppColor}}>ThirdChild Component</h1> 
    <SuperChild/>
   </>
  )
}

export default ThirdChild;