<template>
<div class="header">
  <div class="top-nav">
    <div class="container">
      <div class="row">
        <div class="column left">
          <ul class="info_left">
            <li>
              <font-awesome-icon :icon="['fas', 'phone']" style="color: #556F8B; margin-right: 4px"/>
              +996123456789
            </li>
            <li>
              <font-awesome-icon :icon="['fas', 'envelope']" style="color: #556F8B; margin-right: 4px"/>
              info.shiny@gmail.com
            </li>
          </ul>
        </div>
        <div class="column right">
          <div class="info_right">
            <div class="top_socials">
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"/>
                </svg>
              </a>
              <a href="#">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><!--! Font Awesome Pro 6.2.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
                </svg>
              </a>
            </div>
            <router-link to="/" class="book_btn">Book Now</router-link>
            <div class="language_switcher"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
    <div :class="{'headroom--unpinned': scrolled}"  v-on="handleScroll" class="headroom header">
      Myheader
    </div>
<!--  <div class="container">-->
<!--    <router-link to=""><img src="@/assets/logo_hotel.png" alt="logo" class="logo"></router-link>-->
<!--    <nav>-->
<!--      <ul class="nav_links">-->
<!--        <li><a href="#">Home</a></li>-->
<!--        <li><a href="#">Accommodation</a></li>-->
<!--        <li><a href="#">Service</a></li>-->
<!--        <li><a href="#">About</a></li>-->
<!--        <li><a href="#">Contacts</a></li>-->
<!--      </ul>-->
<!--    </nav>-->
<!--    <div class="extra_choice">-->
<!--      <a class="book" href="#"><button>Book</button></a>-->

<!--&lt;!&ndash;      Change&ndash;&gt;-->
<!--      <div class="lang_menu">-->
<!--        <select class="lang_choice" v-model="lang" @change="handleChange($event)">-->
<!--          <option value="en">-->
<!--            <img src="@/assets/flags/Flag_of_Russia.svg" alt="england" style="height: 30px; width: 30px;"/>-->
<!--            EN-->
<!--          </option>-->
<!--          <option value="ru">RU</option>-->
<!--        </select>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
</div>
</template>

<script>
export default {
  name: "HeaderMenu",

  data() {
    return {
      limitPosition: 1000000,
      scrolled: false,
      lastPosition: 800
    };
  },

  methods: {
    handleScroll() {
      if (this.lastPosition < window.scrollY && this.limitPosition < window.scrollY) {
        this.scrolled = true;
        // move up!
      }

      if (this.lastPosition > window.scrollY) {
        this.scrolled = false;
        // move down
      }

      this.lastPosition = window.scrollY;
      // this.scrolled = window.scrollY > 250;
    }
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
    unmounted() {
    window.removeEventListener("scroll", this.handleScroll);
  },
};
</script>

<style scoped>
.header{
  display: block;
  background-color: #F3F5F7;
}

.top-nav{
  border-bottom: 1px solid #e5e5e5;
}

.container{
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

.column{
  flex: 0 0 50%;
  max-width: 50%;
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

ul{
  padding: 0;
  margin: 0;
}

.top-nav .info_left li {
  list-style: none;
  display: inline-block;
  font-size: 16px;
  color: #19191a;
  font-weight: 500;
  padding: 14px 0 12px;
  margin-right: 64px;
  position: relative;
}

.top-nav .info_left li:after{
  position: absolute;
  right: -32px;
  top: 0;
  width: 1px;
  height: 100%;
  background: #e5e5e5;
  content: "";
}

.top-nav .info_left li:last-child{
  margin-right: 0;
}

.info_right{
  text-align: right;
}

.top_socials{
  display: inline-block;
  margin-right: 35px;
  padding: 13px 0;
}

.top_socials a{
  display: inline-block;
  font-size: 14px;
  color: #19191a;
  margin-left: 15px;
}

.top_socials a svg{
  height: 16px;
  width: 16px;
}

.book_btn{
  display: inline-block;
  font-size: 13px;
  font-weight: 700;
  padding: 16px 28px 15px;
  background: #92A1B5;
  text-decoration: none;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.language_switcher{
  display: inline-block;
  margin-left: 30px;
  cursor: pointer;
  padding: 13px 0 11px;
  position: relative;
}

@media only screen and (min-width: 1200px){
  .container {
    max-width: 1170px;
  }
}

@media only screen and (min-width: 992px){
  .container {
    max-width: 960px;
  }

  .column{
    flex: 0 0 50%;
    max-width: 50%;
  }
}


.headroom {
  background-color: #DAE0E7;
  position: fixed;
  z-index: 100;
  will-change: transform;
  transition: transform 200ms linear;
}
.headroom--pinned {
  transform: translateY(0%);
}
.headroom--unpinned {
  transform: translateY(-100%);
}
/*.header{*/
/*  display: block;*/
/*}*/

/*.top-nav{*/
/*  border-bottom: 1px solid #e5e5e5;*/
/*}*/

/*.menu_item{*/
/*  position: relative;*/
/*  z-index: 9;*/
/*}*/

/*.sticky {*/
/*  position: fixed;*/
/*  top: 0;*/
/*  width: 100%;*/
/*}*/
/*li, a, button {*/
/*  font-family: 'Montserrat', sans-serif;*/
/*  font-size: 14px;*/
/*  font-weight: 500;*/
/*  color: #000000;*/
/*  text-decoration: none;*/
/*  text-transform: uppercase;*/
/*}*/

/*.container{*/
/*  display: flex;*/
/*  justify-content: space-between;*/
/*  align-items: center;*/
/*  padding: 20px 5%;*/
/*}*/

/*.logo{*/
/*  cursor: pointer;*/
/*  width: 130px;*/
/*}*/

/*.nav_links{*/
/*  list-style: none;*/
/*}*/

/*.nav_links li{*/
/*  display: inline-block;*/
/*  padding: 0 20px;*/
/*}*/

/*.nav_links li a{*/
/*  transition: all 0.3s ease 0s;*/
/*}*/

/*.nav_links li a:hover{*/
/*  color: #758DAD;*/
/*  border-bottom: 1px solid #758DAD;*/
/*}*/

/*.extra_choice{*/
/*  display: inline-block;*/
/*}*/

/*.book button{*/
/*  padding: 9px 25px;*/
/*  background-color: white;*/
/*  border: 4px solid #758DAD;*/
/*  color: #758DAD;*/
/*  border-radius: 50px;*/
/*  transition: all 0.3s ease 0s;*/
/*  cursor: pointer;*/
/*  margin-right: 20px;*/
/*}*/

/*.book:hover button{*/
/*  background-color: #758DAD;*/
/*  color: white;*/
/*}*/

/*.lang_menu{*/
/*  display: inline-block;*/
/*}*/

/*.lang_choice{*/
/*  width: 80px;*/
/*  height: 40px;*/
/*}*/

/*.lang_choice img{*/
/*  width: 30px;*/
/*  height: 30px;*/
/*}*/
</style>