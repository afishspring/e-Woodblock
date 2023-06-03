<template>
  <Lection ref='childRef' />
  <el-row>
    <el-col :span="8">
      <el-image class="woodblockStyle" :src="woodblockImg" fit="contain" @click="fn" />
    </el-col>
  </el-row>
  <el-row>
    <el-text class="mx-1" size="large">{{ time }}</el-text>
  </el-row>
</template>

<script setup name="WoodBlock">
import woodblockImg from '../assets/Woodblock.png'
import Lection from './Lection.vue'
import { ref } from 'vue'
const time = "21:25"
let childRef = ref(null)
const fn = () => {
  childRef.value.play()
}
</script>

<style scoped>
* {
  justify-content: center;
}

.woodblockStyle {
  width: 100%;
  height: 100%;
}
</style>