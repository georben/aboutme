<template>
  <div id="app">
    <img alt="" src="">
    <div class="navigation">
     
     
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f4f4f4;
  background-color: #0f0e0e;
}

.navigation {
  display: flex;
  justify-content: center;
  margin-top: 20px; /* Adjust margin-top to separate from the content */
}

.nav-button {
  background-color: orange; /* Orange background color */
  color: #333333; /* Dark gray text color */
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  margin: 0 5px;
  font-size: 1rem;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.nav-button:hover {
  background-color: #ff7f00; /* Darker shade of orange on hover */
}

</style>
