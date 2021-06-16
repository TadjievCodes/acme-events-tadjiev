 import '../../scss/main.scss';

const Video = () => {
        
    return ( 

<section className="videoPart">
                <div class="resp-container">
                     <iframe class="resp-iframe" 
                                  src="https://www.youtube.com/embed/l73rmrLTHQc" 
                                  gesture="media"  
                                  allow="encrypted-media" 
                                  allowfullscreen>
                     </iframe>
                </div>
</section>

    );
}

export default Video