import React from 'react';

class Registration extends React.Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return(
            <div className="container registrationForm">
                <div className="card card-container">
                    <img id="profile-img" alt="userImage" className="profile-img-card" src="images/woman-and-man.svg" />
                    <form className="form-signin">
                        <span id="reauth-email" className="reauth-email"></span>
                        <input type="text" id="inputFirstName" className="form-control" placeholder="First Name" required  autoFocus/>
                        <input type="text" id="inputLastName" className="form-control" placeholder="Last name" required  />
                        <input type="email" id="inputEmail" className="form-control" placeholder="Email address" required  />
                        <input type="password" id="inputPassword" className="form-control" placeholder="Password" required />
                        <button className="btn btn-lg btn-primary btn-block btn-signin" type="submit">Sign in</button>
                    </form>

                </div>
            </div>
        )
    }
}

export default Registration;


