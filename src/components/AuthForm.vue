<script setup>
import { ref } from 'vue';

const props = defineProps(["path", "function"])

const name = ref("")
const password = ref("")
const errStat = ref(false)
const errVal = ref()

async function sendData() {
   
}

</script>

<template>
    <div v-if="errStat" class="bg-amber-800 text-white">
        {{ errVal }}
    </div>
    <div>
        <input  v-model="name" class="rounded-lg outline-0 p-2 border-3 border-[#4649b8]" placeholder="username" type="text">
        <input  v-model="password" class="rounded-lg outline-0 p-2 border-3 border-[#4649b8]" placeholder="password" type="password">
        <button @click="() => sendData()">{{ props.function }}</button>
    </div>
    
</template>