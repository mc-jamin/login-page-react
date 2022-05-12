import React from 'react'
import { Helmet } from 'react-helmet'
import './ezana.css'


const Ezana = (props) => {
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
            <input id='email-input' type='email' placeholder='Enter your email' />
          </div>
          <div className="ezana-password-input">
            <label className="ezana-text06">Password</label> <br></br>
            <input id='password-input' type='email' placeholder='Enter passsword' />
          </div>
          <div className="ezana-remember-forget">
            <span className="ezana-text11">Forgot password?</span>
            <span className="ezana-text12">Remember me</span>
            <input type='checkbox' className="ezana-image5" />
          </div>
          <div>
            <input type='button' value='Sign in' className="ezana-sign-in-button" />
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
