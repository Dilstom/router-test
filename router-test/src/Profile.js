import React, { Component } from 'react';

class Profile extends Component {
 constructor() {
  super();
  this.state = {
   id: '0',
  };
 }

 componentDidMount() {
  this.setState({ id: this.props.match.params.id });
 }
 render() {
  console.log('props in Profile: ', this.state.id);
  return (
   <div>
    <h4>Name: {this.props.name}</h4>
    <h4>role: {this.props.role}</h4>
   </div>
  );
 }
}

export default Profile;
