import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function All() {
  
  const [user, setUser] = useState([]);


  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    // const result = await axios.get("http://localhost:3003/users", user);
    // for Heroku
    const result = await axios.get("/users", user);
    setUser(result.data);
  };

  const deleteUser = async (id) => {
    // await axios.delete(`http://localhost:3003/users/${id}`, user);
    // for Heroku
    await axios.delete(`/users/${id}`, user);
    getUser();
  };


    return (
        <>
          <div className="container-fluid">
         
          <div className="row">
            <div className="col-10 mx-auto mt-5">
               <h1 className="text-center mb-5 page-title">All Users</h1>
            </div>
          </div>
          <div className="row">
              <div className="col-md-2"></div>
          <div className="col-md-8 table-responsive">

          <table className="table table-bordered text-center my-table">
            <thead>
              <tr>
                <th scope="col">ID</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col" colSpan="2" className="">Action</th>
              </tr>
            </thead>
            <tbody>
              {
                user.map((user, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.phone}</td>
                  <td>
                  <Link className="btn btn-primary my-btn" to={`/edit/${user.id}`}>Edit</Link>
                  </td>
                  <td>
                  <Link className="btn btn-danger" onClick={() => deleteUser(user.id) }>Delete</Link>
                  </td>             
                </tr>
                ))
              }
              
            </tbody>
          </table>
              
            </div>
            <div className="col-md-2"></div>
           </div>
        </div>
           
        </>
    )
}

export default All
