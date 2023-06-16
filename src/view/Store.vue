<template>
  <div style="background-color: rgb(228,228,228);height: 100vh;">
    <div class="toptab">
      <el-icon class="return" @click="returnHome">
        <ArrowLeft />
      </el-icon>
      <div class="title">商店</div>
      <div class="money">
        <cookie />
      </div>

    </div>

    <div class="tabContainer">
      <van-tabs v-model:active="active" type="card" swipeable color="#445e60" background="#445e60"
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

  </div>
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
    url: require("@/assets/woodblock-2.svg"),
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
html,
body {
  background-color: rgb(228, 228, 228);
}

.toptab {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  width: 100%;
  height: 65px;
  background: #445e60;
}

.return {
  left: 3vh;
  width: 23px;
  height: 23px;
}

.title {
  text-align: center;
  height: 19px;
  font-family: "Microsoft YaHei UI";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #ffffff;
}

.money {
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  right: 3vw;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  position: relative;
  left: 27%;
  margin-bottom: 50px;
}

.tabStyle {
  background-color: #445e60;
  border-radius: 20px;
  width: 100px;
  height: 30px;
  text-align: center;
  justify-content: center;
  align-items: center;
  display: flex;
}

.tabActive {
  background-color: rgb(128, 181, 128);
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
