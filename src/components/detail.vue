<script setup></script>

<template>
  <section class="detail">
    <div class="detail-body pt-5 pb-2">
      <div class="justify-center">
        <H1> How BetterGoods works? </H1>
        <div class="head-menu">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Purus ipsum est facilisi mi sed nec
        ultrices. Ullamcorper ut proin arcu mi vel erat.</div>
      </div>
      <div>
        <div class="card-deck mt-4">
          <div class="card">
            <img class="card-img-top" src="@/assets/image/how-it-work-1.png"/>
            <div class="ml-4 mr-4 text-left">
              <p class="card-text-head">1. Lorem ipsum oder</p>
              <p class="card-text-small">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="@/assets/image/how-it-work-2.png" />
            <div class="ml-4 mr-4 text-left">
              <p class="card-text-head">2. Odee lorem ipsum</p>
              <p class="card-text-small">
                Velit risus semper proin ac, aliquam tristique justo vulputate augue.
              </p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="@/assets/image/how-it-work-3.png"/>
            <div class="ml-4 mr-4 text-left">
              <p class="card-text-head">3. Yopus orem ipsum oder</p>
              <p class="card-text-small">Maecenas ultricies amet justo, egestas enim tempus diam leo.</p>
            </div>
          </div>
          <div class="card">
            <img class="card-img-top" src="@/assets/image/how-it-work-4.png" />
            <div class="ml-4 mr-4 text-left">
              <p class="card-text-head">4. Momu ipsum lorem</p>
              <p class="card-text-small">Mauris odio fames porta fames facilisis cursus enim.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.card{
    border: none;
}

.detail,.card{
    background-color: #f8f4ef;
}
.head-menu{
    font-size: 16px;
    max-width: 800px;
    display: inline-block;  
}

.detail-body{
    width: 100%;
    padding-right: 5px;
    padding-left: 5px;
    margin-right: auto;
    margin-left: auto;

    @media (min-width: 576px) {
            max-width: 570px;
    }

     @media (min-width: 768px) {
            max-width: 730px;
    }

     @media (min-width: 992px) {
            max-width: 970px;
    }

     @media (min-width: 1200px) {
            max-width: 1286px;
    }
}

.card-text{
    &-head{
        font-weight: bold;
    }
    &-small{
        color: #4c4e4e;
    }
}

</style>