import React, { useContext, useState } from 'react'
import s from './course.module.css'
import { FaRegTrashAlt } from "react-icons/fa";
import { appContext } from '../store/appContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const Course = ({course,i}) => {
 const {setLoading, setView} = useContext(appContext);
 async function delCourse(id){
   setLoading(true);
    try {
      const res = await axios.delete(`http://localhost:1000/api/course/delCourse/${id}`);
      if(!res) throw new Error('Course not deleted');
      toast.success(res.data.msg);
    } catch (error) {
      console.log('Error in delCourse');
      toast.error("Can't be deleted");
    } finally{
     setLoading(false);
      window.location.reload();
    }
  }
  return (
    <div className="col" key={i}>
                  <div style={{height: '500px'}} className="p-4 text-center d-flex flex-column gap-2 border rounded shadow-sm  position-relative">
                    <img width={200} height={200} src="https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y291cnNlfGVufDB8fDB8fHww" className="card-img-top rounded" alt="Course" />
                    <div className="card-body">
                      <h5 className="card-title h-25 mt-2">{course.title}</h5>
                      <p className="card-text h-50">{`${course.description.slice(0,120)}...more`}</p>
                      <div className="d-flex justify-content-between">
                          <span onClick={()=>setView(course)} data-bs-toggle="modal" data-bs-target="#viewCourse"  className={`${s.det} btn btn-light text-center d-flex align-items-center gap-2`}>
                        View Details
                      </span>
                       <button type='button' onClick={()=>{delCourse(course.course_id);}} className='btn'><FaRegTrashAlt /></button>
                      </div>
                    </div>
                  </div>
                </div>
  )
}

export default Course
