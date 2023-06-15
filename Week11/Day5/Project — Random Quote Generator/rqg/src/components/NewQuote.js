import React from "react";
import quotes from "./QuotesDB";
import "./Quotes.css";
import { useState, useEffect } from "react";

const NewQuote = () => {
  // use all rgb color list
  const findColor = () => {
    let r = Math.floor(Math.random() * 256); // Random between 0-255
    let g = Math.floor(Math.random() * 256); // Random between 0-255
    let b = Math.floor(Math.random() * 256); // Random between 0-255
    return "rgb(" + r + "," + g + "," + b + ")";
  };

  const info = {
    quote: "",
    author: "",
    idx: 0, // add idx to define and change quote
    color: findColor(), // add func to use random color
  };

  const [data, setdata] = useState(info);

  useEffect(() => {
    const randomQuote = quotes[data.idx];
    console.log("randomQuote", randomQuote);
    setdata({ quote: randomQuote.quote, author: randomQuote.author });
    document.documentElement.style.setProperty(
      // use DOM property
      "--main-color", // use main color in css file
      data.color
    );
  }, []);

  const changeQuote = () => {
    const num = Math.floor(Math.random() * quotes.length); // define new const that = random idx in quotes length
    const newcolor = findColor(); // define new const that = result findColor (random)
    const randomQuote = quotes[num]; // define new rndom quote that defines by new num
    setdata({
      // set new state
      quote: randomQuote.quote,
      author: randomQuote.author,
      color: newcolor,
    });
  };

  return (
    <div className="container">
      <h1>"{data.quote}"</h1>
      <p>-{data.author}-</p>
      <div className="btn">
        <button onClick={changeQuote}>New Quote</button>
      </div>
    </div>
  );
};

export default NewQuote;
