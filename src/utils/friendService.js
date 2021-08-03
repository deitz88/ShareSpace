import tokenService from './tokenService';

const BASE_URL = '/api/friends/';

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
    friendRequest,
};