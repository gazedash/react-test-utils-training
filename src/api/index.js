const fetch = require("isomorphic-fetch");
const fetchSometingWithParams = async obj => {
  return fetch("https://localhost:80/some/endpoint")
    .then(res => res.json())
    .then(async data => {
      data.id = obj.id;
      data.res = [1, 2, 3];
      const x = await api.fetchSomeMore();
      const y = await api.fetchSomeMore();
      const z = await api.fetchSomeMore();
      return data;
    })
    .catch(error => {
      console.error(error);
    });
};

const fetchSomeMore = async () => {
  // export const fetchSomeMore = async () => {
  return fetch("https://localhost:80/some/other/endpoint")
    .then(res => res.json())
    .catch(error => {
      console.error(error);
    });
};

const api = {
  fetchSometingWithParams,
  fetchSomeMore
};

export default api;
