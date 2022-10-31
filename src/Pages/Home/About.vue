<template>
  <div class="about_part">

    <div class="content">
      <div class="row">
        <div class="content_item left">
          <div class="about_text">
            <div class="title">
              <span>About us</span>
              <h2>Lorem ipsum
                <br>
                dolor sit amet</h2>
            </div>
            <p class="text1">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, dolorem ducimus enim error et facere fugit illo labore laborum libero quibusdam, similique tempora tenetur? Amet cum odio possimus sed veritatis?
            </p>
            <p class="text2">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. At beatae cum dignissimos dolore, inventore ipsam mollitia natus, nulla recusandae, sint sit soluta tempora temporibus. Accusamus.
            </p>
            <a class="button" href="#">Read More</a>
          </div>
        </div>
        <div class="content_item right">
          <div class="about_pic">
            <div class="row">
              <div class="pic left">
                <img class='img1' src="@/assets/main_page_photo.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "MainAbout",
}
</script>

<style scoped>
.about_part{
  padding-top: 100px;
  padding-bottom: 100px;
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
}

.content_item{
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

.about_text{
  text-align: center;
  padding: 0 35px;
}

.title{
  text-align: center;
  margin-bottom: 22px;
}

.title span{
  font-size: 14px;
  color: #556F8B;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
}

.title h2{
  font-size: 44px;
  color: #19191a;
  line-height: 58px;
  margin-top: 10px;
}

.text1{
  margin-bottom: 10px;
  color: #595960;
  font-weight: 500;
}

.text2{
  margin-bottom: 35px;
  color: #595960;
  font-weight: 500;
}

.button{
  color: #19191a;
  display: inline-block;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 700;
  position: relative;
  text-decoration: none;
  background-color: transparent;
}

.button:after{
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 100%;
  height: 2px;
  background: #556F8B;
  content: "";
}

.pic{
  position: relative;
  width: 100%;
  padding-right: 15px;
  padding-left: 15px;
}

img{
  min-width: 100%;
  max-width: 100%;
  vertical-align: middle;
  border-style: none;
}

@media only screen and (min-width: 1200px){
  .content {
    max-width: 1170px;
  }
}

@media only screen and (min-width: 992px){
  .content_item {
    flex: 0 0 50%;
    max-width: 50%;
  }
}

@media only screen and (min-width: 576px){
  .content_item {
    flex: 0 0 50%;
    max-width: 50%;
  }
}
</style>