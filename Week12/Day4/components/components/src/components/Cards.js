import React from 'react';
import './Cards.css';
import Card from './Card';

const cards = [
    {points: '10,000', icon: 'fa-solid fa-hands-clapping', title: 'Rock'},
    {points: '8,000', icon: 'fa-solid fa-thumbs-up', title: 'Like'},
    {points: '5,000', icon: 'fa-solid fa-gem', title: 'Diamonds'},
    {points: '3,000', icon: 'fa-solid fa-bolt', title: 'Points'},
    {points: '2,500', icon: 'fa-solid fa-ghost', title: 'WakaWaka'},
    {points: '800', icon: 'fa-solid fa-mountain-sun', title: 'Mount'},
    {points: '50', icon: 'fa-solid fa-music', title:'Melody'},
    {points: '5,580', icon: 'fa-solid fa-person-snowboarding', title: 'Active'},
    {points: '11', icon: 'fa-solid fa-chess-rook', title:'Chess'},
    {points: '455', icon: 'fa-solid fa-bomb', title: 'Boom'},
    {points: '7,777', icon: 'fa-solid fa-heart', title: 'Heart'},
    {points: '1', icon: 'fa-solid fa-hand-lizard', title: 'Mini'},
    {points: '10,050', icon: '', title: 'Icon Empty'},
    {points: '18,499', icon: null, title: 'Icon Null'},
    {points: '99,999', icon: undefined, title: 'Icon Undefined'},
    {points: '', icon: undefined, title: 'Points Empty'},
    {points: null, icon: undefined, title: 'Points Null'},
    {points: undefined, icon: undefined, title: 'Points Undefined'},
    {points: '', icon: undefined, title: ''},
    {points: null, icon: undefined, title: null},
    {points: undefined, icon: undefined, title: undefined},
]

class CardsApp extends React.Component{

    render(){
        return(
            <div>
                <div className="appfield">
                    <h1>Cards App</h1>
                    {cards.map((card, i) => (<Card info={card} key={i}/>))}
                </div>
            </div>
        )
    }
}

export default CardsApp