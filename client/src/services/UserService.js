import axios from 'axios'

const apiClient = axios.create({
  baseURL: '/api/v1',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  ajouterUtilisateur() {
    return apiClient.post('http://localhost:3000/api/v1/utilisateurs/')
  },
  supprimerUtilisateur() {
    return apiClient.delete('http://localhost:3000/api/v1/utilisateurs/')
  },
  modifierUtilisateur() {
    return apiClient.put('http://localhost:3000/api/v1/utilisateurs/')
  },
  getTousUtilisateur() {
    return apiClient.get('http://localhost:3000/api/v1/utilisateurs/')
  },
  getUtilisateur() {
    return apiClient.get('http://localhost:3000/api/v1/utilisateurs/id')
  }
}
