import React from 'react'
import Filter from '../components/Filter'
import AddInstance from '../components/AddInstance'
import { IoMdAddCircleOutline } from 'react-icons/io'

const Canvas = () => {
  return (
   <div class="offcanvas offcanvas-start" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
  <div class="offcanvas-header">
    <h5 class="offcanvas-title d-flex align-items-center gap-3" id="offcanvasExampleLabel"> <img src="/logo.png" alt="logo" width={60} />IIT BOMBAY</h5>
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div class="offcanvas-body">
    <div className="d-flex align-items-center gap-1 flex-column p-2">
       <button  data-bs-toggle="modal" data-bs-target="#exampleModal" className="btn text-center btn-light w-50 d-flex align-items-center gap-1"><IoMdAddCircleOutline />Add Course</button> <br />
             <Filter /> <br />
             <AddInstance />
    </div>
  </div>
</div>
  )
}

export default Canvas
