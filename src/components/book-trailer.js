import React, {useEffect} from 'react'
import VideoPlayer from 'react-simple-video-player'
import VideoTrailer from '../assets/video/Book_Trailer.mp4'
import ReactPlayer from 'react-player/youtube'
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";



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
                            <Player
                                playsInline
                                poster=""
                                src={VideoTrailer}
                                height="500"
                                width="500"
                            />
                    
                        </div>
                    </section>
                </div>
            </div>
         </>
     )
}

export default BookTrailer