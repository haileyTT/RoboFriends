import React from 'react';
import Card from './Card';

function CardList({robots}) {

    const cardComponent = robots.map( (user, i) => {
        return <Card key={robots[i].id} id={robots[i].id} email={robots[i].email} name={robots[i].name}/>
    })
    return (
      <div>
        {cardComponent}
      </div>
    )
}

export default CardList;