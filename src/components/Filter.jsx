import React, { useContext } from 'react'
import { GiSettingsKnobs } from "react-icons/gi";
import { appContext } from '../store/appContext';
import axios from 'axios';
import toast from 'react-hot-toast';

const Filter = () => {
  const { year, setYear, semester, setSemester, setLoading, setCourses,setDisplay } = useContext(appContext);

 async function submitHandle(e) {
  e.preventDefault();
  if (!year || !semester) return;
  setLoading(true);
  try {
    const res = await axios(`http://localhost:1000/api/instance/getCourseSem/${year}/${semester}`);
    const { data } = res;

    if (!Array.isArray(data) || data.length === 0) {
      throw new Error(`No courses available`);
    }

    console.log('Filtered Courses:', data);
    setDisplay((dis)=>(
      [...data]
    )); 
  } catch (error) {
    toast.error("No Courses");
  } finally {
    setLoading(false);
  }
}


  return (
    <form onSubmit={submitHandle} className="p-2">
      <div className="input-group mb-3 align-items-center">
        <GiSettingsKnobs className="fs-5 fw-bolder me-2" />
        
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

      <div className="d-flex justify-content-center">
        <button type="submit" className="btn w-50 btn-light">Filter</button>
      </div>
    </form>
  );
};

export default Filter;
