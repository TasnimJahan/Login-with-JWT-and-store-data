import React from 'react';
import './Login.css'

const Login = () => {
    // Handle error
    const handleError = ()=> {
        // const passwordValue = document.getElementById("password").value;
        // const confirmPasswordValue = document.getElementById("confirmPassword").value;
        // const unMatchPassword = document.getElementById("unMatchPassword");
        // if (passwordValue !== confirmPasswordValue) {
        //   unMatchPassword.style.display ="block";
        // }
      }

       //Handle blur
    const handleBlur=(event)=>{
        // let isFormValid=true;
        // if (event.target.name ==='email') {
        //   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        //   isFormValid =  re.test(String(event.target.value).toLowerCase());
        //   const isFormValid2 =  re.test(String(event.target.value).toLowerCase());
        //   if(!isFormValid2){
        //     document.getElementById("inValidMail").style.display="block";
        //     document.getElementById("inValidPassword").style.display = "none";
        //     document.getElementById("unMatchPassword").style.display="none";
        //   }
        // }
        // if (event.target.name === 'password') {
        //   const isPasswordValid = event.target.value.length >6;
        //   const passHasNumber = /\d{1}/.test(event.target.value);
        //   const passwordValue = document.getElementById("password").value;
        //   const confirmPasswordValue = document.getElementById("confirmPassword").value
        //   const isPasswordSame = passwordValue === confirmPasswordValue;
        //   if(!isPasswordValid || !passHasNumber){
        //     document.getElementById("inValidPassword").style.display = "block";
        //     document.getElementById("unMatchPassword").style.display="none";
        //     document.getElementById("inValidMail").style.display="none";    
        //   }
        //   isFormValid = isPasswordValid && passHasNumber && isPasswordSame;
        // }
        // if(isFormValid) {
        //   const newUserInfo = {...user, [event.target.name] : event.target.value};
        //   setUser(newUserInfo);
        // }
      }


    const handleSubmit = (e)=>{
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
        }
    return (
        <div>
            {/* Login Form */}
            <div className="loginPage" id="loginPage">
                <h2 className="loginHeading">Login</h2>
                <form action="" onSubmit={handleSubmit}>
                    <input type="email" onBlur={handleBlur} name="email" id="" placeholder="Email" required/>
                    <br/>
                    <input type="password" onBlur={handleBlur} name="password" id="" placeholder="Password" required/>          
                    <button onClick={handleError} className="loginBtn btn btn-warning"><input type="submit" value="Login"/></button>
                </form>
                <h5 id="inValidMail" style={{color:'red', textAlign:'center'}}>Please give a correct email address</h5>
                <h5 id="inValidPassword" style={{color:'red', textAlign:'center'}}>Please give the correct password</h5>
                {/* <h3 style={{color:'red'}}>{user.error}</h3>
                {
                    user.success && <h3 style={{color:'green'}}>User Logged in successfully</h3>
                } */}
             </div>
        </div>
    );
};

export default Login;