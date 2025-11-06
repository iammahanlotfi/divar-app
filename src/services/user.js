import api from "../configs/api";
 
const getProfile = () => api.get("user/whoami").then((res) => res || false );

const getposts = () => api.get("post/my"); 

export { getProfile , getposts};