import axios from "axios";

export const state = {
  movies: [],
  totalRecords: 0
};

export const mutations = {
  SET_MOVIES: (state, list) => {
    state.movies = list ? list : [];
  },
  SET_TOTALRECORDS: (state, pages) => {
      state.totalRecords = pages ? pages : 0;
  }
};

export const getters = {
  getMovies: state => state.movies,
    getTotalPages: state => state.totalRecords
};

export const actions = {
    GetTopRatedMovies: ({ commit, dispatch }, payload) => {
        return new Promise(resolve => {
            dispatch('showPageLoader', true, {root:true})
            axios
                .get(
                    "https://api.themoviedb.org/3/movie/top_rated?api_key=10dbb745ad595fc36df72e1f5e00bd3d&page=" +
                    payload.currentPage
                )
                .then(response => {               
                  
                    commit('SET_MOVIES', response.data ? response.data.results : [])
                    commit('SET_TOTALRECORDS', response.data ? response.data.total_results : 0)
                    dispatch('showPageLoader', false, { root: true })
                    resolve(response);
                }).catch(error => {
                    console.log(error)
                    dispatch('showPageLoader', false, { root: true })
                });
        });
    },
    GetUpcomingMovies: ({ commit, dispatch }, payload) => {
        return new Promise(resolve => {
            dispatch('showPageLoader', true, { root: true })
            axios
                .get(
                    "https://api.themoviedb.org/3/movie/upcoming?api_key=10dbb745ad595fc36df72e1f5e00bd3d&page=" +
                    payload.currentPage
                )
                .then(response => {

                    commit('SET_MOVIES', response.data ? response.data.results : [])
                    commit('SET_TOTALRECORDS', response.data ? response.data.total_results : 0)
                    dispatch('showPageLoader', false, { root: true })
                    resolve(response);
                }).catch(error => {
                    console.log(error)
                    dispatch('showPageLoader', false, { root: true })
                });
        });
    }
};
