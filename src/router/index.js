import Vue from 'vue'
import Router from 'vue-router'
import EntryRouter from "./entry"


Vue.use(Router)

const router = new Router({
  linkActiveClass: "active",
  scrollBehavior: () => ({ x: 0, y: 0 }),
  routes: EntryRouter
})

// router.beforeEach((to, from, next) => {
//   console.log(to);
//   console.log(from);
//   console.log(next);
// });


export default router;
