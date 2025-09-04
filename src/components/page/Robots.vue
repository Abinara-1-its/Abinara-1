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

    <!-- Toggle between 2D and 3D view -->
    <div class="flex justify-center mb-8" data-aos="fade-in">
      <div class="bg-gray-200 rounded-lg p-1 flex">
        <button
          @click="viewMode = '2d'"
          :class="[
            'px-4 py-2 rounded-md transition-all duration-200 font-medium',
            viewMode === '2d' 
              ? 'bg-red-600 text-white shadow-md' 
              : 'text-gray-600 hover:text-gray-800'
          ]"
        >
          2D Images
        </button>
        <button
          @click="viewMode = '3d'"
          :class="[
            'px-4 py-2 rounded-md transition-all duration-200 font-medium',
            viewMode === '3d' 
              ? 'bg-red-600 text-white shadow-md' 
              : 'text-gray-600 hover:text-gray-800'
          ]"
        >
          3D Models
        </button>
      </div>
    </div>

    <div class="flex flex-col w-full gap-8 md:gap-16">
      <div
        v-for="(robot, index) in robots"
        :key="index"
        :id="categories[index]"
        class="flex flex-col md:flex-row items-center md:items-start md:justify-between min-h-fit"
        :class="{ 'md:flex-row-reverse': index % 2 !== 0 }"
      >
        <!-- Deskripsi -->
        <div
          data-aos="zoom-in-up"
          :data-aos-offset="index === 2 ? '150' : '120'"
          :data-aos-delay="index === 2 ? '100' : '0'"
          class="description-box md:w-[48%] lg:w-[50%] bg-gradient-to-r from-red-900 to-red-500 text-white p-6 rounded-2xl shadow-2xl my-4 md:my-8 mx-4 xl:mx-8 text-center md:text-left"
        >
          <p class="text-lg leading-relaxed font-semibold text-shadow">
            {{ robot.description }}
          </p>
        </div>

        <!-- Robot Display (2D or 3D) -->
        <div
          data-aos="zoom-in-up"
          :data-aos-offset="index === 2 ? '150' : '120'"
          :data-aos-delay="index === 2 ? '200' : '100'"
          class="md:w-[48%] lg:w-[50%] flex justify-center my-4 md:my-8 mx-4 w-full"
        >
          <div ref="robotRefs" class="relative p-2 sm:p-6 flex items-center justify-center w-full">
            <!-- 2D Image View -->
            <div v-if="viewMode === '2d'" class="w-full flex justify-center">
              <img
                :src="robot.image"
                :alt="robot.alt"
                class="object-contain max-w-sm w-full h-[250px] md:h-[300px] lg:hover:scale-110 md:hover:scale-110 hover:scale-105 transition-transform ease-in-out duration-300 cursor-pointer rounded-lg shadow-lg"
              />
            </div>

            <!-- 3D Model View -->
            <div v-else class="w-full min-h-[350px]">
              <model-viewer
                :src="robot.modelUrl"
                :ios-src="robot.iosModelUrl"
                :alt="robot.alt"
                ar
                ar-modes="scene-viewer quick-look webxr"
                camera-controls
                auto-rotate
                shadow-intensity="1"
                shadow-softness="0.75"
                exposure="0.5"
                environment-image="neutral"
                camera-orbit="135deg 75deg 21m"
                min-camera-orbit="auto auto 2m"
                max-camera-orbit="auto auto 40m"
                field-of-view="35deg"
                class="w-full h-[350px] md:h-[500px] lg:h-[600px] rounded-lg mx-auto"
                style="background-color: transparent; min-height: 350px;"
              >
                <div slot="poster" class="flex items-center justify-center h-full bg-gray-100 rounded-lg">
                  <div class="text-center">
                    <div class="animate-spin rounded-full h-12 w-12 border-b-2 border-red-600 mx-auto mb-4"></div>
                    <p class="text-gray-600">Loading 3D Model...</p>
                  </div>
                </div>
                
                <!-- AR Button -->
                <button 
                  slot="ar-button" 
                  class="ar-button bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg shadow-lg transition-colors duration-200 flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                  </svg>
                  View in AR
                </button>
              </model-viewer>
            </div>
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
import robotsData from '../../assets/data/robots.json'

export default {
  components: {
    NavButtons,
  },
  data() {
    return {
      categories: ['Fiametta', 'Phynix', 'Arabot'],
      activeCategory: 'Fiametta',
      viewMode: '3d', // Default to 3D view
      robots: robotsData,
    }
  },
  mounted() {
    this.startAnimationLoop()
    this.initializeAOS()
  },
  watch: {
    viewMode() {
      // Refresh AOS when view mode changes to recalculate positions
      this.$nextTick(() => {
        this.initializeAOS()
      })
    }
  },
  methods: {
    initializeAOS() {
      // Refresh AOS with custom settings for better animation timing
      this.$nextTick(() => {
        if (typeof AOS !== 'undefined') {
          AOS.refresh()
        }
        
        // Force recalculation of element positions after a short delay
        setTimeout(() => {
          if (typeof AOS !== 'undefined') {
            AOS.refresh()
          }
        }, 100)
      })
    },
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

/* Ensure description box fits content naturally */
.description-box {
  height: auto;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

/* Custom styles for model-viewer */
model-viewer {
  --poster-color: transparent;
  --progress-bar-color: #dc2626;
  --progress-mask: rgba(255, 255, 255, 0.2);
  width: 100%;
  min-height: 350px;
  display: block;
}

model-viewer::part(default-progress-bar) {
  background-color: #dc2626;
  border-radius: 4px;
}

.ar-button {
  position: absolute;
  bottom: 16px;
  right: 16px;
  z-index: 10;
}

/* Loading animation */
@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.animate-spin {
  animation: spin 1s linear infinite;
}

/* AOS animation improvements for better timing */
[data-aos="zoom-in-up"] {
  transform: translate3d(0, 40px, 0) scale(0.6);
  opacity: 0;
  transition-property: transform, opacity;
}

[data-aos="zoom-in-up"].aos-animate {
  transform: translate3d(0, 0, 0) scale(1);
  opacity: 1;
}
</style>
