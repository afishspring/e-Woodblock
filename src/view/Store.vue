<template>
  <van-nav-bar style="background-color: cadetblue;position: unset;" @click-left="returnHome">
    <template #left>
      <van-icon name="arrow-left" size="18" color="white" />
    </template>
    <template #title>
      <div style="color: white;font-size: larger;">商店</div>
    </template>
    <template #right>
      <cookie />
    </template>
  </van-nav-bar>

  <div class="tabContainer">
    <van-tabs v-model:active="active" type="card" swipeable color="cadetblue" background="cadetblue"
      title-active-color="white" title-inactive-color="white" @change="tabPick">
      <van-tab>
        <template #title>
          <div :class="[{ tabStyle: true }, { tabActive: active == 0 }]">木鱼样式</div>
        </template>
        <template #default>
          <div class="cardCanvas">
            <storeCard v-for="(item, index) in card" :key="index" :cardInfo="item" @click="detailShow(index)" />
          </div>
        </template>
      </van-tab>
      <van-tab>
        <template #title>
          <div :class="[{ tabStyle: true }, { tabActive: active == 1 }]">限时特惠</div>
        </template>
        <van-empty description="敬请期待" />
      </van-tab>
      <van-tab>
        <template #title>
          <div :class="[{ tabStyle: true }, { tabActive: active == 2 }]">环境声音</div>
        </template>
        <van-empty description="敬请期待" />
      </van-tab>
    </van-tabs>
  </div>

  <van-overlay :show="overlayShow" @click="overlayShow = false">
    <div class="wrapper">
      <van-swipe :initial-swipe="overlayIndex">
        <van-swipe-item v-for="(item, index) in card" :key="index">
          <storeCard :cardInfo="item" class="block" />
        </van-swipe-item>
      </van-swipe>
    </div>
  </van-overlay>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from "vue-router";
import storeCard from '@/components/StoreCard.vue'
import cookie from '@/components/Cookie.vue'

const router = useRouter();
const returnHome = () => {
  router.push({
    path: '/',
  })
}
const active = ref(0)
const tabPick = (e) => {
  active.value = e
}

const card = ref([
  {
    name: "木鱼",
    url: require("@/assets/woodblock.svg"),
    price: 0,
    buy: true
  },
  {
    name: "木鱼",
    url: require("@/assets/woodblock-1.svg"),
    price: 50,
    buy: false
  },
  {
    name: "木鱼",
    url: require("@/assets/woodblock-2.png"),
    price: 150,
    buy: false
  },
  {
    name: "战鼓",
    url: require("@/assets/woodblock-3.svg"),
    price: 75,
    buy: false
  }
])

const overlayShow = ref(false)
const overlayIndex = ref(null)
const detailShow = (cardIndex) => {
  overlayShow.value = true
  overlayIndex.value = cardIndex
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  position: relative;
  left: 25%;
  margin-bottom: 50px;
}

.tabStyle {
  background-color: cadetblue;
  border-radius: 20px;
  width: 100px;
  height: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
}

.tabActive {
  background-color: #5c6666;
}

.tabContainer:deep(.van-tabs__wrap) {
  height: 40px !important;
}

.tabContainer:deep(.van-tabs__nav--card) {
  height: inherit;
  margin: 0;
}

.cardCanvas {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 10px;
}
</style>
