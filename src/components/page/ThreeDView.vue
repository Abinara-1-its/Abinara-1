<template>
  <div class="container mx-auto px-4 py-8 md:py-16 flex flex-col items-center mt-16 md:mt-14">
    <h1
      data-aos="fade-down"
      class="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight gradient-text text-red-600 mb-6 md:mb-12"
    >
      3D VIEW
    </h1>

    <div 
      data-aos="zoom-in" 
      class="w-full max-w-6xl bg-white rounded-2xl shadow-2xl p-2 md:p-8"
    >
      <div class="iframe-container">
        <iframe 
          src="https://lumalabs.ai/embed/067eb999-6fa8-426e-bb8d-52b934863b37?mode=sparkles&background=%23ffffff&color=%23000000&showTitle=true&loadBg=true&logoPosition=bottom-left&infoPosition=bottom-right&cinematicVideo=undefined&showMenu=true" 
          frameborder="0" 
          title="luma embed" 
          class="embedded-frame"
          allowfullscreen
        ></iframe>
      </div>
    </div>

    <!-- Back Button -->
    <div class="mt-8 md:mt-16 flex justify-center w-full px-4">
      <router-link
        to="/robots"
        class="w-full max-w-xl bg-gradient-to-r from-red-600 to-red-800 text-white font-bold py-3 md:py-4 px-6 md:px-8 rounded-full hover:from-red-500 hover:to-red-600 transition-transform transform hover:scale-105 duration-300 ease-in-out text-base md:text-lg text-center"
      >
        Back to Robots Gallery
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ThreeDView',
  mounted() {
    this.initializeAOS()
  },
  methods: {
    initializeAOS() {
      this.$nextTick(() => {
        if (typeof AOS !== 'undefined') {
          AOS.refresh()
        }
      })
    },
    goBack() {
      this.$router.push('/robots')
    },
  },
}
</script>

<style scoped>
.gradient-text {
  background: linear-gradient(45deg, #dc2626, #991b1b);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* Improved responsive iframe container */
.iframe-container {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  overflow: hidden;
  margin-bottom: 1rem;
}

.embedded-frame {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: none;
  border-radius: 0.5rem;
}

/* Mobile optimizations */
@media (max-width: 640px) {
  .iframe-container {
    padding-bottom: 100%; /* Square aspect ratio for small screens */
    margin-bottom: 0.5rem;
  }
  
  .container {
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    padding-top: 4rem;
    padding-bottom: 2rem;
  }
}

/* Medium screens */
@media (min-width: 641px) and (max-width: 1023px) {
  .iframe-container {
    padding-bottom: 75%; /* 4:3 aspect ratio for medium screens */
  }
}
</style>
