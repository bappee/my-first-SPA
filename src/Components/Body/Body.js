import React from 'react';
import { useState } from 'react';
import './Body.css';
import Person from '../Person/Person';
import Add from '../Add/Add';


const Body = () => {

    var Data = [

        { name: 'David', email: 'david@gmail.com', address: 'Newyork', salary: 2000, img: 'https://fournews-assets-prod-s3-ew1-nmprod.s3.amazonaws.com/media/2017/06/jonathan-rugman-atrium.jpg' },
        { name: 'Jonson', email: 'jonson@gmail.com', address: 'Newyork', salary: 1500, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDY3Z___ojyhdxawBjVS1-h8zQW95csXnp-s0Jpkxd3xlLeRP1&usqp=CAU' },
        { name: 'Nakson', email: 'nakson@gmail.com', address: 'Newyork', salary: 1800 , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQoZr36du80OAcqE6LtbPUqEXF8vKDD3LqYV4AMS5QgRe9pTyU7&usqp=CAU'},
        { name: 'Camerron', email: 'camer@gmail.com', address: 'Newyork', salary: 2000 , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVDsfuweqdZbsDVAGmXlabxKUAZEe_xx0vKRKV-Q87NzrkCocR&usqp=CAU'},
        { name: 'Tramen', email: 'tramen@gmail.com', address: 'Newyork', salary: 2500, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSZ8go3ARyV4cb_3AC4mLEc0x8mF86EV8iswsXglqn6E5d3pNnN&usqp=CAU' },
        { name: 'Timahl', email: 'timahl@gmail.com', address: 'Newyork', salary: 1700, img:'https://s.hdnux.com/photos/01/03/65/72/17784457/5/920x920.jpg' },
        { name: 'awgele', email: 'awgel@gmail.com', address: 'Newyork', salary: 1500 , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQuCJ1mLwjiIW4m4N8UUgJ5DHj1AqX1mPmOFfQ8GK3Q342MLYX&usqp=CAU'},
        { name: 'James', email: 'James@gmail.com', address: 'Newyork', salary:1750  , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1atyYtYEi8B0mFLEPfOsXADyklj866JnM4PM_8KcWmU8y42Ln&usqp=CAU'},
        { name: 'Logan', email: 'logan@gmail.com', address: 'Newyork', salary:1500  , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQAccs_xl-HCml9oFLpyJEM5nDDy7c-H_F5vFIMnYw-DkBv2wKc&usqp=CAU'},
        { name: 'Mason', email: 'mason@gmail.com', address: 'Newyork', salary: 2000 , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTY0ikzRwfnjouhduObYbVXBnk0UT_kEk0dTjBwnvQRocYa5txE&usqp=CAU'},
        { name: 'Aiden', email: 'aiden@gmail.com', address: 'Newyork', salary:1200  , img:'https://cdn.risingbd.com/media/imgAll/2017December/bg/Sayed_Mahmud_Hossain2018031121215420180311225737.jpg'},
        { name: 'Lucas', email: 'lucas@gmail.com', address: 'Newyork', salary:1300  , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSSFKnJOT-CYfDdyGQT3I6dv6ignEmq3Q6Uq1wJt2QBg9RXEx3z&usqp=CAU'},
        { name: 'Liam', email: 'liam@gmail.com', address: 'Newyork', salary: 1100, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRsBHQ3xki1pjkIGLnoCloMEOVS14QtZqOPDUgbFPzygyoZPKmh&usqp=CAU'},
        { name: 'Ethan', email: 'ethan@gmail.com', address: 'Newyork', salary: 1400, img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSYrB_l_f6Lkm-nz5Dfh7s9iOQS3rAjRj3M0RPmxNYQTDDwZhfa&usqp=CAU'},
        { name: 'Elijah', email: 'elijacob@gmail.com', address: 'Newyork', salary:900  , img:'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRDQHuotWkyKqPfN8t44HiEMFZQ6X5Xk3xmIWALZ1NixVYf2wUb&usqp=CAU'}

    ]

    const first15 = Data.slice(0, 15);
    const [persons, setPersons] = useState(first15);

    const [add,setAdd] = useState([]);

    const handleAddPerson=(person)=>{
    console.log('added',person);
     const newAdd= [...add,person];
     setAdd(newAdd);

    }


    return (
        <div className="body-container">
            <div className="person-container">

                {
                    persons.map(pn => <Person 
                         handleAddPerson={handleAddPerson}
                        person={pn}>
                             </Person>)

                }

            </div>
            <div className="add-container">
                <Add add={add}></Add>
            </div>
        </div>
    );
};

export default Body;