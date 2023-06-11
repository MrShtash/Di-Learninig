import React from 'react';
// pt 4-3
import './../Exercise4.css';

const style_header = {
    color: "white",
    backgroundColor: "DodgerBlue",
    padding: "10px",
    fontFamily: "Arial"
};

class ExerciseClass extends React.Component {
    render(){
        return(
            <div>
                {/* <h1 style={{color: 'red', backgroundColor: 'blue'}}>This is a Header</h1> */}
                {/* pt 4-2 */}
                <h1 style={style_header}>This is a Header</h1>
                {/* <p>This is a Paragraph</p> */}
                {/* pt 4-3 */}
                <p className="para">This is a Paragraph</p>
                <a href="https://developers.institute/en/">This is a Link</a>
                <h2>This is a Form</h2>
                <form>
                    <p>Enter your name:</p><br/>
                    <input></input>
                    <button>Submit</button>
                </form>
                <h3>Here is an Image</h3>
                <img src="https://www.phpro.be/uploads/media/sulu-100x100/00/440-react%404x.png?v=2-0"></img>
                <h3>This is a list</h3>
                <div style={{listStyleType: 'square', listStylePosition: 'inside'}}>
                    <ul style={{}}>
                        <li>Coffee</li>
                        <li>Tea</li>
                        <li>Milk</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default ExerciseClass