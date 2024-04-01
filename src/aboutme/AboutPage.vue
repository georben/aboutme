<template>
    <div class="about-page">
      <table class="elegant-table">
        <tr>
          <th>Name</th>
          <td>GEORBEN</td>
        </tr>
        <tr>
          <th>Age</th>
          <td>23</td>
        </tr>
        <tr>
          <th>Birthdate</th>
          <td>August 27, 2000</td>
        </tr>
        <tr>
            <th>Email</th>
            <td>a.georben@gmail.com</td>
        </tr>
        <tr>
            <th>Contact number</th>
            <td>N/A</td>
        </tr>
      </table>
      <div class="button-container">
        <router-link class="nav-button" to="/">Home</router-link>
        <router-link class="nav-button" to="/hobby">Hobby</router-link>
        <router-link class="nav-button" to="/service">Services</router-link>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    // Add any necessary logic here
  }
  </script>
  
  <style scoped>
  .about-page {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column; /* Align items in a column */
    height: 100vh;
    background-color: black; /* Change background color to black */
  }
  
  .elegant-table {
    width: 80%;
    margin-top: 20px;
    border-radius: 10px; /* Add border-radius to create a curved table */
    background-color: #333; /* Dark background color */
  }
  
  th, td {
    border: 1px solid #555;
    padding: 12px;
    text-align: left;
    color: white; /* Change text color to white */
  }
  
  th {
    background-color: #222; /* Darker background color for table headers */
  }
  
  .button-container {
    margin-top: 20px; /* Add margin to separate the button container from the table */
  }
  
  .nav-button {
    background-color: #4CAF50; /* Green button color */
    color: white; /* White text color */
    border: none; /* Remove button border */
    border-radius: 5px; /* Add button border radius */
    padding: 10px 20px; /* Adjust button padding */
    margin: 5px; /* Add margin between buttons */
    font-size: 1rem; /* Button font size */
    text-decoration: none; /* Remove default link underline */
    cursor: pointer; /* Add cursor pointer */
    transition: background-color 0.3s ease; /* Smooth transition */
  }
  
  .nav-button:hover {
    background-color: #45a049; /* Darker shade of green on hover */
  }
  </style>
  