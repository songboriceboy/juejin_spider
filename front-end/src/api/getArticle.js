import axios from 'axios'

export const getSuggestions = function(params) {
  const url = '/api/getSuggestions'
  return axios
    .get(url, { params: params })
    .then(res => Promise.resolve(res.data))
}

export const getItems = function(params) {
  const url = '/api/getItems'
  return axios
    .get(url, { params: params })
    .then(res => Promise.resolve(res.data))
}
