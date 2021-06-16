import React from 'react'
import Logo from '../../Assets/generic-Logo.png'
import '../../scss/main.scss';


const Navigation = () => {
    return (
    
        <nav className="navbar">       
          <div className="container-fluid">        
             <a className="navbar-brand ml-4" href="/#"><img  src={Logo} alt="Logo"/></a>

               <div className="d-flex">
                  <a className="log-in-Button nav-link" href="/#">LOG-IN</a>
                     <input className="sign-up-Button" type="button" value="SIGN UP"/>
            </div>
          </div>   
        </nav>
    );
}
 
export default Navigation;