import React from 'react';
import CardItem from './CardItem';

export default function CardList({value}){
   
    const {card} =  value;
    console.log(value ,card);
    return (
        <div className ="container-fluid">
            {card.map( item =>{
                return <CardItem key = {item.id} item ={item} value ={value} />;
               })}
            
        </div>
    )
}