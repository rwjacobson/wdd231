// Update the name, designation, and states of the park in the hero.
export function parkInfoTemplate(info) {
    return `<a href="/" class="name-park">${info.name}</a>
    <p class="hero-banner__subtitle">
      <span>${info.designation}</span>
      <span>${info.states}</span>
    </p>`;
}

// filling the three media cards info
export function mediaCardTemplate(info) {
    return `<div class="media-card">
    <a href="${info.link}">
    <img src="${info.image}" alt="${info.name}" class="media-card__img">
    <h3 class="media-card__title">${info.name}</h3>
    </a>
    <p>${info.description}</p>
    </div>`;
}

// filing the info in the footer tag
export function footerTemplate(mailing, voice) {
    return `<img class="footer-background" src="images/topo_pattern.png" alt="footer background">
    <section class="contact">
    <h3>Contact Info</h3>
    <h4>Mailing Address:</h4>
    <div><p>${mailing.line1}<p>
    <p>${mailing.city}, ${mailing.stateCode} ${mailing.postalCode}</p></div>
    <h4>Phone:</h4>
    <p>${voice.phoneNumber}</p>
    </section>`;
}