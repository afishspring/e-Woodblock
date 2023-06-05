<template>
  <div class="drawer">
    <div class="container">
      <div class="flexBox">
        <el-avatar :size="80" :src="circleUrl" />
        <el-text size="large" class="name">Fishspring</el-text>
      </div>
      <div class="flexBox">
        <el-image :src="historyImg" fit="contain" />
        <router-link class="function" to="/history">正念历史</router-link>
      </div>
      <div class="flexBox">
        <el-image :src="settingImg" fit="contain" />
        <router-link class="function" to="/setting">设置</router-link>
      </div>
      <div class="flexBox">
        <el-image :src="helpImg" fit="contain" />
        <router-link class="function" to="/help">帮助</router-link>
      </div>
      <div class="flexBox">
        <el-image :src="storeImg" fit="contain" />
        <router-link class="function" to="/store">商店</router-link>
      </div>
    </div>
    <div>
      <a href="">关于我们</a>
      <el-divider direction="vertical" />
      <a href="">隐私政策</a>
    </div>
  </div>
</template>

<script setup name="Personal">
import { reactive, toRefs } from 'vue'
import historyImg from '../assets/history.png'
import settingImg from '../assets/setting.png'
import helpImg from '../assets/help.png'
import storeImg from '../assets/store.png'

const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
})

const { circleUrl } = toRefs(state)
</script>

<style scoped>
.drawer {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: -webkit-fill-available;
}

.container {
  display: grid;
  grid-template-rows: 3fr 2fr 2fr 2fr;
  gap: 20px;
}

.flexBox {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.name {
  margin: 10px 0px;
  font-family: 'Microsoft YaHei UI';
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 17px;

  text-align: center;
  letter-spacing: 0.12em;

  color: #FFFFFF;

}

.function {
  margin: 10px 0px;
  font-family: 'Microsoft YaHei UI';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  text-align: center;
  letter-spacing: 0.12em;

  color: #FFFFFF;
}

a {
  text-decoration: none;
  font-family: 'Microsoft YaHei UI';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 13px;
  text-align: center;
  letter-spacing: 0.12em;
  color: #FFFFFF;
}
</style>