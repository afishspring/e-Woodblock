<template>
    <img src="../assets/adjustment.png" @click="menuDrawer = true">
  <el-drawer class="ad-drawer" v-model="menuDrawer" title="I am the title" :with-header="false" direction="btt"
    size="85.75%" style="background-color: #445E60;border-radius: 10px">
    <div class="setting-box">
      <div class="adjustment-title-div">
        <div class="adjustment-title">敲击设置</div>
      </div>
      <div class="container">
        <van-field v-model="wordNum" is-link readonly label="敲击一次浮现的文字数" @click="showPicker1 = true" />
        <van-popup v-model:show="showPicker1" round position="bottom">
          <van-picker :columns="columns1" @cancel="showPicker1 = false" @confirm="onConfirm1" />
        </van-popup>
        <van-cell center title="自动敲击模式">
          <template #right-icon>
            <van-switch v-model="ifAuto" @click="toggle1" />
          </template>
        </van-cell>

        <van-field v-model="speed" is-link readonly label="自动敲击时间间隔" @click="showPicker2 = true" />
        <van-popup v-model:show="showPicker2" round position="bottom">
          <van-picker :columns="columns2" @cancel="showPicker2 = false" @confirm="onConfirm2" />
        </van-popup>
      </div>
      <div class="adjustment-title-div">
        <div class="adjustment-title">界面设置</div>
      </div>
      <div class="container">
        <div id="button-group1">
          <van-cell title="显示内容" value="" />
          <div id="group1" class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio1" id="btnradio1-1" autocomplete="off" checked>
            <label class="btn btn-outline-primary" for="btnradio1-1">经文</label>

            <input type="radio" class="btn-check" name="btnradio1" id="btnradio1-2" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio1-2">自定义</label>
          </div>
        </div>
        <van-field v-model="fieldValue3" is-link readonly label="显示的经文" @click="showPicker3 = true" />
        <van-popup v-model:show="showPicker3" round position="bottom">
          <van-picker :columns="columns3" @cancel="showPicker3 = false" @confirm="onConfirm3" />
        </van-popup>
        <van-field v-model="fieldValue4" is-link readonly label="结束经文后的操作" @click="showPicker4 = true" />
        <van-popup v-model:show="showPicker4" round position="bottom">
          <van-picker :columns="columns4" @cancel="showPicker4 = false" @confirm="onConfirm4" />
        </van-popup>
        <div id="button-group2">
          <van-cell title="屏幕方向" value="" />
          <div id="group2" class="btn-group" role="group" aria-label="Basic radio toggle button group">
            <input type="radio" class="btn-check" name="btnradio2" id="btnradio2-1" autocomplete="off" checked>
            <label class="btn btn-outline-primary" for="btnradio2-1">横屏</label>

            <input type="radio" class="btn-check" name="btnradio2" id="btnradio2-2" autocomplete="off">
            <label class="btn btn-outline-primary" for="btnradio2-2">竖屏</label>
          </div>
        </div>
      </div>
      <div class="adjustment-title-div">
        <div class="adjustment-title">声音设置</div>
      </div>
      <div class="container">
        <van-field v-model="music" is-link readonly label="背景音" @click="showPicker5 = true" />
        <van-popup v-model:show="showPicker5" round position="bottom">
          <van-picker :columns="columns5" @cancel="showPicker5 = false" @confirm="onConfirm5" />
        </van-popup>
        <van-field v-model="fieldValue6" is-link readonly label="音效" @click="showPicker6 = true" />
        <van-popup v-model:show="showPicker6" round position="bottom">
          <van-picker :columns="columns6" @cancel="showPicker6 = false" @confirm="onConfirm6" />
        </van-popup>
      </div>
    </div>
  </el-drawer>
</template>

<script setup>
import { defineEmits,defineExpose,ref, watch,getCurrentInstance } from 'vue'


const menuDrawer = ref(false)
const emits = defineEmits(['menuDrawerClosed']);
watch(menuDrawer, (newVal) => {
  if (!newVal) {
    // 当 menuDrawer 为 false 时触发父组件的事件
    emits('menuDrawerClosed');
  }
});



const columns1 = [
  { text: '1', value: '1' },
  { text: '2', value: '2' },
  { text: '3', value: '3' },
  { text: '4', value: '4' },
  { text: '5', value: '5' },
];
const columns2 = [
  { text: '0.25s', value: '0.25s' },
  { text: '0.5s', value: '0.5s'},
  { text: '0.75s', value: '0.75s'},
  { text: '1s', value: '1s' },
  { text: '2s', value: '2s' },
]

const columns3 = [
  { text: '金刚经', value: '金刚经' },
  { text: '心经', value: '心经' },
  { text: '坛经', value: '坛经' },
  { text: '维摩诘经', value: '维摩诘经' },
]
const columns4 = [
  { text: '循环当前佛经', value: '循环当前佛经' },
  { text: '顺序进行', value: '顺序进行' },
]
const columns5 = [
  { text: '无', value: '无' },
  { text: '水流', value: '水流' },
  { text: '鸟鸣', value: '鸟鸣' },
  { text: '雨天', value: '雨天' },
  { text: '篝火', value: '篝火' },
]

const columns6 = [
  { text: '音效1', value: '1' },
  { text: '音效2', value: '2' },
  { text: '音效3', value: '3' },
]

const wordNum = ref('1')
const speed = ref('1s')
const fieldValue3 = ref('金刚经')
const fieldValue4 = ref('循环佛经')
const music = ref('无')
const fieldValue6 = ref('音效1')
const ifAuto = ref(false)

const showPicker1 = ref(false)
const showPicker2 = ref(false)
const showPicker3 = ref(false)
const showPicker4 = ref(false)
const showPicker5 = ref(false)
const showPicker6 = ref(false)

const toggle1 = () => {
  ifAuto.value == 'ture' ? 'false' : 'true'
}
const onConfirm1 = ({ selectedOptions }) => {
  showPicker1.value = false
  wordNum.value = selectedOptions[0].text;
};
const onConfirm2 = ({ selectedOptions }) => {
  showPicker2.value = false;
  speed.value = selectedOptions[0].text
};
const onConfirm3 = ({ selectedOptions }) => {
  showPicker3.value = false
  fieldValue3.value = selectedOptions[0].text;
};
const onConfirm4 = ({ selectedOptions }) => {
  showPicker4.value = false
  fieldValue4.value = selectedOptions[0].text;
};
const onConfirm5 = ({ selectedOptions }) => {
  showPicker5.value = false
  music.value = selectedOptions[0].text;
};
const onConfirm6 = ({ selectedOptions }) => {
  showPicker6.value = false
  fieldValue6.value = selectedOptions[0].text;
};
defineExpose({
  wordNum,
  speed,
  fieldValue3,
  fieldValue4,
  music,
  fieldValue6,
  ifAuto })
</script>

<style scoped>

#button-group1 {
  position: relative;
  display: block;
}

#button-group2 {
  position: relative;
  display: block;
}

#group1 {
  position: absolute;
  right: 0;
  bottom: 12.5px;
}

#group2 {
  position: absolute;
  right: 0;
  bottom: 12.5px;
}

.btn-outline-primary {
  color: rgb(207, 213, 214);
  border-color: rgb(207, 213, 214);
  font-size: 10px;
  padding-top: 1.5px;
  padding-bottom: 1.5px;
}

.van-switch--on {
  background-color: rgb(128, 181, 128);
}

.btn-check:checked+.btn,
:not(.btn-check)+.btn:active,
.btn:first-child:active,
.btn.active,
.btn.show {
  color: #445E60;
  background-color: rgb(207, 213, 214);
  border-color: rgb(207, 213, 214);
}

.btn-check+.btn:hover {
  color: #445E60;
  background-color: rgb(207, 213, 214);
  border-color: rgb(207, 213, 214);
}

.container::v-deep .van-cell__title.van-field__label {
  width: auto;
  background-color: #445E60;
  color: rgba(207, 213, 214);
  justify-content: flex-start;
  text-align: left;
}

.container::v-deep .van-cell {
  background-color: #445E60;
  border-bottom: 0.5px solid rgba(255, 255, 255, 0.4);
  padding: 14px 0 12.5px 10px;
  color: rgba(207, 213, 214);
}

.container::v-deep .van-cell:after {
  position: relative;

}

.container::v-deep .van-field__control {
  text-align: right;
  color: rgba(255, 255, 255, 0.74);
}

.adjustment-title-div {
  position: relative;
  height: 20%;
  text-align: center;
  padding: 20px 20px 20px 20px;
  margin-top: 30px;
}

.adjustment-title-div::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: white;
  transform: translateY(-50%);
}

.adjustment-title {
  position: absolute;
  top: 40%;
  left: 15%;
  transform: translate(-50%, -50%);
  font-weight: bold;
  background-color: white;
  padding: 4px 10px;
  background-color: #445E60;
  z-index: 100;

}
</style>