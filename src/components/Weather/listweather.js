import React from "react";

function ListWeather(props) {
  return (
    <React.Fragment>
      {props.futureData.map((item) => (
        <div
          key={item.date}
          className="flex flex-row w-full h-1/12 my-2 rounded-lg bg-teal-100  lg:text-xl xl:text-2xl shadow-md"
        >
          <div className="flex justify-center items-center w-5/12   rounded-l-lg">
            {item.date}
          </div>
          <div className="flex justify-center items-center w-2/12  ">
            <img
              src={`https://www.metaweather.com/static/img/weather/${item.imgId}.svg`}
              alt={item.imgId}
              className=" h-11 "
            />
          </div>
          <div className="flex justify-center items-center w-5/12  font-semibold rounded-r-lg">
            {item.maxtemp}&#xb0;C{" "}
            <span className="text-gray-600">/ {item.mintemp}&#xb0;C</span>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default ListWeather;
