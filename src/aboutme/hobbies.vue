<template>
    <div class="contact-page">
        <div class="content">
            <!-- Image 1 -->
            <img src="@/assets/download.jpg" alt="Image 1" class="contact-image">
            
            <!-- Image 2 -->
            <img src="@/assets/shaiya.jpg" alt="Image 2" class="contact-image">
            
            <!-- Image 3 -->
            <img src="@/assets/shaiya_elf_fighter_by_baboe.webp" alt="Image 3" class="contact-image">
            
            <div class="button-container">
                <router-link class="nav-button home-button" to="/">Home</router-link>
                <router-link class="nav-button" to="/about">About Me</router-link>
                <router-link class="nav-button services-button" to="/service">Services</router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContactPage'
}
</script>

<style scoped>
.contact-page {
    display: flex;
    justify-content: center;
    align-items: flex-start; /* Align items to the top */
    height: 100vh;
    background-color: black; /* Black background color */
}

.content {
    text-align: center;
    max-width: 800px; /* Limit the maximum width of the content */
    margin: 0 auto; /* Center the content horizontally */
}

.contact-image {
    max-width: 100%; /* Set the maximum width to 100% of its container */
    max-height: 300px; /* Set the maximum height */
    margin-bottom: 20px; /* Add margin between images */
}

.button-container {
    padding-bottom: 50px; /* Add padding to bottom */
}

.nav-button {
    margin-top: 20px; /* Add margin to separate buttons */
    padding: 10px 20px; /* Adjusted button padding */
    font-size: 1rem; /* Button font size */
    text-decoration: none; /* Remove default link decoration */
    cursor: pointer; /* Add cursor pointer */
    transition: background-color 0.3s ease; /* Smooth transition */
    background-color: #4CAF50; /* Green button color */
    color: white; /* White text color */
    border: none; /* Remove button border */
    border-radius: 5px; /* Add border radius */
}

.nav-button:hover {
    opacity: 0.8; /* Reduce opacity on hover */
}
</style>
