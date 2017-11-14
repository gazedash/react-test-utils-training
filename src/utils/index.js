const fetchSometingWithParams = obj => {
  utils.fetchSomeMore();
  utils.fetchSomeMore();
  utils.fetchSomeMore();
  utils.fetchSomeMore();
  utils.fetchSomeMore();
};

const fetchSomeMore = () => {
  return 1;
};

const utils = {
  fetchSometingWithParams,
  fetchSomeMore
};

export default utils;