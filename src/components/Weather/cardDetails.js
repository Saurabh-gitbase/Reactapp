import React from "react";

function DetailsCard(props) {
  return (
    <div className="flex flex-col h-10/12  ">
      <div className="flex flex-row h-1/2 ">
        <div className="w-1/2 bg-teal-100 my-4 ml-4 mr-2 rounded-lg ">
          <div className="flex flex-col h-full shadow-md rounded-lg">
            <div className="h-2/12 w-full text-center font-semibold lg:text-3xl xl:text-4xl rounded-t-lg">
              Wind Status
            </div>
            <div className="flex flex-row h-8/12 w-full ">
              <div className="flex justify-center items-center w-1/2 h-full">
                <img
                  src="https://img.icons8.com/clouds/100/000000/wind-turbine--v1.png"
                  className="h-10/12"
                  alt="img1"
                />
              </div>
              <div className="flex flex-col justify-center w-1/2 h-full text-center sm:text-lg lg:text-2xl xl:text-3xl">
                <div className="font-medium">Speed</div>
                <div className=" ">{props.cityData.wind_speed} km/hr</div>
              </div>
            </div>
            <div className="h-2/12 w-full rounded-b-lg">
              <div className="flex flex-row justify-center items-center">
                <img
                  src="https://img.icons8.com/ios-glyphs/30/000000/navigation.png"
                  className="w-6 h-6 rounded-full shadow-md"
                  alt="img2"
                />
                <div className="text-lg lg:text-xl xl:text-2xl pl-2 ">
                  {props.cityData.wind_direction_compass}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 bg-teal-100 my-4 ml-2 mr-4 rounded-lg">
          <div className="flex flex-col h-full shadow-md rounded-lg">
            <div className=" h-2/12 text-center font-bold lg:text-3xl xl:text-4xl rounded-t-lg">
              Humidity
            </div>
            <div className="flex justify-center items-center h-6/12 text-5xl md:text-6xl font-bold ">
              {props.cityData.humidity} %
            </div>
            <div className="h-4/12 rounded-r-md pt-1 px-1">
              <div className="flex flex-row justify-between text-gray-500 text-xs lg:text-lg xl:text-xl">
                <div>0%</div>
                <div>50%</div>
                <div>100%</div>
              </div>
              <div className="h-1/2 pb-2">
                <div className="w-full h-4 lg:h-5 xl:h-6 bg-gray-100 rounded-l-full rounded-r-full  shadow-md">
                  <div
                    className="w-full h-full bg-blue-400 rounded-l-full rounded-r-full"
                    style={{ width: `${props.cityData.humidity}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row h-1/2">
        <div className="w-1/2 bg-teal-100 my-3 ml-4 mr-2 rounded-lg">
          <div className="h-1/3 pt-3 text-center font-bold lg:text-3xl xl:text-4xl rounded-t-lg">
            Visibility
          </div>
          <div className="h-2/3  flex justify-center items-center lg:text-3xl xl:text-5xl rounded-b-lg">
            {props.cityData.visibility} m
          </div>
        </div>
        <div className="w-1/2 bg-teal-100 my-3 ml-2 mr-4 rounded-lg shadow-md">
          <div className="h-1/3 text-center font-bold lg:text-3xl xl:text-4xl pt-3">
            Sunrise and Sunset
          </div>
          <div className="h-2/3 pb-2/12">
            <div className="h-full flex items-center">
              <div className="w-full h-6 lg:h-8 border-dotted border-gray-500 border-b-2 ">
                <div className="flex flex-row justify-between items-start text-xs lg:text-xl text-gray-500 ">
                  <div className="pl-2">{props.cityData.sunrise} </div>
                  <div className="pr-2">{props.cityData.sunset} </div>
                </div>
                <div
                  className="w-full h-full"
                  style={{ width: `${props.cityData.timepassed}%` }}
                >
                  <div className="flex justify-end w-full">
                    <img
                      src="https://img.icons8.com/plasticine/100/000000/sun.png"
                      className="h-10 lg:h-14 xl:h-16"
                      alt="img3"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DetailsCard;
