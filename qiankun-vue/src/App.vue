<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import vueImg from "./assets/vue.svg";
import { qiankunWindow } from "vite-plugin-qiankun/dist/helper";
const base = qiankunWindow.__INJECTED_PUBLIC_PATH_BY_QIANKUN__;
console.log(vueImg);
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img :src="base + vueImg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
  <div class="app__footer"></div>
</template>

<style scoped>
.app__footer {
  border: 1px red solid;
  height: 4rem;
  aspect-ratio: 1 / 1;
  background-image: url("@/assets/vue.svg");
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
