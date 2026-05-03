<script setup>
import { ref } from 'vue';

const props = defineProps(["path", "function"])

const name = ref("")
const password = ref("")

async function sendData() {
    const request = await fetch(props.path, {method: "POST",headers: {"Content-type": "application/json"}, body:JSON.stringify({name: name.value, password: password.value})})
    const data = await request.json()
    sessionStorage.setItem("token", data.token)
    console.log(sessionStorage.getItem("token"))
    
}

</script>

<template>
    <div>
        <input  v-model="name" class="rounded-lg outline-0 p-2 border-3 border-[#4649b8]" placeholder="username" type="text">
        <input  v-model="password" class="rounded-lg outline-0 p-2 border-3 border-[#4649b8]" placeholder="password" type="password">
        <button @click="() => sendData()">{{ props.function }}</button>
    </div>
    
</template>