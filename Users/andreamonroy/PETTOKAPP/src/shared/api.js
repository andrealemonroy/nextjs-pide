import axios from 'axios'
const api = axios.create({
  method: 'get',
  baseURL: `${process.env.REACT_APP_API_URL}`,
  timeout: 40000,
  withCredentials: false,
  responseType: 'json',
  maxContentLength: 2000000,
  maxRedirects: 3
})
// CUSTOMER ME
export const getPosts = async () => {
  return await api.get(`https://dummyapi.io/data/api/post`, {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'app-id': '5f484b1464fa2f00025390f7'
    }
  })
}

export const getPostById = async (id) => {
  return await api.get(`https://dummyapi.io/data/api/post/${id}/comment`, {
    headers: {
      'content-type': 'application/json; charset=utf-8',
      'app-id': '5f484b1464fa2f00025390f7'
    }
  })
}

