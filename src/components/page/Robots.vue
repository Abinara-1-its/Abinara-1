<template>
  <div class="container mx-auto px-4 py-16 flex flex-col items-center mt-14">
    <h1
      data-aos="fade-down"
      class="lg:text-7xl font-bold leading-tight md:text-6xl sm:text-6xl md:mt-0 text-5xl gradient-text text-red-600"
    >
      PROJECTS
    </h1>

    <div data-aos="zoom-in" class="flex flex-wrap justify-center gap-4 mt-8 mb-10">
      <NavButtons
        v-for="(category, index) in categories"
        :key="index"
        :isActive="activeCategory === category"
        @click="setActiveCategory(category)"
      >
        {{ category }}
      </NavButtons>
    </div>

    <div class="flex flex-col w-full">
      <div
        v-for="(robot, index) in robots"
        :key="index"
        :id="categories[index]"
        class="flex flex-col md:flex-row items-center md:items-start md:justify-between"
        :class="{ 'md:flex-row-reverse': index % 2 !== 0 }"
      >
        <!-- Deskripsi -->
        <div
          data-aos="zoom-in-up"
          class="md:w-[50%] lg:w-[60%] bg-gradient-to-r from-red-900 to-red-500 text-white p-6 rounded-2xl shadow-2xl sm:my-20 my-10 xl:mx-20 lg:mx-10 md:mx-6 text-center md:text-left"
        >
          <p class="text-lg leading-relaxed font-semibold text-shadow">
            {{ robot.description }}
          </p>
        </div>

        <!-- Gambar Robot -->
        <div
          data-aos="zoom-in-up"
          class="md:w-[45%] lg:w-[50%] flex justify-center sm:my-6 my-2 md:mt-0"
        >
          <div ref="robotRefs" class="relative p-6 flex items-center justify-center">
            <img
              :src="robot.image"
              :alt="robot.alt"
              class="object-contain max-w-sm w-full h-[250px] md:h-[300px] lg:hover:scale-130 md:hover:scale-130 hover:scale-125 transition-transform ease-in-out duration-300 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>

    <!-- Tombol Dump dan 3D View di bagian bawah -->
    <div class="flex flex-col md:flex-row md:gap-20 gap-10 mt-16 mb-8" data-aos="fade-up">
      <button
        @click="navigateToDump"
        class="cursor-pointer group relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 text-white px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 text-lg font-bold flex items-center justify-center min-w-[280px] md:min-w-[320px]"
      >
        <span class="mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        </span>
        View Dump
      </button>
      
      <button
        @click="navigateTo3DView"
        class="cursor-pointer group relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-700 text-white px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 text-lg font-bold flex items-center justify-center min-w-[280px] md:min-w-[320px]"
      >
        <span class="mr-3">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
          </svg>
        </span>
        View 3D
      </button>
    </div>
  </div>
</template>

<script>
import NavButtons from '../buttons/NavButtons.vue'
import robots from '/src/assets/data/robots.json'

export default {
  components: {
    NavButtons,
  },
  data() {
    return {
      categories: ['Fiametta', 'Phynix', 'Arabot'],
      activeCategory: 'Fiametta',
      robots: robots,
    }
  },
  mounted() {
    this.startAnimationLoop()
  },
  methods: {
    setActiveCategory(category) {
      this.activeCategory = category
      const targetElement = document.getElementById(category)
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' })
      }
    },
    startAnimationLoop() {
      const robotElements = this.$refs.robotRefs
      if (!robotElements) return

      setInterval(() => {
        robotElements.forEach((robot) => {
          robot.classList.remove('animate__animated', 'animate__tada')
          void robot.offsetWidth
          robot.classList.add('animate__animated', 'animate__tada')
        })
      }, 7000)
    },
    navigateToDump() {
      this.$router.push('/robot-dump')
    },
    navigateTo3DView() {
      this.$router.push('/3d-view')
    },
  },
}
</script>

<style scoped>
.text-shadow {
  text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
}

.robot-image:hover {
  transform: scale(1.3);
  transition: all 0.3s ease-in-out;
}
</style>
