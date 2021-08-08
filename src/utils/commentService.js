import tokenService from "./tokenService";

const BASE_URL = "/api/comments/";

function addWritingComment(input) {
  return fetch(`${BASE_URL}writing/${input.writingId}/addcomment`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: "Bearer " + tokenService.getToken(),
    },
    body: JSON.stringify(input),
  }).then((res) => res.json());
}

function deleteWritingComment(id) {
  return fetch(`${BASE_URL}delete/` + id, {
    method: "GET",
    headers: {
      Authorization: "Bearer " + tokenService.getToken(),
    },
  }).then((res) => res.json());
}

export default {
  addWritingComment,
  deleteWritingComment,
};
