import React from 'react'
import { Parallax } from 'react-parallax';

const NFB = (props) =>{
    return(
        <>

            <section className="banner-section">
                <Parallax 
                    bgImageAlt="the cat"
                    strength={300}
                    bgImage={require('../assets/images/banner/non_front_banner.png')}
                    >

                    <div className="container">
                        <h2 className="banner-title">
                            {props.title}
                        </h2>
                    </div>

                </Parallax>
            </section>
           
        </>
    )
}


export default NFB