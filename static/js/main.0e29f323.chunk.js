(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{29:function(e,t,a){e.exports=a.p+"static/media/weather.75d7281e.jpg"},32:function(e,t,a){e.exports=a(60)},59:function(e,t,a){},60:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(28),c=a.n(r),s=a(7),i=a(29),o=a.n(i);var d=function(){return n.a.createElement("section",{class:"text-gray-700 body-font md:h-screen bg-red-100"},n.a.createElement("div",{class:"container px-5 py-24 mx-auto"},n.a.createElement("div",{class:"flex flex-wrap -mx-4 -mb-10 text-center"},n.a.createElement("div",{class:"sm:w-1/2 mb-10 px-4"},n.a.createElement("div",{class:"rounded-lg h-64 overflow-hidden"},n.a.createElement("img",{alt:"content",class:"object-cover object-center h-full w-full",src:"https://tr2.cbsistatic.com/hub/i/r/2020/03/04/9e27bb52-2b9b-4b28-97ac-1ab4b6ff6a7a/resize/770x/0344ee15424aa96d19d23aac0f0d8647/istock-1205872351.jpg"})),n.a.createElement("h2",{class:"title-font text-2xl font-medium text-gray-900 mt-6 mb-3"},"Covid-19 Tracker"),n.a.createElement("p",{class:"leading-relaxed text-base"},"Provides information regarding top most affected countries due to Covid-19."),n.a.createElement(s.b,{to:"/Reactapp/covid"},n.a.createElement("button",{class:"flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"},"Button"))),n.a.createElement("div",{class:"sm:w-1/2 mb-10 px-4"},n.a.createElement("div",{class:"rounded-lg h-64 overflow-hidden"},n.a.createElement("img",{alt:"content",class:"object-cover object-center h-full w-full",src:o.a})),n.a.createElement("h2",{class:"title-font text-2xl font-medium text-gray-900 mt-6 mb-3"},"Weather Forecast"),n.a.createElement("p",{class:"leading-relaxed text-base"},"Provides basic weather information of popular cities."),n.a.createElement(s.b,{to:"/Reactapp/weather"},n.a.createElement("button",{class:"flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded"},"Button"))))))},m=a(31),u=a(11),h=a(12),f=a(14),x=a(13),p=a(10),g=a.n(p);var v=function(e){return n.a.createElement("div",{class:"h-9/12  flex "},n.a.createElement("div",{class:"w-1/4 bg-purple-200 my-10 ml-5 mr-2.5 rounded-lg hover:shadow-md text-center"},n.a.createElement("div",{class:"text-center text-3xl h-full text-purple-600"},n.a.createElement("div",{class:" h-1/2 flex justify-center items-end pb-1"},"Confirmed Cases"),n.a.createElement("div",{class:"h-1/2 "},e.currCountry.TotalConfirmed))),n.a.createElement("div",{class:"w-1/4 bg-orange-200 my-10 mx-2.5 rounded-lg hover:shadow-md"},n.a.createElement("div",{class:"text-center text-3xl h-full text-orange-500"},n.a.createElement("div",{class:" h-1/2 flex justify-center items-end pb-1 "},"Active Cases"),n.a.createElement("div",{class:" h-1/2 "},String(e.currCountry.TotalConfirmed-(e.currCountry.TotalDeaths+e.currCountry.TotalRecovered))))),n.a.createElement("div",{class:"w-1/4 bg-green-200 my-10 mx-2.5 rounded-lg hover:shadow-md"},n.a.createElement("div",{class:"text-center text-3xl h-full text-green-600"},n.a.createElement("div",{class:" h-1/2 flex justify-center items-end pb-1 "},"Recovered Cases"),n.a.createElement("div",{class:" h-1/2 "},e.currCountry.TotalRecovered))),n.a.createElement("div",{class:"w-1/4 bg-red-200 my-10 mr-5 ml-2.5 rounded-lg hover:shadow-md "},n.a.createElement("div",{class:"text-center text-3xl h-full text-red-600"},n.a.createElement("div",{class:" h-1/2 flex justify-center items-end pb-1 "},"Deaths"),n.a.createElement("div",{class:" h-1/2 "},e.currCountry.TotalDeaths))))};var y=function(e){return n.a.createElement("div",{class:"h-7/12 flex p-5"},n.a.createElement("div",{class:"w-7/12 h-full bg-white   "},n.a.createElement("iframe",{src:"https://ourworldindata.org/grapher/total-cases-covid-19?tab=map",width:"100%",height:"100%",title:"mapdata"})),n.a.createElement("div",{class:"h-full w-5/12 px-5 pb-4 bg-white "},n.a.createElement("div",{class:"h-2/12  flex justify-between items-center"},n.a.createElement("div",{class:"text-3xl pl-2"},"Overview"),n.a.createElement("div",{class:"[pr-2"},e.dateData)),n.a.createElement("div",{class:" h-10/12 "},n.a.createElement("table",{class:"table-fixed w-full h-full text-lg  "},n.a.createElement("thead",null,n.a.createElement("tr",null,n.a.createElement("td",{class:" px-4 py-2"},"Data:"),n.a.createElement("td",{class:" px-4 py-2"},"Global"))),n.a.createElement("tbody",null,Object.entries(e.globalData).map((function(e){return n.a.createElement("tr",{class:"",key:e[0]},n.a.createElement("td",{class:" px-4 py-2"},e[0]),n.a.createElement("td",{class:" px-4 py-2"},e[1]))})))))))};var w=function(e){return n.a.createElement("div",{class:"h-3/12  flex justify-between items-center"},n.a.createElement("div",{class:"pl-4"},n.a.createElement(s.b,{to:"/"},n.a.createElement("img",{src:"https://img.icons8.com/dusk/64/000000/home-page.png",class:"w-2/3 rounded-md hover:shadow-xl ",alt:"home"}))),n.a.createElement("div",{class:"text-4xl text-red-600"},"Covid-19 Tracker"),n.a.createElement("div",{class:"relative pr-5"},n.a.createElement("select",{class:"block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-green-500",id:"grid-state",onChange:e.updateCntry},e.cntryList.map((function(e){return n.a.createElement("option",{key:e},e)})))))},E=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(u.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={cntryList:["Brazil","India","Mexico","Pakistan","South Africa","United States of America"],dateDetail:"2020-08-10T09:53:55Z",cntryDetails:[],currCountryDetail:{Country:"Brazil",CountryCode:"BR",Date:"2020-08-10T09:53:55Z",NewConfirmed:23010,NewDeaths:572,NewRecovered:35446,Slug:"brazil",TotalConfirmed:3035422,TotalDeaths:101049,TotalRecovered:2356983},globalDetails:{NewConfirmed:224179,NewDeaths:4545,NewRecovered:176743,TotalConfirmed:19860951,TotalDeaths:731310,TotalRecovered:12115201}},e.currCountryUpdate=function(t){var a=t.target.options[t.target.selectedIndex].text,l=e.state.cntryDetails.filter((function(e){return e.Country===a}));e.setState({currCountryDetail:l[0]}),console.log(e.state.globalDetails)},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){var e=this,t="",a=[],l={},n=[];g.a.get("https://api.covid19api.com/summary").then((function(e){t=e.data.Date,a=e.data.Countries,l=e.data.Global})).then((function(){var t,l=0,r=a.length,c=Object(m.a)(e.state.cntryList);try{for(c.s();!(t=c.n()).done;)for(var s=t.value,i=l;i<r;i++)if(s===a[i].Country){n.push(a[i]),l=i+1;break}}catch(o){c.e(o)}finally{c.f()}})).then((function(){e.setState({cntryDetails:n,globalDetails:l,dateDetail:t,currCountryDetail:n[0]}),t="",a=[],l={},n=[]}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"antialiased w-full bg-gray-100 font-serif h-screen"},n.a.createElement("div",{className:"h-5/12 "},n.a.createElement(w,{cntryList:this.state.cntryList,updateCntry:this.currCountryUpdate}),n.a.createElement(v,{currCountry:this.state.currCountryDetail})),n.a.createElement(y,{globalData:this.state.globalDetails,dateData:this.state.dateDetail}))}}]),a}(l.Component);var b=function(e){return n.a.createElement("div",{class:"flex flex-col h-full w-full md:w-4/12 h-screen "},n.a.createElement("div",{class:"m-3 h-full"},n.a.createElement("div",{class:"flex flex-col bg-white h-full p-3 shadow-xl rounded-lg"},n.a.createElement("div",{class:"flex flex-row justify-between"},n.a.createElement("div",{class:"border-2 border-gray-500 p-1 h-10 shadow-md rounded-md "},n.a.createElement("form",{onSubmit:e.handleCityDetail},n.a.createElement("input",{type:"text",placeholder:"Search for places",onChange:e.handleInput,value:e.userInput,class:"w-full h-full outline-none"}))),n.a.createElement(s.b,{to:"/"},n.a.createElement("img",{src:"https://img.icons8.com/dusk/64/000000/home-page.png",class:"h-11 w-11 rounded-full hover:shadow-md",alt:"homwpage"}))),n.a.createElement("div",{class:" h-4/12 flex justify-center items-center "},n.a.createElement("img",{src:"https://www.metaweather.com/static/img/weather/lc.svg",alt:"weatherimg",class:" h-11/12"})),n.a.createElement("div",{class:" h-4/12 flex justify-center items-center "},n.a.createElement("div",{class:"text-5xl lg:text-6xl text-gray-900 font-extrabold my-2  xl:my-3"},e.cityData.max_temp,"\xb0C")),n.a.createElement("div",{class:" h-2/12 flex justify-center items-center "},n.a.createElement("div",{class:"text-2xl xl:text-3xl text-gray-700 "},e.cityData.weather_state_name)),n.a.createElement("div",{class:" h-2/12 flex items-center justify-center "},n.a.createElement("div",{class:"flex flex-col items-center "},n.a.createElement("div",{class:"text-sm lg:text-lg text-gray-600 p-2"},e.cityData.applicable_date),n.a.createElement("div",{class:"flex flex-row justify-center items-center p-2"},n.a.createElement("img",{src:"https://img.icons8.com/nolan/64/user-location.png ",class:"w-7 h-7 rounded-full shadow-md",alt:"locaction"}),n.a.createElement("div",{class:"text-gray-600 text-sm lg:text-lg pl-1"}," ",e.title)))))))};var D=function(e){return n.a.createElement(n.a.Fragment,null,e.futureData.map((function(e){return n.a.createElement("div",{key:e.date,class:"flex flex-row w-full h-1/12 my-2 rounded-lg bg-teal-100  lg:text-xl xl:text-2xl shadow-md"},n.a.createElement("div",{class:"flex justify-center items-center w-5/12   rounded-l-lg"},e.date),n.a.createElement("div",{class:"flex justify-center items-center w-2/12  "},n.a.createElement("img",{src:"https://www.metaweather.com/static/img/weather/".concat(e.imgId,".svg"),alt:e.imgId,class:" h-11 "})),n.a.createElement("div",{class:"flex justify-center items-center w-5/12  font-semibold rounded-r-lg"},e.maxtemp,"\xb0C"," ",n.a.createElement("span",{class:"text-gray-600"},"/ ",e.mintemp,"\xb0C")))})))};var C=function(e){return n.a.createElement("div",{class:"flex flex-col h-10/12  "},n.a.createElement("div",{class:"flex flex-row h-1/2 "},n.a.createElement("div",{class:"w-1/2 bg-teal-100 my-4 ml-4 mr-2 rounded-lg "},n.a.createElement("div",{class:"flex flex-col h-full shadow-md rounded-lg"},n.a.createElement("div",{class:"h-2/12 w-full text-center font-semibold lg:text-3xl xl:text-4xl rounded-t-lg"},"Wind Status"),n.a.createElement("div",{class:"flex flex-row h-8/12 w-full "},n.a.createElement("div",{class:"flex justify-center items-center w-1/2 h-full"},n.a.createElement("img",{src:"https://img.icons8.com/clouds/100/000000/wind-turbine--v1.png",class:"h-10/12",alt:"img1"})),n.a.createElement("div",{class:"flex flex-col justify-center w-1/2 h-full text-center sm:text-lg lg:text-2xl xl:text-3xl"},n.a.createElement("div",{class:"font-medium"},"Speed"),n.a.createElement("div",{class:" "},e.cityData.wind_speed," km/hr"))),n.a.createElement("div",{class:"h-2/12 w-full rounded-b-lg"},n.a.createElement("div",{class:"flex flex-row justify-center items-center"},n.a.createElement("img",{src:"https://img.icons8.com/ios-glyphs/30/000000/navigation.png",class:"w-6 h-6 rounded-full shadow-md",alt:"img2"}),n.a.createElement("div",{class:"text-lg lg:text-xl xl:text-2xl pl-2 "},e.cityData.wind_direction_compass))))),n.a.createElement("div",{class:"w-1/2 bg-teal-100 my-4 ml-2 mr-4 rounded-lg"},n.a.createElement("div",{class:"flex flex-col h-full shadow-md rounded-lg"},n.a.createElement("div",{class:" h-2/12 text-center font-bold lg:text-3xl xl:text-4xl rounded-t-lg"},"Humidity"),n.a.createElement("div",{class:"flex justify-center items-center h-6/12 text-5xl md:text-6xl font-bold "},e.cityData.humidity," %"),n.a.createElement("div",{class:"h-4/12 rounded-r-md pt-1 px-1"},n.a.createElement("div",{class:"flex flex-row justify-between text-gray-500 text-xs lg:text-lg xl:text-xl"},n.a.createElement("div",null,"0%"),n.a.createElement("div",null,"50%"),n.a.createElement("div",null,"100%")),n.a.createElement("div",{class:"h-1/2 pb-2"},n.a.createElement("div",{class:"w-full h-4 lg:h-5 xl:h-6 bg-gray-100 rounded-l-full rounded-r-full  shadow-md"},n.a.createElement("div",{class:"w-full h-full bg-blue-400 rounded-l-full rounded-r-full",style:{width:"".concat(e.cityData.humidity,"%")}}))))))),n.a.createElement("div",{class:"flex flex-row h-1/2"},n.a.createElement("div",{class:"w-1/2 bg-teal-100 my-3 ml-4 mr-2 rounded-lg"},n.a.createElement("div",{class:"h-1/3 pt-3 text-center font-bold lg:text-3xl xl:text-4xl rounded-t-lg"},"Visibility"),n.a.createElement("div",{class:"h-2/3  flex justify-center items-center lg:text-3xl xl:text-5xl rounded-b-lg"},e.cityData.visibility," m")),n.a.createElement("div",{class:"w-1/2 bg-teal-100 my-3 ml-2 mr-4 rounded-lg shadow-md"},n.a.createElement("div",{class:"h-1/3 text-center font-bold lg:text-3xl xl:text-4xl pt-3"},"Sunrise and Sunset"),n.a.createElement("div",{class:"h-2/3 pb-2/12"},n.a.createElement("div",{class:"h-full flex items-center"},n.a.createElement("div",{class:"w-full h-6 lg:h-8 border-dotted border-gray-500 border-b-2 "},n.a.createElement("div",{class:"flex flex-row justify-between items-start text-xs lg:text-xl text-gray-500 "},n.a.createElement("div",{class:"pl-2"},e.cityData.sunrise," "),n.a.createElement("div",{class:"pr-2"},e.cityData.sunset," ")),n.a.createElement("div",{class:"w-full h-full",style:{width:"".concat(e.cityData.timepassed,"%")}},n.a.createElement("div",{class:"flex justify-end w-full"},n.a.createElement("img",{src:"https://img.icons8.com/plasticine/100/000000/sun.png",class:"h-10 lg:h-14 xl:h-16",alt:"img3"})))))))))},_=function(e){Object(f.a)(a,e);var t=Object(x.a)(a);function a(){var e;Object(u.a)(this,a);for(var l=arguments.length,n=new Array(l),r=0;r<l;r++)n[r]=arguments[r];return(e=t.call.apply(t,[this].concat(n))).state={userInput:"",cityDetails:{title:"New Delhi",location_type:"City",woeid:28743736,latt_long:"28.643999,77.091003"},cityData:{id:5289762787164160,weather_state_name:"Heavy Rain",weather_state_abbr:"hr",wind_direction_compass:"ESE",created:"2020-08-10T03:28:58.893733Z",applicable_date:"2020-08-15",min_temp:26,max_temp:33,the_temp:32,sunrise:"05:48",sunset:"19:05",timepassed:"70",wind_speed:5,wind_direction:104,air_pressure:995,humidity:74,visibility:9649,predictability:77},futureData:[{date:"2020-08-11",maxtemp:"35",mintemp:"26",imgId:"lc"},{date:"2020-08-12",maxtemp:"33",mintemp:"27",imgId:"hc"},{date:"2020-08-13",maxtemp:"29",mintemp:"25",imgId:"s"},{date:"2020-08-14",maxtemp:"33",mintemp:"25",imgId:"lr"},{date:"2020-08-15",maxtemp:"33",mintemp:"26",imgId:"hc"}]},e.handleInput=function(t){console.log(t.target.value),e.setState({userInput:t.target.value})},e.handleCityDetail=function(t){t.preventDefault(),g.a.get("https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/search/?query=".concat(e.state.userInput)).then((function(t){t.data.length>0&&(e.setState({cityDetails:t.data[0]}),e.setState({userInput:""}),e.handleWeatherRequest())})).catch((function(e){alert("Error Not all city's are available. Please enter common cities.")}))},e.handleWeatherRequest=function(){console.log("handleweather");var t={},a=[];g.a.get("https://cors-anywhere.herokuapp.com/www.metaweather.com/api/location/".concat(e.state.cityDetails.woeid)).then((function(e){var l=e.data;console.log(l),t=l.consolidated_weather[0],console.log(t),t.max_temp=String(t.max_temp).slice(0,2),t.min_temp=String(t.min_temp).slice(0,2),t.the_temp=String(t.the_temp).slice(0,2),a=[];var n=l.sun_rise.replace(/^[^:]*([0-2]\d:[0-5]\d).*$/,"$1"),r=l.sun_set.replace(/^[^:]*([0-2]\d:[0-5]\d).*$/,"$1");t.sunrise=n,t.sunset=r;var c=new Date,s=c.getHours()+":"+c.getMinutes()+":"+c.getSeconds();s=s.slice(0,2);var i=r.slice(0,2)-n.slice(0,2),o=(s-n.slice(0,2))/i*100;o=String(o).slice(0,2),t.timepassed=o,t.wind_speed=String(t.wind_speed).slice(0,1),t.visibility=String(1e3*t.visibility).slice(0,4);for(var d=l.consolidated_weather.length,m=1;m<d;m++){var u=l.consolidated_weather[m].applicable_date,h=l.consolidated_weather[m].max_temp;h=String(h).slice(0,2);var f=l.consolidated_weather[m].min_temp;f=String(f).slice(0,2);var x=l.consolidated_weather[m].weather_state_abbr;a.push({date:u,maxtemp:h,mintemp:f,imgId:x})}console.log(t),console.log(a)})).then((function(){e.setState({futureData:a,cityData:t}),console.log(a,t)}))},e}return Object(h.a)(a,[{key:"componentDidMount",value:function(){this.handleWeatherRequest()}},{key:"render",value:function(){return n.a.createElement("div",{class:"flex flex-col md:flex-row text-gray-800 bg-gray-200 font-serif text-gray-900 "},n.a.createElement(b,{cityData:this.state.cityData,handleInput:this.handleInput,handleCityDetail:this.handleCityDetail,userInput:this.state.userInput,title:this.state.cityDetails.title}),n.a.createElement("div",{class:"flex flex-col w-full md:w-8/12 md:h-screen"},n.a.createElement("div",{class:"m-3 md:h-full  md:overflow-y-auto"},n.a.createElement("div",{class:"flex flex-col p-3 h-full bg-white shadow-xl rounded-lg md:overflow-y-auto"},n.a.createElement(D,{futureData:this.state.futureData}),n.a.createElement(C,{cityData:this.state.cityData})))))}}]),a}(l.Component),j=a(1);var S=function(){return n.a.createElement(s.a,null,n.a.createElement(j.c,null,n.a.createElement(j.a,{path:"/Reactapp",exact:!0,component:d}),n.a.createElement(j.a,{path:"/Reactapp/covid",component:E}),n.a.createElement(j.a,{path:"/Reactapp/weather",component:_})))};a(59),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(S,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[32,1,2]]]);
//# sourceMappingURL=main.0e29f323.chunk.js.map