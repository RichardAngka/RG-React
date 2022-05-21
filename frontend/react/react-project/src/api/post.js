const { default: axios } = require("axios");
const { API_URL } = require("./config");

// TODO: answer here
const postData = ({ path, data = {} }) => {
  axios.post(`${API_URL}/${path}`, data);
};

export default postData;
