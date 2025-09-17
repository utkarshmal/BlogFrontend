import axios from "axios";

const API_URL = "http://localhost:4000/api/v1";

// Posts
export const fetchPosts = () => axios.get(`${API_URL}/posts`);
export const createPost = (postData) => axios.post(`${API_URL}/posts/create`, postData);
export const getPostById = (id) => axios.get(`${API_URL}/posts/${id}`);

// Likes
export const likePost = (postId, userId) =>
  axios.post(`${API_URL}/likes/like`, { post: postId, user: userId });

export const unlikePost = (postId, likeId) =>
  axios.post(`${API_URL}/likes/unlike`, { postId, likeId });

export const verifyOtp = (data) => axios.post(`${BASE_URL}/verify-otp`, data);
// Comments
export const addComment = (postId, userId, body) =>
  axios.post(`${API_URL}/comments/create`, { post: postId, user: userId, body });

export const signupUser = (userData) => {
  // userData = { name, email, password }
  return axios.post(`${API_URL}/auth/signup`, userData);
};

// User login
export const loginUser = (credentials) => {
  // credentials = { email, password }
  return axios.post(`${API_URL}/auth/login`, credentials);
};