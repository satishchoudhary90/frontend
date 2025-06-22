import React, {useContext, useState} from 'react'
import Prerequisite from '../components/Prerequisite'
import { appContext } from '../store/appContext';
import api from '../services/api.js';
import toast from 'react-hot-toast';

const AddCoursePage = () => {
  
  const {display, setDisplay, courses, setCourses, setLoading} = useContext(appContext);

  const [title, setTitle] = useState('');
  const [description, setDesc] = useState('');
  const [pres, setPres] = useState([]);

 async function handleSubmit(e){
     e.preventDefault();
     setLoading(true);
     try {
      if(!title || !description || !pres) throw new Error('Provide Course Credentials');
      const res = await api.post(`/course/addCourse`, {
        title,
        description,
        prerequisites: pres
      });
      if(!res) throw new Error('No response of adding course');
       toast(`${res.data.msg}`);
      setDisplay((cs)=>{
        return [...cs, res.data.newCourse];
      });
      console.log(display);
     } catch (error) {
      console.log('Error in SubmitHandler in AddCourse: ',error.message);
      toast(error.message);
     }
     finally{
      setLoading(false);
      setTitle('');
      setDesc('');
      setPres([]);
     }
  }

  return (
    <div id='exampleModal' class="modal fade" tabindex="-1">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">Add Course</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <form onSubmit={handleSubmit} className='border rounded p-2' >
        <div class="modal-body">
         <div class="form-floating mb-3">
  <input type="text" onChange={(e)=>setTitle(e.target.value)} value={title} class="form-control" id="floatingInput" placeholder="Title goes here..." />
  <label for="floatingInput">Course Title</label>
</div>
<div class="form-floating mb-3">
  <textarea rows={20} cols={40} class="form-control" onChange={(e)=>setDesc(e.target.value)} value={description} id="floatingInput" placeholder="Description goes here..." />
  <label for="floatingInput">Course Description</label>
</div>
<Prerequisite pres={pres} setPres={setPres} />
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          <button type="submit" class="btn btn-light">Add Course</button>
        </div>
      </form>
    </div>
  </div>
</div>
  )
}

export default AddCoursePage
