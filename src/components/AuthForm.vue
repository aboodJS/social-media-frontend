<script setup>
import { ref } from 'vue';

const props = defineProps(["path", "function"])

const name = ref("")
const password = ref("")

async function sendData(loginName, loginPassword) {
    await fetch(props.path, {method: "POST", body:{name: loginName, password: loginPassword}}).then(j => j.json()).then(r => console.log(r))
    console.log(loginName)
    console.log(loginPassword)
    
}

</script>

<template>
    <div>
        <input  v-model="name" class="rounded-lg outline-0 p-2 border-3 border-[#4649b8]" placeholder="username" type="text">
        <input  v-model="password" class="rounded-lg outline-0 p-2 border-3 border-[#4649b8]" placeholder="password" type="password">
        <button @click="() => sendData(name, password)">{{ props.function }}</button>
    </div>
    
</template>