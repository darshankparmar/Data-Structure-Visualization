import React, { useEffect, useState } from 'react';
import './auth.css';

export default function auth() {

    useEffect(() => {
        const sign_in_btn = document.querySelector("#sign-in-btn");
        const sign_up_btn = document.querySelector("#sign-up-btn");
        const authentication = document.querySelector(".authentication");

        sign_up_btn.addEventListener("click", () => {
            authentication.classList.add("sign-up-mode");
        });

        sign_in_btn.addEventListener("click", () => {
            authentication.classList.remove("sign-up-mode");
        });



    })

    var [user, setUser] = useState({
        username: "", email: "", password: ""
    });

    const handleInputs = (e) => {
        setUser({...user, [e.target.name]: e.target.value});
    }

    return (
        <div className="authentication">

             <div className="auth-forms">
                <div className="signin-signup">
                    <form className="sign-in-form">
                        <h2 className="form-title">Sign In</h2>
                        <div className="form-input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder=" Username" name="username" value={user.username} onChange={handleInputs} /> 
                        </div>
                        <div className="form-input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder=" Password" name="password" value={user.password}  onChange={handleInputs} /> 
                        </div>
                        <a className="forgot-password">forgot password?</a>
                        <button className="auth-button">Login</button>
                        <p className="social-text">Or Sign in with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon fb">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon gp">
                                <i className="fab fa-google-plus-g"></i>
                            </a>
                            <a href="#" className="social-icon ld">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div>    
                    </form>

                    <form className="sign-up-form">
                        <h2 className="form-title">Sign Up</h2>
                        <div className="form-input-field">
                            <i className="fas fa-user"></i>
                            <input type="text" placeholder=" Username" name="username" value={user.username} onChange={handleInputs} /> 
                        </div>
                        <div className="form-input-field">
                            <i className="fas fa-envelope"></i>
                            <input type="email" placeholder=" Email" name="email" value={user.email}  onChange={handleInputs} /> 
                        </div>
                        <div className="form-input-field">
                            <i className="fas fa-lock"></i>
                            <input type="password" placeholder=" Password" name="password" value={user.password}  onChange={handleInputs} />
                        </div>
                        <button className="auth-button">Sign Up</button>
                        <p className="social-text">Or Sign up with social platforms</p>
                        <div className="social-media">
                            <a href="#" className="social-icon fb">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a href="#" className="social-icon gp">
                                <i className="fab fa-google-plus-g"></i>
                            </a>
                            <a href="#" className="social-icon ld">
                                <i className="fab fa-linkedin-in"></i>
                            </a>
                        </div> 
                    </form>
                </div>
             </div>

            <div className="auth-panels">
                <div className="panel left-panel">
                    <div className="content">
                        <h3>New here ?</h3>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,ex ratione. Aliquid!</p>
                        <button className="auth-panel-btn" id="sign-up-btn">Sign up</button>
                    </div>
                    <img src="/images/log.svg" className="image" alt="" />
                </div>
                <div className="panel right-panel">
                    <div className="content">
                        <h3>One of us ?</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum laboriosam ad deleniti.</p>
                        <button className="auth-panel-btn" id="sign-in-btn">Sign in</button>
                    </div>
                    <img src="/images/register.svg" className="image" alt="" />
                </div>
            </div>

        </div>
    )
}
