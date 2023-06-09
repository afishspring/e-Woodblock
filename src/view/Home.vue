<template>
  <div style="height: -webkit-fill-available;">
    <el-container style="height: -webkit-fill-available;">
      <el-header>
        <el-row :gutter="20">
          <el-col :span="4">
            <div v-show="!mindfulModel">
              <HomePage/>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <WoodBlock :mindfulModel="mindfulModel" :ifAuto="ifAuto" :mindful-model="mindfulModel"/>
      </el-main>
      <el-footer>
        <el-row :gutter="20">
          <el-col :span="4">
            <AdjustmentPage ref="adjComp" @menuDrawerClosed="onMenuDrawerClosed" />
          </el-col>
          <el-col :span="16"></el-col>
          <el-col :span="4">
            <img :src="mindfulModel?exit:buddha" @click="changeModel">
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

const ifAuto = ref(false)

const onMenuDrawerClosed = () => {
  ifAuto.value = adjComp.value.ifAuto
  //👇
  //可以从这里获取AdjustmentPage的数据
}


const mindfulModel=ref(false)
// 表示用户是否进入专注页面


const changeModel = () => {
  mindfulModel.value=!mindfulModel.value
}

</script>

<style scoped></style>