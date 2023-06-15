import React from 'react';
import './Card.css';
import heroes from './data.json'

class Card extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            heroes: heroes.superheroes
        }
    }

    handleClick = () => {
        this.setState({heroes: this.state.heroes})
    }

    render(){
        return(
            <div className="container">
                <nav className='navbar'>
                    <h1>Superheroes Memory Game</h1>
                    <div>Score: 0</div>
                    <div>TOP Score: 0</div>
                </nav>
                <div className="rules">
                    <h2>Get points by clicking an image but do not click the same one twice</h2>
                </div>
                <div className='heroesContainer'>
                    {this.state.heroes.map((hero)=>(
                        <div className='heroCard' onClick={handleClick}>
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