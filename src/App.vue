<template>
  <Navbar />  
  <Event :text="text" />
  <SearchBar :data="data"/>
  <Movies    
    :data="data"
    @increaseLike="increaseLike($event)"
    @openModal="isModal = true"
    @selectedMovie="$event"
  />
  <Modal
    :isModal="isModal"
    :data="data"
    :selectedMovie="selectedMovie"
    @closeModal="isModal = false"
  />
</template>

<script>
import data from "./assets/movies";
import Navbar from "./components/Navbar.vue";
import Event from "./components/Event.vue";
import Modal from "./components/Modal.vue";
import Movies from "./components/Movies.vue";
import SearchBar from "./components/SearchBar.vue"

export default {
  name: "App",
  components: { Navbar, Event, Modal, Movies, SearchBar },
  data() {
    return {
      isModal: false,
      data: data,
      selectedMovie: 0,
      text: "Netflix 최고당.. Netflix 최고당.. ",
    };
  },
  methods: {
    increaseLike(i) {
      console.log("====>", i);
      this.data[i].like += 1;
    },
  },
};
</script>

<style scoped>
</style>
