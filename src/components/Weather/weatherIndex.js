import React, { Component } from "react";
import WeatherCard from "./weatherCard";
import ListWeather from "./listweather";
import DetailsCard from "./cardDetails";
import axios from "axios";
class Weather extends Component {
  state = {
    userInput: "",
    cityDetails: {
      title: "New Delhi",
      location_type: "City",
      woeid: 28743736,
      latt_long: "28.643999,77.091003",
    },
    cityData: {
      id: 5289762787164160,
      weather_state_name: "Heavy Rain",
      weather_state_abbr: "hr",
      wind_direction_compass: "ESE",
      created: "2020-08-10T03:28:58.893733Z",
      applicable_date: "2020-08-15",
      min_temp: 26,
      max_temp: 33,
      the_temp: 32,
      sunrise: "05:48",
      sunset: "19:05",
      timepassed: "70",
      wind_speed: 5,
      wind_direction: 104,
      air_pressure: 995,
      humidity: 74,
      visibility: 9649,
      predictability: 77,
    },
    futureData: [
      { date: "2020-08-11", maxtemp: "35", mintemp: "26", imgId: "lc" },
      { date: "2020-08-12", maxtemp: "33", mintemp: "27", imgId: "hc" },
      { date: "2020-08-13", maxtemp: "29", mintemp: "25", imgId: "s" },
      { date: "2020-08-14", maxtemp: "33", mintemp: "25", imgId: "lr" },
      { date: "2020-08-15", maxtemp: "33", mintemp: "26", imgId: "hc" },
    ],
  };

  handleInput = (props) => {
    console.log(props.target.value);
    this.setState({
      userInput: props.target.value,
    });
  };

  handleCityDetail = (props) => {
    props.preventDefault();
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/search/?query=${this.state.userInput}`
      )
      .then((request) => {
        if (request.data.length > 0) {
          this.setState({ cityDetails: request.data[0] });
          this.setState({ userInput: "" });
          this.handleWeatherRequest();
        }
      })
      .catch(function (error) {
        alert(
          "Error Not all city's are available. Please enter common cities."
        );
      });
  };

  handleWeatherRequest = () => {
    console.log("handleweather");
    let data = {};
    let futureData = [];
    axios
      .get(
        `https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/${this.state.cityDetails.woeid}`
      )
      .then((response) => {
        let item = response.data;
        console.log(item);
        data = item.consolidated_weather[0];
        console.log(data);
        data.max_temp = String(data.max_temp).slice(0, 2);
        data.min_temp = String(data.min_temp).slice(0, 2);
        data.the_temp = String(data.the_temp).slice(0, 2);
        futureData = [];
        let sunrise = item.sun_rise.replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1");
        let sunset = item.sun_set.replace(/^[^:]*([0-2]\d:[0-5]\d).*$/, "$1");
        data["sunrise"] = sunrise;
        data["sunset"] = sunset;

        let today = new Date();
        let currtime =
          today.getHours() +
          ":" +
          today.getMinutes() +
          ":" +
          today.getSeconds();
        currtime = currtime.slice(0, 2);
        let total = sunset.slice(0, 2) - sunrise.slice(0, 2);
        let rem = currtime - sunrise.slice(0, 2);
        let timepassed = (rem / total) * 100;
        timepassed = String(timepassed).slice(0, 2);
        data["timepassed"] = timepassed;
        data.wind_speed = String(data.wind_speed).slice(0, 1);
        data.visibility = String(data.visibility * 1000).slice(0, 4);
        let n = item.consolidated_weather.length;
        for (let i = 1; i < n; i++) {
          let date = item.consolidated_weather[i].applicable_date;
          let max_temp = item.consolidated_weather[i].max_temp;
          max_temp = String(max_temp).slice(0, 2);
          let min_temp = item.consolidated_weather[i].min_temp;
          min_temp = String(min_temp).slice(0, 2);
          let weather_state_abbr =
            item.consolidated_weather[i].weather_state_abbr;
          futureData.push({
            date: date,
            maxtemp: max_temp,
            mintemp: min_temp,
            imgId: weather_state_abbr,
          });
        }
        console.log(data);
        console.log(futureData);
      })
      .then(() => {
        this.setState({ futureData: futureData, cityData: data });
        console.log(futureData, data);
      });
  };

  componentDidMount() {
    this.handleWeatherRequest();
  }

  render() {
    return (
      <div class="flex flex-col md:flex-row text-gray-800 bg-gray-200 font-serif text-gray-900 ">
        <WeatherCard
          cityData={this.state.cityData}
          handleInput={this.handleInput}
          handleCityDetail={this.handleCityDetail}
          userInput={this.state.userInput}
          title={this.state.cityDetails.title}
        />

        <div class="flex flex-col w-full md:w-8/12 md:h-screen">
          <div class="m-3 md:h-full  md:overflow-y-auto">
            <div class="flex flex-col p-3 h-full bg-white shadow-xl rounded-lg md:overflow-y-auto">
              <ListWeather futureData={this.state.futureData} />
              <DetailsCard cityData={this.state.cityData} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Weather;
