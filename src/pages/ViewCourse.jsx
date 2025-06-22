import React, { useContext, useEffect, useState } from "react";
import { appContext } from "../store/appContext";
import api from "../services/api.js";
import toast from "react-hot-toast";
import { FaRegTrashAlt } from "react-icons/fa";

const ViewCourse = () => {
  const { view, setView } = useContext(appContext);
  const [is, setIs] = useState([]);

  useEffect(() => {
    async function fetchCourse() {
      try {
        const res = await api.get(`/course/${view.course_id}`);
        if (!res) throw new Error("Internal Server Error");
        setView(res.data);
        toast.success("You Can View Course");
      } catch (error) {
        console.error("Error in viewCourse", error);
        toast.error(`You can't view this course`);
      }
    }

    if (view?.course_id) fetchCourse();
  }, [view?.course_id]);

  useEffect(() => {
  async function fetchInstances() {
    if (!view?.course_id) return;
    try {
      const res = await api.get(`/instance/allInstance/${view.course_id}`);
      if (!res) throw new Error("Internal Server Error");
      setIs(res.data);
    } catch (error) {
      console.error("Error in fetching instances", error);
      toast.error(`You can't view this course`);
    }
  }

  fetchInstances();
}, [view?.course_id]);

 async function delIs(id,yr,sem){
  try {
    const res = await api.delete(`/instance/delInstance/${yr}/${sem}/${id}`);
    if(!res) throw new Error('Instance Not Deleted');
    toast.success(res.data.msg);
    setIs((is)=>{
      const newIs = is.filter((i)=>(i.year !== yr && i.semester !== sem && i.course !== id  ));
      return newIs;
    })
  } catch (error) {
    console.log('Error in deleting instance');
    toast.error('Instance Deletion Failed');
  }
 } 

  return (
    <div className="modal fade" id="viewCourse" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-4" id="exampleModalLabel">{view.title}</h1>
            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div className="modal-body">
            <div className="d-flex flex-column gap-2 p-2">
              <p className="fw-normal">{view.description}</p>
              <h5 className="mb-3">Prerequisite Courses</h5>
              <div className="accordion" id="accordionExample">
                {view?.prerequisites_details?.length > 0 ? (
                  view.prerequisites_details.map((pre) => (
                    <div className="accordion-item" key={pre._id}>
                      <h2 className="accordion-header" id={`heading-${pre._id}`}>
                        <button
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target={`#collapse-${pre._id}`}
                          aria-expanded="false"
                          aria-controls={`collapse-${pre._id}`}
                        >
                          {pre.title}
                        </button>
                      </h2>
                      <div
                        id={`collapse-${pre._id}`}
                        className="accordion-collapse collapse"
                        aria-labelledby={`heading-${pre._id}`}
                        data-bs-parent="#accordionExample"
                      >
                        <div className="accordion-body">
                          {pre.description}
                        </div>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-secondary fs-5">No Prerequisite Courses</p>
                )}
              </div>
              <table className="table text-center my-3">
  <thead>
    <tr>
      <th>Delivery Year</th>
      <th>In Semester</th>
      <th>&nbsp;</th>
    </tr>
  </thead>
  <tbody>
    {is?.length > 0 ? (
      is.map((i) => (
        <tr key={i._id || i.course}>
          <td>{i.year}</td>
          <td>{i.semester}</td>
          <td>
            <span onClick={()=>delIs(i.course, i.year, i.semester)} className="btn"><FaRegTrashAlt className="fs-5" /></span>
          </td>
        </tr>
      ))
    ) : (
      <tr>
        <td className="text-center text-secondary" colSpan={3}>
          No Delivery Instances
        </td>
      </tr>
    )}
  </tbody>
</table>

            </div>
          </div>
          <div className="modal-footer">
            <button
              onClick={() => setView({})}
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCourse;
