import React from 'react';
import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPen,faPlus,faThLarge } from '@fortawesome/free-solid-svg-icons'

import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import AddUser from './AddUser';
import './ValidationAndAddUser.css'
import AllUser from './AllUser';

const ValidationAndAddUser = () => {
    const handleAdd=()=>{
        document.getElementById("AllUserDiv").style.display="none";
        document.getElementById("AddUserDiv").style.display="block";
    }
    const handleUser=()=>{
        document.getElementById("AllUserDiv").style.display="block";
        document.getElementById("AddUserDiv").style.display="none";
    }
    return (
        <div className="screen2">
            <div className="sidenavDiv">
                <SideNav>           
                    <SideNav.Toggle />
                    <SideNav.Nav defaultSelected="home">
                        <NavItem onClick={handleUser} eventKey="allUser">
                            <NavIcon>
                            <FontAwesomeIcon style={{ fontSize: '1.75em' }} icon={faThLarge} />
                            </NavIcon>
                            <NavText>
                                All User
                            </NavText>
                        </NavItem>
                        <NavItem onClick={handleAdd} eventKey="addUser">
                            <NavIcon>
                            <FontAwesomeIcon style={{ fontSize: '1.75em' }} icon={faPlus} />
                            </NavIcon>
                            <NavText>
                                Add User
                            </NavText>
                        </NavItem>
                        {/* <NavItem eventKey="edit">
                            <NavIcon>
                            <FontAwesomeIcon style={{ fontSize: '1.75em' }} icon={faPen} />
                            </NavIcon>
                            <NavText>
                                Edit Product
                            </NavText>
                        </NavItem> */}
                    </SideNav.Nav>
                </SideNav>
            </div>
            
            <div className="tab">
                <div id="AddUserDiv">
                    <AddUser></AddUser>
                </div>
                <div id="AllUserDiv">
                    <AllUser></AllUser>
                </div>
            </div>
            
        </div>
    );
};

export default ValidationAndAddUser;