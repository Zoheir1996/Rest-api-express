<template>
  <div class="form-container">
    <h3>Formulaire utilisateur</h3>

    <form @submit.prevent="handleSubmit">
      <div class="form-group">
        <label for="noms">Nom</label>
        <input
          v-model="formData.noms"
          type="text"
          id="noms"
          name="firstname"
          placeholder="ton nom"
        />
      </div>

      <div class="form-group">
        <label for="lname">Adresse postale</label>
        <input
          v-model="formData.adresse"
          type="text"
          id="adresse"
          name="adresse"
          placeholder="ton adresse..."
        />
      </div>

      <div class="form-group">
        <label for="lname">Telephone</label>
        <input v-model="formData.telephone" type="text" id="lname" name="email" />
      </div>

      <div class="form-group">
        <label for="country">Country</label>
        <select v-model="formData.country" id="country" name="country">
          <option value="australia">Australia</option>
          <option value="canada">Canada</option>
          <option value="usa">USA</option>
        </select>
      </div>

      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        name: '',
        lastName: '',
        country: ''
      }
    }
  },
  methods: {
    handleSubmit() {
      // Logique pour traiter les données du formulaire
      console.log('Données du formulaire:', this.formData)
    }
  }
}
</script>

<style scoped>
.form-container {
  max-width: 400px;
  margin: auto;
}

form {
  background-color: #f2f2f2;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
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
}

button:hover {
  background-color: #45a049;
}
</style>
