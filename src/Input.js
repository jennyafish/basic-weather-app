import React from 'react';
import WeatherInfo from './WeatherInfo.js'

import './Input.css';

/*
 Basic input component that gets city info from user and makes request to
 OpenWeatherMap API to create a WeatherInfo component
 */
class Input extends React.Component {
  constructor(props) {
    super(props);
    // default to showing Pittsburgh
    this.state = {value: 'Pittsburgh', shown: false, weatherdata: {}, forecast: {}};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value : event.target.value});
  }

  handleSubmit(event) {
    // fetch the current weather
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + this.state.value + '&appid=cf8acbc7209bea1e5ea3f15c05d552f4&units=imperial')
    .then(res => res.json())
    .then(data => {
      console.log(data);

      // update state with response info
      this.setState({weatherdata: data, shown: true});

      console.log(this.state.weatherdata);
    }).catch(err => alert(err));

    // fetch the 5-day forecast
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + this.state.value + '&appid=cf8acbc7209bea1e5ea3f15c05d552f4&units=imperial')
    .then(res => res.json())
    .then(data => {
      console.log(data);

      this.setState({forecast: data});
    })

    event.preventDefault();
  }

  render() {
    console.log(this.state.weatherdata);
    let weatherinfo;
    if (this.state.shown) {
      weatherinfo = <WeatherInfo data={this.state.weatherdata} />;
    } else {
      weatherinfo = <div></div>;
    }
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Show me the weather in
              <input type="text" class="form_text" value={this.state.value} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
          </form>
          {weatherinfo}
        </div>
      );


  }



}
export default Input;
