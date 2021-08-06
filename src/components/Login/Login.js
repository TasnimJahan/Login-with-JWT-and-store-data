import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../App';
import './Login.css'

const Login = () => {
    const [loggedInUser,setLoggedInUser]= useContext(UserContext);

    const [userMail,setUserMail] = useState([]);
    const [userPassword,setUserPassword] = useState([]);
    const [user,setUser] = useState([]);
    
    const handleSubmit =(e) => {
        e.preventDefault();

        console.log("users are", user);
        
        const userData = {
          email: user.email,
          password: user.password
      }
      const url = `http://localhost:5000/login`;
      fetch(url, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData)
      })
      .then(response => console.log("server side response", response));
    //   window.location.reload() ;
    }



    //handle login 
    const handleLogin = (e) => {
        e.preventDefault();
        console.log("The user",user);
        setLoggedInUser(user);
        console.log("loggedInUser",loggedInUser);
        console.log("loggedInUser.email",loggedInUser?.email);
        // window.location.href='/addUser'
    }

// Handle error
    // const handleError = ()=> {
        // const passwordValue = document.getElementById("password").value;
        // const confirmPasswordValue = document.getElementById("confirmPassword").value;
        // const unMatchPassword = document.getElementById("unMatchPassword");
        // if (passwordValue !== confirmPasswordValue) {
        //   unMatchPassword.style.display ="block";
        // }
    //   }

       //Handle blur
    const handleBlur=(event)=>{
            if (event.target.name ==='email') {
                setUserMail(event.target.value);
            }
            if (event.target.name === 'password') {
                setUserPassword(event.target.value);
            }
            
            const newUserInfo = {...user, [event.target.name] : event.target.value};
            setUser(newUserInfo);
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
        <div>
            {/* Login Form */}
            <div className="loginPage" id="loginPage">
                <h2 className="loginHeading">Login</h2>
                <form action="" onSubmit={handleSubmit}>
                    <input type="email" onBlur={handleBlur} name="email" id="" placeholder="Email" required/>
                    <br/>
                    <input type="password" onBlur={handleBlur} name="password" id="" placeholder="Password" required/>          
                    <button onClick={handleLogin} className="loginBtn btn btn-warning"><input type="submit" value="Login"/></button>
                </form>
                <h5 id="inValidMail" style={{color:'red', textAlign:'center'}}>Please give a correct email address</h5>
                <h5 id="inValidPassword" style={{color:'red', textAlign:'center'}}>Please give the correct password</h5>
             </div>
        </div>
    );
};

export default Login;