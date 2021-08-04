import tokenService from './tokenService';

const BASE_URL = '/api/friends/';

function friendRequest(userRequest){
    console.log(BASE_URL + `request/${userRequest._id}`)
    // console.log(BASE_URL + 'request')
    return fetch(BASE_URL + `request/${userRequest._id}`, {
          method: 'GET',
          headers: {
              'Authorization': 'Bearer ' + tokenService.getToken()
          },
      }).then(res => {
          if(res.ok) return res.json()
          console.log(res.body)
        new Error('Error adding friend');
      })
  }
  function getRequests(userRequest){
    // console.log(BASE_URL + 'requests')
    return fetch(BASE_URL + 'requests', {
          method: 'GET',
          headers: {
              'Authorization': 'Bearer ' + tokenService.getToken()
          },
      }).then(res => {
          if(res.ok) return res.json()
          console.log(res.body)
        new Error('Error getting requests');
      })
  }
  function getFriends(userRequest){
    return fetch(BASE_URL + 'friends', {
          method: 'GET',
          headers: {
              'Authorization': 'Bearer ' + tokenService.getToken()
          },
      }).then(res => {
          if(res.ok) return res.json()
          console.log(res.body)
        new Error('Error getting requests');
      })
  }

  function denyRequest(username){
   //getting username here
    return fetch(BASE_URL + `deny/${username}`, {
        method: 'GET',
        headers: {
            'Authorization': 'Bearer ' + tokenService.getToken()
        },
    }).then(res => {
        if(res.ok) return res.json()
        console.log(res.body)
      new Error('Error denying request');
    })
}

function approveRequest(username){
    //getting username here
     return fetch(BASE_URL + `approve/${username}`, {
         method: 'GET',
         headers: {
             'Authorization': 'Bearer ' + tokenService.getToken()
         },
     }).then(res => {
         if(res.ok) return res.json()
         console.log(res.body)
       new Error('Error accepting friend');
     })
 }


export default {
    friendRequest,
    getRequests, 
    denyRequest,
    approveRequest,
    getFriends
};