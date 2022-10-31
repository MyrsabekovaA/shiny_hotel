<template>
  <transition :name="transitionEffect">
    <div
        class="carousel-item"
        v-show="currentSlide === index"
        @mouseenter="$emit('mouseenter')"
        @mouseout="$emit('mouseout')"
    >
      <img :src="slide.src" />
    </div>
  </transition>
</template>

<script>
export default {
  name: "CarouselItem",
  emits: ["mouseenter", "mouseout"],
  props: ["slide", "currentSlide", "index", "direction"],
  computed: {
    transitionEffect() {
      return this.direction === "right" ? "slide-out" : "slide-in";
    },
  },
}
</script>

<style scoped>

</style>