import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ColorPickerView from './components/ColorPickerView'
import './App.css'

class App extends Component
{
  constructor() {
    super();
    this.state = {
      quote: '',
      redChannel: 0,
      greenChannel: 0,
      blueChannel: 0
    };
    this.requestQuote = this.requestQuote.bind(this);
    this.requestQuote();
  }

  requestQuote() {
    fetch('https://api.kanye.rest').then(response => response.json()).then(result => { this.setState({ quote: result.quote })}).catch(console.log);
  }

  onColorChanged(red, green, blue) {
    this.setState({
        redChannel: red,
        greenChannel: green,
        blueChannel: blue
    });
  }

  onColorPicked(color) {
      this.setState({
          redChannel: color.rgb.r,
          greenChannel: color.rgb.g,
          blueChannel: color.rgb.b
      });
  }

  getDarkerChannel(colorChannel, darkerPercent) {
      return Math.round((colorChannel * (100 - darkerPercent) / 100)).toString(16).padStart(2, '0');
  }

  getDarkerColor(red, green, blue, darkerPercent) {
      let redChannel = this.getDarkerChannel(red, darkerPercent);
      let greenChannel = this.getDarkerChannel(green, darkerPercent);
      let blueChannel = this.getDarkerChannel(blue, darkerPercent);
      let color = "#" + redChannel + greenChannel + blueChannel;
      return color;
  }

  render() {
    let red = this.state.redChannel;
    let green = this.state.greenChannel;
    let blue = this.state.blueChannel;
    let darkerBackground = this.getDarkerColor(red, green, blue, 20);
    return(
      <div className="App-header" style={{ backgroundColor: darkerBackground }}>
      <text data-testid="header-text">Wisdom of the Day</text>
        <p/>
        <div className="App-quote">
          <text data-testid="quote-text">{this.state.quote}</text>
        </div>
        <p/>
        <div className="App-button">
            <p/>
            <Button variant="primary" size="lg" onClick={this.requestQuote} data-testid="query-btn">Bless me with Wisdom</Button>
            <p/>
        </div>
        <div className="App-colorPicker">
          <ColorPickerView onNewColor={(red, green, blue) => this.onColorChanged(red, green, blue)} />
        </div>
      </div>
    );
  }
}

export default App;
