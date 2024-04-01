<template>
    <div class="home-page">
        <div class="content">
            <div class="circle-wrapper">
                <img src="@/assets/me.jpg" alt="Image 1" class="contact-image">
                <h1>Welcome to my Home Page</h1>

                <div>
                    <router-link class="nav-button" to="/about">About Me</router-link>
                    <router-link class="nav-button" to="/hobby">Hobby</router-link>
                    <router-link class="nav-button" to="/service">Services</router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomePage'
}
</script>

<style scoped>
.home-page {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: black; /* Black background color */
}

.content {
    text-align: center;
}

.circle-wrapper {
    padding: 30px; /* Reduced padding */
    border-radius: 50%; /* Added border radius to make it circular */
    background-color: #FFD700; /* Unique simple background color */
    display: flex; /* Use flexbox */
    flex-direction: column; /* Align items vertically */
    align-items: center; /* Center items horizontally */
    overflow: hidden; /* Hide overflow to ensure perfect circle */
}

.circle-wrapper img {
    border-radius: 50%; /* Make the image circular */
    display: block; /* Ensure the image takes up the full circle */
    width: 200px; /* Set the width of the image */
    height: auto; /* Auto height to maintain aspect ratio */
}

h1 {
    font-size: 3rem; /* Increased font size for heading */
    color: #3E3E3E; /* Dark gray text color reminiscent of soil or rocks */
    margin-bottom: 30px; /* Increased margin for spacing */
}

.nav-button {
    background-color: #4CAF50; /* Green color */
    color: white; /* White text color */
    border: none; /* Remove button border */
    border-radius: 5px; /* Add button border radius */
    padding: 10px 20px; /* Adjusted padding for a smaller button */
    margin: 5px; /* Add some margin between buttons */
    font-size: 1rem; /* Reduced font size for a smaller button */
    text-decoration: none; /* Remove default link decoration */
    cursor: pointer; /* Add cursor pointer */
    transition: background-color 0.3s ease; /* Smooth transition */
}

.nav-button:hover {
    background-color: #45a049; /* Darker shade of green on hover */
}
</style>
