<template>
  <div>
    <div>
      <span :class="[{ timer: true }, { passed: hourPassed }]">{{ formatTime.hours }}</span>
      <span :class="[{ timer: true }, { passed: hourPassed }]">:</span>
      <span :class="[{ timer: true }, { passed: minutePassed }]">{{ formatTime.minutes }}</span>
      <span :class="[{ timer: true }, { passed: minutePassed }]">:</span>
      <span :class="[{ timer: true }, { passed: secondPassed }]">{{ formatTime.seconds }}</span>
    </div>
    <div style="display: grid;grid-template-columns: 1fr 1fr 1fr;justify-items: center;">
      <div class="reset-button" @click="resetTimer">
        <img :src="resetTimerImg" alt="Reset" />
      </div>
      <div class="start-button" @click="startTimer">
        <img :src="startTimerImg" alt="Start" />
      </div>
      <div class="stop-button" @click="stopTimer">
        <img :src="stopTimerImg" alt="Stop" />
      </div>
    </div>

  </div>
</template>

<script setup name="selfTimer">
import { ref, watch, onBeforeUnmount, computed } from 'vue';
import startTimerImg from '@/assets/startTimer.png'
import stopTimerImg from '@/assets/stopTimer.png'
import resetTimerImg from '@/assets/resetTimer.png'

const timer = ref(null);
const time = ref(0);
const hourPassed = ref(false)
const minutePassed = ref(false)
const secondPassed = ref(false)

const startTimer = () => {
  if (timer.value === null) {
    timer.value = setInterval(() => {
      time.value++;
    }, 1000);
  }
};

const stopTimer = () => {
  if (timer.value !== null) {
    clearInterval(timer.value);
    timer.value = null;
  }
};

const resetTimer = () => {
  time.value = 0;
};

const formatTime = computed(() => {
  const hours = Math.floor(time.value / 3600);
  const minutes = Math.floor(time.value / 60);
  const seconds = time.value % 60;

  hourPassed.value = hours == 0
  minutePassed.value = hours == 0 & minutes == 0
  secondPassed.value = hours == 0 & minutes == 0 & seconds == 0

  const formattedHours = String(hours).padStart(2, '0');
  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return {
    hours: formattedHours,
    minutes: formattedMinutes,
    seconds: formattedSeconds
  };
});

onBeforeUnmount(() => {
  stopTimer();
});
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

.start-button,
.stop-button,
.reset-button {
  border: none;
  border-radius: 50%;
  background-color: #b56464;
  width: 60px;
  height: 60px;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.start-button img,
.stop-button img,
.reset-button img {
  width: 40px;
  height: 40px;
}
</style>
