import React from 'react';
import './Input.css';
/*
 Renders weather information
 */
class WeatherInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.data);
    if (this.props.data.name === undefined) {
      return (
        <div>
          Error {this.props.data.cod}: {this.props.data.message}
        </div>
      );
    }
    const imgurl = "http://openweathermap.org/img/wn/" + this.props.data.weather[0].icon + "@2x.png";
    return (
      <div>
        Now displaying weather in <span class="city-name">{this.props.data.name}</span>
        <table class="current-weather">
          <tr class="date"><td>Current</td></tr>
          <tr><td>{this.props.data.main.temp}F</td></tr>
          <tr><td><img src={imgurl} /></td></tr>
          <tr><td>{this.props.data.weather[0].main}</td></tr>
          <tr><td>{this.props.data.weather[0].description}</td></tr>
        </table>
      </div>
    );
  }



}
export default WeatherInfo;
