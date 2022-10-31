<template>
  <div class="hero_section">
    <div class="container">
      <div class="row">
        <div class="column_left">
          <div class="hero-text">
            <h1>
              Shiny A Luxury Hotel
            </h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda commodi corporis enim error quisquam? Aspernatur deserunt excepturi facilis ipsa voluptatem.
            </p>
            <router-link to="/" class="main_btn">Learn More</router-link>
          </div>
        </div>
        <div class="column_right">
          <div class="booking_form">
            <h3>Book Online</h3>
            <form action="#">
              <div class="check_date">
                <label>Check in:</label>
                <input type="text" id="check_in" class="check_in">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/>
                </svg>
              </div>
              <div class="check_date">
                <label>Check out:</label>
                <input type="text" id="check_out" class="check_out">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M128 0c17.7 0 32 14.3 32 32V64H288V32c0-17.7 14.3-32 32-32s32 14.3 32 32V64h48c26.5 0 48 21.5 48 48v48H0V112C0 85.5 21.5 64 48 64H96V32c0-17.7 14.3-32 32-32zM0 192H448V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V192zm64 80v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm128 0v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H208c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V272c0-8.8-7.2-16-16-16H336zM64 400v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H80c-8.8 0-16 7.2-16 16zm144-16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H208zm112 16v32c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V400c0-8.8-7.2-16-16-16H336c-8.8 0-16 7.2-16 16z"/>
                </svg>
              </div>
              <div class="select_option">
                <label>Guests:</label>
                <div class="guests_select">
                  <button class="decrease" @click.prevent="decrease">-</button>
                  <span>{{counter}}</span>
                  <button class="increase" @click.prevent="increase">+</button>
                </div>
              </div>
              <div class="select_option">
                <label>Room:</label>
                <details class="room_select">
                  <summary class="radios">
                    <input type="radio" name="item" id="default" title="1 Room" checked>
                    <input type="radio" name="item" id="item1" title="Item 1">
                    <input type="radio" name="item" id="item2" title="Item 2">
                    <input type="radio" name="item" id="item3" title="Item 3">
                    <input type="radio" name="item" id="item4" title="Item 4">
                    <input type="radio" name="item" id="item5" title="Item 5">
                  </summary>
                  <ul class="list">
                    <li>
                      <label for="item1">
                        Item 1
                        <span></span>
                      </label>
                    </li>
                    <li>
                      <label for="item2">Item 2</label>
                    </li>
                    <li>
                      <label for="item3">Item 3</label>
                    </li>
                    <li>
                      <label for="item4">Item 4</label>
                    </li>
                    <li>
                      <label for="item5">Item 5</label>
                    </li>
                  </ul>
                </details>
              </div>
              <div class="submit">
                <p>Check Availability</p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="slider">
      <carousel-home class="carousel" :slides="slides" :interval="7000" controls indicators/>
    </div>
  </div>
</template>

<script>
import AirDatepicker from 'air-datepicker';
import 'air-datepicker/air-datepicker.css';
import CarouselHome from "@/components/additional/CarouselHome/Carousel";
export default {
  name: "MainBanner",
  components: {CarouselHome},
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
  data() {
    return {
      counter: 0,
      slides: [{
        src: "https://picsum.photos/id/1033/1440/775",
      },
        {
          src: "https://picsum.photos/id/1037/1440/775",
        },
        {
          src: "https://picsum.photos/id/1035/1440/775",
        },
        {
          src: "https://picsum.photos/id/1037/1440/775",
        },
      ],
    };
  },
  methods: {
    increase() {
      this.counter++;
    },
    decrease() {
      if (this.counter>0) {
        this.counter--;
      }
    },
  }
}
</script>

<style scoped>
.hero_section{
  position: relative;
  padding-top: 60px;
  padding-bottom: 100px;
  display: block;
}

.container{
  position: relative;
  z-index: 5;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

.row{
  display: flex;
  /*flex-wrap: wrap;*/
  margin-right: -15px;
  margin-left: -15px;
}

.main_btn{
  text-decoration: none;
}

.column_left{
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.column_right{
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.hero-text{
  padding-top: 145px;
}

.hero-text h1{
  font-size: 80px;
  line-height: 90px;
  color: #ffffff;
  margin-bottom: 16px;
  font-weight: 400;
  font-family: "Lora", serif;
}

.hero-text p{
  font-size: 18px;
  color: #ffffff;
  line-height: 28px;
  margin-bottom: 35px;
  font-family: "Cabin", sans-serif;
  font-weight: 400;
}

.hero-text a{
  display: inline-block;
  font-size: 13px;
  color: #ffffff;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  position: relative;
}

.hero-text a:after{
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 2px;
  background: #556F8B;
  content: "";
}

.booking_form{
  width: 280px;
  background: #ffffff;
  padding: 44px 40px 50px 40px;
  border-radius: 4px;
}

.booking_form h3{
  horiz-align: center;
  padding: 0 62px;
  color: #19191a;
  margin-bottom: 36px;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.2;
  font-family: "Lora", serif;
}

form .check_date{
  position: relative;
  margin-bottom: 15px;
}

form label{
  font-size: 14px;
  color: #92A1B5;
  display: block;
  margin-bottom: 10px;
}

form .check_date input{
  width: 256px;
  height: 48px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  color: #19191a;
  text-transform: uppercase;
  font-weight: 500;
  padding-left: 20px;
  overflow: visible;
  margin: 0;
  font-family: inherit;
  line-height: inherit;
}

.check_date svg{
  color: #556F8B;
  position: absolute;
  right: 18px;
  bottom: 17px;
  width: 16px;
}

.select_option{
  margin-bottom: 15px;
}

.guests_select{
  border-radius: 2px;
  border: 1px solid #ddd;
  height: 50px;
  line-height: 50px;
  outline: none;
  width: 100%;
  float: none;
  -webkit-tap-highlight-color: transparent;
  background-color: #fff;
  box-sizing: border-box;
  clear: both;
  cursor: pointer;
  display: block;
  font-family: inherit;
  font-size: 14px;
  font-weight: normal;
  position: relative;
  text-align: center;
  user-select: none;
  white-space: nowrap;
}

.guests_select span{
  font-size: 16px;
  color: #19191a;
  text-transform: uppercase;
  font-weight: 500;
}

.decrease{
float: left;
width: 42px;
height: 50px;
  background-color: transparent;
  border: 1px solid #ebebeb;
}

.increase{
  float: right;
  width: 42px;
  height: 50px;
  background-color: transparent;
  border: 1px solid #ebebeb;
}

details[open] {
  z-index: 1;
}

summary {
  border-radius: 2px;
  border: 1px solid #ddd;
  height: 50px;
  line-height: 50px;
  outline: none;
  width: 100%;
  float: none;
  -webkit-tap-highlight-color: transparent;
  background-color: #fff;
  box-sizing: border-box;
  clear: both;
  cursor: pointer;
  display: block;
  font-family: inherit;
  font-size: 14px;
  font-weight: normal;
  position: relative;
  text-align: center;
  user-select: none;
  white-space: nowrap;
}

summary::-webkit-details-marker {
  display: none;
}

details[open] summary:before {
  content: '';
  display: block;
  width: 100vw;
  height: 100vh;
  background: transparent;
  position: fixed;
  top: 0;
  left: 0;
}

summary:after {
  height: 10px;
  margin-top: 0;
  right: 20px;
  width: 10px;
  top: 36%;
  content: '';
  display: block;
  pointer-events: none;
  position: absolute;

  float: right;
  border-bottom: 1px solid currentColor;
  border-left: 1px solid currentColor;
  border-bottom-left-radius: 2px;
  transform: rotate(316deg) translate(50%, 0%);
  transform-origin: center center;
  transition: transform ease-in-out 100ms
}

summary:focus {
  outline: none;
}

details[open] summary:after {
  transform: rotate(135deg) translate(0%, 0%);
}

ul {
  margin-top: -85px;
  width: 280px;
  opacity: 1;
  pointer-events: auto;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 0 1px rgb(68 68 68 / 11%);
  box-sizing: border-box;
  padding: 0;
  position: absolute;
  top: 100%;
  left: 55px;
  overflow-y: auto;
}

li {
  font-weight: bold;
  cursor: pointer;
  line-height: 40px;
  list-style: none;
  min-height: 40px;
  outline: none;
  padding-left: 18px;
  padding-right: 29px;
  text-align: center;
  transition: all .2s;
}

li:hover{
  background-color: #f6f6f6;
}

/* FAKE SELECT */

summary.radios {
  counter-reset: radios;
}

.radios input{
  font-size: 16px;
  color: #19191a;
  text-transform: uppercase;
  font-weight: 500;
}

summary.radios:before {
  content: var(--selection);
}

input[type=radio] {
  counter-increment: radios;
  appearance: none;
  display: none;
}

input[type=radio]:checked {
  display: inline;
  --display: block;

}

input[type=radio]:after {
  content: attr(title);
  display: inline;
  font-size: 16px;
  color: #19191a;
  text-transform: uppercase;
  font-weight: 500;
}

ul.list {
  counter-reset: labels;
}

label {
  width: 100%;
  display: flex;
  cursor: pointer;
  justify-content: space-between;
}

label span {
  --display: none;
  display: var(--display);
  width: 1rem;
  height: 1rem;
  border: 1px solid #727272;
  border-radius: 3px;
}

.submit{
  cursor: pointer;
  display: block;
  font-size: 14px;
  text-transform: uppercase;
  border: 1px solid #556F8B;
  border-radius: 2px;
  color: #556F8B;
  font-weight: 500;
  background: transparent;
  width: 100%;
  height: 46px;
  margin-top: 30px;
  overflow: visible;
  margin: 0;
  font-family: inherit;
  text-align: center;
}

.submit:hover{
  background-color: #556F8B;
  color: white;
}

.slider{
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
}

.carousel{
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  z-index: 1;
}

img{
  width: 1440px ;
  height: 100%;
  left: 0;
  top: 0;
}



@media only screen and (min-width: 1200px){
  .container {
    max-width: 1170px;
  }

  .column_right{
    margin-left: 16.666667%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%;
  }
}

@media only screen and (min-width: 992px){
  .column_left {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
</style>
