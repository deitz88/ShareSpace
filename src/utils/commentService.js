import tokenService from './tokenService';

const BASE_URL = '/api/comments/';

function addWritingComment(input){

    return fetch(`${BASE_URL}writing/${input.writingId}/addcomment`, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
          'Authorization': 'Bearer ' + tokenService.getToken()
      },
        body: JSON.stringify(input),
      }).then(res => res.json());
    }


export default{
    addWritingComment,
}