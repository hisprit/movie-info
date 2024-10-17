<template>
  <Navbar />
  <Event :text="text[eventTextNum]" />
  <SearchBar :data="data_temp" @searchMovie="searchMovie($event)" />
  <p>
    <button @click="showAllMovie()">전체보기</button>
  </p>

  <Movies
    :data="data_temp"
    @increaseLike="increaseLike($event)"
    @openModal="
      isModal = true;
      selectedMovie = $event;
    "
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
import SearchBar from "./components/SearchBar.vue";

export default {
  name: "App",
  components: { Navbar, Event, Modal, Movies, SearchBar },
  data() {
    return {
      isModal: false,
      data: data,
      data_temp: [...data],
      selectedMovie: 0,
      text: [
        "Netflix 최고당.. Netflix 최고당.. ",
        "디즈니 랜드가 최고당.. ㅎㅎㅎㅎㅎㅎㅎㅎ",
        "대한 민국이 그렇게 그렇게.. ㅎㅎㅎㅎ^^",
      ],
      eventTextNum: 0,
      interval: null,
    };
  },
  methods: {
    increaseLike(id) {
      // this.data[i].like += 1;
      this.data.find((movie) => {
        if (movie.id == id) {
          movie.like += 1;
        }
      });
    },
    searchMovie(title) {
      //영화 제목이 포함된 데이터를 가져옴
      this.data_temp = this.data_temp.filter((movie) => {
        return movie.title.includes(title);
      });
    },
    showAllMovie() {
      this.data_temp = this.data;
    },
  },
  mounted() {
    console.log("mounted");
    this.interval = setInterval(() => {
      if (this.eventTextNum == this.text.length - 1) {
        this.eventTextNum = 0;
      } else {
        this.eventTextNum += 1;
      }
      
    }, 2000);
  },
  unmounted(){
    clearInterval(this.interval) // 인터벌 해제
  }
};
</script>

<style scoped>
</style>
