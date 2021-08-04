import tokenService from './tokenService';

const BASE_URL = '/api/posts/';

 function create(post) {
    return fetch(BASE_URL + 'create', {
      method: 'POST',
      body: post,
      headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
    }).then(res => res.json());
  }

 function getAll() {
  return fetch(BASE_URL, {
    headers: {'Authorization': 'Bearer ' + tokenService.getToken()}
  }).then(res => res.json());
}

export default{
    create, 
    getAll
}