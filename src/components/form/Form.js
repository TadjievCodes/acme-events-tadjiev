import React, { useState} from 'react';
import FormSignup from './FormSignup'
import FormSuccess from './FormSuccess';
import '../../scss/main.scss';
import SubmittingPhase from './SubmittingPhase';



const Form = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function submitForm() {
    setLoading(true);
    setTimeout(function () {
      setSubmitted(true);
    }, 3000);
  }


  if (submitted) {
    return (
      <div className="form-container">
        <FormSuccess />
      </div>
    );
  }

  return (
    <div className="form-container">
      {loading ? <SubmittingPhase /> : <FormSignup submitForm={submitForm} />}
    </div>
  );
};

export default Form;
