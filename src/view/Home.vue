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
            <el-button color="#273435" size="large" :icon="Operation" @click="menuDrawer = true" />
          </el-col>
          <el-col :span="16"></el-col>
          <el-col :span="4">
            <img :src="buddha" @click="menuDrawer = true" />
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup>
import HomePage from '@/components/HomePage.vue'
import WoodBlock from '@/components/WoodBlock.vue'
import {
  Operation,
  User
} from '@element-plus/icons-vue'
import buddha from '@/assets/Buddha.png'
</script>

<style scoped></style>