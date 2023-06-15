import React from "react";
import quotes from "./QuotesDB";
import "./Quotes.css";

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: "",
      idx: 0, // add idx to define and change quote
      color: this.findColor(), // add func to use random color
    };
  }

  componentDidMount() {
    const randomQuote = quotes[this.state.idx];
    this.setState({quote: randomQuote.quote, author: randomQuote.author});
  }

  //autmaticaly this function gets called when the state changes
  componentDidUpdate() {
    document.documentElement.style.setProperty( // use DOM property
      "--main-color", // use main color in css file
      this.state.color
    );
  }

  // use all rgb color list
  findColor = () => {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  changeQuote = () => {
    const num = Math.floor(Math.random() * quotes.length); // define new const that = random idx in quotes length
    const newcolor = this.findColor(); // define new const that = result findColor (random)
    const randomQuote = quotes[num]; // define new rndom quote that defines by new num
    this.setState({ // set new state
      quote: randomQuote.quote,
      author: randomQuote.author,
      color: newcolor,
    });
  };

  render() {
    return (
      <div className="container">
        <h1>"{this.state.quote}"</h1>
        <p>-{this.state.author}-</p>
        <div className="btn">
          <button onClick={this.changeQuote}>New Quote</button>
        </div>
      </div>
    );
  }
}

export default Quotes;