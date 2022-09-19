import axios from 'axios'

const api = axios.create({
  baseURL: 'https://paa-project.herokuapp.com'
  //baseURL: 'https://paa-feed.herokuapp.com'
})

export default api