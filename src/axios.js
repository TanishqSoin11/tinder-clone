import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinder-backend-fake.herokuapp.com",
});

export default instance;
