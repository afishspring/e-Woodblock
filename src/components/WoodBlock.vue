<template>
  <div class="container">
    <div>
      <div v-show="mindfulModel">
        <Lection :mindfulModel="props.mindfulModel" ref="childRef" :wordNum="props.wordNum" />
      </div>
      <div v-show="!mindfulModel">
        <notion />
      </div>
    </div>

    <div></div>
    <div style="display: flex; justify-content: center;align-items: center;">
      <timer :countModel="props.timerModel" :mindfulModel="props.mindfulModel" />
    </div>
  </div>
  <el-image class="woodblockStyle" :src="woodblockImg" fit="contain" @click="beatWoodblock" />
</template>

<script setup name="WoodBlock">
import { ref, watch } from "vue";
import { defineProps, getCurrentInstance } from "vue";

import woodblockImg from "@/assets/woodblock.svg";
import notion from "@/components/Notion.vue";
import timer from "@/components/Timer.vue";
import Lection from "@/components/Lection.vue";
import woodblockMusic from "@/assets/wood-block-single-hit.mp3";
import birdMusic from "@/assets/bird.wav";
import waterMusic from "@/assets/water.wav";
import rainMusic from "@/assets/rain.wav";
import fireMusic from "@/assets/fire.wav";
const music = ref("");
let childRef = ref(null);
const beatWoodblock = () => {
  if (props.mindfulModel == true) {
    childRef.value.play();
    const audio = new Audio(woodblockMusic);
    audio.play();
  }
};
const props = defineProps({
  //每次浮现的字数
  wordNum: {
    type: Number,
    default: 1,
  },
  // 是否自动敲击
  ifAuto: {
    type: Boolean,
    default: false,
  },
  // 是否进入专注模式（开始计时）
  mindfulModel: {
    type: Boolean,
    default: false,
  },
  // 计时器模式
  timerModel: {
    type: Boolean,
    default: false,
  },
  speed: {
    type: Number,
    default: 1,
  },
  //背景音
  music: {
    type: String,
    default: "无",
  },
});
let interval = null; // 声明 interval 变量
let backaudio1 = new Audio(waterMusic);
let backaudio2 = new Audio(birdMusic);
let backaudio3 = new Audio(rainMusic);
let backaudio4 = new Audio(fireMusic);
watch(
  () => props.speed,
  (newValue) => {
    console.log(newValue);
  }
);

//监听用户背景音选择

// 监听用户是否进入专注页面
// mindfulModel: boolean, true表示用户进入
// 用户进入专注页面后，根据其是否选择自动模式来选择是否自动敲击
// 后期开发逻辑可能更改
watch(
  () => props.mindfulModel,
  (newValue) => {
    if (newValue == true) {
      if (props.ifAuto == true) {
        if (interval) {
          clearInterval(interval);
        }
        interval = setInterval(() => {
          beatWoodblock();
          if (props.ifAuto == false) {
            clearInterval(interval);
          }
        }, 1000);
      }
      if (props.music == "水流") {
        backaudio1.currentTime = 0;
        backaudio1.play();
      } else if (props.music == "鸟鸣") {
        backaudio2.currentTime = 0;
        backaudio2.play();
      } else if (props.music == "雨天") {
        backaudio3.currentTime = 0;
        backaudio3.play();
      } else if (props.music == "篝火") {
        backaudio4.currentTime = 0;
        backaudio4.play();
      }
    } else {
      if (props.music == "水流") {
        backaudio1.pause();
      } else if (props.music == "鸟鸣") {
        backaudio2.pause();
      } else if (props.music == "雨天") {
        backaudio3.pause();
      } else if (props.music == "篝火") {
        backaudio4.pause();
      }
      clearInterval(interval);
    }
  }
),
  { immediate: true };


watch(() => props.music, (newValue, oldValue) => {
  if (props.mindfulModel == true) {
    if (newValue == "水流") {
      backaudio1.currentTime = 0;
      backaudio1.play();
    } else if (newValue == "鸟鸣") {
      backaudio2.currentTime = 0;
      backaudio2.play();
    } else if (newValue == "雨天") {
      backaudio3.currentTime = 0;
      backaudio3.play();
    } else if (newValue == "篝火") {
      backaudio4.currentTime = 0;
      backaudio4.play();
    }
    if (oldValue == "水流") {
      backaudio1.pause();
    } else if (oldValue == "鸟鸣") {
      backaudio2.pause();
    } else if (oldValue == "雨天") {
      backaudio3.pause();
    } else if (oldValue == "篝火") {
      backaudio4.pause();
    }
  }
})
watch(
  () => props.speed,
  (newValue) => {
    clearInterval(interval);
    if (props.ifAuto == true) {
      interval = setInterval(() => {
        beatWoodblock();
        if (props.ifAuto == false) {
          clearInterval(interval);
        }
      }, newValue * 1000);
    }
  }
);

// 监听用户是否开启自动模式
// 当用户已进入专注页面时，开启自动模式后将自动敲击
watch(
  () => props.ifAuto,
  (newValue) => {
    if (newValue == true) {
      if (props.mindfulModel == true) {
        if (interval) {
          clearInterval(interval); // 清除旧的 interval
        }
        interval = setInterval(() => {
          beatWoodblock();
          if (props.ifAuto == false) {
            clearInterval(interval);
          }
        }, props.speed * 1000);
      }
    } else {
      clearInterval(interval);
    }
  }
);
</script>

<style scoped>
* {
  justify-content: center;
  flex-direction: column;
}

.container {
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  gap: 5px;
  height: 100%;
}

.woodblockStyle {
  width: 80vw;
  height: 60vw;
  margin: auto;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.counterContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 25px;
}

.counter {
  display: flex;
  align-items: center;
  background-color: #5c6666;
  width: 60px;
  height: 40px;
  text-align: center;
  border-radius: 20px;
}

.summary {
  font-family: "Microsoft YaHei UI";
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  line-height: 30px;
  letter-spacing: 0.12em;

  color: rgba(255, 255, 255, 0.85);
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
