<template>
  <section class="fullscreen">
    <div class="bg-white py-16">
      <div class="mx-auto px-4 xl:mx-10 lg:mx-4 mx-2">
        <div class="flex flex-col lg:flex-row mt-30 xl:mt-0 lg:mt-0 md:mt-30 sm:mt-20 items-center justify-between">
          <!-- Kolom Kiri -->
          <div class="lg:w-1/2 mb-8 md:mb-0 lg:mt-0 mt-10 lg:ml-10 sm:ml-4">
            <h1
              data-aos="fade-down"
              class="lg:text-7xl font-bold leading-tight lg:text-6xl sm:text-6xl text-5xl gradient-text"
            >
              ABINARA-1
            </h1>
            <p
              data-aos="fade-up"
              class="mt-6 text-lg font-semibold 3xl:pr-30 2xl:pr-20 xl:pr-20 text-gray-800 leading-relaxed text-shadow"
            >
              Abinara-1 is a team that conducts research and competition for
              <span class="highlight"
                >legged autonomous robots with missions to rescue victims.</span
              >
              The team consists of students of Sepuluh Nopember Institute of Technology. one of the
              competitions that is followed is KRSRI (Kontes Robot SAR Indonesia).
            </p>
            <router-link to="/advance" class="mt-8 inline-block" data-aos="fade-up-right">
              <button
                class="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-bold cursor-pointer text-white bg-gradient-to-r from-red-600 to-red-800 rounded-full shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
              >
                <span class="relative">Regist Advance 1.0</span>
                <svg
                  class="w-5 h-5 ml-2 transform transition-transform duration-300 ease-in-out group-hover:translate-x-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  ></path>
                </svg>
              </button>
            </router-link>
          </div>

          <!-- Kolom Kanan: Video YouTube -->
          <div class="lg:w-1/2 w-full p-4 lg:my-10 md:my-6 sm:my-4 " data-aos="zoom-in-left">
            <div class="aspect-video rounded-2xl cursor-pointer overflow-hidden shadow-2xl hover:scale-102 duration-300 ease-in-out">
              <iframe
                class="w-full h-full cursor-pointer"
                src="https://www.youtube.com/embed/mr9PO-w45q0?autoplay=1&mute=1&loop=1&playlist=mr9PO-w45q0&controls=1&rel=0"
                title="Profile Team Video Player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- parallax disini -->
  <div class="parallax-section mt-10 hidden lg:block">
    <div class="parallax-background"></div>
  </div>

  <div data-aos="zoom-in-up" class="py-16 items-center self-center mt-20 md:mt-20">
    <h1
      class="lg:text-7xl font-bold leading-tight md:text-6xl sm:text-6xl md:mt-0 text-5xl gradient-text"
    >
      PROJECTS
    </h1>
  </div>
  <div data-aos="zoom-in-up" class="flex flex-col md:flex-row items-center justify-between">
    <RobotSlider />
    <p
      data-aos="zoom-in-up"
      class="m-10 mt-6 text-md sm:text-xl font-semibold text-gray-800 leading-relaxed text-shadow"
    >
      Abinara-1 is a student research and competition team from Sepuluh Nopember Institute of
      Technology (ITS) that develops legged autonomous robots for search and rescue missions. The
      team focuses on building agile robots capable of navigating complex terrains to detect and
      assist disaster victims. Through innovation and real-world challenges, Abinara-1 aims to
      advance robotic solutions that can support emergency response and save lives in
      critical situations.
    </p>
  </div>

  <Achievements />
  <Gallery />
  <!-- <Alumni /> -->
</template>

<script>
import RobotSlider from './RobotSlider.vue'
import Achievements from './AchievementCard.vue'
import Gallery from '../Gallery.vue'
import Alumni from '../Alumni.vue'

export default {
  components: {
    RobotSlider,
    Achievements,
    Gallery,
    Alumni,
  },
}
</script>

<style scoped>
.fullscreen {
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.text-shadow {
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
}

.highlight {
  color: red;
}

.parallax-section {
  height: 300px;
  overflow: hidden;
  position: relative;
}

.parallax-background {
  background-image: url('/src/assets/images/teams/full-tim.png');
  filter: brightness(50%);
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

</style>
