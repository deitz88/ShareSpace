import tokenService from "./tokenService";

const BASE_URL = "/api/posts/";

function create(post) {
  return fetch(BASE_URL + "create", {
    method: "POST",
    body: post,
    headers: { Authorization: "Bearer " + tokenService.getToken() },
  }).then((res) => res.json());
}

function createWriting(writing) {
  console.log(writing);
  return fetch(BASE_URL + "createwriting", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify(writing),
  }).then((res) => res.json());
}

function getAllPhotoPosts() {
  return fetch(BASE_URL + "mainphoto/", {
    headers: { Authorization: "Bearer " + tokenService.getToken() },
  }).then((res) => res.json());
}

function getAllWritingPosts() {
  return fetch(BASE_URL + "mainwriting/", {
    headers: { Authorization: "Bearer " + tokenService.getToken() },
  }).then((res) => res.json());
}

function getPost(id) {
  return fetch(BASE_URL + "show/" + id, {
    method: "GET",
    headers: { Authorization: "Bearer " + tokenService.getToken() },
  }).then((res) => res.json());
}

function getWriting(id) {
  return fetch(BASE_URL + "writing/" + id, {
    method: "GET",
    headers: { Authorization: "Bearer " + tokenService.getToken() },
  }).then((res) => res.json());
}

function deleteOne(id) {
  return fetch(BASE_URL + "delete/" + id, {
    method: "GET",
    headers: { Authorization: "Bearer " + tokenService.getToken() },
  }).then((res) => res.json());
}

function deleteWriting(id) {
  return fetch(BASE_URL + "deletewriting/" + id, {
    method: "GET",
    headers: { Authorization: "Bearer " + tokenService.getToken() },
  }).then((res) => res.json());
}

function updateWriting(writing) {
  console.log(writing.id);
  return fetch(BASE_URL + "updatewriting/" + writing.id, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify(writing),
  })
    .then((res) => {
      if (res.ok) return res.json();
      new Error("Error adding friend");
    })
    .then((data) => data);
}

export default {
  create,
  createWriting,
  getAllPhotoPosts,
  getPost,
  deleteOne,
  deleteWriting,
  getWriting,
  updateWriting,
  getAllWritingPosts,
};
