<template>
  <button class="carousel-control left" @click="$emit('prev')">
    <font-awesome-icon icon="fa-solid fa-angle-left"/>
  </button>
  <button class="carousel-control right" @click="$emit('next')">
    <font-awesome-icon icon="fa-solid fa-angle-right"/>
  </button>
</template>

<script>
export default {
  name: "CarouselControls",
  emits: ["prev", "next"],
}
</script>

<style scoped>
.carousel-control {
  background-color: transparent;
  border: none;
  display: inline-block;
  position: absolute;
  height: 50px;
  width: 70px;
  margin-top: -62px;
  color: #758DAD;
  cursor: pointer;
}
.left {
  left: 1160px;
}
.right {
  right: 120px;
}

.fa-angle-left, .fa-angle-right{
  height: 50px;
}
</style>