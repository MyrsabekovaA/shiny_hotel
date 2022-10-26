<template>
  <div class="wrapper">
    <h1>Our Gallery</h1>
    <hr>
    <Carousel :slides="slides" :interval="7000" controls indicators></Carousel>

    <button>View More</button>
  </div>

</template>

<script>
import Carousel from "@/components/additional/Carousel";
export default {
  name: "MainGallery",
  components: { Carousel },
  data: () => ({
    slides: [{
      label: 'Premium',
      src: "https://picsum.photos/id/1033/1270/470",
    },
      {
        label: 'Standard',
        src: "https://picsum.photos/id/1037/1270/470",
      },
      {
        label: 'Economy',
        src: "https://picsum.photos/id/1035/1270/470",
      },
      {
        label: 'Standard',
        src: "https://picsum.photos/id/1037/1270/470",
      },
    ],
  }),



}
</script>

<style scoped>
.wrapper{
  margin-top: 150px;
  padding: 0 140px;
}

h1{
  margin-left: 70px;
  font-size: 30px;
  font-weight: 600;
  color: black;
}

hr{
  margin-right: 940px;
  width: 285px;
  border: 0;
  height: 4px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0),#758DAD , rgba(0, 0, 0, 0));
}

button{
  margin-left: 400px;
  border-radius: 20px;
  border: none;
  margin-top: 30px;
  width: 430px;
  height: 70px;
  color: white;
  font-size: 26px;
  font-weight: 600;
  background-color: #758DAD;
}
</style>