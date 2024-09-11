import { Component } from "react";

export default class Navbar extends Component {
  constructor() {
    super();
    this.state={
      name:"before",
      isAuthenticated:false
    }
  }
  function_name(){
    this.setState({name:(this.state.name=="before")?"after":"before"})
    this.setState({isAuthenticated:!this.state.isAuthenticated})
  }
  render() {
    return(
    <>
      <h1>Hello From Navbar {this.state.name}</h1>
      {(this.state.isAuthenticated && <h1>Hello From Navbar isAuthenticated </h1>)}
      {(this.state.isAuthenticated?<h1>Hello From Navbar isAuthenticated </h1>:<h1>Login first </h1>)}
      <button onClick={()=>this.function_name()}>Change</button>
    </>
    );
  }
}
