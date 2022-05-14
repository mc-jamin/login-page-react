import React, {useState} from 'react'
import { Helmet } from 'react-helmet'
import './ezana.css'


const Ezana = (props) => {

  const [details, setDetails] = useState(
    {
      username:'',
      password: ''
    })
    const [err, setErr] = useState({})
    const validateDetails = (details) =>{
      let err = {}
      if (details.username===''){
        err=Object.assign(err, {
          username: 'This field cannot be empty'
        })
      }
      if(details.password===''){
        err=Object.assign(err, {
          password: 'This field cannot be empty'
        })
      }
      return err
    }
    const changedInput =(evt)=>{
      evt.persist()
      setDetails( details => ({...details, [evt.target.name]: evt.target.value})
      )
    }
  return (
    <><Helmet>
      <title>Login Here</title>
    </Helmet>
    <div className="ezana-container">
        <div className="ezana-ezana">
          <div className="ezana-heading">
            <span className="ezana-text09">Ezana Pay</span>
            <span className="ezana-text10">Your ultimte payment partner. </span>
          </div>
          <div className="ezana-email-input">
            <label className="ezana-text06">Email</label> <br></br>
            <input name ='username' value={details.username} id='email-input' type='email' placeholder='Enter your email' 
            onChange={changedInput.bind(this)}/>
            {
              err.hasOwnProperty('username') && <p className='error-message'>{err.username}</p>              
            }
          </div>
          <div className="ezana-password-input">
            <label className="ezana-text06">Password</label> <br></br>
            <input name='password'value={details.password} id='password-input' type='password' placeholder='Enter passsword' 
            onChange={changedInput.bind(this)}/>
            {
              err.hasOwnProperty('password') && <p className='error-message'>{err.password}</p>

            }
          </div>
          <div className="ezana-remember-forget">
            <span className="ezana-text11">Forgot password?</span>
            <span className="ezana-text12">Remember me</span>
            <input type='checkbox' className="ezana-image5" />
          </div>
          <div>
            <input type='button' value='Sign in' className="ezana-sign-in-button" 
            onClick={ evt =>{
              evt.preventDefault()
              setErr({...validateDetails(details)})
            }} />
          </div>
          <div className="ezana-text">
                <span className="ezana-text01">Don’t have an account?</span>
                <span className="ezana-text02">
                  <span
                    dangerouslySetInnerHTML={{
                      __html: ' ',
                    }} />
                </span>
                <span className="ezana-text03">Sign up here!</span>              
          </div>
        </div>
        <div className='ezana-side-pane' id='ezana-side-pane'>
          <div className='ezana-image4'></div>
        </div>
      </div></>
  )
}

export default Ezana
