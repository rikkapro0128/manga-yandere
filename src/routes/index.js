import Home from "@/page/Home.vue";
import Sign from "@/page/Sign.vue";
import Manga from "@/page/Manga.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  { path: "/", component: Home, meta: { transition: "slide-left" } },
  { path: "/sign", component: Sign, meta: { transition: "slide-right" } },
  { path: "/manga", component: Manga, meta: { transition: "slide-right" } },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
