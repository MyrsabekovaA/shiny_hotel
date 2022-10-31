<template>
  <div class="wrapper">
    <div class="container">
      <div class="text">
        <div class="row">
          <div class="content item_left">
            <div class="contacts">
              <h6>Contact Us</h6>
              <ul>
                <li>+996123456789</li>
                <li>info@gmail.com</li>
                <li>Imanaly Kulanova, 3</li>
                <li>Bishkek, Kyrgyzstan</li>
              </ul>
              <div class="socials">
                <a href="#">
                  <img src="@/assets/brands/icons8-facebook-новый.svg">
                </a>
                <a href="#">
                  <img src="@/assets/brands/icons8-instagram.svg">
                </a>
                <a href="#">
                  <img src="@/assets/brands/icons8-твиттер.svg">
                </a>
                <a href="#">
                  <img src="@/assets/brands/icons8-whatsapp.svg">
                </a>
              </div>
            </div>
          </div>
          <div class="content item-right">
            <GisMap></GisMap>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import GisMap from "@/components/additional/2GisMap";
export default {
  name: "MainContacts",
  components: {GisMap},
}
</script>

<style scoped>
.wrapper{
  background: #222736;
}

.container{
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}

text{
  padding: 80px 0 30px;
}

.row{
  display: flex;
  margin-right: -15px;
  margin-left: -15px;
}

.content{
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}


.contacts{
  margin-bottom: 30px;
}

.contacts h6{
  font-size: 30px;
  color: white;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 3px;
  font-family: "Cabin",sans-serif;
  margin-bottom: 20px;
}

ul{
  padding: 0;
  margin: 0;
  align-content: center;
  text-align: center;
}

li{
  margin-top: 80px;
  font-size: 22px;
  color: #aaaab3;
  line-height: 32px;
  list-style: none;
}

li+li{
  margin-top: 10px;
}

.socials{
  margin-left: 210px;
  margin-top: 170px;
}

.socials a{
  display: inline-block;
  height: 40px;
  width: 40px;
  font-size: 16px;
  line-height: 40px;
  text-align: center;
  color: #fff;
  border-radius: 50%;
  transition: all .3s;
  margin-right: 7px;
  text-decoration: none;
  background-color: transparent;
}

.socials a img{
  height: 39px;
  width: 39px;
  color: white;
}


@media only screen and (min-width: 1200px){
  .container {
    max-width: 1170px;
  }
}

@media only screen and (min-width: 992px){
  .content {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

img{
  color: white;
}

GisMap{
  width: 30px;
  height: 50px;
}

.item-right{
  margin-top: 32px;
}

</style>