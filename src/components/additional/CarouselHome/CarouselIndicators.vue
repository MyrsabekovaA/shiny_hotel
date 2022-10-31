<template>
  <div class="carousel-indicators">
    <button
        class="carousel-indicator-item"
        :class="{ active: currentIndex === index }"
        v-for="(item, index) in total"
        :key="index"
        @click="$emit('switch', index)"
    ></button>
  </div>
</template>

<script>
export default {
  name: "CarouselIndicators",
  emits: ["switch"],
  props: ["total", "currentIndex"],
}
</script>

<style scoped>
.carousel-indicators {
  position: absolute;
  transform: translateX(-50%);
  left: 50%;
  bottom: 1.5em;
  z-index: 2;
}
.carousel-indicator-item {
  width: 6px;
  height: 6px;
  border: none;
  background: #dcdcdc;
  opacity: 0.5;
  margin: 0.2em;
  border-radius: 50%;
  cursor: pointer;
  transition: all .3s;
}
.active {
  width: 30px;
  border-radius: 50px;
  opacity: 1;
}
</style>