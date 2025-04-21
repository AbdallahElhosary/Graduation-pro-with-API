import axios from 'axios'

const baseUrl = axios.create({ baseURL: "http://studentguideapi.runasp.net/" })

export default baseUrl