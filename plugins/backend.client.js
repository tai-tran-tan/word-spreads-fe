export default ({ $axios }, inject) => {
    inject('backend', new Backend($axios))
}

class Backend {
    constructor(axios) {
        this._axios = axios
    }

    coShare(word) {
        console.log('co-sharing a word', word)
        this._axios.$put('/api/words/'+ word)
    }
}