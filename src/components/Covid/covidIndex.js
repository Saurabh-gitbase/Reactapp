import React, { Component } from "react";
import axios from "axios";
import Cards from "./cards";
import Details from "./details";
import Head from "./head";

class Covid extends Component {
  state = {
    cntryList: [
      "Brazil",
      "India",
      "Mexico",
      "Pakistan",
      "South Africa",
      "United States of America",
    ],
    dateDetail: "2020-08-10T09:53:55Z",
    cntryDetails: [],
    currCountryDetail: {
      Country: "Brazil",
      CountryCode: "BR",
      Date: "2020-08-10T09:53:55Z",
      NewConfirmed: 23010,
      NewDeaths: 572,
      NewRecovered: 35446,
      Slug: "brazil",
      TotalConfirmed: 3035422,
      TotalDeaths: 101049,
      TotalRecovered: 2356983,
    },
    globalDetails: {
      NewConfirmed: 224179,
      NewDeaths: 4545,
      NewRecovered: 176743,
      TotalConfirmed: 19860951,
      TotalDeaths: 731310,
      TotalRecovered: 12115201,
    },
  };

  componentDidMount() {
    let dateData = "";
    let cntryData = [];
    let globalData = {};
    let cntryDetails = [];

    axios
      .get("https://api.covid19api.com/summary")
      .then((response) => {
        dateData = response.data.Date;
        cntryData = response.data.Countries;
        globalData = response.data.Global;
      })
      .then(() => {
        let index = 0;
        let n = cntryData.length;
        for (let cntry of this.state.cntryList) {
          for (let i = index; i < n; i++) {
            if (cntry === cntryData[i].Country) {
              cntryDetails.push(cntryData[i]);
              index = i + 1;
              break;
            }
          }
        }
      })
      .then(() => {
        this.setState({
          cntryDetails: cntryDetails,
          globalDetails: globalData,
          dateDetail: dateData,
          currCountryDetail: cntryDetails[0],
        });
        dateData = "";
        cntryData = [];
        globalData = {};
        cntryDetails = [];
      });
  }

  currCountryUpdate = (props) => {
    let country = props.target.options[props.target.selectedIndex].text;
    let currCountryDetail = this.state.cntryDetails.filter(
      (item) => item.Country === country
    );
    this.setState({ currCountryDetail: currCountryDetail[0] });
  };

  render() {
    return (
      <div className="antialiased w-full bg-gray-100 font-serif h-screen">
        <div className="h-5/12 ">
          <Head
            cntryList={this.state.cntryList}
            updateCntry={this.currCountryUpdate}
          />
          <Cards currCountry={this.state.currCountryDetail} />
        </div>
        <Details
          globalData={this.state.globalDetails}
          dateData={this.state.dateDetail}
        />
      </div>
    );
  }
}

export default Covid;
