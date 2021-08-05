import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import DeleteUser from '../DeleteUser/DeleteUser';
import './AllUser.css'

const AllUser = () => {
    const [user,setUser] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/users')
        .then(res => res.json())
        .then(data => setUser(data))
    }, [])
    console.log(user);

    // const [loggedInUser,setLoggedInUser] = useContext(UserContext);


    return (
        <div className="allUserDiv">
            <div className="form allUser">
                <div className=" headSection d-flex justify-content-between">
                    <h1>All User List</h1>
                    {/* <h4>{loggedInUser.name || loggedInUser.displayName || loggedInUser.userName || " "}</h4> */}
                </div> 
                <div style={{width:'90%'}}>
                    <table className="table table-striped table-hover">
                        <tr>
                            <th scope="row">Id</th>
                            <th scope="row">Name</th>
                            <th scope="row">Email</th>
                            <th scope="row">Mobile Number</th>
                            <th scope="row">Address</th>
                            <th scope="row">Delete</th>
                        </tr>
                        
                        {
                        user.map(user =><DeleteUser user={user} key={user._id}></DeleteUser>)
                        } 

                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUser;