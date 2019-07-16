import React from "react";
import "./App.css";
import Quote from "./Quote";

const quotes = [
  {
    text:
      "“I discovered that the world should be divided not into good and bad people but into cowards and non-cowards. Ninety-five percent of cowards are capable of the vilest things, lethal things, at the mildest threat.”",
    author: "Varlam Shalamov",
    id: 0
  },
  {
    text:
      "“We realized that life, even the worst life, consists of an alternation of joys and sorrows, successes and failures, and there was no need to fear the failures more than the successes.” ",
    author: "Varlam Shalamov",
    id: 1
  },
  {
    text: "“Kolyma is Auschwitz without the ovens.”",
    author: "Varlam Shalamov",
    id: 2
  },
  {
    text:
      "“A human being survives by his ability to forget. Memory is always ready to blot out the bad and retain only the good.”",
    author: "Varlam Shalamov",
    id: 3
  },
  {
    text: "“Tragedy is not deep and sharp if it can be shared with a friend.”",
    author: "Varlam Shalamov",
    id: 4
  }
];

const getRandomIndex = (length = quotes.length) => {
  return Math.floor(Math.random() * length);
};

const getRandomQuote = () => {
  return quotes[getRandomIndex()];
};

export default class App extends React.Component {
  constructor(props) {
    super(props);
    let newQuote = getRandomQuote();
    this.state = {
      text: newQuote.text,
      author: newQuote.author,
      index: newQuote.id
    };
  }

  renderNewQuote = () => {
    let newQuote;
    do {
      newQuote = getRandomQuote();
    } while (this.state.index === newQuote.id);

    this.setState({
      text: newQuote.text,
      author: newQuote.author,
      index: newQuote.id
    });
  };

  render() {
    return (
      <div className="App" id="quote-box">
        <Quote text={this.state.text} author={this.state.author} />
        <button id="new-quote" onClick={() => this.renderNewQuote()}>
          New Quote
        </button>
        <a
          href={`https://twitter.com/intent/tweet?text=${this.state.text} (c) ${
            this.state.author
          }`}
          id="tweet-quote"
        >
          Tweet Quote
        </a>
      </div>
    );
  }
}
