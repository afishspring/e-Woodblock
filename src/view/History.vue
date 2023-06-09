<template>
  <div class="bg">
    <div class="toptab">
      <el-icon class="return" @click="goToHomePage"><ArrowLeft /></el-icon>
      <div class="title">正念历史</div>
    </div>
    <el-image class="History-bg" :src="bgImg" />
    <div class="month-bg">
      <div class="month-name">5月</div>
    </div>
    <div class="border1"></div>
    <div class="border2"></div>
    <div class="border3"></div>
    <div class="para1">
      <el-text class="text1">5月你一共正念了</el-text>
      <el-text class="main-content1">32h</el-text>
    </div>
    <div class="para2">
      <el-text class="text2"
        >你常在黄昏时
        <span class="main-content2">正念</span>
      </el-text>
    </div>
    <div class="para3">
      <el-text class="text3"
        ><span class="main-content3">《金刚经》</span>是正念时你的首选</el-text
      >
    </div>
    <div class="para4">
      <el-text class="text4"
        ><span class="main-content4">5月20日</span
        >是5月份正念最久的一天<br />你一共专注了<span class="main-content4"
          >10h</span
        ></el-text
      >
    </div>
    <el-image class="logo-img" :src="logoImg" />
  </div>
</template>

<script>
import { defineComponent, ref, watch } from "vue";

export default defineComponent({
  data() {
    return {
      bgImg: require("../assets/history_bg.png"),
      logoImg: require("../assets/history_logo.png"),
    };
  },
  methods: {
    goToHomePage() {
      this.$router.push({ name: 'home' });
    },
  },
});
</script>

<style scoped>
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #ffffff;
}

.toptab {
  position: absolute;
  width: 100%;
  height: 52px;
  left: 0px;
  top: 0px;
  background: #445e60;
}

.return {
  left: 3vh;
  top: 3vh;
  width: 23px;
  height: 23px;
}
.title {
  position: absolute;
  width: 100px;
  height: 19px;
  left: calc(50% - 65px / 2 + 0.5px);
  top: 25px;
  font-family: "Microsoft YaHei UI";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #ffffff;
}

.History-bg {
  position: absolute;
  width: 100%;
  height: 348px;
  left: 0;
  top: 52px;
}

.month-bg {
  position: absolute;
  width: 85px;
  height: 20px;
  left: calc(50% - 85px / 2 + 0.5px);
  top: 71px;
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.month-name {
  font-family: "Microsoft YaHei UI";
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.1em;
  color: #445e60;
}

.border1 {
  position: absolute;
  left: 35px;
  top: 154px;
  height: 150px;
  border-left: 2px solid #ffffff;
}

.border2 {
  position: absolute;
  left: 276px;
  top: 140px;
  width: 36px;
  border-top: 2px solid #ffffff;
}

.border3 {
  position: absolute;
  left: 312px;
  top: 140px;
  height: 140px;
  border-left: 2px solid #ffffff;
}
.para1 {
  width: 100%;
  font-style: normal;
  font-weight: 400;
  letter-spacing: 0.1em;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
.text1 {
  position: absolute;
  height: 27px;
  left: 34px;
  top: 127px;
  font-family: "Microsoft YaHei UI";

  font-size: 17px;
  line-height: 23px;
  color: rgba(255, 255, 255, 0.7);
}

.main-content1 {
  position: absolute;
  height: 53px;
  left: 196px;
  top: 110px;

  font-family: "Microsoft JhengHei UI";
  font-size: 38px;
  line-height: 49px;
  color: #ffffff;
}

.text2 {
  position: absolute;
  width: 100%;
  height: 57px;
  left: 125px;
  top: 169px;

  font-family: "Microsoft YaHei UI";
  font-style: normal;
  font-weight: 400;
  font-size: 17px;
  line-height: 23px;
  letter-spacing: 0.1em;

  color: rgba(255, 255, 255, 0.7);

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.main-content2 {
  font-family: "Microsoft YaHei UI";
  font-size: 26px;
  line-height: 29px;
  color: #ffffff;
}
.text3 {
  position: absolute;
  height: 64px;
  left: 34px;
  top: 212px;

  font-family: "Microsoft YaHei UI";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  letter-spacing: 0.1em;

  color: rgba(255, 255, 255, 0.7);

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.main-content3 {
  font-family: "Microsoft YaHei UI";
  font-size: 25px;
  line-height: 32px;
  color: #ffffff;
}

.text4 {
  position: absolute;

  height: 90px;
  left: 64px;
  top: 262px;

  font-family: "Microsoft YaHei UI";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.1em;
  color: rgba(255, 255, 255, 0.7);

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.main-content4 {
  color: #ffffff;
}

.logo-img {
  position: absolute;
  width: 36px;
  left: calc(50% - 36px / 2);
  top: 45vh;
}
</style>
