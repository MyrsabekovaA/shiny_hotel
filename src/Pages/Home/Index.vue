<template>
  <body>
    <BookingForm id="home" @mouseover="$emit('change_page_part', 'home')"/>
    <About id="about" @mouseover="$emit('change_page_part', 'about')"/>
    <Rooms id="rooms" @mouseover="$emit('change_page_part', 'rooms')"/>
    <Services @mouseover="$emit('change_page_part', 'services')"/>
    <Gallery @mouseover="$emit('change_page_part', 'gallery')"/>
    <Contacts @mouseover="$emit('change_page_part', 'contacts')"/>
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
  components:{ BookingForm, About, Rooms, Services, Gallery, Contacts },

}
</script>

<style scoped>
body{
  background-color: #F3F5F7;
}
</style>