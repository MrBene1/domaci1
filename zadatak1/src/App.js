import './App.css';
import React from "react";
import 'react-notifications/lib/notifications.css';
import {NotificationContainer, NotificationManager} from 'react-notifications';

class App extends React.Component {
  state = {
    username: "",
    usernameErrors: [],
    firstname: "",
    firstnameErrors: [],
    lastname: "",
    lastnameErrors: [],
    email: "",
    emailErrors: [],
    password: "",
    passwordErrors: [],
    confirmPassword: "",
    confirmPasswordErrors: []
  };
  
  input = e =>{
    this.setState({ [e.target.name]: e.target.value });
  };

  formValidation = e => {
    e.preventDefault();

    let formValid = false;

    if(this.usernameValidation() && this.fristnameValidation() && this.lastnameValidation() && this.emailValidation() && this.passwordValidation() && this.conformPasswordValidation()){
      formValid = true;

      const post = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: this.state.username,
          firstname: this.state.firstname,
          lastname: this.state.lastname,
          email: this.state.email,
          password: this.state.password,
          confirmPassword: this.state.confirmPassword })
      };
      fetch('https://jsonblob.com/', post)
        .then(res => res.json())
        .then(data => NotificationManager.success("Account successfully created!"))
        .catch(error => {
          NotificationManager.error("Failed request")
          console.error('There was an error!', error);
      });
    }
 
    if (this.state.usernameErrors.length > 0) NotificationManager.warning(this.state.usernameErrors[this.state.usernameErrors.length -1]);
    else if (this.state.firstnameErrors.length > 0) NotificationManager.warning(this.state.firstnameErrors[this.state.firstnameErrors.length -1]);
    else if (this.state.lastnameErrors.length > 0) NotificationManager.warning(this.state.lastnameErrors[this.state.lastnameErrors.length -1]);
    else if (this.state.emailErrors.length > 0) NotificationManager.warning(this.state.emailErrors[this.state.emailErrors.length -1]);
    else if (this.state.passwordErrors.length > 0) NotificationManager.warning(this.state.passwordErrors[this.state.passwordErrors.length -1]);
    else if (this.state.confirmPasswordErrors.length > 0) NotificationManager.warning(this.state.confirmPasswordErrors[this.state.confirmPasswordErrors.length -1]);
    console.log(formValid);
    console.log(this.state);
  };



  usernameValidation(formValid){
    let usernameErrors = this.state.usernameErrors;

    if (this.state.username.length === 0){
      usernameErrors.push("Enter username");
      this.setState({ usernameErrors });
      return false;
    }
    else if (this.state.username.length < 6 || this.state.username.length > 12){
      usernameErrors.push("Username must be at least 6 characters and max 12 characters long");
      this.setState({ usernameErrors });
      return false;
    }
    else {
      usernameErrors.splice(0,usernameErrors.length);
      this.setState({ usernameErrors });
      return true;
    }
  }

  fristnameValidation(formValid){
    let firstnameErrors = this.state.firstnameErrors;

    if (this.state.firstname.length === 0){
      firstnameErrors.push("Enter first name");
      this.setState({ firstnameErrors });
      return false;
    }
    else {
      firstnameErrors.splice(0,firstnameErrors.length);
      this.setState({ firstnameErrors });
      return true;
    }
  }

  lastnameValidation(formValid){
    let lastnameErrors = this.state.lastnameErrors;

    if (this.state.lastname.length === 0){
      lastnameErrors.push("Enter last name");
      this.setState({ lastnameErrors });
      return false;
    }
    else {
      lastnameErrors.splice(0,lastnameErrors.length);
      this.setState({ lastnameErrors });
      return true;
    }
  }

  emailValidation(formValid){
    let emailErrors = this.state.emailErrors;

    const regex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if(this.state.email.length === 0 || regex.test(this.state.email) === false){
      emailErrors.push("Enter a valid email adress");
      this.setState({ emailErrors })
      return false;
    }
    else {
      emailErrors.splice(0,emailErrors.length);
      this.setState({ emailErrors });
      return true;
    }
  }

  passwordValidation(formValid){
    let passwordErrors = this.state.passwordErrors;
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*-+=.,])/;

    if (this.state.password.length === 0){
      passwordErrors.push("Enter password");
      this.setState({ passwordErrors });
      return false;
    }
    else if (this.state.password.length < 8 && this.state.password.length !== 0){
      passwordErrors.push("Password must be at least 8 characters long");
      this.setState({ passwordErrors });
      return false;
    }

    else if(regex.test(this.state.password) === false){
      passwordErrors.push("Password must be at least one uppercase, one lowercase, one special character and one number");
      this.setState({ passwordErrors })
      return false;
    }
    else {
      passwordErrors.splice(0,passwordErrors.length);
      this.setState({ passwordErrors });
      return true;
    }
  }

  conformPasswordValidation(formValid, props){
    let confirmPasswordErrors = this.state.confirmPasswordErrors;

    if (this.state.confirmPassword.length === 0){
      confirmPasswordErrors.push("Confirm password");
      this.setState({ confirmPasswordErrors });
      return false;
    }
    else if (this.state.confirmPassword !== this.state.password && this.state.confirmPassword.length !== 0){
      confirmPasswordErrors.push("Enter matching passwords");
      this.setState({ confirmPasswordErrors });
      return false;
    }
    else {
      confirmPasswordErrors.splice(0,confirmPasswordErrors.length);
      this.setState({ confirmPasswordErrors });
      return true;
    }
  }


  render(){
    return (
      <div className="main">
        <div className="signup">
          <form onSubmit={this.formValidation}>
            <label className='label'>Sign up</label>
            <input placeholder="Username" name="username" type="text" className={this.state.usernameErrors.length > 0? "error" : "input"} value={this.state.username} onChange={this.input}/>
            <input placeholder="First Name" name="firstname" type="text" className={this.state.firstnameErrors.length > 0? "error" : "input"} value={this.state.firstname} onChange={this.input}/>
            <input placeholder="Last Name" name="lastname" type="text" className={this.state.lastnameErrors.length > 0? "error" : "input"} value={this.state.lastname} onChange={this.input}/>
            <input placeholder="Email" name="email" type="text" className={this.state.emailErrors.length > 0? "error" : "input"} value={this.state.email} onChange={this.input}/>
            <input placeholder="Password" name="password" type="password" className={this.state.passwordErrors.length > 0? "error" : "input"} value={this.state.password} onChange={this.input}/>
            <input placeholder="Confirm password" name="confirmPassword" type="password" className={this.state.confirmPasswordErrors.length > 0? "error" : "input"} value={this.state.confirPassword} onChange={this.input}/>
            <input type="submit" value="Sign Up" className="submit"></input>

          </form>
        </div>
        <NotificationContainer/>
      </div>
    );
  }
}

export default App;
