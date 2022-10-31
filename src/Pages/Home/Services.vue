<template>
  <div class="wrapper">
    <div class="content">
      <div class="row">
        <div class="title">
          <div class="text">
            <span>What We Do</span>
            <h2>Discover Our Services</h2>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="item">
          <div class="services_item">
            <img src="@/assets/services/taxi-svgrepo-com.svg"/>
            <h4>Travel Plan</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quisquam sed similique tempore velit! Beatae excepturi facilis illum qui reiciendis?
            </p>
          </div>
        </div>
        <div class="item">
          <div class="services_item">
            <img src="@/assets/services/taxi-svgrepo-com.svg"/>
            <h4>Travel Plan</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quisquam sed similique tempore velit! Beatae excepturi facilis illum qui reiciendis?
            </p>
          </div>
        </div>
        <div class="item">
          <div class="services_item">
            <img src="@/assets/services/meal-svgrepo-com.svg"/>
            <h4>Catering Service</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quisquam sed similique tempore velit! Beatae excepturi facilis illum qui reiciendis?
            </p>
          </div>
        </div>
        <div class="item">
          <div class="services_item">
            <img src="@/assets/services/mountains-svgrepo-com.svg"/>
            <h4>The Best View</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quisquam sed similique tempore velit! Beatae excepturi facilis illum qui reiciendis?
            </p>>
          </div>
        </div>
        <div class="item">
          <div class="services_item">
            <img src="@/assets/services/wifi-svgrepo-com.svg"/>
            <h4>Free Wi-Fi</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quisquam sed similique tempore velit! Beatae excepturi facilis illum qui reiciendis?
            </p>
          </div>
        </div>
        <div class="item">
          <div class="services_item">
            <img src="@/assets/services/taxi-svgrepo-com.svg"/>
            <h4>Travel Plan</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maxime quisquam sed similique tempore velit! Beatae excepturi facilis illum qui reiciendis?
            </p>
          </div>
        </div>
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
  padding-bottom: 60px;
}

.content{
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.row{
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
  flex-wrap: wrap;
}


.title{
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.text{
  margin-bottom: 36px;
  text-align: center;
}

.text span{
  font-size: 14px;
  color: #556F8B;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.text h2{
  font-size: 44px;
  color: #19191a;
  line-height: 58px;
  margin-top: 10px;
}

.item{
  position: relative;
  width: 390px;
  height: 270px;
  padding-right: 15px;
  padding-left: 15px;
}


.services_item{
  text-align: center;
  padding: 30px 35px 18px;
  transition: all .3s;
}

img{
  display: inline-block;
  color: #556F8B;
  transition: all .3s;
}
.services_item h4{
  color: #19191a;
  font-size: 22px;
  margin-bottom: 15px;
  margin-top: 10px;
  transition: all .3s;
}

.services_item p{
  color: #707079;
  transition: all .3s;
  font-size: 16px;
  font-weight: 400;
  line-height: 26px;
  margin: 0 0 15px 0;
}

@media only screen and (min-width: 1200px){
  .content {
    max-width: 1140px;
  }
}

@media only screen and (min-width: 992px){
  .title {
    flex: 0 0 100%;
    max-width: 100%;
  }
  .item{
    flex: 0 0 30.33333%;
    max-width: 33.333333%;
  }
}

img{
  width: 30px;
}


</style>