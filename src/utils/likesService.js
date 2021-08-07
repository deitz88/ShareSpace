import tokenService from "./tokenService";

const BASE_URL = '/api/'

function addLike(id){
    console.log(id)
	return fetch(`${BASE_URL}posts/${id}/likes`, {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		}
	}).then(res => {
		if(res.ok) return res.json()
	  new Error('Error liking Post');
	})
}
function addLikeWriting(id){
	return fetch(`${BASE_URL}writings/${id}/likes`, {
		method: 'POST',
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		}
	}).then(res => {
		if(res.ok) return res.json()
	  new Error('Error liking Post');
	})
}

function removeLike(id){
    console.log(id)
	return fetch(`${BASE_URL}likes/${id}`, {
		method: 'DELETE',
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		}
	}).then(res => {
		if(res.ok) return res.json()
	  new Error('Error removing like Post');
	})
}
function removeLikeWriting(id){
    console.log(id)
	return fetch(`${BASE_URL}writinglikes/${id}`, {
		method: 'DELETE',
		headers: {
			'Authorization': 'Bearer ' + tokenService.getToken()
		}
	}).then(res => {
		if(res.ok) return res.json()
	  new Error('Error removing like Post');
	})
}

export default{
    addLike,
    removeLike,
    addLikeWriting,
    removeLikeWriting
}