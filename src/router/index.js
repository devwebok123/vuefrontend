import Vue from "vue";
import VueRouter from "vue-router";
import Status from "../views/Status";
import Projects from "../views/Projects";
import Program from "../views/Program";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    name: "Status",
    component: Status
  },
  {
    path: "/projects",
    name: "Projects",
    component: Projects
  },
  {
    path: "/program",
    name: "Program",
    component: Program
  }
];

const router = new VueRouter({
  routes
});

export default router;
