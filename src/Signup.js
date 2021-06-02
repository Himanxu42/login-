import React from 'react';
import {useState} from 'react'; 
import {Redirect} from 'react-router-dom'
const API = process.env.REACT_APP_BACKEND


const Signup = () => {
  const [Email, setEmail] = useState("")
  const [Password, setPassword] = useState("")
  const [Fullname, setFullname] = useState("")
  const [Username, setUsername] = useState("") 
  const [redirect, setRedirect] = useState(false)

  const Register = (event) => { 
    event.preventDefault() ;
     const details = {
       email : Email ,
       password : Password,
       fullname : Fullname ,
       username : Username 
     } 
      
     fetch(`${API}/signup`, {
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
        return <Redirect to ='/login' />
      } 
    }
  
  return (
    <div> 
    {performRedirect()} 
    <div className="container">
    <form onSubmit = {Register}>
    <div className="col-md-4 mb-3">
      <label for="validationCustom01">username</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="username" value={Username} onChange={e=>{setUsername(e.target.value); console.log(Username); }} />
      </div>

    
    <div className="col-md-4 mb-3">
      <label for="validationCustom01">Full name</label>
      <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value={Fullname} onChange={e=>{setFullname(e.target.value)}} />
      </div>
      
    
  <div className="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={Email} onChange={e=>{setEmail(e.target.value)}}/>
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" value={Password} onChange={e=>{setPassword(e.target.value)}}/>
  
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
    </div>  
    </div>
  );
};



export default Signup;