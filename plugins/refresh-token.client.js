export default function (p) {
    const auth = p.app.$auth
    if (auth?.loggedIn) {
      auth.refreshTokens()
    }
  }