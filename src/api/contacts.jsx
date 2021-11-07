import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:3006",
  baseURL: "https://api-contacts-samsantech.herokuapp.com/contacts",
});
