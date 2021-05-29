import axios from 'axios'

const url ="https://my-mern-pro.herokuapp.com/"

export const fetchPost = () => axios.get(url)
export const createPost = (newPost) => axios.post(url,newPost)
export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);