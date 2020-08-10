import React from "react";
import { Link } from "react-router-dom";

function Head(props) {
  return (
    <div class="h-3/12  flex justify-between items-center">
      <div class="pl-4">
        <Link to="/Reactapp">
          <img
            src="https://img.icons8.com/dusk/64/000000/home-page.png"
            class="w-2/3 rounded-md hover:shadow-xl "
            alt="home"
          />
        </Link>
      </div>
      <div class="text-4xl text-red-600">Covid-19 Tracker</div>
      <div class="relative pr-5">
        <select
          class="block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500"
          id="grid-state"
          onChange={props.updateCntry}
        >
          {props.cntryList.map((cntry) => (
            <option key={cntry}>{cntry}</option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default Head;
