import React from 'react';
import './Person.css';

const Person = (props) => {
   // console.log(props);

   const {name,email,address,salary,img} =props.person
    return (
        <div className="person">
          <div className="photo">
          <p><img src={img} alt=""/></p>
          </div>
          <div className="info">
           
          <h2>Name: {name}</h2>
          <h3>Email: {email}</h3>
          <h3>Address: {address}</h3>
          <h2>Salary: {salary}</h2>
          <button className="main-button"
           onClick={()=>props.handleAddPerson(props.person)}
          >Add Person</button>
          </div>
        </div>
    );
};

export default Person;