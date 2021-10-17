import React, { useState } from 'react';
import Header from '../Header';
import Logo from '../assets/logo.png';
import Axios from 'axios';

const LogIn = () => {
    const url = "http://localhost:5000/api/user/login";
    const [userInput, setUserInput] = useState({email: "", password: ""});


    function submit(e) {
     Axios.post(url, {
        email: userInput.email,
        password: userInput.password
     }).then(res => {
         console.log(res.data)
     })
    }

    function handle(e) {
      const userLogin = {...userInput};
      userLogin[e.target.id] = e.target.value;
      setUserInput(userLogin);
      console.log(userLogin)
    }

    return (
        <div>
            <Header />
            <div className="ui middle aligned center aligned grid">
                <div className="column" style={{"max-width": "450px"}}>
                    <h2 className="ui teal header">
                        <img src={Logo} alt="Semantic Logo"/>
                        <div className="content">
                            Log-in to your account
                        </div>
                    </h2>
                    <form onSubmit={(e) => submit(e)} className="ui large form">
                        <div className="ui stacked secondary  segment">
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="user icon"></i>
                                    <input type="text" name="name" placeholder="Email" value={userInput.email} onChange={(e) => handle(e)} id="email"/>
                                </div>
                            </div>
                            <div className="field">
                                <div className="ui left icon input">
                                    <i className="lock icon"></i>
                                    <input type="password" name="password" placeholder="Password" value={userInput.password} onChange={(e) => handle(e)} id="password"/>
                                </div>
                            </div>
                            <div className="ui fluid large teal submit button" onClick={submit}>Login</div>
                        </div>

                        <div className="ui error message"></div>

                    </form>

                    <div className="ui message">
                        New to us? <a>Register</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LogIn
