import React from 'react';
import { useContext } from 'react';
import './DeleteUser.css'
import DeleteIcon from '../../../../icons/delete.png'
// import { UserContext } from '../../../App';

const DeleteUser = ({user}) => {
    console.log(user);
    // const [loggedInUser,setLoggedInUser] = useContext(UserContext);  
        const deleteEvent=(id)=>{
            fetch(`http://localhost:5000/deleteUser/${id}`, {
                method: 'DELETE'
            })
            .then(response => response.json())
            .then(result => {
                console.log("successfully deleted");
                if(result){           
                    document.getElementById("userRow").style.display="none";
                }
            })
            
        }
    
    return (
        <tbody id="userRow">
            <tr>
                <td scope="col">{user._id}</td>
                <td scope="col">{user.name}</td>
                <td scope="col">{user.email}</td>
                <td scope="col">{user.mobile}</td>
                <td scope="col">{user.address}</td>
                <td onClick={() =>deleteEvent(user._id)} scope="col"><img className="deleteIcon" src={DeleteIcon} alt=""/></td>
            </tr>
        </tbody>
    );
};

export default DeleteUser;