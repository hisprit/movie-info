<template>
  <h1>영화정보</h1>
  <div v-for="movie in data" :key="movie.id" class="item">
    <figure>
      <img :src="`${movie.imgUrl}`" :alt="movie.title" />
    </figure>
    <div class="info">
      <h3 class="bg-yellow">{{ movie.title }}</h3>
      <p>개봉 : {{ movie.year }}</p>
      <p>장르 : {{ movie.category }}</p>
      <button @click="$emit('increaseLike', movie.id)">좋아요</button>
      <span>{{ movie.like }}</span>
      <p>
        <button @click="$emit('openModal', movie.id)">상세보기{{movie.id}}</button>
      </p>
    </div>
  </div>
</template>
<script scoped>
export default {
  name: "MoviesComponent",
  props: {
    data: Array,
    selectedMovie: Number,
  },
};
</script>
<style>
* {
  box-sizing: border-box;
  margin: 0;
}
body {
  max-width: 768px;
  margin: 0 auto;
  padding: 20px;
}
h1,
h2,
h3 {
  margin-bottom: 1rem;
}
p {
  margin-bottom: 0.5rem;
}
button {
  margin-right: 10px;
  margin-top: 10px;
}
.item {
  width: 100%;
  border: 1px solid #ccc;
  display: flex;
  margin-bottom: 20px;
  padding: 1rem;
}
.item figure {
  width: 30%;
  margin-right: 1rem;
}
.item img {
  width: 100%;
}
.item .info {
  width: 100%;
}
</style>