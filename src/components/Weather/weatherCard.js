import React from "react";
import { Link } from "react-router-dom";
function WeatherCard(props) {
  return (
    <div class="flex flex-col h-full w-full md:w-4/12 h-screen ">
      <div class="m-3 h-full">
        <div class="flex flex-col bg-red-100 h-full p-3 shadow-xl rounded-lg">
          <div class="flex flex-row justify-between">
            <div class="border-2 border-gray-500 p-1 h-10 shadow-md rounded-md ">
              <form onSubmit={props.handleCityDetail}>
                <input
                  type="text"
                  placeholder="Search for places"
                  onChange={props.handleInput}
                  value={props.userInput}
                  class="w-full h-full outline-none bg-red-100"
                ></input>
              </form>
            </div>
            <Link to="/Reactapp">
              <img
                src="https://img.icons8.com/dusk/64/000000/home-page.png"
                class="h-11 w-11 rounded-full hover:shadow-md"
                alt="homwpage"
              />
            </Link>
          </div>

          <div class=" h-4/12 flex justify-center items-center ">
            <img
              src={`https://www.metaweather.com/static/img/weather/${props.cityData.weather_state_abbr}.svg`}
              alt="weatherimg"
              class=" h-11/12"
            />
          </div>

          <div class=" h-4/12 flex justify-center items-center ">
            <div class="text-5xl lg:text-6xl text-gray-900 font-extrabold my-2  xl:my-3">
              {props.cityData.max_temp}&#xb0;C
            </div>
          </div>

          <div class=" h-2/12 flex justify-center items-center ">
            <div class="text-2xl xl:text-3xl text-gray-700 ">
              {props.cityData.weather_state_name}
            </div>
          </div>

          <div class=" h-2/12 flex items-center justify-center ">
            <div class="flex flex-col items-center ">
              <div class="text-sm lg:text-lg text-gray-600 p-2">
                {props.cityData.applicable_date}
              </div>
              <div class="flex flex-row justify-center items-center p-2">
                <img
                  src="https://img.icons8.com/nolan/64/user-location.png "
                  class="w-7 h-7 rounded-full shadow-md"
                  alt="locaction"
                />
                <div class="text-gray-600 text-sm lg:text-lg pl-1">
                  {" "}
                  {props.title}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WeatherCard;
