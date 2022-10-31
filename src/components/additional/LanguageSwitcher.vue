<template>
  <div class="dropdown-item"
  @click="visible = !visible">
    <img :src="'/flags/' + selected_option.cardImage"  alt="image/svg+xml"/>
<!--    <img :src=" '/image/' + option.cardImage "  alt="img"/>-->
    <span>{{ selected_option.title }}</span>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" style="width: 10px"><!--! Key down. -->
      <path d="M201.4 374.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 306.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"/>
    </svg>
    <div class="options" v-if="visible">
      <ul>
        <li
            v-for="option in options"
            :key="option.value"
            @click="selectOption(option)">
          <img :src="'/flags/' + option.cardImage"  alt="image/svg+xml"/>
          {{ option.title }}
        </li>

      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "LanguageSwitcher",
  data() {
    return{
      visible: false,
    }
  },
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    selected_option: {
      type: Object,
      default: () => ({
        title: "EN",
        cardImage: "USpng.png",
        value: 1
      }),
    }
  },
  methods: {
    selectOption(option) {
      console.log(option)
      this.$emit('select', option);
    }
  }
}
</script>

<style scoped>
img{
  height: 26px;
  width: 26px;
  border-radius: 50%;
  margin-right: 10px;
  max-width: 100%;
  vertical-align: middle;
  border-style: none;
}

.dropdown-item span{
  font-size: 16px;
  color: #19191a;
  text-transform: uppercase;
  font-weight: 500;
  vertical-align: middle;
}

.dropdown-item span svg{
  width: 10px;
}

.options{
  position: absolute;
  z-index: 1111;
  left: 0;
  top: 60px;
  width: 65px;
  background: #ffffff;
  border: 1px solid #aeaeae;
  display: block;
  padding: 10px 15px;
  box-shadow: 0px 9px 10px rgb(25 25 26 / 20%);
  /*visibility: hidden;*/
  transition: all 0.3s;
}

li:hover{
  background-color: #F3F5F7;
}

ul{
  padding: 0;
  margin: 0;
}

li{
  list-style: none;
  text-align: left;
  /*border-bottom: 1px solid #aeaeae;*/
}

li + li{
  margin-top: 7px;
}
</style>