<template>
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
        <button type="button">Learn More</button>
    </div>
    <transition class="right_column" appear @before-enter="beforeEnter" @enter="enter">
      <img src="@/assets/main_page_photo.jpg" alt="Shiny" class="shiny">
    </transition>
  </div>
  <transition appear @before-enter="beforeEnterCheck" @enter="enterCheck">
    <div class="check">
      <form>
        <div class="check_in">
          <label class="check_in">Check in</label>
          <font-awesome-icon icon="fa-solid fa-calendar-days" style="position: absolute;
    margin-top: 45px;
    margin-left: -85px;
    width: 30px;
    height: 30px"/>
          <input type="text" id="check_in" class="check_in">
        </div>
        <div class="check_out">
          <label class="check_out">Check out</label>
          <font-awesome-icon icon="fa-solid fa-calendar-days" style="position: absolute;
    margin-top: 45px;
    margin-left: -100px;
    width: 30px;
    height: 30px" />
          <input type="text" id="check_out" name="check_out">
        </div>
        <div class="adults">
          <label class="guests">Adults</label>
          <font-awesome-icon icon="fa-solid fa-user" style="position: absolute;
    margin-top: 45px;
    margin-left: -65px;
    width: 30px;
    height: 30px"/>
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
          <font-awesome-icon icon="fa-solid fa-child" style="position: absolute;
    margin-top: 45px;
    margin-left: -110px;
    width: 80px;
    height: 30px"/>
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
</template>

<script>
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import gsap from "gsap";
export default {
  name: "MainBanner",
  components:'AirDatepicker',
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
      el.style.opacity = 1;
    }

    const enter = (el, done) => {
      gsap.to(el, {opacity: 1, x: 0, duration: 2, onComplete: done});
    }

    const beforeEnterText = (el) => {
      el.style.transform = 'translateY(-60px)';
      el.style.opacity = 0;
    }

    const enterText = (el, done) => {
      gsap.to(el, {opacity: 1, y: 0, duration: 1, onComplete: done, ease: 'bounce.out'});
    }

    const beforeEnterAbout = (el) => {
      el.style.transform = 'translateY(-200px)';
      el.style.opacity = 0;
    }

    const enterAbout = (el, done) => {
      gsap.to(el, {opacity: 1, y: 0, duration: 1, onComplete: done});
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
        duration: 1,
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
}
</script>

<style scoped>
.container{
  height: 800px;
  width: 100%;
  background-image: url("../../assets/background.png");
  backdrop-filter: blur(35px);
  display: flex;
}

.left_column, .right_column{
  flex-basis: 50%;
  height: 640px;
}

.shiny{
  width: 830px;
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

button{
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

button:hover{
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
</style>
