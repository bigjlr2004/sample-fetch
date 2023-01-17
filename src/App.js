import React, {Component} from "react"


const API = "http://localhost:8088/posts"
class App extends React.Component{
  state = {
    isLoading: true,
    users: [],
    error: null
  };
//the fetch gets all of the posts from the JSON database and stores them in state
getFetchUsers() {
  this.setState({
    loading: true
  }, ()=> {
    fetch(`${API}`).then(res => res.json()).then(result => this.setState({
      loading: false, 
      users: result
  })).catch(console.log)
  });
}
componentDidMount() {
    this.getFetchUsers();
}
render() {
  const {
    users, error
  } = this.state;
  return (
    <React.Fragment>
    <h1>All User</h1>
    {
          error ? <p>
    {
              error.message
          } </p> : null}  {
              users.map(user => {
                  const {
                      adderss,
                      name,
                      email
                  } = user;
                  return (
                  <div key={name}>
                      <p>Name: {name}</p>
                      <p>Email: {email}</p>
                      <p>Address: {adderss}</p>
                      <hr />
                  </div>
                  );
              })
          } </React.Fragment>);
  }
}
export default App;

    



