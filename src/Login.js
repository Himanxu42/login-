import React from 'react';
import {useState} from 'react';
import {Redirect} from 'react-router-dom'
const API = process.env.REACT_APP_BACKEND




const Login = () => {
    const [Username, setUsername] = useState("")
    const [Password, setPassword] = useState("")
    const [redirect, setRedirect] = useState(false)
    const LoginUser = (event) => { 
      event.preventDefault() ;
       const details = {
        
         password : Password,
  
         username : Username 
       } 
       fetch(`${API}/login`, {
        method: 'POST', // or 'PUT'
        headers: {
         'Content-Type': 'application/json',
        },
         body: JSON.stringify(details),
     })
     .then(response => {
       // redirect to login page 
       console.log(response)
      if(response.status===200)setRedirect(true) ;
     })
     .catch((error) => {
           console.error('Error:', error);
       });
   } 

   const performRedirect = () => {
     if(redirect === true) { 
      setRedirect(false)
       return alert("successss");
     
     
      } 
    }


    return (
        <div>
    
         {performRedirect()} 
         <form onSubmit={LoginUser}>
        <div className="col-md-4 mb-3">
      <label for="validationCustom01">username</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="username" value={Username} onChange={e=>{setUsername(e.target.value); console.log(Username); }} />
      </div>
      <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={Password} onChange={e=>{setPassword(e.target.value)}}/>
    <button type="submit" class="btn btn-primary">Submit</button>
  </div>
  </form>

            
        </div>
    )
}

export default Login
