import axiosClient from './axiosClient'

export const AxiosRequest = {
  post(path, data, options = {}) {
    return axiosClient.post(path, data, options)
  },
  get(path, options = {}) {
    return axiosClient.get(path, options)
  },
  put(path, data, options = {}) {
    return axiosClient.put(path, data, options)
  },
  delete(path, options = {}) {
    return axiosClient.delete(path, options)
  },
}
