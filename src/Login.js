import React from 'react'
import { Link } from 'react-router-dom';
import FacebookIcon from '@material-ui/icons/Facebook';
import Google from './Google';
import "./Login.css";
import fbicon from './icon_facebook.png';

const Login = () => {
    return (
        <div className="container">
            <div className="login">
                <div className="login-title">
                    <h3>Welcome to Godana! Please Login </h3>
                    <div className="login-other">
                        <span>New Member? <Link to="/signup">Register</Link> Here.</span>
                    </div>
                </div>
                <div className="form-mod">
                    <form action="" className="form-action">
                        <div className="mod-login">
                            <div className="mod-login-col1">
                                <div className="mod-input1">
                                    <label htmlFor="">Phone Number or Email *</label>
                                    <input type="text" placeholder="Please enter your Phone Number or Email" />
                                </div>
                                <div className="mod-input2">
                                    <label htmlFor="">Password*</label>
                                    <input type="password" placeholder="Please Enter your Password" />
                                </div>
                                <div className="mod-login-forgot">Forgot Password?</div>
                            </div>
                            <div className="mod-login-col2">
                                <div className="mod-login-btn">
                                    <button type="submit">LOGIN</button>
                                </div>
                                <div className="mod-login-third">
                                    <div className="mod-third-party-login">
                                        <div className="mod-third-party-login-line">
                                            <span>Or, login with</span>
                                        </div>
                                        <div className="mod-third-party-login-bd">
                                            <div className="google-btn">
                                                <div className="google-icon-wrapper">
                                                    <img src={fbicon} alt="fb" className="fb-icon"/>
                                                </div>
                                                <p class="btn-text"><b>Sign in with facebook</b></p>
                                            </div>
                                            <div class="google-btn">
                                                <div class="google-icon-wrapper">
                                                    <Google id="google-icon" />
                                                </div>
                                                <p class="btn-text"><b>Sign in with google</b></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login
