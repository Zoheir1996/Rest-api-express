<template>
  <div>
    <div class="has-text-centered" style="color: white">Liste des utilisateurs</div>
    <div class="table-container">
      <table class="table is-striped is-bordered">
        <thead>
          <tr>
            <th class="has-text-weight-bold">Nom</th>
            <th class="has-text-weight-bold">Adresse</th>
            <th class="has-text-weight-bold">Téléphone</th>
            <th class="has-text-weight-bold">Pays</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user_alias in User" :key="user_alias.id">
            <td>{{ user_alias.noms }}</td>
            <td>{{ user_alias.adresse }}</td>
            <td>{{ user_alias.telephone }}</td>
            <td>{{ user_alias.country }}</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div>
      <button onclick="window.location.href='/form'">Ajouter un utilisateur</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
/* eslint-disable */
export default {
  name: 'User',
  data() {
    return {
      User: []
    }
  },
  mounted() {
    axios
      .get('http://localhost:3000/api/v1/utilisateurs/')
      .then((response) => {
        console.log(response.data)
        this.User = response.data
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>

<style scoped>
.table-container {
  max-height: 400px;
  overflow-y: auto;
}
</style>
