import React from 'react';

const Card = ({ name, email, id }) => {
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow mb-3 bw2 shadow-5'>
            <img src={`https://robohash.org/${id}?200x200`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}


export default Card;

/* classNames nad styles will not work because I did not install 
tachyons as it might mess up my configs with bootstrap 
only trying to learn the functionality of react*/

/* Destructured the props and added them to parameters in Card const.
started with const {name, email, id} = props; and then shortened it by 
adding them to parameter */ 

/* className='tc bg-light-green dib br3 pa3 ma2 grow mb-3 bw2 shadow-5'
this is the class name he used for styling using tachyions */