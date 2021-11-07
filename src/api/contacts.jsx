import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:3006",
  baseURL: "https://samsantech-app.herokuapp.com/contacts",
});
