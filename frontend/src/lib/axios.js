import axios from "axios";

const axiosInstance = axios.create({  //custom axions
	baseURL: import.meta.mode === "development" ? "http://localhost:5000/api" : "/api", //Making it dynamic
	withCredentials: true, // send cookies to the server
});

export default axiosInstance;