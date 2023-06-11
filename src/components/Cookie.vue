<template>
  <div class="cookie">
    <img :src="cookieImg">
    <div>{{ cookieNum }}</div>
    <img :src="rechargeImg">
  </div>
</template>

<script setup>
import { ref } from 'vue'
import cookieImg from '@/assets/cookie.svg'
import rechargeImg from '@/assets/recharge.svg'

const cookieNum = ref(546)
</script>

<style scoped>
.cookie {
  background-color: darkslategray;
  display: grid;
  grid-template-columns: 32px 1fr 32px;
  align-items: center;
  border-radius: 25px;
  column-gap: 5px;
  padding-left: 5px;
}

.cookie>img {
  object-fit: fill;
  width: 100%;
  height: 100%;
}
</style>