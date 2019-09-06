import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { getAllEmployees } from './Employee';

class Directory extends Component {
 handleClickEmpl = id => {
  console.log(id);
 };
 render() {
  const allEmpl = getAllEmployees();
  return (
   <div>
    Directory component:
    {allEmpl.map(em => {
     return (
      <div
       key={Math.random(Date.now())}
       onClick={() => this.handleClickEmpl(em.id)}
      >
       <Link to={`/directory/${em.id}`}>{em.name}</Link>
      </div>
     );
    })}
   </div>
  );
 }
}

export default Directory;
