<script setup>
import { onMounted } from 'vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue'

AOS.init({
  duration: 1000,
  // easing: 'ease-in-out',
  offset: 300,
  // mirror: true,
})

onMounted(async () => {
})
</script>

<template>
  <div id="app" class="flex flex-col min-h-screen">
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
}
</style>
