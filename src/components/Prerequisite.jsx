import React, { useContext, useState } from 'react'
import s from './pre.module.css'
import { appContext } from '../store/appContext'
import Pre from './Pre'

const Prerequisite = ({pres, setPres}) => {
   const {courses} = useContext(appContext);
   const [pre, setPre] = useState('');


   function addPre(){
      setPres((oldPres)=>{
        if(!oldPres.includes(pre)){
          return [...oldPres, pre] ;
        }
        return [...oldPres];
      });
      console.log(pres);
   }

  function delPre(p){
     setPres((old)=>{
         old.pop(p);
         return [...old];
     })
  }


  return (
<div class="mb-3">
  <div className="d-flex gap-1 p-2 align-items-center">
    {(pres.length>0) ? pres.map((p,i)=>(<Pre delPre={delPre} i={i} p={p}/>)) : <span className='text-secondary'>No Prerequiste Courses Yet</span>}
  </div>
<select onChange={(e)=>setPre(e.target.value)} class="form-select" aria-label="Default select example">
  <option>{pre || `Select Course`}</option>
  {
    courses.map((course)=>(
      <option value={course.course_id}>{course.title}</option>
    ))
  }
</select>
  <button onClick={addPre} type='button' className='btn btn-light mt-2'>Add</button>
</div>
  )
}

export default Prerequisite
