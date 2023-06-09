<template>
  <div class="container">
    <div class="counterContainer">
      <div class="counter" v-show="mindfulModel" @click="timerModel=true">
        <img :src="countup">
      </div>
      <div class="counter" v-show="mindfulModel" @click="timerModel=false">
        <img :src="countdown">
      </div>
    </div>

    <div>
      <div v-show="mindfulModel">
        <Lection ref='childRef' style="height: 33.33vh;" />
      </div>
      <div v-show="!mindfulModel">
        <div class="summary" v-text="'您已经正念了 '+mindfulTime+' 分钟'"></div>
      </div>
    </div>

    <div></div>
    <div style="display: flex;justify-content:center ;">
      <div v-if="!mindfulModel">
        <notion />
      </div>
      <div v-else>
        <timer :countModel="timerModel"/>
      </div>
    </div>
    <button @click="play">auto</button>
  </div>
  <el-image class="woodblockStyle" :src="woodblockImg" fit="contain" @click="fn" />
</template>

<script setup name="WoodBlock">
import { ref } from 'vue'
import { defineProps, getCurrentInstance } from "vue"

import woodblockImg from '@/assets/Woodblock.png'
import countup from '@/assets/countup.png'
import countdown from '@/assets/countdown.png'
import notion from '@/components/Notion.vue'
import timer from '@/components/Timer.vue'
import Lection from '@/components/Lection.vue'
import woodblockMusic from '@/assets/wood-block-single-hit.mp3'
const timerModel=ref(false)
const mindfulTime = ref(25)

let childRef = ref(null)
const fn = () => {
  childRef.value.play()
  const audio = new Audio(woodblockMusic)
  audio.play()
}
const props = defineProps({
  ifAuto: {
    type: Boolean,
    default: false
  },
  mindfulModel: {
    type: Boolean,
    default: false
  }
})

const play = () => {
  if (props.ifAuto == true) {
    let interval = setInterval(() => {
      fn()
      if (props.ifAuto == false) {
        clearInterval(interval)
      }
    }, 1000);
  }
}
</script>

<style scoped>
* {
  justify-content: center;
  flex-direction: column;
}

.container {
  display: grid;
  grid-template-rows: 50px 1fr 1fr 1fr;
  gap: 5px;
  height: 100%;
  justify-items: center;
}

.woodblockStyle {
  width: 80vw;
  height: 60vw;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.counterContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 25px;
}

.counter {
  display: flex;
  align-items: center;
  background-color: #5C6666;
  width: 60px;
  height: 40px;
  text-align: center;
  border-radius: 20px
}

.summary {
  font-family: 'Microsoft YaHei UI';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.12em;

  color: rgba(255, 255, 255, 0.85);
}
</style>