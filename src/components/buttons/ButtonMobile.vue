<template>
  <button
    id="burger"
    class="open-main-nav"
    :class="{ 'is-open': isOpen }"
    @click="toggle"
  >
    <span class="burger"></span>
    <span class="burger-text">Menu</span>
  </button>
</template>

<script>
export default {
  props: {
    isOpen: {
      type: Boolean,
      required: true,
    },
  },
  methods: {
    toggle() {
      this.$emit('toggle');
    },
  },
}
</script>

<style scoped>
.open-main-nav {
  position: absolute;
  top: 40px;
  right: 30px;
  z-index: 1000;
  background: none;
  border: 0;
  cursor: pointer;
}

.burger {
  position: relative;
  display: block;
  width: 28px;
  height: 4px;
  margin: 0 auto;
  background: #311534;
  transform: skew(5deg);
  transition: all 0.275s;
}

.burger:before,
.burger:after {
  content: '';
  display: block;
  height: 100%;
  background: #311534;
  transition: all 0.275s;
}

.burger:before {
  transform: translateY(-16px) skew(-10deg);
}

.burger:after {
  transform: translateY(-12px) translateX(-2px) skew(-20deg);
}

.is-open .burger {
  transform: skew(5deg) translateY(-8px) rotate(-45deg);
}

.is-open .burger:before {
  transform: translateY(0) skew(-10deg) rotate(75deg);
}

.is-open .burger:after {
  transform: translateY(-12px) translateX(10px) skew(-20deg);
  opacity: 0;
}
</style>
