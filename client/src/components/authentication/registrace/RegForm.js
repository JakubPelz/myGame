import React, { useState } from 'react';
import Axios from 'axios';

const RegForm = () => { 
    const url = "http://localhost:5000/api/user/register";
    const [userInput, setUserInput] = useState({name: "", email: "", password: "", rasa: ""});

    function submit(e) {
      e.preventDefault();
      Axios.post(url,{
          name: userInput.name,
          email: userInput.email,
          password: userInput.password,
          rasa: userInput.rasa
      }).then(res => {
          console.log(res.data)
      })
    }

    function handle(e) {
       const newdata={...userInput}
       newdata[e.target.id] = e.target.value
       setUserInput(newdata)
       console.log(newdata)
    }

    
    return (
        <div>
            <form className="ui form" onSubmit={(e) => submit(e)}>
                <div className="field">
                    <label>Název gubernátu</label>
                    <input type="text" name="name" placeholder="Název gubernátu" value={userInput.name} onChange={(e) => handle(e)} id="name"/>
                </div>
                <div className="field">
                    <label>Email adress</label>
                    <input type="text" name="email" placeholder="Email" value={userInput.email} onChange={(e) => handle(e)} id="email"/>
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="text" name="password" placeholder="Password" value={userInput.password} onChange={(e) => handle(e)} id="password"/>
                </div>
                <div className="field">
                    <label>Zvolte Rasu</label>
                    <select className="ui fluid dropdown" value={userInput.rasa} onChange={(e) => handle(e)} id="rasa">
                        <option value="">Rasa</option>
                        <option value="Lide">Lide</option>
                        <option value="Elfove">Elfove</option>
                        <option value="Trpaslíci">Trpaslíci</option>
                        <option value="Hobiti">Hobiti</option>
                        <option value="Skřeti">Skřeti</option>
                        <option value="Magistři">Magistři</option>
                        <option value="Víly">Víly</option>
                        <option value="Demoni">Demoni</option>
                        <option value="Nemrtví">Nemrtví</option>
                        <option value="Obři">Obři</option>
                    </select>
                </div>
                <div className="field">
                    <div className="ui checkbox">
                        <input type="checkbox" tabIndex="0" className="hidden" />
                        <label>I agree to the Terms and Conditions</label>
                    </div>
                </div>
                <button className="ui button" type="submit" onClick={submit}>Submit</button>
            </form>
        </div>
    )
}

export default RegForm;
