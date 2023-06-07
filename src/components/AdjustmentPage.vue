<template>
    <el-button color="#273435" size="large" :icon="Operation" @click="menuDrawer = true" />
    <el-drawer class="ad-drawer" v-model="menuDrawer" title="I am the title" :with-header="false" direction="btt" size="85.75%" style="background-color: #445E60;border-radius: 10px">
    <AdjustmentContent/>
    </el-drawer>
  </template>
  
  <script setup name="Adjustment">

  import {ref}from 'vue'
  import { Operation } from "@element-plus/icons-vue"
  import AdjustmentContent from './AdjustmentContent.vue'
  const menuDrawer = ref(false)
  </script>

  <style scoped>
  </style>
  