<template>
  <div class="wrapper">
    <div class="container">
      <div class="heading">
        <span>Contacts</span>
      </div>
    </div>
    <div class="contacts">
      <div class="contacts_inner">
        <div class="content_item-left">
          <div class="content_item-left-inner">
            <div class="phones">
              <div class="phones_inner">
                <div class="phone_number">
                  <a>
                    <div class="phone_img">
                      <font-awesome-icon icon="fa-solid fa-phone" style="width: 20px;
                        height: 24px;
                        z-index: 50;
                        color: white;"/>
                    </div>
                    <div class="phone_text">
                      <span>+996123456789</span>
                    </div>
                  </a>
                </div>
                <div class="phone_number">
                  <a>
                    <div class="whatsapp_img">
                      <font-awesome-icon icon="fa-brands fa-whatsapp" style="width: 20px;
                        height: 24px;
                        z-index: 50;
                        color: white;"/>
                    </div>
                    <div class="phone_text">
                      <span>+996123456789</span>
                    </div>
                  </a>
                </div>
                <div class="phone_number">
                  <a>
                    <div class="telegram_img">
                      <font-awesome-icon icon="fa-brands fa-telegram" style="width: 40px;
                        height: 20px;
                        z-index: 50;
                        color: white;"/>
                    </div>
                    <div class="phone_text">
                      <span>+996123456789</span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
            <div class="location">
              <div class="location_text"></div>
              <div class=""></div>
            </div>

          </div>
          <div class="location" style="display: inline">
            <img src="/image/contacts/location.svg" />
            <p>ул. Иманалы Кулановой, 3, село Кёк-Джар, г. Бишкек</p>
          </div>
          <div class="ddd">
            <img src="/image/contacts/location-svgrepo-com.svg" />
          </div>
          <div class="social">
            <img src="/image/contacts/location-svgrepo-com.svg" />
          </div>
        </div>

        <div class="content_item-right">
          <GisMap></GisMap>
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
  margin-top: 150px;
  display: block;
  position: relative;
}

.container{
  margin: 0;
  position: relative;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: start;
  align-items: flex-start;
  padding-top: 7%;
  padding-left: 4%;
  padding-right: 4%;
  color: black;
  cursor: auto;
  font-family: Montserrat, sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  letter-spacing: normal;
  line-height: normal;
  overflow-wrap: break-word;
  text-align: left;
  text-indent: 0px;
  text-shadow: none;
  text-transform: none;
}

.heading{
  font-size: 4vw;
  line-height: normal;
  display: flex;
  position: relative;
  font-weight: 800;
  width: 100%;
  margin-bottom: 40px
}

.heading span{
  flex-grow: 1;
  max-width: 100%;
}

.contacts{
  margin: 0 55px;
  position: relative;
  display: flex;
  justify-content: space-between;
  -webkit-box-align: start;
  align-items: flex-start;
  background-color: #002a50;
  padding-top: 5%;
  padding-right: 4%;
  padding-bottom: 4%;
  padding-left: 4%;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
}

.contacts_inner{
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  width: 100%;
  position: relative;
  display: flex;
}

.content_item-left{
  width: 50%;
  padding-right: 4%;
  margin-bottom: 0px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  position: relative;
  display: flex;
  flex-shrink: 0;
}

.content_item-left-inner{
  padding-right: 0%;
  flex-shrink: 1;
  position: relative;
  display: block;
  z-index: 5;
  margin-left: 0px;
  margin-right: 0px
}

.phones{
  width: 100%;
  position: relative;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  justify-content: flex-end;
  padding-right: 0px;
  flex-shrink: 0;
  margin-left: 0px;
  margin-right: 0px;
  margin-bottom: 30px;
}

.phones_inner{
  margin-left: 0px;
  margin-right: 0px;
  width: 100%;
}

.phone_number{
  padding-top: 5px;
  padding-right: 0px;
  padding-bottom: 5px;
  padding-left: 0px;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  -webkit-box-align: center;
  align-items: center;
  justify-content: flex-start;
}

.phone_number a{
  display: inline-flex;
  cursor: pointer;
  text-decoration-line: none;
  padding-left: 0px;
  padding-top: 2px;
  padding-bottom: 2px;
  -webkit-box-align: center;
  align-items: center;
}

.phone_img{
  margin-right: 20px;
  width: 40px;
  position: relative;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  height: 40px;
  flex-shrink: 0;
  margin-left: 0px;
  opacity: 1;
  border-top-left-radius: 250px;
  border-top-right-radius: 250px;
  border-bottom-right-radius: 250px;
  border-bottom-left-radius: 250px;
  background-color: black;
}

.whatsapp_img{
  margin-right: 20px;
  width: 40px;
  position: relative;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  height: 40px;
  flex-shrink: 0;
  margin-left: 0px;
  opacity: 1;
  border-top-left-radius: 250px;
  border-top-right-radius: 250px;
  border-bottom-right-radius: 250px;
  border-bottom-left-radius: 250px;
  background-color: #43d854;
}

.telegram_img{
  margin-right: 20px;
  width: 40px;
  position: relative;
  display: inline-flex;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  height: 40px;
  flex-shrink: 0;
  margin-left: 0px;
  opacity: 1;
  border-top-left-radius: 250px;
  border-top-right-radius: 250px;
  border-bottom-right-radius: 250px;
  border-bottom-left-radius: 250px;
  background-color: #0088cc;
}

.phone_text{
  display: block;
  font-size: 22px;
  font-weight: 600;
  color: white;
}

.phone_text span{
  flex-grow: 1;
  max-width: 100%;
  color: white;
}

.location{
  position: relative;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: reverse;
  flex-direction: row-reverse;
  -webkit-box-align: center;
  align-items: center;
  justify-content: center;
  padding-left: 0px;
  margin-left: 0px;
  margin-right: 0px;
  padding-bottom: 0px;
  margin-bottom: 30px;
}
</style>