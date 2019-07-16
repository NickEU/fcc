import React from "react";
import "./Quote.css";

class Quote extends React.Component {
  constructor(props) {
    super(props);
    this.pRef = React.createRef();
  }
  componentDidUpdate() {
    this.pRef.current.classList.toggle("animate");
    setTimeout(() => this.pRef.current.classList.toggle("animate"), 100);
  }

  render() {
    return (
      <>
        <p ref={this.pRef} className="animate" id="text">
          {this.props.text}
        </p>
        <p id="author">{this.props.author}</p>
      </>
    );
  }
}

export default Quote;
