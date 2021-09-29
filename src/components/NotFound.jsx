import React from 'react';
import nf from '../images/404.gif';

function NotFound() {
    return (
        <>
          <div className="container-fluid">
           <div className="row">
                <div className="col-10 mx-auto text-center py-5">
                 <img className="img-fluid" src={nf} alt="Not Found Image" />
                </div>       
           </div>  
          </div> 
        </>
    )
}

export default NotFound;
