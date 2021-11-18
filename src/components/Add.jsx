import axios from 'axios';
import React, { useState } from 'react';
import {useHistory} from 'react-router-dom';

function Add() {

    let history = useHistory();

    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const InputEvent = (e) => {
      setUser({...user, [e.target.name]: e.target.value});
    }

    const formSubmit = async (e) => {
        e.preventDefault();
        // await axios.post("?http://localhost:3003/users", user);
        // for netlify
        await axios.post("/users", user);
        history.push("./all");
      };

    return (
        <>

<div className="container-fluid">
<div className="row my-5">
    <div className="col-md-4"></div>
    <div className="col-md-4">
        <h1 className="text-center page-title">Add User</h1>

        <form onSubmit={formSubmit}>
            <div className="form-group">
                <label htmlFor="exampleInputName1">Name </label>
                <input type="text" 
                className="form-control" 
                id="exampleInputName1" 
                aria-describedby="nameHelp" 
                placeholder="Enter Name"
                required
                name="name"
                 value={user.name}
                onChange={InputEvent} />
            </div>

            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email </label>
                <input type="email" 
                className="form-control" 
                id="exampleInputEmail1" 
                aria-describedby="emailHelp" 
                placeholder="Enter email"
                required
                name="email"
                value={user.email}
                onChange={InputEvent}  />
            </div>
            
            <div className="form-group">
                <label htmlFor="exampleInputPhone1">Phone</label>
                <input type="tel" 
                className="form-control" 
                id="exampleInputPhone1" 
                placeholder="Phone"
                required
                name="phone"
                value={user.phone}
                onChange={InputEvent}  />
            </div>
        
            <button type="submit" onSubmit={formSubmit} className="btn btn-primary">Submit</button>
        </form>
    </div>
    <div className="col-md-4"></div>
    </div>
</div>


        </>
    )
}

export default Add
