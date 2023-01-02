import { API_URL } from "./constant";

export const profile = {
  login: (cred) => {
    return new Promise((resolve, reject) => {
      var myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      var raw = JSON.stringify(cred);

      var requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };

      fetch(`${API_URL}/superapp/user/login`, requestOptions)
        .then((response) => response.json())
        .then((result) => resolve(result))
        .catch((error) => reject(error));
    });
  },
  getProfile: (tok) => {
    return new Promise((resolve, reject) => {
      var myHeaders = new Headers();
      myHeaders.append("Authorization", tok);

      var requestOptions = {
        method: "GET",
        headers: myHeaders,
        redirect: "follow",
      };

      fetch(`${API_URL}/superapp/user`, requestOptions)
        .then((response) => response.json())
        .then((result) => resolve(result))
        .catch((error) => reject(error));
    });
  },
};
