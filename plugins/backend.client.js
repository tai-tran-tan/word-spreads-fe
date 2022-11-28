export default ({ $axios, $auth }, inject) => {
    inject('backend', new Backend($axios, $auth))
}

class Backend {
    constructor(axios, auth) {
        this._axios = axios
        this._auth = auth
    }

    async loginWith(schema) {
        try {
          const res = await this._auth.loginWith(schema)
          console.log("Logged in!", res)
        } catch(err) {
          console.error("Login failed!", err)
        } 
    }
    
    coShare(word) {
        console.log('co-sharing a word', word)
        this._axios.$post('/api/words', {word})
    }
}