<script setup>
    function TokenExists() {
        return sessionStorage.getItem("token") === null
    }

    function logOut() {
        sessionStorage.removeItem("token")
        location.replace("/")
    }
</script>

<template>
    <nav class="flex gap-8 justify-center w-screen sticky backdrop-blur-lg h-[5vh] items-center z-10 top-0 bg-transparent">
        <div class="font-bold text-[#4648b8] text-lg cursor-pointer"><RouterLink to="/">Home</RouterLink></div>
        <div class="font-bold text-[#4648b8] text-lg cursor-pointer"><RouterLink to="/feed">Feed</RouterLink></div>
        <div v-if="TokenExists() === false" class="font-bold text-[#4648b8] text-lg cursor-pointer"><RouterLink to="/create">add post</RouterLink></div>
        <div v-if="TokenExists() === false" class="font-bold text-[#4648b8] text-lg cursor-pointer"><button @click="logOut">Log out</button></div>
        
    </nav>
</template>