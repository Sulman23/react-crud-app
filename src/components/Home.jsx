import React from 'react';
import img from "../images/home.gif"

function Home() {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                <div className="col-10 mx-auto text-center">
                    <h1 className="mt-5">Welcom to <span className="home-title">Averox URS</span></h1>
                    <h3 className="mt-3 home-tagline">This is Our Simple and Easy to use User Registration System</h3>
                    <img src={img} className="img-fluid" alt="Home animated photo" />
                </div>
                </div>
              
           </div>
            
        </>
    )
}

export default Home
