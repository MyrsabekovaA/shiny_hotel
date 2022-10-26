<template>
  <transition :name="transitionEffect">
    <div
        class="carousel-item"
        v-show="currentSlide === index"
        @mouseenter="$emit('mouseenter')"
        @mouseout="$emit('mouseout')"
    >
      <img :src="slide.src" />
      <div class="discr"><p>{{slide.label}}</p></div>
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
.discr{
  font-size: 40px;
  position: absolute;
  margin-left: -3px;
  align-items: center;
  margin-top: -113px;
  width: 500px;
  height: 109px;
  backdrop-filter: brightness(70%);
  z-index: 20;
  color: white;
  text-align: center;
  vertical-align: center;
  margin-bottom: 0;
}

p{
  margin: 30px 40px;
  text-shadow: 2px 2px 5px black;
}
</style>