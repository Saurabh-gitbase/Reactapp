import React from "react";

function Details(props) {
  return (
    <div class="h-7/12 flex p-5">
      <div class="w-7/12 h-full bg-white   ">
        <iframe
          src="https://ourworldindata.org/grapher/total-cases-covid-19?tab=map"
          width="100%"
          height="100%"
          title="mapdata"
        ></iframe>
      </div>
      <div class="h-full w-5/12 px-5 pb-4 bg-white ">
        <div class="h-2/12  flex justify-between items-center">
          <div class="text-3xl pl-2">Overview</div>
          <div class="[pr-2">{props.dateData}</div>
        </div>
        <div class=" h-10/12 ">
          <table class="table-fixed w-full h-full text-lg  ">
            <thead>
              <tr>
                <td class=" px-4 py-2">Data:</td>
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
    </div>
  );
}

export default Details;
