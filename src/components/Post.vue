<script setup>
const props = defineProps(["title", "body", "score"])
</script>

<template>
    <div class="border border-amber-100 rounded-lg grid w-4xl h-fit py-5">
        <h1 class="text-white text-2xl font-bold justify-self-center text-left">{{ title }}</h1>
        <p class="text-white justify-self-center text-left">{{ body }}</p>
        <p class="text-white justify-self-center text-left">{{ score }}</p>
        
    </div>
</template>