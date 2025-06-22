import React from 'react'
import { IoMdCloseCircle } from "react-icons/io";


const Pre = ({p,i,delPre}) => {

 

  return (
    <button type='button' key={i} className='d-flex align-items-center gap-2 btn btn-light'>{p} <span onClick={()=>delPre(p)} className='btn' type='button'><IoMdCloseCircle /></span></button>
  )
}

export default Pre
