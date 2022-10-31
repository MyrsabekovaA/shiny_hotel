<template>
<div class="popup">
  <div class="popup_inner">
    <slot/>
    <div class="submit">
      Check Availability
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "PopUp"
}
</script>

<style scoped>
.popup{
  position: fixed;
  top: 0;
  left: 30px;
  right: 30px;
  z-index: 100000000000000000;
  background-color: rgba(98, 98, 98, 100);
  display: flex;
}

.popup_inner{
  position: relative;
  background-color: #F3F5F7;
  padding: 40px;
}
</style>