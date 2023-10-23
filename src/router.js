// router.js
import Vue from "vue";
import VueRouter from "vue-router";
import Task from "./components/Task";
import Login from "./components/Login";

Vue.use(VueRouter);

const routes = [
  { path: "/Login", component: Login },
  { path: "/tasks", component: Task },
];

const router = new VueRouter({
  routes,
});

export default router;
