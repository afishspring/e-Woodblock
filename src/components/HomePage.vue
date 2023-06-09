<template>
  <img :src="personal" @click="menuDrawer = true">

  <el-drawer v-model="menuDrawer" title="I am the title" :with-header="false" direction="ltr" size="45%" style="background-color: #445E60;">
    <Personal/>
  </el-drawer>
</template>

<script setup name="HomePage">
import Personal from './Personal.vue'
import {ref}from 'vue'
import {
  Document,
  Menu,
  Location,
  Setting,
  Expand
} from '@element-plus/icons-vue'
import personal from "@/assets/personal.png"
const menuDrawer = ref(false)

</script>

<style scoped>

</style>
