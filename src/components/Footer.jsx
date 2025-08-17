import React from 'react'
import { IoCall } from "react-icons/io5";
import { MdAttachEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import s from './footer.module.css'

const Footer = () => {
  return (
    <div className='container-fluid mt-5'>
       <div className="row">
        <div className="col-12 text-center">
          <h3 style={{fontFamily: 'Lucida Calligraphy'}} className='text-secondary'>Thank You</h3>
          <span className='text-secondary fw-light'>For giving me this opportunity I learnt a lot new and strenghten my development concepts.</span>
        </div>
        <div className="row">
          <div className="col-10 offset-1 col-md-6 col-lg-4">
            <div className="text-secondary fw-light d-flex flex-column p-2 gap-1">
              <caption >Contact Me</caption>
              <ul style={{fontSize: '1rem', listStyle: 'none'}}>
                <li className={`${s.con} d-flex gap-2 align-items-center`}><IoCall/>+91 - 9399430276</li>
                <li className={`${s.con} d-flex gap-2 align-items-center`}><MdAttachEmail />satishchoudhary12290@gmail.com</li>
                <li className={`${s.con} d-flex gap-2 align-items-center`}><FaLocationDot />city hostel, indore</li>
              </ul>
            </div>
          </div>
        </div>
       </div>
    </div>
  )
}

export default Footer
