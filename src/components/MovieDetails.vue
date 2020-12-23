<template>
  <div>
    <div class="card movie-card">
      <div class="image">
        <div
          class="wrapper"        
          :style="{ backgroundImage: `url(${getImageLink(movie.backdrop_path)})` }"
          
        >
          <img
          v-if="movie.poster_path"
            class="image"
            :src="getImageLink(movie.poster_path)"
            :alt="movie.title"
          />
          <div v-else class="no-image"></div>
        </div>
      </div>
      <div class="content">
        <h2 >
          <a >{{ movie.title }}</a>
         


        </h2>
        <p>
          <i class="fa fa-calendar" aria-hidden="true"></i>
          {{ movie.release_date }}
        </p>

        <p>
          <i class="fa fa-star" aria-hidden="true"></i>
          <span class="rating-count">{{ movie.vote_average }}</span
          >/10
        </p>
        <p>
          <i class="fa fa-thumbs-up" aria-hidden="true"></i>
          {{ movie.vote_count }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieDetails',
  props: {
    movie: Object,
    default: {},
  },
  data() {
    return {
      baseImagePath: 'http://image.tmdb.org/t/p/w500',
    }
  },
  methods: {
    // getImage(path) {
    //   return this.baseImagePath + path
    // },
  },
}
</script>

<style lang="scss" scoped>
.movie-card {
  flex-wrap: wrap;
  align-content: flex-start;
  border: 1px solid #e3e3e3;
  overflow: hidden;
  margin-top: 30px;
  border-radius: 10px;

  .image {
    max-height: 300px;
    .wrapper {
      width: 100%;
      height: 100%;
      position: relative;
      top: 0;
      left: 0;
      .image {
        display: inline-block;
        width: 100%;
        height: 100%;
        img {
          width: 100%;
          height: 100%;
        }
      }
    }
  }
  .content {
    width: 100%;
    padding: 26px 10px 12px 10px;
    position: relative;
    white-space: normal;
    display: flex;
    align-content: flex-start;
    flex-wrap: wrap;
    h2 {
      font-size: 1em;
      margin: 0;
      width: 100%;
      text-align: left;
      word-wrap: normal;
      overflow-wrap: break-word;
      margin-bottom: 5px;
      a {
        font-weight: 700;
        color: #000;
        text-decoration: none;
      }
    }
    p {
      font-size: 1em;
      margin: 0;
      padding: 5px 10px 0px 10px;
      color: rgba(0, 0, 0, 0.6);
    }
  }
}

.card {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(var(--lightGrey), 1);
  background-color: #fff;
}
.rating-count {
  font-weight: 600;
  font-size: 1rem;
}
.no-image {
  background-image: url('../assets/default.svg');
  background-color: #dbdbdb;
  background-size: 50%;
  box-sizing: border-box;
  min-height: 300px;
  max-height: 300px;
  align-items: center;
  justify-content: center;
  line-height: inherit;
  background-position: center center;
  background-repeat: no-repeat;
  color: inherit;
}
</style>
