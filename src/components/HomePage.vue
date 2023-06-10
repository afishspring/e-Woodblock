<template>
  <div class="navigation">
    <div @click="menuDrawer = true" style="display: flex;align-items: center;">
      <img :src="personal" style="height: 23px;">
    </div>

    <div class="counterContainer">
      <van-switch v-model="timerModel" @change="timerModelSet" active-color="rgba(217, 217, 217, 0.3)"
        inactive-color="rgba(217, 217, 217, 0.3)" size="18vw">
        <template #node>
          <div class="icon-wrapper">
            <img :src="countup" v-if="timerModel">
            <img :src="countdown" v-else>
          </div>
        </template>
      </van-switch>
    </div>

    <el-drawer v-model="menuDrawer" title="I am the title" :with-header="false" direction="ltr" size="45%"
      style="background-color: #445E60;">
      <Personal />
    </el-drawer>
  </div>
</template>

<script setup name="HomePage">
import Personal from './Personal.vue'
import {ref}from 'vue'
import personal from "@/assets/personal.png"
import countup from '@/assets/countup.png'
import countdown from '@/assets/countdown.png'

const timerModel=ref(false)
const emit = defineEmits(['timerModelSet'])
const timerModelSet = () => {
  let param = timerModel.value
  emit('timerModelSet', param)
}
</script>

<style scoped>
.navigation {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  margin-top: 10px;
}

.counterContainer {
  display: flex;
  justify-content: center;
}

.icon-wrapper {
  display: flex;
  width: 100%;
  justify-content: center;
  font-size: 18px;
}
.navigation:deep(.van-switch) {
  border-radius: 5px;
  height:36px;
}
.navigation:deep(.van-switch__node) {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: cadetblue;
  border-radius: 5px;
  height:32px;
}
</style>
