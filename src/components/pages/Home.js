 import '../../scss/main.scss';
 import  HeartLamp from './HeartLamp'
import Video from './Video'
import Form from '../form/Form'
import FooterNavigation from '../layout/FooterNavigation'
import Footer from '../layout/Footer'


 const Home = ( ) => {

      return(
          <div className="homePage ">
                          <div className="bckgrnd-image p-5 text-center shadow-1-strong rounded mb-5 col-xs-6 text-white">
                                <h1 className="mt-5 mb-3">Make event management a breeze</h1>
                                    <h3 className="mb-4">ACME Events Inc. makes making beautiful event landing pages a DIY adventure.</h3>
                                      <a href="#formAnchor"><input className="demo-Button" type="button" value="BOOK A DEMO"/></a>

                          </div>
                                 
                        <HeartLamp />           
                        <Video />
                        <Form />
                        <FooterNavigation />
                        <Footer />

          </div>
      )
 }

 export default Home;