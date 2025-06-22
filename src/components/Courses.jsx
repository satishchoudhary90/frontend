import React, { useContext, useEffect } from "react";
import { appContext } from "../store/appContext";
import toast from "react-hot-toast";
import axios from "axios";
import { IoMdAddCircleOutline } from "react-icons/io";
import { CgDetailsMore } from "react-icons/cg";
import Filter from "./Filter";
import Course from "./Course";
import AddInstance from "./AddInstance";
import s from './courses.module.css'


const Courses = () => {
  const { courses, setCourses,filtered, isLoading, setLoading, display, setDisplay } = useContext(appContext);

  useEffect(() => {
    const fetchCourses = async () => {
      setLoading(true);
      try {
        const res = await axios.get('http://localhost:1000/api/course/allCourses');
        const data = res.data;
        setCourses(data || []);
        setDisplay(data);
        if (data?.length > 0) toast.success("Courses Available");
      } catch (error) {
        console.error("Error in fetchCourses:", error.message);
        toast.error("Something Went Wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []); // 

  return (
    <section className="container-fluid mt-4">
      <div className="position-relative mb-3">
        <h1 className="text-center">Courses Offered By Us</h1>
        <span className="btn position-absolute start-0 bottom-0 d-xl-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"><CgDetailsMore className="fs-1"/></span>
      </div>
      <div className="row justify-content-center align-item">
       <div style={{height: '100%'}} className="col-3 py-5 shadow-sm d-none d-xl-block">
          <div className="py-3 dashboard d-flex flex-column align-items-center gap-2">
             <button  data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn text-center btn-light w-50 d-flex align-items-center gap-1"><IoMdAddCircleOutline />Add Course</button> <br />
             <Filter /> <br />
             <AddInstance />
          </div>
       </div>
       <div className="col-9">
          <div className="container-fluid">
             <div className={`${s.scroll} row position-relative flex-nowrap overflow-x-scroll gy-3 row-cols-1 row-cols-md-2 row-cols-xl-3`}>
               <>
    {isLoading ? (
          <div className="col-12 d-flex justify-content-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          <>
            {
            
            display.length > 0 ? (
              display.map((course, i) => (
                <Course course={course} i={i} />
              ))
            ) : (
              <h4 className="text-center">No Courses Available Now</h4>
            )}
          </>
        )}
   </>
             </div>
          </div>
       </div>
      </div>
    </section>
  );
};

export default Courses;
