import React from 'react';
import '../../scss/main.scss';
import { FaCheckCircle } from "react-icons/fa";
 import eventPicture from '../../Assets/event-picture.png'


const FormSuccess = () => {
  return (
      <section className="formGroup">
                <div className="container">
                    <div className="row d-flex align-items-center">
                            <div className="col col-md-6 text-left">
                              <h2 className="mb-4 bookDemoText">Book a demo</h2>
                                <p className="fieldsMarked">Fields marked with a <strong className="asterisk">*</strong> are required</p>
                             
            <div className="container mt-5">
                <div className="row">
                    <div className="col-4">
                        <div className="icon"><FaCheckCircle size="9x" className="checkedIcon" /></div>
                    </div>
                    <div className="col-8">
                        <h2 className="demoRequestText">Demo request sent!</h2>
                        <p>Someone will reach out to schedule your demo within the next 48 business hours</p>
                        <a className="feature-Link" href="/#">Request another demo</a>
                    </div>
                </div>
            </div>

                        </div>

                       

                        <div className=" col-sm-12 col-md-6 d-flex justify-content-md-end justify-content-sm-end mt-5">
                            <img className="img-fluid" src={eventPicture} alt="event img"/>
                     
                    </div>
                 </div>
               </div> 
            </section>


     
  );
};

export default FormSuccess;