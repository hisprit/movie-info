<template>
  <div class="search-box">
    <input
      type="search"
      placeholder="검색어를 입력해 주세요. "
      @change="inputText = $event.target.value"
    />
    <button>검색</button>
  </div>
  <p>{{ inputText }}</p>
</template>
<script>
export default {
  name: "SearchBarComponent",
  data() {
    return {
      inputText: "Hello",
    };
  },
  props: {
    data: Array,
  },
  watch: {
    inputText(name) {
      //입력한 영화 제목이 데이터에 있는지 확인
    
      if (name) {
        const searchMovie = this.data.filter((movie)=>{return movie.title ===name })
        console.log(searchMovie)
        
      } else {
        alert("해당하는 영화가 없습니다. ");
      }
      
    },
  },
};
</script>
<style scoped>
.search-box {
  padding: 10px;
  display: flex;
  justify-content: center;
}
.search-box input {
  padding: 5px 10px;
  margin-right: 10px;
}
.search-box button {
  margin: 0;
}
</style>