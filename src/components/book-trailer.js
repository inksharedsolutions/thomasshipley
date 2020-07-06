import React, {useEffect} from 'react'
import VideoPlayer from 'react-simple-video-player'
import VideoTrailer from '../assets/video/Book_Trailer.mp4'


const BookTrailer = ()=>{


    useEffect(() => {
        
        if (typeof window === 'undefined') {
            global.window = {}
        }
        
    });

     return(
         <>
            <div className="parent-trailer">
                <div className="container">
                    <section className="book-trailer-grid">
                        <div className="heading-container">
                            <h1>Book 
                                <span>Trailer</span>
                            </h1>

                            <h3>
                                A Life's Story
                            </h3>

                            <p>
                                A potrait of millions of ordinary american citizens as they moved through the twentieth century
                            </p>
                        </div>

                        <div className="trailer-container">
                                
                            <VideoPlayer
                                url={VideoTrailer}
                                poster={''}
                                width={600}
                                height={400}
                                autoplay={false}
                            />
                        </div>
                    </section>
                </div>
            </div>
         </>
     )
}

export default BookTrailer