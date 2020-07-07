import React, {useEffect, useState } from 'react'
import VideoTrailer from '../assets/video/Book_Trailer.mp4'
import { Player } from 'video-react';
import "../../node_modules/video-react/dist/video-react.css";

// import loadable from '@loadable/component'
// const OtherComponent = loadable(() => import('../../node_modules/video-react/'));


const BookTrailer = ()=>{

    const[ state, __stateFunc ] = useState(false);

    useEffect(() => {
        if (typeof(window) !== 'undefined' ||  typeof window  === 'object') {
            __stateFunc(true);
        }
    },[state, __stateFunc]);

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
                            {
                                state && (
                                    <Player
                                        playsInline
                                        poster=""
                                        src={VideoTrailer}
                                        height="500"
                                        width="500"
                                     />
                                )
                            }
                      
                        </div>
                    </section>
                </div>
            </div>
         </>
     )
}

export default BookTrailer