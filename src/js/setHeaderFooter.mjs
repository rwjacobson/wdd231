import { parkInfoTemplate, footerTemplate } from "./templates.mjs";

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
        

function setFooter(data) {
    function getMailingAddress(addresses) {
        const mailing = addresses.find((address) => address.type === "Mailing");
        return mailing;
    }
        
    function getVoicePhone(phoneNums) {
        const voice = phoneNums.find((phoneNum) => phoneNum.type === "Voice");
        return voice
    }
      
    const mailing = getMailingAddress(data.addresses);
    const voice = getVoicePhone(data.contacts.phoneNumbers)
      
    document.getElementById("park-footer").innerHTML = footerTemplate(mailing, voice);
}

export default function setHeaderFooter(parkData) {
    setHeaderInfo(parkData);
    setFooter(parkData);
  }