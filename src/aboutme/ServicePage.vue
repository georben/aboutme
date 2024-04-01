<template>
  <div class="user-profile">
    <div class="content">
      <h1>Currently, the owner of this portfolio cannot provide you any services because this portfolio is made for a project purpose only.</h1>
      <div class="button-container">
        <router-link class="nav-button" to="/">Home</router-link>
        <router-link class="nav-button" to="/about">About</router-link>
        <router-link class="nav-button" to="/hobby">Hobby</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // Add any necessary logic here
}
</script>

<style scoped>
.user-profile {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #000000; /* Black background color */
  color: #ffffff; /* White text color */
}

.content {
  text-align: center;
}

h1 {
  color: inherit; /* Inherit text color */
}

.button-container {
  margin-top: 20px; /* Add margin to separate buttons */
}

.nav-button {
  text-decoration: none; /* Remove default link decoration */
  color: inherit; /* Inherit text color */
  background-color: #4CAF50; /* Green button color */
  padding: 10px 20px; /* Adjusted padding */
  border-radius: 5px; /* Add border radius */
  margin-right: 10px; /* Add margin between buttons */
  font-size: 1rem; /* Button font size */
  transition: background-color 0.3s ease; /* Smooth transition */
}

.nav-button:hover {
  background-color: #45a049; /* Darker shade of green on hover */
}
</style>
