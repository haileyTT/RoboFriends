import React from 'react';
import Card from './Card';

function CardList({robots}) {
    return (
      <div>
        <Card id={robots[0].id} email={robots[0].email} name={robots[0].name}/>
        <Card id={robots[1].id} email={robots[1].email} name={robots[1].name}/>
        <Card id={robots[2].id} email={robots[2].email} name={robots[2].name}/>
      </div>
        
    )
}

export default CardList;