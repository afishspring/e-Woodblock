<template>
  <div style="height: -webkit-fill-available;">
    <el-container style="height: -webkit-fill-available;">
      <el-header>
        <div v-show="!mindfulModel">
          <HomePage @timerModelSet="timerModelChange" />
        </div>
      </el-header>
      <el-main>
        <WoodBlock :mindfulModel="mindfulModel" :ifAuto="ifAuto" :timerModel="timerModel" />
      </el-main>
      <el-footer>
        <el-row :gutter="20">
          <el-col :span="4">
            <AdjustmentPage ref="adjComp" @menuDrawerClosed="onMenuDrawerClosed" />
          </el-col>
          <el-col :span="16"></el-col>
          <el-col :span="4">
            <img :src="mindfulModel ? exit : buddha" @click="changeModel">
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>

import { ref, defineProps } from 'vue'
import HomePage from '@/components/HomePage.vue'
import WoodBlock from '@/components/WoodBlock.vue'
import { User } from "@element-plus/icons-vue"
import AdjustmentPage from "@/view/AdjustmentPage.vue"
import buddha from "@/assets/Buddha.png"
import exit from "@/assets/exit.png"

const adjComp = ref(null)
const wordNum = ref(1)
const ifAuto = ref(false)
const speed = ref(1)

const onMenuDrawerClosed = () => {
  // 获取wordNum并将其转化为数字
  wordNum.value = parseInt(adjComp.value.wordNum)
  // 获取ifAuto
  ifAuto.value = adjComp.value.ifAuto
  // 获取speed并将其转化为数字
  speed.value = adjComp.value.speed
  const regex = /(\d+(\.\d+)?)/;
  const match = speed.value.match(regex);
  if (match) {
    speed.value = parseFloat(match[0]);
  }
  //👇
  //可以从这里获取AdjustmentPage的数据
}

const mindfulModel = ref(false)
// 表示用户是否进入专注页面

const timerModel = ref(false)
const timerModelChange = (model) => {
  timerModel.value = model
}

const changeModel = () => {
  mindfulModel.value = !mindfulModel.value

}

</script>

<style scoped></style>