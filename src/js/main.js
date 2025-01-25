import { getParkData, getParkInfoLinks } from "./parkService.mjs";
import { mediaCardTemplate } from "./templates.mjs"
import { setHeaderFooter } from "./setHeaderFooter.mjs";

const parkData = getParkData();
const parkInfoLinks = getParkInfoLinks()

function setParkIntro(data) {
  document.querySelector(".intro > h1").innerHTML = data.fullName

  document.querySelector(".intro > p").innerHTML = data.description
}

function setParkInfo(data) {
  const mediaCardFilled = data.map(mediaCardTemplate)
  const newMediaCard = mediaCardFilled.join("")
  
  document.querySelector(".info").innerHTML = newMediaCard
}


// the stuff at the start of the white background
setParkIntro(parkData)
//the picture sections
setParkInfo(parkInfoLinks)
// the footer and header parts
setHeaderFooter(parkData)