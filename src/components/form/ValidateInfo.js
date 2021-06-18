
export default function validateInfo(values) {
 // validations here 
  let error = false;
  let errors = {};
  let pattern = /\S+@\S+\.\S+/;


function numberValidation(numbers) {
    const hasNumber = /\d/;
    return hasNumber.test(numbers);
}


if(values.firstName === '' || values.firstName.length < 6) {
 
  errors.firstName = 'First name is required with 6+ characters';
   error  = true; 
}


if(values.lastName === '' || values.lastName.length < 7) {
 
  errors.lastName = 'Last name is required with 7+ characters';
   error  = true; 
}


// if the value of email or the value of email doesn't match the pattern throw an error with a red border and a message to enter their email
if (!values.email || !pattern.test(values.email) ) {
    
  
   // errors.email's message gets passed to FormSignup.js inside the form 
    errors.email = 'Email entry is required in the format';

  // indicates that error is true here so in the next part, I can check if it's false 
    error  = true; 

  } 


  if (!numberValidation(values.phone) || values.phone.length < 6) {
      errors.phone = 'Phone number is required with 6+ characters';
      error = true;
  }




      
  if(error === false) {
   // If error is not successfull then the form success will appear and the data on the console of the browser as an object

  // I get the values for email and other input boxes and store them in an object
    const getValues = () => {
    return {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        phone: values.phone
       
    };

}
    
     // To show the input data on the console
      console.log(getValues());
  }
  
     return errors; 

}

 
