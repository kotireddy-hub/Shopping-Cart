const TOKEN_KEY = 'REACTAPP.TOKEN'
const USERS = 'REACTAPP.USERS'
const REFRESH_TOKEN_KEY = 'REACTAPP.REFRESH_TOKEN'

/**
 * Manage the how Access Tokens are being stored and retreived from storage.
 *
 * Current implementation stores to localStorage. Local Storage should always be
 * accessed through this instace.
**/
const TokenService = {
    getToken() {
        return localStorage.getItem(TOKEN_KEY)
    },

    saveToken(accessToken) {
        localStorage.setItem(TOKEN_KEY, accessToken)
    },

    removeToken() {
        localStorage.removeItem(TOKEN_KEY)
    },

    getRefreshToken() {
        return localStorage.getItem(REFRESH_TOKEN_KEY)
    },

    saveRefreshToken(refreshToken) {
        localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken)
    },

    removeRefreshToken() {
        localStorage.removeItem(REFRESH_TOKEN_KEY)
    }

}

const SetUser = {
    getUser(emailid) {
        let users = JSON.parse(localStorage.getItem(USERS));
        return users && users.find(user => user.emailid === emailid);
    },
    saveUser(user) {
        //localStorage.setItem(USERS, JSON.stringify(user));
        let users = JSON.parse(localStorage.getItem(USERS));
        if(users) {
          users.push(user);
        } else {
          users = [];
          users.push(user);
        }
        localStorage.setItem(USERS, JSON.stringify(users));
    },
    validUser(email, password) {
      let users = JSON.parse(localStorage.getItem(USERS));
      return users && users.find(user => user.emailid === email && user.password === password);
    },
    removeUser() {
        localStorage.removeItem(USERS)
    }
}

export { TokenService, SetUser }
