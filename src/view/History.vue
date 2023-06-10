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
  <div class="data-bg">
    <el-text class="count-title">正念时间统计</el-text>
    <el-text class="focus">累计专注时长:</el-text>
    <el-text class="focus-duration">32h</el-text>
    <div id="chart" class="focus-chart"></div>
  </div>
  <!-- <div id="chart" class="chart"></div> -->
</template>

<script>
import { defineComponent, ref, watch } from "vue";
import * as echarts from "echarts";

export default defineComponent({
  data() {
    return {
      bgImg: require("../assets/history_bg.png"),
      logoImg: require("../assets/history_logo.png"),
    };
  },
  methods: {
    goToHomePage() {
      this.$router.push({ name: "home" });
    },
    initChart() {
      const chartElement = this.$refs.chart;
      const chart = echarts.init(document.getElementById("chart"));

      const option = {
        xAxis: {
          type: "category",
          data: [
            "00:00",
            "01:00",
            "02:00",
            "03:00",
            "04:00",
            "05:00",
            "06:00",
            "07:00",
            "08:00",
            "09:00",
            "10:00",
            "11:00",
            "12:00",
            "13:00",
            "14:00",
            "15:00",
            "16:00",
            "17:00",
            "18:00",
            "19:00",
            "20:00",
            "21:00",
            "22:00",
            "23:00",
          ],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [
              1, 0.5, 0.2, 0, 0, 0, 0, 0.6, 0.4, 0.7, 0.4, 0.2, 0.3, 0.2, 1.6,
              1.7, 1.8, 3, 1.3, 2.3, 3.3, 5.2, 4.3, 3,
            ],
            type: "bar",
            itemStyle: {
              color: {
                type: "linear",
                x: 0,
                y: 0,
                x2: 0,
                y2: 1,
                colorStops: [
                  { offset: 0, color: "#769b81" }, // 较低值的颜色
                  { offset: 1, color: "#76c681" }, // 较高值的颜色
                ],
              },
            },
          },
        ],
      };

      chart.setOption(option);
    },
  },
  mounted() {
    this.initChart();
  },
});
</script>

<style scoped>
.bg {
  position: fixed;
  width: 100%;
  height: 100%;
  background: #e0e0e0;
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
  left: 45px;
  top: 154px;
  height: 150px;
  border-left: 2px solid #ffffff;
}

.border2 {
  position: absolute;
  left: 286px;
  top: 140px;
  width: 36px;
  border-top: 2px solid #ffffff;
}

.border3 {
  position: absolute;
  left: 322px;
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
  left: 44px;
  top: 127px;
  font-family: "Microsoft YaHei UI";

  font-size: 17px;
  line-height: 23px;
  color: rgba(255, 255, 255, 0.7);
}

.main-content1 {
  position: absolute;
  height: 53px;
  left: 206px;
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
  left: 135px;
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
  left: 44px;
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
  left: 74px;
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

.data-bg {
  position: absolute;
  width: 328px;
  height: 350px;
  left: calc(50% - 328px / 2);
  top: 370px;

  background: #f3f2f2;
  border-radius: 22px;
}

.count-title {
  position: absolute;
  left: 20px;
  top: 20px;
  font-family: "Microsoft YaHei UI";
  font-weight: bold;
  font-size: 18px;
}

.focus {
  position: absolute;
  left: 20px;
  top: 52px;
  font-family: "Microsoft YaHei UI";
  color: #838383;
}

.focus-duration {
  position: absolute;
  left: 120px;
  top: 52px;
  font-family: "Microsoft YaHei UI";
  color: #6d9d84;
}

.focus-chart {
  position: absolute;
  left: -5px;
  top: 50px;
  width: 350px;
  height: 300px;
}
</style>
