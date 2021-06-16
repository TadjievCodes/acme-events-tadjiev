import heartLamps from '../../Assets/heart-lamps.png'
import '../../scss/main.scss';

const HeartLamp = () => {
    
    return ( 
 <section className="heartLampSection">  
  <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-xl-4">
                            <img className="heartLampImg" src={heartLamps} alt="heart Lamp"/>
                        </div>
                          <div className="col-lg-6 col-xl-8 text-left pl-xl-5 mt-2">
                             <h2 className="mb-3 ticketText">Make your ticket holders happy</h2>
                                    <p>
                                        A beautiful little sunset. Talent is a pursued interest. That is to say, anything you practice you can do. This
                                        is probably the greatest thing that's ever happened in my life. These things happen automatically. All you
                                        have to do is just let them happen.
                                    </p>
                                    <p>
                                        Just let go - and fall like a little waterfall. Nothing's gonna make your husband or wife madder than coming
                                        home and having a snow-covered dinner. Just pretend you are a whisper floating across a mountain. Zip.
                                        That easy.
                                    </p>
                                    <a className="feature" href="/#">View full feature list</a>
                        </div>
                    </div>
  </div>
 </section>    

    );
}

export default HeartLamp