import React from "react";
import { Link } from "react-router-dom";
import Weather from "./weather.jpg";

function Home() {
  return (
    <section className="text-gray-700 body-font md:h-screen bg-red-100">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap -mx-4 -mb-10 text-center">
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://tr2.cbsistatic.com/hub/i/r/2020/03/04/9e27bb52-2b9b-4b28-97ac-1ab4b6ff6a7a/resize/770x/0344ee15424aa96d19d23aac0f0d8647/istock-1205872351.jpg"
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Covid-19 Tracker
            </h2>
            <p className="leading-relaxed text-base">
              Provides information regarding top most affected countries due to
              Covid-19.
            </p>
            <Link to="/Reactapp/covid">
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
            </Link>
          </div>
          <div className="sm:w-1/2 mb-10 px-4">
            <div className="rounded-lg h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src={Weather}
              />
            </div>
            <h2 className="title-font text-2xl font-medium text-gray-900 mt-6 mb-3">
              Weather Forecast
            </h2>
            <p className="leading-relaxed text-base">
              Provides basic weather information of popular cities.
            </p>
            <Link to="/Reactapp/weather">
              <button className="flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded">
                Button
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
