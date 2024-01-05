"use strict";
import { countryElement } from "./countryElement.js";

console.log("test");

const baseUrl = "https://restcountries.com/v3.1/all";

const allCountries = document.getElementById("allCountries");
const fetchCountries = () => {
  fetch(baseUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
      data.forEach((element) => {
        countryElement(element, allCountries);
      });
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchCountries();

export default fetchCountries;
