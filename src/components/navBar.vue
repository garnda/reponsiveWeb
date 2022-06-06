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
    <div class="collapse navbar-collapse" id="navbarMenu" @click="openNav()">
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
        <!-- <div v-if="!user.isLogin" class="btn" @click="loginUser">Login</div> -->
        <!-- <div v-else>
          <span class="pr-3" @click="loginUser">Logout</span>
          <img src="@/assets/image/profile.png" alt="profile" class="rounded-circle" />
            <font-awesome-icon class="pl-2" :icon="['fa-solid', 'angle-down']"/>
        </div> -->
      </div>
    </div>
  </nav>
  <div id="mySidenav" class="sidenav">
  <a href="javascript:void(0)" class="closebtn" @click="closeNav()">&times;</a>
  <a href="#">About</a>
  <a href="#">Services</a>
  <a href="#">Clients</a>
  <a href="#">Contact</a>
</div>
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

  .sidenav {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
}

.sidenav a {
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
}

.sidenav a:hover {
  color: #f1f1f1;
}

.sidenav .closebtn {
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 36px;
  margin-left: 50px;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
</style>
