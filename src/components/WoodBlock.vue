<template>
  <div class="container">
    <Lection ref='childRef' style="height: 33.33vh;"/>
    <div></div>
    <notion/>
  </div>
  <el-image class="woodblockStyle" :src="woodblockImg" fit="contain" @click="fn" />
</template>

<script setup name="WoodBlock">
import woodblockImg from '../assets/Woodblock.png'
import notion from './Notion.vue'
import Lection from './Lection.vue'
import { ref } from 'vue'
import woodblockMusic from '../assets/wood-block-single-hit.mp3'
const time = "21:25"
let childRef = ref(null)
const fn = () => {
  childRef.value.play()
  const audio = new Audio(woodblockMusic)
  audio.play()
}
</script>

<style scoped>
* {
  justify-content: center;
  flex-direction: column;
}

.container {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
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
</style>