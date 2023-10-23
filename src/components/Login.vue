<template>
  <div class="signup">
    <router-link to="/Login">Sign Up</router-link>

    <form @submit.prevent="registerUser">
      <div class="form-group">
        <label for="name">Name</label>
        <input v-model="name" type="text" id="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" type="email" id="email" required />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      <button type="submit">Sign Up</button>
    </form>
    <div v-if="registrationSuccess" class="success-message">
      User registered successfully!
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      registrationSuccess: false,
    };
  },
  methods: {
    async registerUser() {
      // Send a POST request to your backend API to register the user.
      // Handle success and display the success message.
      // You can use Axios or any other library for API requests.
      try {
        // Perform registration here
        // Example: await axios.post('/api/register', { name, email, password });
        this.registrationSuccess = true;
      } catch (error) {
        console.error('Registration failed:', error);
      }
    },
  },
};
</script>

<style scoped>
/* Add your CSS styles here */
.signup {
  text-align: center;
  margin: 20px;
}

form {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background: #f9f9f9;
}

.form-group {
  margin-bottom: 10px;
}

label {
  display: block;
  font-weight: bold;
}

input[type="text"],
input[type="email"],
input[type="password"] {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button {
  background: #4ec5c1;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
}

.success-message {
  background: #4ec5c1;
  color: #fff;
  padding: 10px;
  border-radius: 5px;
  margin-top: 10px;
}
</style>
