<template>
  <!-- <el-image class="lotus" :src="lotus" fit="contain" /> -->
  <div class="box">
    <div class="mask">
      <el-carousel :interval="5000" :loop="true" height="15vh">
        <el-carousel-item v-for="(item, index) in notionTXT" :key="index">
          <div style="margin:auto">
            <div>{{ item }}</div>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script setup name="Notion">
import { ref, defineProps, computed } from 'vue'
import lotus from '../assets/lotus.svg'
const props = defineProps({
  lectionName: {
    type: String,
    default: "《金刚经》"
  },
  readSentence: {
    type: Number,
    default: 333
  },
  dayNum: {
    type: Number,
    default: 1
  }
})

const notionTXT = computed(
  () => {
    return [
      "今日已念" + props.lectionName + props.readSentence + "句",
      "今天是你正念的第" + props.dayNum + "天",
      "继续加油"
    ]
  }
)
</script>

<style scoped>
* {
  font-family: 'Microsoft YaHei UI';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.12em;

  color: #FFFFFF;

}

.lotus {
  height: 30px;
  width: 30px;
}

.box {
  width: 80vw;
  height: 15vh;
  margin: auto;
  box-sizing: border-box;
  padding: 2px;
  border-radius: 28px;
  background-image: linear-gradient(to right bottom, rgba(216, 216, 216, 1) 20%, rgba(0, 0, 0, 0)20%, rgba(0, 0, 0, 0)80%, rgba(216, 216, 216, 1) 80%);
}

.mask {
  width: 100%;
  height: 100%;
  text-align: center;
  border-radius: 28px;
  background-color: #5C6666;
}

.el-carousel__item {
  display: flex;
}
</style>