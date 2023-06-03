<template>
  <div class="common-layout">
    <el-container>
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
            <el-button color="#273435" size="large" :icon="User" @click="menuDrawer = true" />
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
  </div>
</template>

<script setup name="App">
import HomePage from './components/HomePage.vue'
import WoodBlock from './components/WoodBlock.vue'
import {
  Operation,
  User
} from '@element-plus/icons-vue'
</script>

<style>
html,
body,
#app {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: #273435;
  text-align: center;
}
</style>
