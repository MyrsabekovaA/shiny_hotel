<template>
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
        <img class='img1' src="@/assets/about_photo/photo1.jpg" />
        <img class='img2' src="@/assets/about_photo/photo2.jpg" />
        <img class='img3' src="@/assets/about_photo/photo3.jpg" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MainAbout"
}
</script>

<style scoped>
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
</style>