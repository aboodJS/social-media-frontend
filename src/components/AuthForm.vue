<script setup>
const props = defineProps(["path"])

</script>

<template>
    <form :action="props.path" method="post" class="justify-self-center">
        <div><label for="username">enter your username</label><input placeholder="username" type="text"></div>
        <div><label for="password">enter a strong password</label><input placeholder="password" type="password"></div>
    </form>
</template>