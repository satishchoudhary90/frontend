import React, { useContext } from 'react'
import { appContext } from '../store/appContext';
import { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
const AddInstance = () => {

  const [semester, setSemester] = useState('');
  const [year, setYear] = useState('');
  const [id, setId] = useState('');

  const {courses, setLoading} = useContext(appContext);

  async function submitHandle(e){
    e.preventDefault();
    try {
       const res = await axios.post(`http://localhost:1000/api/instance/addInstance`,{
        course: id,
        year,
        semester
       }); 
       if(!res) throw new Error('No response');
       toast.success(res.data.msg);
    } catch (error) {
       console.log('error in addInstance: ',error.message);
       toast.error(error.message);
    } finally{
       setId('');
       setSemester('');
       setYear('');
    }
  }

  return (
    <form onSubmit={submitHandle} className="p-2">
             <div className="input-group mb-3 align-items-center">
               
               <select
                 className="form-select"
                 value={semester}
                 onChange={(e) => setSemester(e.target.value)}
                 aria-label="Select Semester"
               >
                 <option value="">Semester</option>
                 <option value="1">One</option>
                 <option value="2">Two</option>
                 <option value="3">Three</option>
                 <option value="4">Four</option>
                 <option value="5">Five</option>
                 <option value="6">Six</option>
                 <option value="7">Seven</option>
                 <option value="8">Eight</option>
               </select>
       
               <span className="input-group-text">Year</span>
               <input
                 type="number"
                 min={2000}
                 max={2999}
                 value={year}
                 onChange={(e) => setYear(e.target.value)}
                 className="form-control"
                 placeholder="20XX"
                 aria-label="Year"
               />
             </div>
              <div className="mb-3">
                <select onChange={(e)=>setId(e.target.value)} value={id} class="form-select" aria-label="Default select example">
  <option>{`Select Course`}</option>
  {
    courses.map((course)=>(
      <option value={course.course_id}>{course.title}</option>
    ))
  }
</select>
              </div>
             <div className="d-flex justify-content-center">
               <button type="submit" className="btn w-50 btn-light">Add Instance</button>
             </div>
    </form>
  )
}

export default AddInstance
