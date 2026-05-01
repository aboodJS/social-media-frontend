<script setup lang="ts">
import { onBeforeMount, ref } from 'vue';
import FooterBar from '@/components/FooterBar.vue';
import Post from '@/components/Post.vue';
import TopBar from '@/components/TopBar.vue';
const posts = ref()


onBeforeMount(async () => {
    
    posts.value = await fetch("http://localhost:3000/posts").then(j => j.json()).then(r => r)

})

</script>

<template>
    <TopBar></TopBar>
    <main class="h-screen grid gap-3 content-start justify-center">
        <Post v-for="post in posts" :title="post.title" :body="post.body" :score="post.score"></Post>
    </main>
    <FooterBar></FooterBar>
</template>