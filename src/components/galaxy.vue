<script setup></script>

<template>
 <section class="galaxy">
    <div class="container p-3">
      <div class="header">Power-up your performance</div>
      <div class="p-text pt-5 d-ms-none">
        Augue pellentesque egestas ipsum justo, dictum commodo in erat a. Vel bibendum consectetur
        convallis faucibus velit elementum lacus, ac. Rhoncus, risus tellus convallis gravida.
        Vestibulum odio dapibus ut laoreet. Quis aliquam massa arcu commodo enin, aenean eget at
        tellus. Blandit viverra nascetur amet tristique nunc laoreet. Massa elit semper nec eleifend
        tristique tristique. Tempor eu euismod tincidunt vestibulum nulla curabitur habitant. Sit
        consectetur et amet scelerisque adipiscing in sed adipiscing neque. Imperdiet in sed et
        imperdiet gravida facilisi morbi
      </div>
      <div class="p-text pt-4 d-ms-none">
        Egestas lectus amet volutpat turpis orci neque p entum. Eu ultrices Iaoreet facillisis diam
        egestas maecenas. At nisl ut aret, cursus ac imperalet mquris nidiculus daplbus. Praesent
        vitae, eu nune auctor ut pharetra. Adipiscing amet in commoda duis gravida sem mi.
        Consectetur et at sagittis vulputate sed orci yiverra sem amet. Tristique sit rhoncus sit
        enim cras consectetur quam vel interdum.
      </div>
      <div class="p-text d-lg-none d-md-block">
        Lorem ipsum dolor sit amet. consectetur adipiscing elit. Purus ipsum est facilisil mi sed
        nec ultrices. Ullamcorper ut proin arcu mi vel erat.
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.galaxy{
    background: url('../src/assets/image/power-up-1.png') no-repeat;
    background-size: 100% 110%;
    color: #fff;
    min-height: 450px;

     @media (max-width: 415px) {
        min-height: 200px;
      }

    .header{
        font-size: 45px;
        font-weight: bold;
        padding: 20px;

         @media (max-width: 415px) {
        font-size: 20px;
      }
    }

    .p-text{
        font-size: 18px;
    }
}

.d-ms-none{
    @media (max-width: 415px) {
        display: none;
      }
}
</style>
