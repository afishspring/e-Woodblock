<template>
  <div>
    <el-image class="lotus" :src="lotus" fit="contain" />
    <div class="box">
      <div class="mask">
        <div>今日已念{{ lectionName }}{{ readSentence }}句</div>
        <div>今天是你正念的第{{ dayNum }}天</div>
        <div>继续加油</div>
      </div>
    </div>
  </div>
</template>

<script setup name="Notion">
import { ref } from 'vue'
import lotus from '../assets/lotus.svg'
const lectionName = ref("《金刚经》")
const readSentence = ref(333)
const dayNum = ref(1)
</script>

<style scoped>
* {
  display: flex;
  justify-content: center;
  align-items: center;

  font-family: 'Microsoft YaHei UI';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;
  letter-spacing: 0.12em;

  color: #FFFFFF;

}

.lotus {
  height: 30%;
  width: 30%;
}

.box {
  width: 62vw;
  height: 12.5vh;

  box-sizing: border-box;
  padding: 2px;
  border-radius: 28px;
  background-image: linear-gradient(to right bottom, rgba(216, 216, 216, 1) 20%, rgba(0, 0, 0, 0)20%, rgba(0, 0, 0, 0)80%, rgba(216, 216, 216, 1) 80%);
}

.mask {
  width: 100%;
  height: 100%;

  border-radius: 28px;
  background-color: #5C6666;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

}
</style>