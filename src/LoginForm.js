import React, { useState } from 'react';
import './App.css';

const LoginForm = () => {

  //states to hold the username and password variables
    const [details, setDetails] = useState(
      { username: '', 
        password: '' });
//state to hold generated error from the inputs
  const [err, setErr] = useState({});
  /*function to validate the inputs.
  If the username or password inputs are empty, an error message is generated
  the function returns the generated error.
  If successfully compiled, the entered value is captured in the respective variables, i.e. 
  details.username or/and details.password.
  */
  const validateDetails = (details) => {
    let err = {};
    if (details.username === '') {
      err = Object.assign(err, {
        username: 'This field cannot be empty',
      });      
    }
    if (details.password === '') {
      err = Object.assign(err, {
        password: 'This field cannot be empty',
      });
    }
    return err;
  }
  /*
  function to respond to changes to the input
  if the changes are validated, the set state function updates the value of the inputs
  */
  const changedInput = (evt) => {
    evt.persist()
    setDetails(details => ({ ...details, [evt.target.name]: evt.target.value }));
  }
  return (
    
    <table id="table">         
      <tr>
        <td> <label>Username :</label></td>
        <td>
          <input type= "email" id="username" name="username" Value={details.username} placeholder="Enter username"
            onChange ={changedInput.bind(this)}/>
            {err.hasOwnProperty('username') &&
               <p id="err-message" >{err.username}</p>
            }
        </td>
      </tr>
      <tr>
        <td><label>Password: </label></td> 
        <td>
          <input type= "password" id="password" name="password" value={details.password} placeholder="Enter password"
            onChange ={changedInput.bind(this)}/>
            {err.hasOwnProperty('password') &&
             <p id="err-message" >{err.password}</p>
            }
        </td>
      </tr>
      <tr>
        <td>
          <input id ="login" type="button" value ="Login" 
            onClick={ (evt)=>{
              /*function that responds to the login button being clicked.
              it also calls the validateDetails funcyion to verify the inputs
              */
                evt.preventDefault();
                setErr(() => ({ ...validateDetails(details) }));
              }
            }/>
        </td>              
      </tr>
    </table>    
  );
}
export default LoginForm;
