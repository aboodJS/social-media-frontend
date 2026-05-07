<script setup>
import TopBar from '@/components/TopBar.vue';
import { ref } from 'vue';

const postTitle = ref("")
const postBody = ref("")

async function sendData() {
    const request =  await fetch("http://localhost:3000/posts/add", {
        method: "POST",
        body: JSON.stringify({ title: postTitle.value, postBody: postBody.value }),
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`
        }
    })

    const data = await request.json()
    console.log(data)
}

</script>

<template>
    <TopBar></TopBar>
    <div class="grid justify-center">
        <h1 class="font-bold text-4xl text-white text-center">create post</h1>
        <section class="text-white grid">
            <div class="grid text-center">
                <label for="">title</label>
                <input v-model="postTitle" class="rounded-lg outline-0 p-2 border-3 border-[#4649b8]" type="text" name="title">
            </div>
             <div class="grid text-center">
                <label for="body">body text</label>
                <textarea v-model="postBody" class="rounded-lg outline-0 p-2 border-3 border-[#4649b8]" type="text" name="body"/>
            </div>
            <button @click="sendData">Post</button>
        </section>
    </div>
</template>