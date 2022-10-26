<template>
  <body>
    <BookingForm/>
    <About/>
    <Rooms/>
    <Services/>
    <Gallery/>
    <Contacts/>
  </body>
</template>

<script>
import BookingForm from "./BookingForm";
import About from "./About";
import Rooms from "./Rooms";
import Services from "./Services";
import Gallery from "./Gallery";
import Contacts from "./Contacts";

export default {
  name: "HomeIndex",
  components:{ BookingForm, About, Rooms, Services, Gallery, Contacts},

}
</script>

<style scoped>
body{
  background-color: #F3F5F7;
}
</style>