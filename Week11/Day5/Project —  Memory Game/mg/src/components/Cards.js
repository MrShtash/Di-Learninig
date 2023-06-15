import React from 'react';
import './Card.css';
import heroes from './data.json'

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            heroes: heroes.superheroes,
            clickedHeroes: [],
            score: 0,
            topScore: 0
        }
    }

    handleClick = (heroName) => {
        this.setState((state) => { // state - previous state
            const newScore = state.clickedHeroes.includes(heroName) ? 0 : state.score + 1; // check that state includes heroname, if there - score = 0, if note score = prev score+1
            const clickedHeroes = state.clickedHeroes.includes(heroName) ? [] : [...state.clickedHeroes, heroName] // create arr, check if hero inside, it is going empty
                return(
                    {heroes: [...state.heroes].sort((a,b) => (Math.random() > 0.5 ? -1 : 1)), // sort a copy, coz sort takes origin arr and we dont want to modify it. And we use shuffle randomly
                    clickedHeroes,
                    score: newScore,
                    topScore: Math.max(newScore, state.topScore)}
                )
            });
        // console.log(this.state);
    };

    render(){
        return(
            <div className="container">
                <nav className='navbar'>
                    <h1>Superheroes Memory Game</h1>
                    <div>Score: {this.state.score}</div>
                    <div>TOP Score: {this.state.topScore}</div>
                </nav>
                <div className="rules">
                    <h2>Get points by clicking an image but do not click the same one twice</h2>
                </div>
                <div className='heroesContainer'>
                    {this.state.heroes.map((hero)=>( // for each hero create card and pass name to handleClick
                        <div key={hero.id} className='heroCard' onClick={() => this.handleClick(hero.name)}>
                            <img src={hero.image}></img>
                            <p>
                                <span className='heroName'>Name: </span>{hero.name}
                            </p>
                            <p>
                                <span className='heroName'>Occupation: </span>{hero.name}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        )
    }
}
export default Card