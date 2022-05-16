<script setup>
  import { RouterLink, RouterView } from "vue-router";
  import NavBar from "@/components/navBar.vue";
  import Banner from "@/components/banner.vue";
  import Detail from "@/components/detail.vue";
  import Galaxy from "@/components/galaxy.vue";
  import Footer from "@/components/footer.vue";
</script>

<template>
  <NavBar />
  <Banner />
  <Detail />
  <Galaxy />
  <Footer />
</template>

<style>
  @import "@/assets/base.css";

  #app {
    background-color: #fff;
    color: #000;
    text-align: center;
  }

</style>
