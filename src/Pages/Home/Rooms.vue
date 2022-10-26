<template>
  <div class="rooms_info">
    <div class="wrapper">
      <div class="heading">
        <span style="flex-grow: 1;
          max-width: 100%;"
        >Our Rooms</span>
        <hr>
      </div>
      <div class="text">
        <span style="flex-grow: 1;
    max-width: 100%;">
          Our rooms are designed to make you feel at home. We have a variety of rooms to suit your needs.</span>
      </div>
      <div class="tabs">
        <ul class='tabs__header'>
          <li v-for="category in categories"
              :key='category.id'
              @click="selectedCategory = category"
              :class="{ selected: selectedCategory.id === category.id }"
          >
            <h3>{{ category.title }}</h3>
          </li>
        </ul>
      </div>

      <div class="cards">
        <div class="cards_inner">
          <div class="cards_inner-item">
            <div class="cards_item">
              <RoomCard v-for="room in selectedRooms" :key="room.id" :room="room"/>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import RoomCard from "@/components/additional/RoomCard";
export default {
  name: "MainRooms",
  components: {RoomCard},
  props: ['room'],
  data() {
    return {
      selectedCategory: {
        id: 2,
        title: 'Standard',
      },
      categories: [
        {
          id: 1,
          title: 'Economy',
        },
        {
          id: 2,
          title: 'Standard',
        },
        {
          id: 3,
          title: 'Premium',
        },
      ],
      rooms: [
        {
          id: 1,
          category_id: 1,
          img: 'photo1.jpg',
          name: 'Mountains breeze',
          price: 500,
          description: 'амая классная комната все супер кул',
        },
        {
          id: 1,
          category_id: 1,
          img: 'photo1.jpg',
          name: 'Mountains breeze',
          price: 500,
          description: 'амая классная комната все супер кул',
        },
        {
          id: 1,
          category_id: 1,
          img: 'photo1.jpg',
          name: 'Mountains breeze',
          price: 500,
          description: 'амая классная комната все супер кул',
        },

        {
          id: 2,
          category_id: 1,
          img: 'photo1.jpg',
          name: 'Mountains breeze',
          price: 600,
          description: 'амая классная комната все супер кул',
        },
        {
          id: 3,
          category_id: 2,
          name: 'Ocean breeze',
          img: 'photo2.jpg',
          price: 100,
          description: 'Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accommodations.',
        },
        {
          id: 3,
          category_id: 2,
          name: 'Ocean breeze',
          img: 'photo2.jpg',
          price: 100,
          description: 'Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accommodations.',
        },
        {
          id: 3,
          category_id: 2,
          name: 'Ocean breeze',
          img: 'photo2.jpg',
          price: 100,
          description: 'Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accommodations.',
        },
        {
          id: 3,
          category_id: 2,
          name: 'Ocean breeze',
          img: 'photo2.jpg',
          price: 100,
          description: 'Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accommodations.',
        },
        {
          id: 3,
          category_id: 3,
          name: 'Lorem ipsum',
          img: 'photo2.jpg',
          price: 100,
          description: 'Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accommodations.',
        },
        {
          id: 3,
          category_id: 3,
          name: 'lorem ipsum',
          img: 'photo2.jpg',
          price: 100,
          description: 'Located in the heart of Aspen with a unique blend of contemporary luxury and historic heritage, deluxe accommodations.',
        },
      ]
    };
  },
  computed: {
    selectedRooms() {
      return this.rooms.filter(room => room.category_id === this.selectedCategory.id)
    }
  },
}
</script>

<style scoped>
.rooms_info{
  display: block;
  width: 100%;
  position: relative;
}

.wrapper{
  margin: 0;
  position: relative;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  flex-direction: column;
  -webkit-box-align: start;
  align-items: flex-start;
  padding-top: 8%;
  padding-left: 4%;
  padding-right: 4%;
  padding-bottom: 5%;
}

.heading{
  font-size: 4vw;
  margin: 0 490px;
  display: flex;
  position: relative;
  font-weight: 800;
}

.text{
  display: flex;
  vertical-align: top;
  position: relative;
  font-size: 24px;
  color: #2a2929;
  margin-left: 150px;
  margin-right: 0px;
  margin-bottom: 40px;
  line-height: 1.5em;
}

hr{
  border: 0;
  height: 4px;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0),#758DAD , rgba(0, 0, 0, 0));
  margin-bottom: 60px
}
.tabs{
  position: relative;
  width: 100%;
  display: block;
  margin-left: 0px;
  margin-top: 0px;
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

.tabs__header{
  display: flex;
  flex-wrap: wrap;
  padding: 0;
  margin-left: auto;
  list-style-type: none;
  width: 100%;
  -webkit-box-align: start;
  align-items: flex-start;
  justify-content: space-between;
}

.tabs__header li{
  width: 19.8%;
  display: flex;
  font-size: 22px;
  -webkit-box-align: center;
  align-items: center;
  padding-top: 40px;
  padding-right: 10px;
  padding-bottom: 40px;
  padding-left: 10px;
  color: black;
  transition-property: all;
  transition-duration: 600ms;
  transition-delay: 0ms;
  transition-timing-function: ease;
  background-color: white;
  flex-direction: column;
  right: auto;
  -webkit-box-flex: 1;
  flex-grow: 1;
  flex-shrink: 0;
  margin-right: 1px;
  margin-left: 1px;
  margin-bottom: 2px;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  cursor: pointer;
}

.tabs__header li.selected{
  background-color: #0085c2;
  color: white;
}

.cards{
  max-width: 100%;
  -webkit-box-flex: 1;
  flex-grow: 1;
}

.cards_inner{
  display: flex;
  opacity: 1;
  max-width: 100%;
}

.cards_inner-item{
  max-width: 100%;
  padding-right: 0px;
  padding-bottom: 0px;
  padding-left: 0px;
  transition-property: all;
  transition-duration: 300ms;
  transition-delay: 0ms;
  transition-timing-function: ease;
  margin-left: 0px;
  margin-right: 0px;
  width: 100%;
}

.cards_item{
  justify-content: flex-start;
  display: flex;
  flex-wrap: wrap;
  margin-left: 0px;
  margin-right: 0px;
  width: 100%;
}
</style>
