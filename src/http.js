import axios from "axios";

const http = axios.create({
	baseURL: "https://reqres.in/api/",
	timeout: 1000,
	headers: { "X-Custom-Header": "foobar" }
});

export default http;
