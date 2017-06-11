import React from "react";
import './style.css'

class login extends React.Component {

    render(){
        return(
            <div className="container loginForm">
                <div className="card card-container">
                    <img id="profile-img" alt="userImage" className="profile-img-card" src="images/man.svg" />
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