import './Card.css'
import React from 'react';

class Card extends React.Component{
    constructor(props){
        super(props);
        console.log('props=>', props);
    }

    randomPoint(){
        return Math.floor(Math.random() * 8000) + 1;
    }

    randomTitle(){
        const title = ['Everybody', 'Like', 'Coding'];
        const index = Math.floor(Math.random() * title.length);
        return title[index]
    }

    render(){
        // const icon = this.props.info.icon;
        // const title = this.props.info.title;
        // const points = this.props.info.points;
        const {icon, title, points} = this.props.info;
        const infoDefault = icon => {
            // if(icon === null) return true;
            // if(icon === undefined) return true;
            // if(icon === '') return true;
            if([null, undefined, ''].includes(icon)) return true;
            return false;
        }

        const iconName = infoDefault(icon) ? 'fa-solid fa-face-grin-tongue-wink' : icon;
        const pointsNum = infoDefault(points) ? this.randomPoint() : points;
        const titleName = infoDefault(title) ? this.randomTitle() : title;

        return (
            <div className="card">
                <div className="title">
                    {/* <i className="fa-solid fa-bolt"/> */}
                    <i className={iconName}/>
                    <h2>{titleName}</h2>
                </div>
                <h3>{pointsNum}</h3>
            </div>
        )
    }
}

export default Card