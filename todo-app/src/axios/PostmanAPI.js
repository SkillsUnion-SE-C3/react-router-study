import axios from "axios";

const PostmanAPI = axios.create({ baseURL: "https://mod2-api.herokuapp.com" });

export default PostmanAPI;
