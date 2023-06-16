<template>
  <div class="toptab">
    <el-icon class="return" @click="returnHome">
      <ArrowLeft />
    </el-icon>
    <div class="title">帮助</div>
  </div>
  <van-empty description="敬请期待" />
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
const returnHome = () => {
  router.push({
    path: '/',
  })
}
</script>

<style scoped>
.toptab {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;

  width: 100%;
  height: 65px;
  background: #445e60;
}

.return {
  left: 3vh;
  width: 23px;
  height: 23px;
}

.title {
  text-align: center;
  height: 19px;
  font-family: "Microsoft YaHei UI";
  font-style: normal;
  font-weight: 400;
  font-size: 19px;
  line-height: 19px;
  letter-spacing: 0.1em;
  color: #ffffff;
}
</style>