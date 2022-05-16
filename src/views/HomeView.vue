<script setup>


  const dataInput = [{color:"red",price: 50}, {color:"orange",price: 120}, {color:"orange",price: 120},];
  const isMember = true
  function checkPrice (dataInput,isMember) {
    let price = 0;
    let checkset = dataInput.filter(item => item.color == "orange")
    if(isMember){
      let sumInput = 0
      if(checkset.length){
        dataInput.forEach(element => {
          sumInput += element.price;
      });

      const discount = (sumInput * 15)/100
      price = sumInput - (discount)
          return price;
      }
     else{
        dataInput.forEach(element => {
          sumInput += element.price;
      });

      const discount = (sumInput * 10)/100
      price = sumInput - discount
          return price;
      }
     } if(!isMember) {
      let sumInput = 0
      if(checkset.length){
        const discount_set = (sumInput * 5)/100
        price = sumInput - discount_set
          return price;
      }else {
      dataInput.forEach(element => {
          sumInput += element.price;
      });

      price = sumInput
          return price;
      }
     }
  }
</script>

<template>
  <main></main>
</template>

<style lang="scss" scoped></style>
