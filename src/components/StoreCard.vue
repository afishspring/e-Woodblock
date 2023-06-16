<template>
  <div class="cardContainer">
    <div class="cardInfo">
      <div class="cardImg">
        <img :src="props.cardInfo.url">
      </div>
      <div class="cardName">
        {{ props.cardInfo.name }}
      </div>
    </div>
    <div class="cardPrice">
      <div v-if="props.cardInfo.buy" style="color: #848484;">
        已解锁
      </div>
      <div v-else style="color: #848484;align-items: center;display: flex;">
        {{ props.cardInfo.price }}
        <img :src="cookie" style="height: 32px;">
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import cookie from '@/assets/cookie.svg'

const props = defineProps({
  cardInfo: {
    name: String,
    price: Number,
    url: String,
    buy: Boolean
  }
})

</script>

<style scoped>
.cardContainer {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 45vw;
  margin-top: 10px;
  row-gap: 5px;
}

.cardInfo {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: currentColor;
  border-radius: 10px;
}

.cardImg {
  height: 120px;
  margin-top: 8px;
  width: 40vw;
  border: solid 2px lightgray;
  border-radius: 15px;
  box-sizing: content-box;
  padding: 15px 0;
  background-color: #a5a5a59e;
}

.cardImg>img {
  object-fit: contain;
  height: 100%;
  width: 100%;
}

.cardName {
  text-align: center;
  margin:10px 0;
  font-size: 16px;
  line-height: 1.5;
  color: black;
}

.cardPrice {
  text-align: center;
  margin-top: 10px;
}
</style>