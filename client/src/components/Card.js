import React from 'react';

function Card(props){

  
    return(
        <div className='card'>
            <img src={props.img}className='cardImg' alt='img'/>
            <div className='cardBody'>
                <h2 className='cardTitle'>{props.title}</h2>
                <p className='cardDescription'>{props.description}</p>
                <a  href={props.button} target="_blank" rel="noreferrer nofollow">
                <button className='cardbtn'>More Info</button>
                </a>
            </div>
        </div>
    )
  }

export default Card