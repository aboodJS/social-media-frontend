 <script setup>
import FooterBar from '@/components/FooterBar.vue';
import TopBar from '@/components/TopBar.vue';

</script>

 
 <template>
   <TopBar></TopBar>
 <main class="text-white grid">
    <section id="banner" class="relative top-0 h-[45vh] grid justify-center text-center content-center">
      <div class="text-3xl font-bold">
      <h1>social board</h1>
      <p>share your <span class="text-[#4648b8]">thoughts</span></p>
    </div>
    </section>
    <section class="h-[33vh] grid justify-center text-center content-evenly">
      <h1 class="text-3xl font-bold">join us today!</h1>
      <div class="flex  items-center justify-center gap-3"><button class="w-30 font-bold hover:bg-[#3a3c9f] cursor-pointer transition p-3 rounded bg-[#4648b8]">Login</button><button class="w-30 font-bold hover:bg-[#3a3c9f] cursor-pointer transition p-3 rounded bg-[#4648b8]">Signup</button></div>
    </section>
  </main>
  <FooterBar></FooterBar>
 </template>
 <style scoped>
 #banner {
  background-image: url(https://images.pexels.com/photos/13570156/pexels-photo-13570156.jpeg);
  background-size: cover;
  background-position: center;
 }

</style>
 
