import tokenService from './tokenService';

const BASE_URL = '/api/users/';


// NOTE THIS IS configured to send of a multi/part form request
// aka photo 
function signup(user) {
  return fetch(BASE_URL + 'signup', {
    method: 'POST',
    body: user
  })
  .then(res => {
    if (res.ok) return res.json();
    // Probably a duplicate email
    throw new Error('Email already taken!');
  })
  // Parameter destructuring!
  .then(({token}) => tokenService.setToken(token));
  // Setting our token in localStorage in our browser
  // then we'll be able to use with every request!
  // The above could have been written as
  //.then((token) => token.token);
}
function getProfile(username){
  return fetch(BASE_URL + username, {headers: {'Authorization': 'Bearer ' + tokenService.getToken()}})
    .then(res => {
    if(res.ok){ 
      return res.json();
    } else {

      throw new Error('Bad Credentials')
    }
  })
}

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + 'login', {
    method: 'POST',
    headers: new Headers({'Content-Type': 'application/json'}),
    body: JSON.stringify(creds)
  })
  .then(res => {
    // Valid login if we have a status of 2xx (res.ok)
    if (res.ok) return res.json();
    throw new Error('Bad Credentials!');
  })
  .then(({token}) => tokenService.setToken(token));
}

function friendRequest(userRequest, loggedInUser){
  // console.log(userRequest, loggedInUser)
  console.log(BASE_URL + 'request')
  return fetch(BASE_URL + 'request', {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		},
    body: {
      userRequest: userRequest,
      loggedInUser: loggedInUser
    }
	}).then(res => {
		if(res.ok) return res.json()
	  new Error('Error liking Post');
	})
}


export default {
  signup, 
  logout,
  login,
  getUser,
  getProfile,
  friendRequest
};