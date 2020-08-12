import React from "react";

function Details(props) {
  return (
    <div class="h-full md:h-7/12 md:flex p-5">
      
      <div class="md:h-full md:w-5/12 px-5 pb-4 bg-white mx-auto shadow-md rounded-md md:shadow-none md:rounded-none border-2 border-gray-100">
        <div class="h-2/12  flex justify-between items-center ">
          <div class="text-3xl pl-2">Overview</div>
          <div class="pr-2">{props.dateData}</div>
        </div>
        <div class=" h-10/12 ">
          <table class="table-fixed w-full h-full  lg:text-lg  ">
            <thead>
              <tr class="font-semibold">
                <td class=" px-4 py-2 ">Data</td>
                <td class=" px-4 py-2">Global</td>
              </tr>
            </thead>
            <tbody>
              {Object.entries(props.globalData).map((item) => (
                <tr class="" key={item[0]}>
                  <td class=" px-4 py-2">{item[0]}</td>
                  <td class=" px-4 py-2">{item[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div class="mt-5 md:mt-0  md:w-7/12 h-full  mb-5 md:mb-0 md:bg-white">
        <iframe
          src="https://ourworldindata.org/grapher/total-cases-covid-19?tab=map"
          width="100%"
          height="100%"
          title="mapdata"
        ></iframe>
      </div>
    </div>
  );
}

export default Details;
