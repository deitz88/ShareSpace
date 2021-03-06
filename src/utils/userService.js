import tokenService from "./tokenService";

const BASE_URL = "/api/users/";
function signup(user) {
  return fetch(BASE_URL + "signup", {
    method: "POST",
    body: user,
  })
    .then((res) => {
      if (res.ok) return res.json();
      throw new Error("Email already taken!");
    })
    .then(({ token }) => tokenService.setToken(token));
}
function getProfile(username) {
  return fetch(BASE_URL + username, {
    headers: { Authorization: "Bearer " + tokenService.getToken() },
  }).then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      throw new Error("Bad Credentials");
    }
  });
}

// function UpdateProfile(info) {
//   console.log(info) //this is working, req.body == {} on backend
//   return fetch(BASE_URL + `update/${info.user._id}`, {
//     method: "POST",
//     headers: { Authorization: "Bearer " + tokenService.getToken() 
//   },
//     body: JSON.stringify(info),
//   }).then((res) => {
//     if (res.ok) return res.json();
//     throw new Error("error updating profile");
//   });
// }

function getUser() {
  return tokenService.getUserFromToken();
}

function logout() {
  tokenService.removeToken();
}

function login(creds) {
  return fetch(BASE_URL + "login", {
    method: "POST",
    headers: new Headers({ "Content-Type": "application/json" }),
    body: JSON.stringify(creds),
  })
    .then((res) => {
      // Valid login if we have a status of 2xx (res.ok)
      if (res.ok) return res.json();
      throw new Error("Bad Credentials!");
    })
    .then(({ token }) => tokenService.setToken(token));
}

export default {
  signup,
  logout,
  login,
  getUser,
  getProfile,
  // UpdateProfile,
};
