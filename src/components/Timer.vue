<template>
  <div v-if="countModel">
    <selfTimer />
  </div>
  <div v-else>
    <van-count-down :time="time" @change="fillZero">
    <template #default="timeData">
      <span :class="[{ timer: true }, { passed: hourPassed }]">{{ timeData.hours }}</span>
      <span :class="[{ timer: true }, { passed: hourPassed }]">:</span>
      <span :class="[{ timer: true }, { passed: minutePassed }]">{{ timeData.minutes }}</span>
      <span :class="[{ timer: true }, { passed: minutePassed }]">:</span>
      <span :class="[{ timer: true }, { passed: secondPassed }]">{{ timeData.seconds }}</span>
    </template>
  </van-count-down>
  </div>
  
</template>

<script setup>
import { ref, defineProps } from 'vue'
import selfTimer from '@/components/Self-Timer.vue'

const props = defineProps({
  countModel: {
    type: Boolean,
    default: false
  }
})

const time = ref(90000)
const timeData = ref(null)
const hourPassed = ref(false)
const minutePassed = ref(false)
const secondPassed = ref(false)

const fillZero = (timer) => {

  hourPassed.value = timer.hours == 0
  minutePassed.value = timer.hours == 0 & timer.minutes == 0
  secondPassed.value = timer.hours == 0 & timer.minutes == 0 & timer.seconds == 0

  if (timer.hours < 10) {
    timer.hours = '0' + timer.hours
  }
  if (timer.minutes < 10) {
    timer.minutes = '0' + timer.minutes
  }
  if (timer.seconds < 10) {
    timer.seconds = '0' + timer.seconds
  }
  timeData.value = timer
}
</script>

<style scoped>
.timer {
  display: inline-block;
  font-family: 'Segoe UI Symbol';
  font-style: normal;
  font-weight: 400;
  font-size: 60px;
  line-height: 80px;
  letter-spacing: 0.16em;
  color: rgba(255, 255, 255, 0.86);
  mix-blend-mode: lighten;
}

.passed {
  color: rgba(78, 78, 78, 0.86);
}
</style>