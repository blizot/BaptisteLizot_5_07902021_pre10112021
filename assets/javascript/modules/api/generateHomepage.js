import fetchAPI from "./fetchAPI.js";

async function generateHomepage() {
    const api = await fetchAPI();
    const photographers = api.photographers;

    console.log(photographers);

    let injectHTML = '';

    for (let i = 0; i < photographers.length; i += 1) {
        let photographerFilters = ``;

        let photographerMain = `<a href="" aria-label="${photographers[i].name}">
                                    <figure>
                                        <img src="/assets/images/photographers/portrait/${photographers[i].portrait}" alt="" class="home-photograph__picture">
            
                                        <figcaption>
                                            <h2 class="home-photograph__name">${photographers[i].name}</h2>
                                        </figcaption>
                                    </figure>
                                </a>

                                <div tabindex="0">
                                    <p class="home-photograph__location">${photographers[i].city}, ${photographers[i].country}</p>
                                    <p class="home-photograph__description">${photographers[i].tagline}</p>
                                    <p class="home-photograph__pricing">${photographers[i].price}€/jour</p>
                                </div>`;

        for (let j = 0; j < photographers[i].tags.length; j += 1) {
            let photographerTag = `<li>
                                        <span class="screenreader-only">${photographers[i].tags[j]}</span>
                                        <a href="" class="filter__option" aria-hidden="true">#${photographers[i].tags[j]}</a>
                                    </li>`;
            
            photographerFilters += photographerTag;                        
        }

        let photographerFooter = `<footer>
                                        <nav class="filter">
                                            <a href="#photographe-${i+2}" class="skip-link">Passer ce menu</a>

                                            <ul class="filter__list">
                                                ${photographerFilters}
                                            </ul>
                                        </nav>
                                    </footer>`;

        let photographerFull = `<h1 tabindex="0" class="home-title">Nos photographes</h1>
                                
                                <article id="photographe-${i+1}" class="home-photograph">
                                    ${photographerMain}
                                    
                                    ${photographerFooter}
                                </article>`;

        injectHTML += photographerFull;
    }

    const main = document.getElementById('main');
    main.innerHTML = injectHTML;
}

export default generateHomepage;