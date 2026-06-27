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

onMounted(async () => {})
</script>

<template>
  <div id="app" class="flex flex-col min-h-screen bg-grid-pattern relative overflow-hidden">
    <!-- Animated Background Auras -->
    <!-- <div class="fixed top-[-10%] left-[-10%] w-[50vw] h-[50vw] max-w-2xl max-h-2xl bg-red-500 rounded-full mix-blend-multiply filter blur-[150px] opacity-15 animate-blob pointer-events-none z-0"></div>
    <div class="fixed bottom-[-10%] right-[-10%] w-[50vw] h-[50vw] max-w-2xl max-h-2xl bg-blue-500 rounded-full mix-blend-multiply filter blur-[150px] opacity-15 animate-blob-reverse pointer-events-none z-0"></div> -->

    <Navbar />
    <router-view class="z-10" />
    <Footer class="z-10" />
  </div>
</template>

<style>
#app {
  display: flex;
  flex-direction: column;
}
</style>
