<script setup>
  import { reactive } from "vue";

  const user = reactive({ isLogin: true });
  const loginUser = () => {
    user.isLogin = !user.isLogin;
  };
</script>

<template>
  <!-- <header> -->
  <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">
      <img src="@/assets/image/logo-alone.png" class="" width="80" height="50" alt="logo" />
      BetterGood
    </a>
    <button
      class="navbar-toggler custom-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarMenu"
      aria-controls="navbarMenu"
      aria-expanded="true"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarMenu">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Explore products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Product design</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
      </ul>
      <div class="navbar-text">
        <div v-if="!user.isLogin" class="btn" @click="loginUser">Login</div>
        <div v-else>
          <span class="pr-3" @click="loginUser">Logout</span>
          <img src="@/assets/image/profile.png" alt="profile" class="rounded-circle" />
            <font-awesome-icon class="pl-2" :icon="['fa-solid', 'angle-down']"/>
        </div>
      </div>
    </div>
  </nav>
  <!-- </header> -->
</template>

<style lang="scss" scoped>
  .header-nav {
    position: sticky;
    background: #fff;
    color: #000;
  }


  .navbar{
    @media (min-width: 413px) {
      padding-left: 6em;
      padding-right: 6em;
    }
  }

  .custom-toggler .navbar-toggler-icon {
    background-image: url("data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(102, 125, 255, 0.5)' stroke-width='02' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E");
  }
  // .navbar-toggler:focus,
  // .navbar-toggler:active,
  // .navbar-toggler-icon:focus {
  //     outline: none;
  //     box-shadow: none;
  // }
</style>
