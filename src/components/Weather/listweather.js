import React from "react";

function ListWeather(props) {
  return (
    <React.Fragment>
      {props.futureData.map((item) => (
        <div
          key={item.date}
          class="flex flex-row w-full h-1/12 my-2 rounded-lg bg-teal-100  lg:text-xl xl:text-2xl shadow-md"
        >
          <div class="flex justify-center items-center w-5/12   rounded-l-lg">
            {item.date}
          </div>
          <div class="flex justify-center items-center w-2/12  ">
            <img
              src={`https://www.metaweather.com/static/img/weather/${item.imgId}.svg`}
              alt={item.imgId}
              class=" h-11 "
            />
          </div>
          <div class="flex justify-center items-center w-5/12  font-semibold rounded-r-lg">
            {item.maxtemp}&#xb0;C{" "}
            <span class="text-gray-600">/ {item.mintemp}&#xb0;C</span>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default ListWeather;
