import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

// Update the link in the disclaimer area to read the name of the park and navigate to that park’s official site.
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = parkData.url;
disclaimer.innerHTML = parkData.fullName;

// Update the name, designation, and states of the park in the hero.
function parkInfoTemplate(info) {
    return `<a href="/" class="name-park">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
  }
const conent = document.getElementById("low-opacity-box");
conent.innerHTML = parkInfoTemplate(parkData);

//Update the title of the page to read the name of the park.
const title = document.querySelector(".name-park");
title.innerHTML = parkData.name;

// Use the first image in the list in the data for the hero image.
const heroImg = document.querySelector(".park-img");
heroImg.setAttribute("src", parkData.images[0].url);