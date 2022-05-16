<script setup></script>

<template>
  <section class="pt-1 banner">
    <div class="container">
      <div class="">
        <img class="banner-img" src="@/assets/image/click-through-rate.png" />
      </div>
      <div class="text">
        <H1> Higher click- through rates for your product </H1>
        <p class="text-detail">
          Don't stop tracking your product and better analyze your customers just too easy steps.
        </p>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
  .text-detail {
    color: #444141;
    font-size: 18px;
  }

  .banner {
    min-height: 500px;

    .text {
      padding-top: 150px;

      @media (max-width: 415px) {
        padding-top: 20px;
      }
    }
  }

  .banner-img {
    float: right;

    @media (max-width: 415px) {
       width: 300px;
       float: none;
    }
  }
</style>
