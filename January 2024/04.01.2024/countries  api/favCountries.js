"use strict";

import { countryElement } from "./countryElement.js";

const countries = document.getElementById("selectedCountry");
let states = ["israel", "france", "usa"];
let countriesIndex = 1;
let baseUrl = `https://restcountries.com/v3.1/name/${states[countriesIndex]}`;

const fetchCountries = () => {
  fetch(baseUrl)
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      countryElement(data[0], countries);
      console.log(data);
    })
    .catch((error) => {
      console.log(error);
    });
};

fetchCountries();

const stateBtn = document.getElementsByClassName("countryBtn");
for (let i = 0; i < stateBtn.length; i++) {
  const currentState = stateBtn[i];
  currentState.addEventListener("click", () => {
    countriesIndex = i;
    console.log(countriesIndex);
    baseUrl = `https://restcountries.com/v3.1/name/${states[countriesIndex]}`;
    countries.innerHTML = "";
    fetchCountries();
  });
}
