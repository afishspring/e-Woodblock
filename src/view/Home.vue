<template>
  <div style="height: -webkit-fill-available;">
    <el-container style="height: -webkit-fill-available;">
      <el-header>
        <el-row :gutter="20">
          <el-col :span="4">
            <HomePage />
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <WoodBlock />
      </el-main>
      <el-footer>
        <el-row :gutter="20">
          <el-col :span="4">
            <AdjustmentPage ref="adjComp" @menuDrawerClosed="onMenuDrawerClosed"/>
          </el-col>
          <el-col :span="16"></el-col>
          <el-col :span="4">
            <el-button color="#273435" size="large" :icon="User" />
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import {ref, watch, toRefs} from 'vue'
import HomePage from '@/components/HomePage.vue'
import WoodBlock from '@/components/WoodBlock.vue'
import { User } from "@element-plus/icons-vue"
import AdjustmentPage from "@/view/AdjustmentPage.vue"


const adjComp = ref(null)

const onMenuDrawerClosed=()=>{
  let msg = adjComp.value.ifAuto
  //👇
  //可以从这里获取数据
}


</script>

<style scoped></style>