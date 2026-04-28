<script setup>
const props = defineProps(["path"])

</script>

<template>
    <form :action="props.path" method="post" class="justify-self-center grid gap-3">
        <div class="grid content-center gap-2.5"><label for="username">enter your username</label><input class=" rounded-lg outline-0 p-2 border-3 border-[#4649b8]" placeholder="username" type="text"></div>
        <div class="grid content-center gap-2.5"><label for="password">enter a strong password</label><input class=" rounded-lg outline-0 p-2 border-3 border-[#4649b8]" placeholder="password" type="password"></div>
    </form>
</template>