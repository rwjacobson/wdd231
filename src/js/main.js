import { getParkData } from "./parkService.mjs";

const parkData = getParkData();

const parkInfoLinks = [
  {
    name: "Current Conditions &#x203A;",
    link: "conditions.html",
    image: parkData.images[2].url,
    description:
      "See what conditions to expect in the park before leaving on your trip!"
  },
  {
    name: "Fees and Passes &#x203A;",
    link: "fees.html",
    image: parkData.images[3].url,
    description: "Learn about the fees and passes that are available."
  },
  {
    name: "Visitor Centers &#x203A;",
    link: "visitor_centers.html",
    image: parkData.images[9].url,
    description: "Learn about the visitor centers in the park."
  }
];

// Update the name, designation, and states of the park in the hero.
function parkInfoTemplate(info) {
  return `<a href="/" class="name-park">${info.name}</a>
  <p class="hero-banner__subtitle">
    <span>${info.designation}</span>
    <span>${info.states}</span>
  </p>`;
}

function setHeaderInfo(data) {
  // Update the link in the disclaimer area to read the name of the park and navigate to that park’s official site.
const disclaimer = document.querySelector(".disclaimer > a");
disclaimer.href = data.url;
disclaimer.innerHTML = data.fullName;

//Update the title of the page to read the name of the park.
document.querySelector(".name-park").innerHTML = data.name;

// Use the first image in the list in the data for the hero image.
const heroImg = document.querySelector(".park-img");
heroImg.setAttribute("src", data.images[0].url);

// Use the template fuction above to set the rest of the park specific info in the header
document.getElementById("low-opacity-box").innerHTML = parkInfoTemplate(data);
}

setHeaderInfo(parkData)

function setParkIntro(data) {
  document.querySelector(".intro > h1").innerHTML = data.fullName

document.querySelector(".intro > p").innerHTML = data.description
}

setParkIntro(parkData)

function setParkInfo(data) {

  function mediaCardTemplate(info) {
    return `<div class="media-card">
    <a href="${info.link}">
    <img src="${info.image}" alt="${info.name}" class="media-card__img">
    <h3 class="media-card__title">${info.name}</h3>
    </a>
    <p>${info.description}</p>
    </div>`;
  }

  const mediaCardFilled = data.map(mediaCardTemplate)
  
  document.querySelector(".info").innerHTML = mediaCardFilled
}

setParkInfo(parkInfoLinks)

function setParkFooter(data) {
  
  function getMailingAddress(addresses) {
    const mailing = addresses.find((address) => address.type === "Mailing");
    return mailing;
  }
  
  function getVoicePhone(phoneNums) {
    const voice = phoneNums.find((phoneNum) => phoneNum.type === "Voice");
    return voice
  
  }
  
  function footerTemplate(info) {
    const mailing = getMailingAddress(info.addresses);
    const voice = getVoicePhone(info.contacts.phoneNumbers)
    
    return `<section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div><p>${mailing.line1}<p>
    <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
    <h4>Phone:</h4>
    <p>${voice.phoneNumber}</p>
    </section>`;
  }

  document.getElementById("park-footer").innerHTML = footerTemplate(data);
}

setParkFooter(parkData);