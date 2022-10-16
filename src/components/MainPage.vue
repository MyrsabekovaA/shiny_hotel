<template>
<div class="main">
  <div class="container">
    <div class="left_column">
      <transition appear @before-enter="beforeEnterText" @enter="enterText">
        <h1>
          Discover
          <br>
          <span>Kyrgyzstan</span>
        </h1>
      </transition>
      <transition appear @before-enter="beforeEnterAbout" @enter="enterAbout">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut distinctio earum eos facilis id, nisi porro qui repellendus. Ab asperiores debitis, eum ipsa libero mollitia quidem repellendus sapiente suscipit voluptatibus! Cum doloremque fugiat harum in natus nemo neque quidem. Iste!
        </p>
      </transition>
      <div class="btn">
        <button type="button">Learn More</button>
      </div>
    </div>
    <transition class="right_column" appear @before-enter="beforeEnter" @enter="enter">
      <img src="../assets/main_page_photo.jpg" alt="Shiny" class="shiny">
    </transition>
  </div>
  <transition appear @before-enter="beforeEnterCheck" @enter="enterCheck">
    <div class="check">
    <form>
      <div class="check_in">
        <label class="check_in">Check in</label>
        <i class="fa-regular fa-calendar-days" style="position: absolute;
    margin-top: 45px;
    margin-left: -85px;
    width: 30px;
    height: 30px"></i>
        <input type="text" id="check_in" class="check_in">
      </div>
      <div class="check_out">
        <label class="check_out">Check out</label>
        <i class="fa-regular fa-calendar-days" style="position: absolute;
    margin-top: 45px;
    margin-left: -100px;
    width: 30px;
    height: 30px"></i>
        <input type="text" id="check_out" name="check_out">
      </div>
      <div class="adults">
        <label class="guests">Adults</label>
        <i class="fa-solid fa-user" style="position: absolute;
    margin-top: 45px;
    margin-left: -65px;
    width: 30px;
    height: 30px"></i>
        <select class="form-select">
          <option selected>Open</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="3">4</option>
          <option value="3">5</option>
          <option value="3">6</option>
          <option value="3">7</option>
          <option value="3">8</option>
        </select>
      </div>
      <div class="children">
        <label class="children">Children</label>
        <i class="fa-solid fa-child" style="position: absolute;
    margin-top: 45px;
    margin-left: -110px;
    width: 80px;
    height: 30px"></i>
        <select class="form-select">
          <option selected>Open</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="3">4</option>
          <option value="3">5</option>
          <option value="3">6</option>
          <option value="3">7</option>
          <option value="3">8</option>
        </select>
      </div>
      <div class="btn_book">
        <button type="button-book">Book Now</button>
      </div>
    </form>
  </div>
  </transition>

  <div class="about_part">
    <div class="text">
      <transition appear @before-enter="beforeEnterWelcome" @enter="enterWelcome">
        <h1>Welcome!</h1>
      </transition>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur ipsum mollitia nulla quis vitae. A incidunt nemo quasi quos sunt.</p>
    </div>

    <div class="content">
      <div class="content_item-left">
        <h1>About us</h1>
        <hr>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias commodi delectus dolor nihil officia quo ratione unde? Alias asperiores distinctio earum eos laudantium, perferendis possimus reiciendis sunt? Accusantium, ad animi aut commodi consequuntur debitis eligendi harum impedit ipsum, magni molestiae nihil nisi numquam odit quis, quos sed suscipit ut voluptas voluptatem? Atque excepturi inventore laboriosam possimus veritatis!
          <br></p>
        <p style="margin-top: 50px">A accusantium cum dolorum earum eligendi eum impedit ipsa minus molestias, natus odio officia omnis quaerat sed ullam! Atque consequuntur eligendi error esse expedita harum necessitatibus neque nobis placeat quis quisquam, sed sint vero. Adipisci distinctio dolores illum laboriosam minus nulla rerum veniam.
        </p>
        <div class="btn_about">
          <button type="button">Read More</button>
        </div>
      </div>
      <div class="content_item-right">
        <img class='img1' src="../assets/about_photo/photo1.jpg" />
        <img class='img2' src="../assets/about_photo/photo2.jpg" />
        <img class='img3' src="../assets/about_photo/photo3.jpg" />
      </div>
    </div>
  </div>

  <div class="rooms_info">
    <h1>Our Rooms</h1>
    <hr>

    <div class="room_categories">
      <div class="room_categories_box">
        <div class="box_1">
          <div class="category_filter">
            <span v-for="category in categories" :key="category.id"
                  :class="{selected: category.id === selected_id, category}"
                  @click="selected_id = category.id">
              {{ category.title}}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="room_type" v-for="(room, roomindex) in rooms" :key="roomindex">
      <img :src="room.image" class="room_img">
      <p> {{ room.text }} </p>
    </div>

  </div>
</div>
</template>

<script>
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import gsap from "gsap";

export default {
  name: "MainPage",
  components:`AirDatepicker`,

  mounted() {
    let dpMin = new AirDatepicker('#check_in', {
      autoClose: true,
      visible: true,
      selectedDates: [new Date('2022-10-20')],
    });
    dpMin.hide();

    let dpMax = new AirDatepicker('#check_out', {
      autoClose: true,
      visible: true,
      selectedDates: [new Date('2022-11-20')]
    });
    dpMax.hide();
  },

  setup() {
    const beforeEnter = (el) => {
      el.style.transform = 'translateX(200px)';
      el.style.opacity = 0;
    }

    const enter = (el, done) => {
      gsap.to(el, {opacity: 1, x: 0, duration: 2, onComplete: done});
    }

    const beforeEnterText = (el) => {
      el.style.transform = 'translateY(-60px)';
      el.style.opacity = 0;
    }

    const enterText = (el, done) => {
      gsap.to(el, {opacity: 1, y: 0, duration: 2, onComplete: done, ease: 'bounce.out'});
    }

    const beforeEnterAbout = (el) => {
      el.style.transform = 'translateY(-200px)';
      el.style.opacity = 0;
    }

    const enterAbout = (el, done) => {
      gsap.to(el, {opacity: 1, y: 0, duration: 2, onComplete: done});
    }

    const beforeEnterCheck = (el) => {
      el.style.opacity = 0;

    }

    const enterCheck = (el, done) => {
      gsap.to(el, {opacity: 1,
        ScrollTrigger: {
          trigger: el,
          start: "20px 80%",
          end: "bottom 100px",
          scrub: 6,
          markers: true,
        },
        duration: 3,
        onComplete: done});
    }

    return {
      beforeEnter,
      enter,
      beforeEnterText,
      enterText,
      beforeEnterAbout,
      enterAbout,
      beforeEnterCheck,
      enterCheck
    }
  },

  data()  {
    return {
      selected_id: 1,
      categories: [
        {
          id: 1,
          title: 'Economy',
          isSelected: false,
        },
        {
          id: 2,
          title: 'Standard',
          isSelected: true,
        },
        {
          id: 3,
          title: 'Premium',
          isSelected: false,
        },
      ],
      activeRoom: 'standard',
      rooms: [
        {
          title: 'Single Room',
          image: '../assets/about_photo/photo1.jpg',
          text: 'texttexttexttexttexttexttexttexttexttexttexttext',
        }
      ]
    }
  }
}
</script>

<style scoped>
.container{
  height: 800px;
  width: 100%;
  background-image: url("../assets/background.png");
  backdrop-filter: blur(35px);
  display: flex;
}

.left_column, .right_column{
  flex-basis: 50%;
}

.shiny{
  width: 100%;
  height: 80%;
  clip-path: polygon(20% 0%, 80% 0%, 100% 0, 100% 80%, 100% 100%, 0 100%, 0% 80%, 0% 20%);
}

.left_column h1{
  font-size: 60px;
  font-weight: 600;
  margin-top: 30px;
  margin-bottom: 20px;
  margin-left: 100px;
  color: black;
}

.left_column span{
  color: #758DAD;
}

.container p{
  display: flex;
  font-size: 16px;
  margin-left: 100px;
  margin-top: 70px;
  margin-right: 100px;
  font-weight: 400;
  color: black;
}

.btn button{
  padding: 30px;
  margin-left: 100px;
  margin-top: 70px;
  outline: none;
  border: 1px solid #ffffff;
  border-radius: 40px;
  cursor: pointer;
  background-color: #758DAD;
  color: white;
  font-size: 25px;
  font-weight: 500;
  /*background: linear-gradient(#758DAD, #3A506CFF);*/
  box-shadow: 0 2px 15px rgba(38, 192, 248, 0.28);
}

.btn:hover button{
  background-color: #3A506CFF;
}

.check{
  position: relative;
  margin-top: -220px;
  align-items: center;
  margin-left: 65px;
  width: 90%;
  background-color: white;
  box-shadow: 0 2px 15px black;
  /*box-shadow: 10px 10px 5px black;*/
  border-radius: 90px;
}

form{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 60px 5%;
}

label{
  font-size: 20px;
  font-weight: 700;
  color: #758DAD;
}

input{
  width: 210px;
  height: 40px;
  border: 1px solid #758DAD;
  border-radius: 40px;
  outline: none;
  padding-left: 20px;
  font-size: 20px;
  font-weight: 500;
  color: black;
  margin-top: 15px;
  margin-left: 40px;
}

select{
  width: 120px;
  height: 40px;
  border: 1px solid #758DAD;
  border-radius: 40px;
  outline: none;
  padding-left: 10px;
  font-size: 20px;
  font-weight: 500;
  color: black;
  margin-top: 15px;
  margin-left: 40px;
}

.btn_book button{
  width: 150px;
  height: 60px;
  margin-top: 20px;
  outline: none;
  border: 1px solid #ffffff;
  border-radius: 40px;
  cursor: pointer;
  background-color: #758DAD;
  color: white;
  font-size: 20px;
  font-weight: 500;
}

.btn_book:hover button{
  background-color: #324f65;
}

.about_part{
  margin-top: 150px;
}

.about_part .text{
  text-align: center;
  color: black;
}

.about_part .text h1{
  font-size: 50px;
  font-weight: 600;
}

.about_part .text p{
  font-size: 20px;
  font-weight: 600;
  padding: 10px 200px;
}

.content{
  display: flex;
  padding: 30px 150px;
  text-align: center;
}

.content_item-left, .content_item-right{
  flex-basis: 50%;
}

.content_item-left h1{
  font-size: 30px;
  font-weight: 600;
  color: black;
}

.content_item-left hr{
  border: 0;
  height: 4px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0),#758DAD , rgba(0, 0, 0, 0));
}

.content_item-left p{
  padding: 0 40px;
  margin-top: 60px;
  font-size: 16px;
  font-weight: 600;
  color: black;
}

.btn_about{
  margin-top: 60px;
}

.btn_about button{
  height: 50px;
  width: 270px;
  color: #758DAD;
  background-color: transparent;
  font-size: 20px;
  font-weight: 500;
  border-color: #758DAD;
  box-shadow: 0 2px 15px rgba(38, 192, 248, 0.28);
  outline: none;
}

.content_item-right{
  padding: 30px 0;
}

.content_item-right img{
  height: 200px;
  width: 350px;
}

.content_item-right .img1{
  margin-top: 30px;
  margin-left: 300px;
}
.content_item-right .img2{
  margin-top: 1px;
  margin-left: 300px;
}

.content_item-right .img3{
  position: absolute;
  margin-top: -87px;
  margin-left: -539px;
  border:5px solid #ffffff;
}


.rooms_info{
  margin-top: 150px;
  text-align: center;
}


.rooms_info h1{
  font-size: 30px;
  font-weight: 600;
  color: black;
}

.rooms_info hr{
  border: 0;
  height: 4px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0),#758DAD , rgba(0, 0, 0, 0));
  margin-bottom: 60px
}

.room_categories{
  margin: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
}

.room_categories_box{
  padding: 0;
  flex: 0 0 33.3333333333%;
  max-width: 33.3333333333%;
  width: 100%;
}

.box_1{
  padding: 8px;
  margin: 0 10%;
  background: #fff;
  height: 8vh;
  border-radius: 13px;
}

.box_2{
  margin: 0;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
}

.category{
  width: 33%;
  cursor: pointer;
}

.room_category_item{
  min-width: 64px;
  padding: 0 16px;
  color: #fff;
  margin-right: 4px;
  box-shadow: 0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12);
  /*background-color: #2196f3;*/
  /*border-color: #2196f3;*/
  text-transform: none;
  width: 100%;
  height: 6vh;
  font-size: 14px;
  align-items: center;
  border-radius: 4px;
  display: inline-flex;
  flex: 0 0 auto;
  font-weight: 500;
  letter-spacing: .0892857143em;
  justify-content: center;
  outline: 0;
  position: relative;
  text-decoration: none;
  text-indent: 0.0892857143em;
  cursor: pointer;
  border-style: none;
  transition-duration: .28s;
  transition-property: box-shadow,transform,opacity;
  transition-timing-function: cubic-bezier(.4,0,.2,1);
  user-select: none;
  vertical-align: middle;
  white-space: nowrap;
}

.category_title:before{
  background-color: currentColor;
  border-radius: inherit;
  bottom: 0;
  color: inherit;
  content: "";
  left: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  transition: opacity .2s cubic-bezier(.4,0,.6,1);
  text-decoration: inherit;
  vertical-align: inherit;
}

.category_title{
  align-items: center;
  color: inherit;
  display: flex;
  flex: 1 0 auto;
  justify-content: inherit;
  line-height: normal;
  position: relative;
  transition: inherit;
  transition-property: opacity;
}

.selected{
  background-color: #758DAD;
}
</style>