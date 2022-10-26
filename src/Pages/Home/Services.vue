<template>
  <div class="wrapper">
    <div class="content">
      <div class="content_item">
        <img src="@/assets/services/wifi-svgrepo-com.svg"/>
        <h3>Wifi coverage</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, illo.
        </p>
      </div>
      <div class="content_item">
        <img src="@/assets/services/taxi-svgrepo-com.svg"/>
        <h3>Wifi coverage</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, illo.
        </p>
      </div>
      <div class="content_item">
        <img src="@/assets/services/mountains-svgrepo-com.svg"/>
        <h3>Wifi coverage</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, illo.
        </p>
      </div>
      <div class="content_item">
        <img src="@/assets/services/meal-svgrepo-com.svg"/>
        <h3>Wifi coverage</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, illo.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainServices"
}
</script>

<style scoped>
.wrapper{
  margin-top: 150px;
  background-color: #556F8B;
  width: 100%;
  height: 550px;
}

.content{
  display: grid;
  grid-template-columns: auto auto;
  padding: 25px 147px;
}

.content_item{
  padding: 20px;
  font-size: 30px;
  text-align: center;
}

img{
  width: 60px;
}

h3{
  font-size: 24px;
}

p{
  font-size: 20px;
}
</style>