<script setup></script>

<template>
  <footer class="wrapper">
    <div class="footer">
      <div class="navbar navbar-expand-lg">
        <div class="navbar-brand" href="#">
          <img src="@/assets/image/logo-alone.png" class="" width="80" height="50" alt="logo" />
        </div>
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#">Ornare</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Mattis</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Pellentesque</a>
          </li>
        </ul>
      </div>
      <div class="social d-flex">
        <div>
          <img class="" src="@/assets/image/facebook-logo.png" />
        </div>
        <div>
          <img class="" src="@/assets/image/twitter-logo.png" />
        </div>
        <div>
          <img class="" src="@/assets/image/instagram-logo.png" />
        </div>
        <div>
          <img class="" src="@/assets/image/twitter-logo.png" />
        </div>
      </div>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
  .w-50 {
    width: 50%;
  }

  .navbar-brand {
    @media (max-width: 576px) {
      width: 100%;
      img {
        float: left;
      }
    }
  }
  .social {
    div {
      cursor: pointer;
      padding-left: 5px;
      padding-right: 5px;
    }
  }

  .wrapper {
    background: #fff;
    font-size: 0.9rem;
    color: #6c757d;
    padding: 1rem 0;

    .footer {
      display: flex;
      justify-content: space-between;
      line-height: 1.7rem;
      margin: 0 auto;
      width: 100%;
      padding: 1rem 0;

      @media (max-width: 576px) {
        width: 100%;
        padding: 1rem;
        flex-direction: column;
      }

      .nav-link{
          color: #494f53;
      }

    }
  }
</style>
