<template>
  <div
    class="w-full max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 py-16 flex flex-col items-center mt-14"
  >
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

    <div class="flex flex-col w-full gap-8 md:gap-16">
      <div
        v-for="(robot, index) in robots"
        :key="index"
        :id="categories[index]"
        class="flex flex-col md:flex-row items-center md:items-center md:justify-between min-h-fit"
        :class="{ 'md:flex-row-reverse': index % 2 !== 0 }"
      >
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

        <div
          data-aos="zoom-in-up"
          :data-aos-offset="index === 2 ? '150' : '120'"
          :data-aos-delay="index === 2 ? '200' : '100'"
          class="md:w-[48%] lg:w-[50%] flex items-center justify-center my-4 md:my-0 mx-4 w-full"
        >
          <div
            ref="robotRefs"
            class="relative p-2 sm:p-6 flex items-center justify-center w-full cursor-pointer group"
            @click="openModal(robot)"
          >
            <div class="relative w-full flex justify-center">
              <img
                :src="robot.image"
                :alt="robot.alt"
                class="object-contain max-w-md w-full h-[300px] md:h-[350px] lg:h-[400px] transition-transform ease-in-out duration-300 group-hover:scale-110"
              />

              <div
                class="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              >
                <div
                  class="bg-black/60 backdrop-blur-sm px-6 py-3 rounded-full flex items-center gap-3 shadow-[0_0_15px_rgba(220,38,38,0.6)] border border-red-500 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300"
                >
                  <span class="text-white font-bold tracking-wide">Click to View in 3D</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Teleport to="body">
      <transition
        enter-active-class="transition duration-300 ease-out"
        enter-from-class="opacity-0"
        enter-to-class="opacity-100"
        leave-active-class="transition duration-200 ease-in"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          v-if="isModalOpen"
          class="fixed inset-0 z-[100] bg-white/95 backdrop-blur-md flex items-center justify-center"
          @click="closeModal"
        >
          <div class="w-full h-full p-4 md:p-8 flex flex-col" @click.stop>
            <div class="w-full flex justify-between items-center mb-4 shrink-0">
              <h2
                class="text-3xl md:text-5xl font-bold text-gray-900 font-tech uppercase tracking-widest"
              >
                {{ selectedRobot?.alt || 'Robot Model' }}
              </h2>

              <button
                @click="closeModal"
                class="text-gray-600 hover:text-white bg-gray-200 hover:bg-red-600 p-3 rounded-full transition-all duration-300 cursor-pointer shadow-md"
                title="Tutup (ESC)"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <model-viewer
              v-if="selectedRobot"
              :src="selectedRobot.modelUrl"
              :ios-src="selectedRobot.iosModelUrl"
              :alt="selectedRobot.alt"
              ar
              ar-modes="scene-viewer quick-look webxr"
              camera-controls
              auto-rotate
              shadow-intensity="1.5"
              shadow-softness="0.5"
              exposure="1"
              environment-image="neutral"
              camera-orbit="135deg 75deg 21m"
              min-camera-orbit="auto auto 1m"
              max-camera-orbit="auto auto 50m"
              field-of-view="35deg"
              class="w-full h-full max-h-[85vh] outline-none z-[105]"
              style="background-color: transparent"
            >
              <div slot="poster" class="flex flex-col items-center justify-center h-full">
                <div
                  class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-red-600 mb-6"
                ></div>
                <p class="text-gray-800 text-xl font-tech tracking-wider animate-pulse">
                  MEMUAT MODEL 3D...
                </p>
              </div>

              <button
                slot="ar-button"
                class="absolute bottom-10 right-10 bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl shadow-[0_0_15px_rgba(220,38,38,0.5)] transition-colors duration-200 flex items-center gap-2 font-bold text-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9"
                  />
                </svg>
                View in AR
              </button>
            </model-viewer>
          </div>
        </div>
      </transition>
    </Teleport>

    <div class="flex flex-col md:flex-row md:gap-20 gap-10 mt-16 mb-8" data-aos="fade-up">
      <button
        @click="navigateToDump"
        class="cursor-pointer group relative overflow-hidden bg-gradient-to-r from-red-800 to-red-600 text-white px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 text-lg font-bold flex items-center justify-center min-w-[280px] md:min-w-[320px]"
      >
        <span class="mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </span>
        View Dump
      </button>

      <button
        @click="navigateTo3DView"
        class="cursor-pointer group relative overflow-hidden bg-gradient-to-r from-gray-900 to-gray-700 text-white px-10 py-5 rounded-xl shadow-xl hover:shadow-2xl transition duration-300 transform hover:-translate-y-1 text-lg font-bold flex items-center justify-center min-w-[280px] md:min-w-[320px]"
      >
        <span class="mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5"
            />
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
      robots: robotsData,
      isModalOpen: false,
      selectedRobot: null,
    }
  },
  mounted() {
    this.startAnimationLoop()
    this.initializeAOS()
    window.addEventListener('keydown', this.handleKeydown)
  },
  beforeUnmount() {
    window.removeEventListener('keydown', this.handleKeydown)
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
    openModal(robot) {
      this.selectedRobot = robot
      this.isModalOpen = true
      document.body.style.overflow = 'hidden' // Prevent background scrolling
    },
    closeModal() {
      this.isModalOpen = false
      setTimeout(() => {
        this.selectedRobot = null
      }, 300) // Wait for transition to finish
      document.body.style.overflow = '' // Restore scrolling
    },
    handleKeydown(e) {
      if (e.key === 'Escape' && this.isModalOpen) {
        this.closeModal()
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

.description-box {
  height: auto;
  min-height: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

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
</style>
