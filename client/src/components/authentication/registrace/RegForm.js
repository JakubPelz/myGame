import React from 'react'

const RegForm = () => {
    return (
        <div>
            <form className="ui form">
                <div className="field">
                    <label>Název gubernátu</label>
                    <input type="text" name="gubernat" placeholder="Název gubernátu" />
                </div>
                <div className="field">
                    <label>Email adress</label>
                    <input type="text" name="email" placeholder="Email" />
                </div>
                <div className="field">
                    <label>Password</label>
                    <input type="text" name="password" placeholder="Password" />
                </div>
                <div className="field">
                    <label>Zvolte Rasu</label>
                    <select className="ui fluid dropdown">
                        <option value="">Rasa</option>
                        <option value="Lide">Lide</option>
                        <option value="Elfove">Elfove</option>
                        <option value="Hobiti">Hobiti</option>
                    </select>
                </div>
                <div className="field">
                    <div className="ui checkbox">
                        <input type="checkbox" tabIndex="0" className="hidden" />
                        <label>I agree to the Terms and Conditions</label>
                    </div>
                </div>
                <button className="ui button" type="submit">Submit</button>
            </form>
        </div>
    )
}

export default RegForm;
