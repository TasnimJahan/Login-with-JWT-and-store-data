import React , { useState } from 'react';
import './AddUser.css'
import PopupBox from './PopupBox';

const AddUser = () => {
  const [isOpen, setIsOpen] = useState(false);

  // const togglePopup = () => {
  //   setIsOpen(!isOpen);
  // }


  const openPopup = () => {
    if(validAddress && validEmail && validMobile && validUser){
      setIsOpen(true);
    }
    else{
      setIsOpen(false);
    }
  }

  const closePopup = () => {  
      setIsOpen(false);
      handleSubmit();
  }

  const [user,setUser]= useState({
    userName:'',
    email:'',
    mobile:'',
    address:''
  })

  
  const [validUser,setValidUser] = useState(false)
  const [validEmail,setValidEmail] = useState(false)
  const [validMobile,setValidMobile] = useState(false)
  const [validAddress,setValidAddress] = useState(false)



       //Handle blur
    const handleBlur=(event)=>{
        let isFormValid=true;

        //User name validation
        if (event.target.name ==='userName') {
          // const regEx = /^[0-9a-zA-Z]+$/;
          // isFormValid =  regEx.test(String(event.target.value)) && (event.target.value.indexOf(' ') === 0);
          isFormValid =  !/\s/.test(String(event.target.value));
          // const isUserValid = regEx.test(String(event.target.value)) && (event.target.value.indexOf(' ') === 0);
          const isUserValid = !/\s/.test(String(event.target.value));
          if(!isUserValid){
            document.getElementById("inValidMail").style.display="none";
            document.getElementById("inValidMobile").style.display = "none";
            document.getElementById("inValidAddress").style.display = "none";
            document.getElementById("inValidUserName").style.display="block";   
          }
          else{
            // document.getElementById("inValidMail").style.display="none";
            // document.getElementById("inValidMobile").style.display = "none";
            // document.getElementById("inValidAddress").style.display = "none";
            document.getElementById("inValidUserName").style.display="none";
            setValidUser(true);   
          }
        }

        //Email validation
        if (event.target.name ==='email') {
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          isFormValid =  re.test(String(event.target.value).toLowerCase());
          const isMailValid =re.test(String(event.target.value).toLowerCase());
          if(!isMailValid){
            document.getElementById("inValidMail").style.display="block";
            document.getElementById("inValidMobile").style.display = "none";
            document.getElementById("inValidUserName").style.display="none"; 
            document.getElementById("inValidAddress").style.display = "none";  
          }
          else{
            setValidEmail(true);
            document.getElementById("inValidMail").style.display="none";
            // document.getElementById("inValidMobile").style.display = "none";
            // document.getElementById("inValidUserName").style.display="none"; 
            // document.getElementById("inValidAddress").style.display = "none";  
          }
        }

        //mobile validation
        if (event.target.name === 'mobile') {
          isFormValid = event.target.value.length === 10;
          const isMobileValid = event.target.value.length === 10;
          if(!isMobileValid){
            document.getElementById("inValidMobile").style.display = "block";
            document.getElementById("inValidMail").style.display="none";    
            document.getElementById("inValidUserName").style.display="none"; 
            document.getElementById("inValidAddress").style.display = "none";   
          }
          else{
            setValidMobile(true);
            // document.getElementById("inValidMail").style.display="none";
            document.getElementById("inValidMobile").style.display = "none";
            // document.getElementById("inValidUserName").style.display="none";   
            // document.getElementById("inValidAddress").style.display = "none";
          }
        }

        

        //Address validation
        if (event.target.name ==='address') {
          isFormValid =  /\s/.test(String(event.target.value));
          const isAddressValid = /\s/.test(String(event.target.value));
          if(!isAddressValid){
            document.getElementById("inValidMail").style.display="none";
            document.getElementById("inValidMobile").style.display = "none";
            document.getElementById("inValidAddress").style.display = "block";
            document.getElementById("inValidUserName").style.display="none";   
          }
          else{
            setValidAddress(true);
            // document.getElementById("inValidMail").style.display="none";
            // document.getElementById("inValidMobile").style.display = "none";
            document.getElementById("inValidAddress").style.display = "none";
            // document.getElementById("inValidUserName").style.display="none";   
          }
        }
        if(isFormValid) {
          const newUserInfo = {...user, [event.target.name] : event.target.value};
          setUser(newUserInfo);
        }
        // console.log("user",user);
      }



      const handleSubmit =() => {
        const userData = {
          name: user.userName,
          email: user.email,
          mobile: user.mobile,
          address: user.address
      }
      const url = `http://localhost:5000/addUser`;
      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
      })
      .then(response => console.log("server side response", response));
      window.location.reload() ;
    }




    // const handleSubmit = (e)=>{
        // e.preventDefault(); 
        // // for a new user
        // if(newUser && user.email && user.password){
        //   firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        //     .then((userCredential) => {
        //       var User = userCredential.user;
        //       updateUserName(user.userName);
        //       setLoggedInUser(user);
        //       history.replace(from);
        //       const newUserInfo = {...User , error :'' , success : true};
        //       setUser(newUserInfo);
        //     })
        //     .catch((error) => {
        //       var errorCode = error.code;
        //       var errorMessage = error.message;
        //       console.log(errorCode , errorMessage);
        //       const newUserInfo = {...user, error: errorMessage , success: false};
        //       setUser(newUserInfo);
        //     });
        //   console.log("Form submitted");
        // }
    return (
        <div className="addUserFrom">
             {/* addUser form     */}
            <div className="addUser" id="addUserPage">
                <h2 className="userHead">Add a User</h2>
                {/* <form action="" onSubmit={handleSubmit}> */}
                    <input type="text" name="userName" onBlur={handleBlur} placeholder="Name" required/>
                    {/* <input type="tel"onBlur={handleBlur}  id="mobile" name="mobile" placeholder="Mobile number" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/> */}
                    <input type="tel"onBlur={handleBlur}  id="mobile" name="mobile" placeholder="Mobile number" required/>
                    <input type="email" onBlur={handleBlur} name="email" id="" placeholder="Email" required/>
                    <br/>
                    <input type="text"  onBlur={handleBlur} name="address" id="address" placeholder="Your Address" required/>

                    {/* {
                     validAddress && validEmail && validMobile && validUser && */}
                        <button  onClick={openPopup}  className="loginBtn btn " style={{backgroundColor: '#673ab7'}}><input className="addUserSubmit" type="submit" value="Add this User" /></button>
                    {/* } */}

                {/* </form> */}
                
                {/* <h5 id="unMatchPassword" style={{color:'red', textAlign:'center'}}>Please make sure your password matched</h5> */}
                <h5 id="inValidMail" style={{color:'red', textAlign:'center'}}>Please set a valid email address</h5>
                <h5 id="inValidAddress" style={{color:'red', textAlign:'center'}}>Please provide valid address contains space</h5>
                <h5 id="inValidUserName" style={{color:'red', textAlign:'center'}}>Please give a valid UserName and with no space</h5>
                <h5 id="inValidMobile" style={{color:'red', textAlign:'center'}}>Please provide a 10 digit  Mobile number</h5>


                {isOpen && <PopupBox
                  content={<>
                    <b>Design your Popup</b>
                    <p style={{color:'Green', fontSize:'bold'}}>USER ADDED SUCCESSFULLY.</p>
                    <button onClick={closePopup}>OK</button>
                  </>}
                  handleClose={closePopup}
                />}
            </div>   
        </div>
    );
};

export default AddUser;