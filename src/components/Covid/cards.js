import React from "react";

function Cards(props) {
  return (
    <div class="h-9/12  flex text-xs sm:text-sm md:text-base  lg:text-xl  xl:text-3xl ">
      <div class="w-1/4 bg-purple-200 my-10 ml-5 mr-2.5 rounded-lg hover:shadow-md text-center border-2 border-purple-300">
        <div class="text-center  h-full text-purple-600">
          <div class=" h-1/2 flex justify-center items-end pb-1">
            Confirmed Cases
          </div>
          <div class="h-1/2 ">{props.currCountry.TotalConfirmed}</div>
        </div>
      </div>
      <div class="w-1/4 bg-orange-200 my-10 mx-2.5 rounded-lg hover:shadow-md border-2 border-orange-300">
        <div class="text-center  h-full text-orange-500">
          <div class=" h-1/2 flex justify-center items-end pb-1 ">
            Active Cases
          </div>
          <div class=" h-1/2 ">{String(props.currCountry.TotalConfirmed-(props.currCountry.TotalDeaths+props.currCountry.TotalRecovered))}</div>
        </div>
      </div>
      <div class="w-1/4 bg-green-200 my-10 mx-2.5 rounded-lg hover:shadow-md border-2 border-green-300">
        <div class="text-center  h-full text-green-600">
          <div class=" h-1/2 flex justify-center items-end pb-1 ">
            Recovered Cases
          </div>
          <div class=" h-1/2 ">{props.currCountry.TotalRecovered}</div>
        </div>
      </div>
      <div class="w-1/4 bg-red-200 my-10 mr-5 ml-2.5 rounded-lg hover:shadow-md border-2 border-red-300 ">
        <div class="text-center  h-full text-red-600">
          <div class=" h-1/2 flex justify-center items-end pb-1 ">Deaths</div>
          <div class=" h-1/2 ">{props.currCountry.TotalDeaths}</div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
