import React from "react";

function Details(props) {
  return (
    <div className="h-full md:h-7/12 md:flex p-5">
      
      <div className="md:h-full md:w-5/12 px-5 pb-4 bg-white mx-auto shadow-md rounded-md md:shadow-none md:rounded-none border-2 border-gray-100">
        <div className="h-2/12  flex justify-between items-center ">
          <div className="text-3xl pl-2">Overview</div>
          <div className="pr-2">{props.dateData}</div>
        </div>
        <div className=" h-10/12 ">
          <table className="table-fixed w-full h-full  lg:text-lg  ">
            <thead>
              <tr className="font-semibold">
                <td className=" px-4 py-2 ">Data</td>
                <td className=" px-4 py-2">Global</td>
              </tr>
            </thead>
            <tbody>
              {Object.entries(props.globalData).map((item) => (
                <tr className="" key={item[0]}>
                  <td className=" px-4 py-2">{item[0]}</td>
                  <td className=" px-4 py-2">{item[1]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      
      <div className="mt-5 md:mt-0  md:w-7/12 h-full  mb-5 md:mb-0 md:bg-white">
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
