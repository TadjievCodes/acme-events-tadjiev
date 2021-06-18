import '../../scss/main.scss';
import eventPicture from '../../Assets/event-picture.png'

const SubmittingPhase = () => {
  return (
               <section className="formGroup">
                <div className="container">
                    <div className="row d-flex align-items-center">
                            <div className="col col-md-6 text-left">
                              <h2 className="mb-4 book">Book a demo</h2>
                                <p className="fieldsMarked">Fields marked with a <strong className="asterisk">*</strong> are required</p>
                             
                                  <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>  
                       <span className="submittingText">
                       Submitting...
                        </span> 

                        </div>

                       

                        <div className=" col-sm-12 col-md-6 d-flex justify-content-md-end justify-content-sm-end mt-5">
                            <img className="img-fluid" src={eventPicture} alt="event img"/>
                     
                    </div>
                 </div>
               </div> 
            </section>

             




  );
};

export default SubmittingPhase;