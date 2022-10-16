<template>
<div class="header">
  <div class="container">
    <img src="../assets/logo_hotel.png" alt="logo" class="logo">
    <nav>
      <ul class="nav_links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Accommodation</a></li>
        <li><a href="#">Service</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contacts</a></li>
      </ul>
    </nav>
    <div class="extra_choice">
      <a class="book" href="#"><button>Book</button></a>

<!--      Change-->
      <div class="lang_menu">
        <select class="lang_choice" v-model="lang" @change="handleChange($event)">
          <option value="en">
            <img src="../assets/flags/Flag_of_Russia.svg" alt="england" style="height: 30px; width: 30px;"/>
            EN
          </option>
          <option value="ru">RU</option>
        </select>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: "HeaderMenu",
  data: function () {
    const lang = localStorage.getItem('lang') || 'en';
    return {
      lang: lang
    }
  },
  methods: {
    handleChange(event) {
      localStorage.setItem('lang', event.target.value);
      window.location.reload();
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');
li, a, button {
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #000000;
  text-decoration: none;
  text-transform: uppercase;
}

.container{
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 5%;
}

.logo{
  cursor: pointer;
  width: 130px;
}

.nav_links{
  list-style: none;
}

.nav_links li{
  display: inline-block;
  padding: 0 20px;
}

.nav_links li a{
  transition: all 0.3s ease 0s;
}

.nav_links li a:hover{
  color: #758DAD;
  border-bottom: 1px solid #758DAD;
}

.extra_choice{
  display: inline-block;
}

.book button{
  padding: 9px 25px;
  background-color: white;
  border: 4px solid #758DAD;
  color: #758DAD;
  border-radius: 50px;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  margin-right: 20px;
}

.book:hover button{
  background-color: #758DAD;
  color: white;
}

.lang_menu{
  display: inline-block;
}

.lang_choice{
  width: 80px;
  height: 40px;
}

.lang_choice img{
  width: 30px;
  height: 30px;
}
</style>