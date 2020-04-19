import React from 'react';

const Add = (props) => {
    const add=props.add;
     //console.log(add);

   let total=0;
   let totalName='';
    for (let i = 0; i < add.length; i++) {
        const pn = add[i];
        total= total + pn.salary; 
    } 
    
    return (
        <div>
            <h3>Added People:{add.length}</h3>
            <h5>Total Salary:${total}</h5>
           
            <h2>Hired: 
            <ul>
                {
                 add.map(pn=> <li>Name:{pn.name}</li> )
                }
            </ul>
            </h2>
        </div>
    );
};

export default Add;