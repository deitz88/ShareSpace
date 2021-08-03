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
        new Error('Error liking Post');
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
        new Error('Error liking Post');
      })
  }


export default {
    friendRequest,
    getRequests
};