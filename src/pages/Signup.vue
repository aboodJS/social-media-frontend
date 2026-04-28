<script setup lang="ts">
import AuthForm from '@/components/AuthForm.vue';
import FooterBar from '@/components/FooterBar.vue';
import TopBar from '@/components/TopBar.vue';

</script>

<template>
    <main class="h-screen grid text-white justify-center text-center">
        <TopBar></TopBar>
        <h1 class="font-bold text-4xl">Sign up</h1>
        <AuthForm path="http://localhost:3000/Signup"></AuthForm>
        <FooterBar></FooterBar>
    </main>

</template>