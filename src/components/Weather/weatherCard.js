import React from "react";
import { Link } from "react-router-dom";
function WeatherCard(props) {
  return (
    <div className="flex flex-col h-full w-full md:w-4/12 h-screen ">
      <div className="m-3 h-full">
        <div className="flex flex-col bg-red-100 h-full p-3 shadow-xl rounded-lg">
          <div className="flex flex-row justify-between">
            <div className="border-2 border-gray-500 p-1 h-10 shadow-md rounded-md ">
              <form onSubmit={props.handleCityDetail}>
                <input
                  type="text"
                  placeholder="Search for places"
                  onChange={props.handleInput}
                  value={props.userInput}
                  className="w-full h-full outline-none bg-red-100"
                ></input>
              </form>
            </div>
            <Link to="/Reactapp">
              <img
                src="https://img.icons8.com/dusk/64/000000/home-page.png"
                className="h-11 w-11 rounded-full hover:shadow-md"
                alt="homwpage"
              />
            </Link>
          </div>

          <div className=" h-4/12 flex justify-center items-center ">
            <img
              src={`https://www.metaweather.com/static/img/weather/${props.cityData.weather_state_abbr}.svg`}
              alt="weatherimg"
              className=" h-11/12"
            />
          </div>

          <div className=" h-4/12 flex justify-center items-center ">
            <div className="text-5xl lg:text-6xl text-gray-900 font-extrabold my-2  xl:my-3">
              {props.cityData.max_temp}&#xb0;C
            </div>
          </div>

          <div className=" h-2/12 flex justify-center items-center ">
            <div className="text-2xl xl:text-3xl text-gray-700 ">
              {props.cityData.weather_state_name}
            </div>
          </div>

          <div className=" h-2/12 flex items-center justify-center ">
            <div className="flex flex-col items-center ">
              <div className="text-sm lg:text-lg text-gray-600 p-2">
                {props.cityData.applicable_date}
              </div>
              <div className="flex flex-row justify-center items-center p-2">
                <img
                  src="https://img.icons8.com/nolan/64/user-location.png "
                  className="w-7 h-7 rounded-full shadow-md"
                  alt="locaction"
                />
                <div className="text-gray-600 text-sm lg:text-lg pl-1">
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
