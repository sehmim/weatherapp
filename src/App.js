import React, { Component } from 'react';
import './App.css';

import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "e1be42079e1c7a9f98c4685b671e0438";

class App extends React.Component {

  //
  state = {

    temperature : undefined,
    city : undefined,
    country : undefined,
    humidity: undefined,
    description : undefined,
    error : undefined

  }

  style = {

  }




  // Make method getWeather
  getWeather= async (e) => {

    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`);

    const data = await api_call.json();
    if (city && country) {
      this.setState({
        temperature : data.main.temp,
        city : data.name,
        country : data.sys.country,
        humidity : data.main.humidity,
        description : data.weather[0].description,
        error : ''
      }); 
    } else {
      this.setState({
        temperature : undefined,
        city : undefined,
        country : undefined,
        humidity: undefined,
        description : undefined,
        error : 'ENTER VALUE'
      })
    }
  }

  render() {
    return (
      <div className="App">
      <br /> <br /> <br /> <br />
          <h1 className="text-center" >Weather App</h1>
          <Form getWeather={this.getWeather} />
          <Weather
            temperature = {this.state.temperature}
            city = {this.state.city}
            country = {this.state.country}
            humidity = {this.state.humidity}
            description = {this.state.description}
            error = {this.state.error}
          />
      </div>
    );
  }
}

export default App;
