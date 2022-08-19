import axios from "axios";
const baseUrl = "http://localhost:3001/persons";

const getAll = () => {
  return axios.get(baseUrl);
};

const create = (personObject) => {
  return axios.post(baseUrl, personObject);
};

const deleteId = (id) => {
  axios.delete(`${baseUrl}/${id}`)

}

const getNumber = (name)=> {
 return axios.get(baseUrl, { params: { name: name }})

}

const edit = (id, editObject) => 
{
  return axios.put(`${baseUrl}/${id}`, editObject)}

// eslint-disable-next-line import/no-anonymous-default-export
export default { getAll, create, deleteId, getNumber, edit };
