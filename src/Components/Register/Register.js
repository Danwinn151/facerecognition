import React, { Component } from "react";

class Register extends Component {
  constructor(props) {
    super(props)
    this.state ={
      RegisterName: '',
      RegisterEmail: '',
      RegisterPassword: '',
    }
  }
  onRegisterName = (event) => {
    this.setState({RegisterName :event.target.value})
  }
  onRegisterEmail = (event) => {
    this.setState({RegisterEmail : event.target.value})
  }
  onRegisterPassword = (event) => {
    this.setState({RegisterPassword: event.target.value})
  }
  onSubmitForm =() => {
    fetch("http://localhost:3000/register", {
      method : 'post',
      headers: {'Content-type': "application/json"},
      body: JSON.stringify({
        name: this.state.RegisterName,
        email: this.state.RegisterEmail,
        password: this.state.RegisterPassword
      })
    })
    .then(resp => resp.json())
    .then(user => {
      if(user) {
      this.props.onRouteChange("home")
      }
    })
  }
  render () {
    return(
        <div>
         <article className="br3 ba dark-gray b--black-10 mv4 w-100 w-50-m w-25-l mw6 center shadow-5">
           <main className="pa4 black-80">
          <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
        <legend className="f4 fw6 ph0 mh0 tc">Register</legend>
      <div className="mt3">
        <label className="db fw6 lh-copy f6 tc" htmlFor="email-address">Email</label>
        <input onChange={this.onRegisterEmail}
         className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" 
         type="email" name="email-address"  id="email-address"/>
      </div>
      <div className="mt3">
        <label className="db fw6 lh-copy f6 tc" htmlFor="email-address">Name</label>
        <input onChange ={this.onRegisterName} className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="name" name="name"  id="name"/>
      </div>
      <div className="mv3">
        <label className="db fw6 lh-copy f6 tc" htmlFor="password">Password</label>
        <input onChange= {this.onRegisterPassword} className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100" type="password" name="password"  id="password"/>
      </div>
    </fieldset>
    <div className="tc">
      <input onClick={this.onSubmitForm} className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib" type="submit" value="Regiter"/>
    </div>
   </div>
   </main>
   </article>
    </div>
    )
  }
}
export default Register