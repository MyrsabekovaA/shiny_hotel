<template>
    <div class="card">
      <div class="image">
        <span>
          <img :src="'/image/' + room.img"  alt="img"/>
        </span>
      </div>
      <div class="details">
        <div class="name">
          <span style="flex-grow: 1;
              max-width: 100%;">
            <router-link to="/">{{room.name}}
            </router-link>
          </span>
        </div>
        <div class="text">
          <sapn>{{room.description}}</sapn>
        </div>
        <div class="info">
            <div class="prices">
              <div class="from">
                <span>from</span>
              </div>
            </div>
            <div class="price">
              <span>{{room.price}}$</span>
            </div>
            <div class="person">
              <span>per person/day</span>
            </div>
        </div>
        <div class="btn">
            <button class="book">Book Now</button>
        </div>
      </div>
  <!--      <button class="more">More</button>-->
    </div>
</template>

<script>
export default {
  name: "RoomCard",
  props: {
    room: Object
  },
  
}
</script>

<style scoped>

.card{
  width: 43.8%;
  padding-top: 3%;
  padding-right: 3%;
  padding-bottom: 2.3%;
  padding-left: 3%;
  margin-right: 0px;
  margin-left: 2px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  margin-bottom: 2px;
  display: flex;
  -webkit-box-align: start;
  align-items: flex-start;
  margin-top: 0px;
  background-color: white;
}

.image{
  margin-bottom: 30px;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  width: 100%;
  position: relative;
  display: block;
}

image span{
  min-height: 320px;
  height: 22vw;
  margin-left: 0;
  margin-right: 0;
  position: relative;
  display: inline-block;
  vertical-align: top;
  overflow-x: hidden;
  overflow-y: hidden;
  width: 100%;
}

img{
  object-fit: cover;
  height: 320px;
  width: 615px;
}

.details{
  min-width: 250px;
  width: 100%;
  position: relative;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: start;
  align-items: flex-start;
}

.name{
  text-align: left;
  border-bottom-style: dashed;
  border-bottom-width: 1px;
  border-bottom-color: #758DAD;
  padding-bottom: 16px;
  display: flex;
  font-size: 26px;
  font-weight: 700;
  text-decoration: none;
  margin-left: 0px;
  margin-right: 0px;
  width: 100%;
  margin-bottom: 16px;
}

a{
  color: #425563;
  text-decoration: none;
}

a:hover{
  color: maroon;
  text-decoration: none;
}

span{
  flex-grow: 1;
  max-width: 100%;
}

.text{
  display: flex;
  font-size: 18px;
  color: #425563;
  line-height: 1.6em;
  margin-bottom: 0px;
  margin-left: 0px;
  margin-right: 0px;
  width: 100%;
  -webkit-box-align: start;
  align-items: flex-start;
}

.info {
  width: 100%;
  position: relative;
  display: flex;
  -webkit-box-align: end;
  align-items: flex-end;
  flex-wrap: wrap;
  padding-bottom: 0;
  margin-top: 17px;
}

.from{
  display: inline-flex;
  font-size: 17px;
  line-height: normal;
  vertical-align: top;
  position: relative;
  padding-bottom: 5px;
  padding-left: 0px;
  padding-right: 10px;
  color: #425563;
}

.price{
  display: flex;
  font-size: 28px;
  line-height: 34px;
  vertical-align: top;
  position: relative;
  font-weight: 700;
}

.person{
  display: flex;
  font-size: 17px;
  line-height: normal;
  vertical-align: top;
  position: relative;
  padding-left: 10px;
  padding-bottom: 5px;
  color: #425563;
}

.book{
  width: 150px;
  height: 60px;
  outline: none;
  position: absolute;
  margin-bottom: 20px;
  margin-top: -50px;
  border: 1px solid #ffffff;
  cursor: pointer;
  background-color: #758DAD;
  color: white;
  font-size: 20px;
  font-weight: 500;
  transition-property: all;
  transition-duration: 600ms;
  transition-delay: 0ms;
  transition-timing-function: ease;
  margin-left: 400px;
  margin-right: 20px;
  padding: 10px;
}

.book:hover{
  background-color: #324f65;
}

</style>
