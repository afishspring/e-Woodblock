<template>
  <div v-if="countModel">
    <selfTimer ref="timerStart" />
  </div>
  <div v-else>
    <div class="timerPicker" v-if="!mindfulModel">
      <van-time-picker v-model="currentTime" :columns-type="['minute']" :visible-option-num="3" :show-toolbar="false"
        :min-minute="5" :max-minute="120" :filter="filter" @change="refreshTimer" />
      <span class="timer">: 00</span>
    </div>
    <div class="countDown" v-else>
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
  </div>
</template>

<script setup>
import { ref, defineProps, watch } from 'vue'
import selfTimer from '@/components/Self-Timer.vue'

const timerStart = ref(null)
watch(() => props.mindfulModel, (newValue, oldValue) => {
  if (props.countModel) {
    newValue?timerStart.value.startTimer():timerStart.value.stopTimer()
    timerStart.value.resetTimer()
  }
}), { immediate: true }


const currentTime = ref(['30'])
const props = defineProps({
  countModel: {
    type: Boolean,
    default: false

  },
  mindfulModel: {
    type: Boolean,
    default: false
  }
})

const time = ref((30 * 60 + 1) * 1000)
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

const filter = (type, options) => {
  if (type === 'minute') {
    return options.filter((option) => Number(option.value) % 5 === 0);
  }
  return options;
};

const refreshTimer = () => {
  time.value = (currentTime.value * 60 + 1) * 1000
}
</script>

<style scoped>
.timer {
  display: inline-block;
  font-family: 'Segoe UI Symbol';
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  letter-spacing: 0.16em;
  color: rgba(255, 255, 255, 0.86);
  mix-blend-mode: lighten;
}

.passed {
  color: rgba(78, 78, 78, 0.86);
}

.timerPicker {
  display: flex;
  align-items: center;
}

.timerPicker:deep(.van-picker) {
  background: none;
}

.timerPicker:deep(.van-picker__mask) {
  background-image: linear-gradient(180deg, rgba(39, 52, 53, .9), rgba(39, 52, 53, .1)),
    linear-gradient(0deg, rgba(39, 52, 53, .9), rgba(39, 52, 53, .1)) !important;
}

.timerPicker:deep(.van-picker-column__item) {
  color: white;
  background-color: rgb(39, 52, 53);

  font-family: 'Segoe UI Symbol';
  font-style: normal;
  font-weight: 400;
  font-size: 45px;
  letter-spacing: 0.16em;
  color: rgba(255, 255, 255, 0.86);
  mix-blend-mode: lighten;
}

.timerPicker:deep(.van-picker__frame) {
  display: none;
}
</style>