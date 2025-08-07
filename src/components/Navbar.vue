<template>
  <nav class="bg-white shadow-lg fixed w-full z-50">
    <div class="max-w-screen mx-auto lg:px-16 md:px-10 sm:px-8 px-4 2xl:py-4 sm:py-3 py-2">
      <div class="flex justify-between items-center h-16">

        <router-link to="/">
          <img src="/LogoAbinara-Merah.png" class="logo h-18" />
        </router-link>

        <!-- Desktop Menu -->
        <div class="hidden md:flex lg:space-x-6 md:space-x-3">
          <router-link
            v-for="(item, index) in menuItems"
            :key="index"
            :to="item.path"
            class="menu-item text-gray-700 hover:text-red-600 px-3 py-2 text-md font-medium transition-colors"
            active-class="text-red-600 border-3 rounded-2xl border-red-600"
          >
            {{ item.title }}
          </router-link>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <ButtonMobile @toggle="isOpen = !isOpen" :is-open="isOpen" />
        </div>
      </div>
    </div>

    <!-- Dropdown / Mobile -->
    <nav id="main-nav" class="main-nav" :class="{ 'is-open': isOpen }">
      <ul>
        <li v-for="(item, index) in menuItems" :key="index">
          <router-link
            :to="item.path"
            :style="{ transition: `all 275ms ${175 + index * 50}ms` }"
            class="text-white hover:text-yellow-400"
          >
            {{ item.title }}
          </router-link>
        </li>
      </ul>
    </nav>
  </nav>
</template>

<script>
import ButtonMobile from './buttons/ButtonMobile.vue'

export default {
  components: {
    ButtonMobile,
  },
  data() {
    return {
      isOpen: false,
      menuItems: [
        { title: 'Home', path: '/' },
        { title: 'Teams', path: '/teams' },
        { title: 'Robots', path: '/robots' },
        { title: 'Achievement', path: '/achievement' },
        { title: 'Alumni', path: '/alumni' },
      ],
    }
  },
  methods: {
    closeMenu() {
      this.isOpen = false
    },
  },
  watch: {
    '$route'() {
      this.closeMenu();
    }
  }
}
</script>

<style scoped>
.main-nav {
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  text-align: center;
  background: rgba(0, 0, 0, 0.9);
  opacity: 0;
  z-index: -1;
  visibility: hidden;
  transition: all 0.375s ease-in-out;
}

.main-nav.is-open {
  opacity: 1;
  z-index: 40;
  visibility: visible;
}

.main-nav::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: -8px;
  background: linear-gradient(to bottom, rgb(219, 5, 5), rgb(93, 12, 12));
  transform-origin: 0 0;
  transform: skew(-14deg) translateX(-120%);
  transition: all 0.275s 0.1s;
}

.main-nav.is-open::before {
  transform: skew(-14deg) translateX(0);
}

.main-nav ul {
  display: inline-flex;
  flex-direction: column;
  height: 93%;
  align-items: flex-end;
  justify-content: center;
  transform: translateX(-10%) skew(-16deg);
  list-style: none;
  padding: 0;
}

.main-nav li {
  display: block;
  margin: 0.5rem 0;
  text-align: right;
  transform: skew(16deg);
}

.main-nav a {
  opacity: 0;
  transform: translateY(-10px);
  color: #ffffff;
  font-size: 1.4em;
  font-weight: bold;
  text-decoration: none;
  transition: all 0.2s ease-in-out;
}

.main-nav.is-open a {
  opacity: 1;
  transform: translateY(0);
}

.logo {
  transition: transform 0.3s ease-in-out;
}
.logo:hover {
  transform: scale(1.1);
}
.menu-item {
  position: relative;
  transition: all 0.2s ease-in-out;
}
.menu-item:hover {
  font-weight: bold;
}
</style>
