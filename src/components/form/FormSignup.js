import React from 'react'
import '../../scss/main.scss'
import eventPicture from '../../Assets/event-picture.png'
import Form from 'react-bootstrap/Form'
import validate from './ValidateInfo';
import useForm from './UseForm'




const FormSignup = ({ submitForm}) => {
// Destructuring the values here


  const { handleChange, handleSubmit, values, errors } = useForm(
    submitForm,
    validate
  );



   return (   
             <section className="formGroup"  id="formAnchor">
                <div className="container">
                    <div className="row d-flex align-items-center">
                        <div className="col text-left">
                            <div className="demo">
                              <h2 className="mb-4">Book a demo</h2>
                                <p className="fieldsMarked">Fields marked with a <strong className="asterisk">*</strong> are required</p>

                                <form onSubmit={handleSubmit} noValidate>
                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="inputFirstname">First name <strong className="asterisk">*</strong></label>
                                            <input 
                                                id="firstName" 
                                                name="firstName" 
                                                aria-required="true"
                                                type="text" 
                                                value={values.firstName}
                                                onChange={handleChange} 
                                                className={  (errors.firstName ? 'fr-error form-control' : 'form-control') } 
                                            />
                                           {errors.firstName && <div className="fr-error-msg">
                                           {errors.firstName}
                                           </div>}

                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="inputLastname">Last name  <strong className="asterisk">*</strong></label>
                                            <input 
                                                id="lastName" 
                                                name="lastName" 
                                                aria-required="true"
                                                type="text" 
                                                value={values.lastName}
                                                onChange={handleChange} 
                                                className={  (errors.lastName ? 'fr-error form-control' : 'form-control') }  
                                            />
                                             {errors.lastName && <div className="fr-error-msg">
                                             {errors.lastName}
                                             </div>}
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="inputEmail">Email  <strong className="asterisk">*</strong></label>
                                            <input 
                                                id="email" 
                                                name="email" 
                                                aria-required="true"
                                                type="email" 
                                                value={values.email}
                                                onChange={handleChange}  
                                                className={  (errors.email ? 'fr-error form-control' : 'form-control') }
                                            />
                                          {errors.email && <div className="fr-error-msg">
                                            {errors.email}
                                          </div>}

                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-12">
                                            <label htmlFor="inputPhone">Phone number  <strong className="asterisk">*</strong></label>
                                            <input 
                                                id="phone" 
                                                name="phone" 
                                                aria-required="true"
                                                type="phone" 
                                                value={values.phone}
                                                onChange={handleChange} 
                                                className={  (errors.phone ? 'fr-error form-control' : 'form-control') }
                                            />
                                            {errors.phone && <div className="fr-error-msg">
                                            {errors.phone}
                                            </div>}

                                        </div>
                                    </div>                       
                                       
                          <p className="contactMethod">Preferred method of contact</p>
                              <Form.Check
                                    type="radio"
                                    label="Email"
                                    name="radioButtons"
                                    id="radioEmail"
                                    defaultChecked
                                    value={values.radioEmail}
                                    onChange={handleChange}  
                              />
                              <Form.Check
                                    className="mt-2" 
                                    type="radio"
                                    label="Phone"
                                    name="radioButtons"
                                    id="radioPhone"
                                    value={values.radioPhone}
                                   onChange={handleChange} 
                              />
                        
                                    <button 
                                              type="submit"                                  
                                              id="btnSubmit" 
                                              aria-describedby="requestingDemo"
                                              className="btnSubmit mt-4"
                                            > Sign up
                                  </button>

                                </form>
                            </div>
                        </div>

                        <div className="col d-flex justify-content-md-end justify-content-sm-end mt-5">
                            <img className="event img-fluid" src={eventPicture} alt="event description"/>
                        </div>
                    </div>
                </div>
            </section>

   );


}


export default FormSignup