import linkMedia from "./linkMedia.js";
import sumLikes from "./sumLikes.js";

export class Photographer {
    constructor(photographer, media) {
        this._portrait = photographer.portrait;
        this._name = photographer.name;
        this._city = photographer.city;
        this._country = photographer.country;
        this._tagline = photographer.tagline;
        this._price = photographer.price;
        this._tags = photographer.tags;
        this._media = linkMedia(media, photographer.id);
        this._likes = sumLikes(media, photographer.id);
    }

    set addLikes(value) {
        if(!isNaN(value)) {
            this._likes += value;
        }
    }

    get portrait() {
        return `/assets/images/photographers/portrait/${this._portrait}`;
    }

    get name() {
        return this._name;
    }

    get location() {
        return `${this._city}, ${this._country}`;
    }

    get tagline() {
        return this._tagline;
    }

    get price() {
        return `${this._price}€/jour`;
    }

    get tags() {
        return this._tags;
    }

    get media() {
        return this._media;
    }

    get likes() {
        return this._likes;
    }
}