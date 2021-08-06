import tokenService from './tokenService';

const BASE_URL = '/api/friends/';

function friendRequest(userRequest){
    return fetch(BASE_URL + `request/${userRequest._id}`, {
          method: 'GET',
          headers: {
              'Authorization': 'Bearer ' + tokenService.getToken()
          },
      }).then(res => {
          if(res.ok) return res.json()
        new Error('Error adding friend');
      }).then(data => data)
  }

  function denyRequest(username){
    return fetch(BASE_URL + `deny/${username}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
    }).then(res => {
        if(res.ok) return res.json()
      new Error('Error denying request');
    }).then(({token}) => tokenService.setToken(token));
}

function approveRequest(username){
     return fetch(BASE_URL + `approve/${username}`, {
         method: 'GET',
         headers: {
             'Authorization': 'Bearer ' + tokenService.getToken()
         },
     }).then(res => {
         if(res.ok) return res.json()
       new Error('Error accepting friend');
     }).then(({token}) => tokenService.setToken(token));
 }

 function removeFriend(username){
    return fetch(BASE_URL + `remove/${username}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
    }).then(res => {
        if(res.ok) return res.json()
      new Error('Error removing friend');
    }).then(({token}) => tokenService.setToken(token));
}



export default {
    friendRequest, 
    denyRequest,
    approveRequest,
    removeFriend
};