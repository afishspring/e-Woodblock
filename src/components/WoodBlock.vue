<template>
  <Lection/>
  <el-row>
    <el-image class="woodblockStyle" :src="url" :zoom-rate="1.2" fit="cover" />
  </el-row>
  <el-row>
    <el-text class="mx-1" size="large">{{ time }}</el-text>
  </el-row>
  
</template>

<script setup name="WoodBlock">
import Lection from './Lection.vue'
const time="21:25"
const url = 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
</script>

<style scoped>
*{
  justify-content: center;
}
.woodblockStyle {
  width: 100px;
  height: 100px
}
</style>