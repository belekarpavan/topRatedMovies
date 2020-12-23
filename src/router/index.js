import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);
function loadView (view) {
  return () =>
    import(/* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`)
}

const routes = [
  {
    path: "/",
    name: "Home",
    component: loadView('TopRatedMovies')
  },
  {
    path: "/upcoming",
    name: "Upcoming",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: loadView('UpcomingMovies')
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
