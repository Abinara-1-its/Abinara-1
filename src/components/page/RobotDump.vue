<template>
  <div class="container mx-auto px-4 py-16 text-center mt-14">
    <h1
      data-aos="fade-down"
      class="2xl:text-7xl lg:text-7xl font-bold leading-tight md:text-6xl sm:text-6xl md:mt-0 text-5xl gradient-text text-red-600"
    >
      Robot Dump
    </h1>
    <!-- <p class="text-lg mb-12 text-gray-600">Koleksi video singkat dari robot-robot kami.</p> -->
    <div
      class="3xl:mt-20 mt-10 mb-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
    >
      <div
        v-for="video in videos"
        :key="video.id"
        class="w-[315px] h-[560px] rounded-2xl overflow-hidden shadow-lg"
      >
        <iframe
          :src="`https://www.youtube.com/embed/${video.id}?autoplay=1&mute=1&loop=1&playlist=${video.id}&controls=1&rel=0`"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          class="w-full h-full border-none"
        ></iframe>
      </div>
    </div>
    <div class="mt-16 flex justify-center">
      <router-link
        to="/robots"
        class="w-full max-w-xl bg-gradient-to-r from-red-600 to-red-800 text-white font-bold py-4 px-8 rounded-full hover:from-red-500 hover:to-red-600 transition-transform transform hover:scale-105 duration-300 ease-in-out text-lg"
      >
        Back to Robots Gallery
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RobotDump',
  data() {
    return {
      videos: [
        { id: 'Nn_aMF0fjik' },
        { id: 'rGedi1OzTLU' },
        { id: 'PGzPz7-7TWw' },
      ],
    }
  },
}
</script>

<style>

</style>
