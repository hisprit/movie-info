<template>
  <div class="search-box">
    <input
      type="search"
      placeholder="검색어를 입력해 주세요. "
      
      @change="
      inputText = $event.target.value;
      $emit('searchMovie', $event.target.value);
      $event.target.value=''
      "
    />
    <button @click="$emit('searchMovie', $event.target.value);">검색</button>
  </div>
  
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
    data_temp: Array,
  },
//   watch: {
//     //입력한 영화 제목이 데이터에 있는지 확인
//     inputText(name) {
//       const findName = this.data_temp.filter((movie) => {
//         return movie.title.includes(name);
//       });
//       if (findName.length == 0) {
//         alert("해당하는 영화가 없습니다. ");
//       } else {
//         console.log(findName);
//         // //해당되는 영화를 뿌려준다. // includes로 변경
//         // this.datatemp = "$emit('findMovie', findName)";
//       }
//     },
//   },
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