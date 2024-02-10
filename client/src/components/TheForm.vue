<template>
  <div class="form-container">
    <h3>Formulaire utilisateur</h3>
    
    <form id="signupForm">
      <div class="form-group">
        <label for="name">Nom</label>
        <input
          v-model="User.name"
          type="text"
          id="name"
          name="firstname"
          placeholder="ton nom"
          required
        />
      </div>

      <div class="form-group">
        <label for="adresse">Adresse postale</label>
        <input
          v-model="User.adresse"
          type="text"
          id="adresse"
          name="adresse"
          placeholder="ton adresse..."
          required
        />
      </div>

      <div class="form-group">
        <label for="lname">Telephone</label>
        <input v-model="User.telephone" type="text" id="lname" name="email" required />
      </div>

      <div class="form-group">
        <label for="country">Country</label>
        <select v-model="User.country" id="country" name="country" required>
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
      </div>

      <button @click.prevent="handleSubmit">Submit</button>

      <button onclick="window.location.href='/users'">Users</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      User: {
        name: '',
        adresse: '',
        telephone: '',
        country: ''
      }
    }
  },
  methods: {
    handleSubmit(event) {
      event.preventDefault()
      let newUser = {
        noms: this.User.name,
        adresse: this.User.adresse,
        telephone: this.User.telephone,
        country: this.User.country
      }
      console.log(newUser)
      axios
        .post('http://localhost:3000/api/v1/utilisateurs/', newUser)
        .then((response) => {
          console.log(response)
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }
}
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: auto; /* Pour centrer le conteneur */;
}

form {
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 100%;
}

h3 {
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: bold;
  color: black;
}

input[type='text'],
select {
  width: 100%;
  padding: 12px;
  margin-bottom: 10px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: black;
}

button {
  width: 100%;
  background-color: #4caf50;
  color: white;
  padding: 14px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;
  margin-bottom: 10px;
}

button:hover {
  background-color: #45a049;
}
</style>
