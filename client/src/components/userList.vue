<template>
  <table class="table is-striped is-bordered">
    <thead>
      <tr>
        <th>Nom</th>
        <th>Adresse</th>
        <th>Téléphone</th>
        <th>Pays</th>
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

<style>
/* Aucun style spécifique n'est nécessaire, vous pouvez supprimer cette section si vous n'en avez pas besoin */
</style>
