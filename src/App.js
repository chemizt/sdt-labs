import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class App extends Component
{
  constructor() {
    super();
    this.state = {
      quote: ''
    };
    this.requestQuote = this.requestQuote.bind(this);
    this.requestQuote();
  }

  requestQuote() {
    fetch('https://api.kanye.rest').then(response => response.json()).then(result => { this.setState({ quote: result.quote })}).catch(console.log);
  }
  
  render() {
    return(
      <div className="App-header">
        <text>Wisdom of the Day</text>
        <p/>
        <div className="App-quote">
          <text>{this.state.quote}</text>
        </div>
        <p/>
        <div className="App-button">
            <p/>
            <Button variant="primary" size="lg" onClick={this.requestQuote}>Bless me with Wisdom</Button>
            <p/>
        </div>
      </div>
    );
  }
}

export default App;
