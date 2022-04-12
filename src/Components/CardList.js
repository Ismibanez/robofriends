import React from 'react';
import Card from './Card';


const CardList = ({ robots }) => {

    if(true) {
        throw new Error ('NOOOOO!');
    }

    //rendering cardcomponent above
    return (
        <div>
            {
                robots.map((user, i) => {
                    return (
                    <Card 
                        key={i} 
                        id={robots[i].id} 
                        name={robots[i].name} 
                        email={robots[i].email}
                    />
                    )
                })
            }
        </div>
    )
}

export default CardList;

/* 
initially used this to map through array 
//mapped robot array in robots.js
    
 
 //mapped robot array in robots.js
    const cardComponent = robots.map((user, i) => {
        return (
        <Card 
            key={i} 
            id={robots[i].id} 
            name={robots[i].name} 
            email={robots[i].email}
        />
        )
    })
*/