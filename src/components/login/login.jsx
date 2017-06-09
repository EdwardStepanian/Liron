import React from "react";
import {ControlLabel, FormControl, FormGroup} from "react-bootstrap";
function FieldGroup({ id, label, help, ...props }) {
    return (
        <FormGroup controlId={id}>
            <ControlLabel>{label}</ControlLabel>
            <FormControl {...props} />
        </FormGroup>
    );
}
import './style.css'

class login extends React.Component {

    render(){
        return(
            <div className="container">
                <div className="card card-container">
                    <img id="profile-img" className="profile-img-card" src="https://cdn0.iconfinder.com/data/icons/male-user-action-icon-set-3-ibrandify/512/13-128.png" />
                    <form className="form-signin">
                        <span id="reauth-email" className="reauth-email"></span>
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required autoFocus />
                            <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                                <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
                    </form>

                </div>
            </div>
        )
    }
}


export default login;