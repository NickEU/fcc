import React from 'react';
import './Quote.css';

const Quote = ({ text, author }) => {
    return (
        <div id="quote">
            <p id="text">{text}</p>
            <p id="author">{author}</p>
        </div>
    );
}

export default Quote;