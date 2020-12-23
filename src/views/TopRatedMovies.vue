<template>
  <div class="container">
    <div class="">
      <h4 class="font-weight-bold text-left text-uppercase">
        Top Rated Movies
      </h4>

      <div class="row">
        <div class="col-sm-6 col-md-4 col-lg-3" v-for="(movie,i) in getMovies" :key="i">         
          <MovieDetails :movie="movie" />
        </div>
      </div>

      <div class="form-group mt-3 float-right">
        <b-pagination
          v-model="currentPage"
          :total-rows="getTotalPages"          
          @input="getTopRatedMovies()"
        ></b-pagination>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieDetails from "@/components/MovieDetails.vue";
import {mapGetters} from 'vuex'

export default {
  name: "TopRatedMovies",
  data() {
    return {
      currentPage: 1,
    };
  },
  components: {
    MovieDetails
  },
  mounted() {
    this.$store.dispatch('GetTopRatedMovies',{currentPage:this.currentPage})
  },
  methods: {
    getTopRatedMovies() {    
     this.$store.dispatch('GetTopRatedMovies',{currentPage: this.currentPage}).then(() => {
       window.scrollTo({top: 0, behavior: 'smooth'});
     })
    }
  },
  computed: {
    ...mapGetters(['getMovies','getTotalPages'])
  }
};
</script>
