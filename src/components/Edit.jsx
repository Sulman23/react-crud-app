import axios from 'axios';
import React, { useState, useEffect } from 'react';
import {useHistory, useParams} from 'react-router-dom';

function Edit() {

    let history = useHistory();
    const { id } = useParams();
   
    // const [name, setName] = useState('')
    // const [email, setEmail] = useState('')
    // const [phone, setPhone] = useState({
    //     phone1: '',
    //     phone2: '',
    // })


    const [user, setUser] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const InputEvent = (e) => {
      setUser({...user, [e.target.name]: e.target.value });
    }
 

    const loadUser = async () => {
        // const result = await axios.get(`http://localhost:3003/users/${id}`, user);
        // for Heroku
        const result = await axios.get(`/users/${id}`, user);
        setUser(result.data);
    }

    useEffect(() => {
        loadUser();
      }, []);

    const formSubmit = async (e) => {
        e.preventDefault();
        // await axios.put(`http://localhost:3003/users/${id}`, user);
        // for Heroku
        await axios.put(`/users/${id}`, user);
        history.push("/all");
      };

    return (
        <>
<div className="container-fluid">
<div className="row my-5">
    <div className="col-md-4"></div>
    <div className="col-md-4">
        <h1 className="text-center page-title">Edit User</h1>
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
                onChange={InputEvent}
                // onChange={(e) => setName(e.target.value)}
                 />
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
                onChange={InputEvent} 
                // onChange={(e) => setEmail(e.target.value)} 
                />
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
        
            <button type="submit" onSubmit={formSubmit} className="btn btn-warning">Update User</button>
        </form>
    </div>
    <div className="col-md-4"></div>
</div>
</div>
        </>
    )
}

export default Edit
