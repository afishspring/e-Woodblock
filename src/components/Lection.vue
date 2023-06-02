<template>
  <div class="hello">
    <audio :src="music" @timeupdate="audioTime" controls></audio>
    <div :class="className" :style="{ 'animation-duration': `${lrcTime}000ms` }">
      {{ dataWords }}
    </div>
  </div>
</template>
 
<script>
import music from "../assets/music.mp3";
export default {
  data() {
    return {
      className: "text load",
      lrcTime: "",
      music,
      currenttime: "",
      LRC: `[00:00.000] 作词 : 周耀辉/李焯雄
[00:01.000] 作曲 : 林健华
[00:02.000] 编曲 : 林健华
[00:15.000]忽然之间
[00:18.000]天昏地暗
[00:21.000]世界可以忽然什么都没有
[00:28.000]我想起了你
[00:32.000]再想到自己
[00:35.000]我为什么总在非常脆弱的时候
[00:40.000]怀念你
[00:43.000]''
[00:44.000]我明白太放不开你的爱
[00:49.000]太熟悉你的关怀分不开
[00:54.000]想你算是安慰还是悲哀
[00:58.000]而现在就算时针都停摆
[01:03.000]就算生命像尘埃分不开
[01:08.000]我们也许反而更相信爱
[01:24.000]''
[01:25.000]如果这天地
[01:29.000]最终会消失
[01:32.000]不想一路走来珍惜的回忆
[01:38.000]没有你
[01:40.000]''
[01:41.000]我明白太放不开你的爱
[01:46.000]太熟悉你的关怀分不开
[01:51.000]想你算是安慰还是悲哀
[01:55.000]而现在就算时针都停摆
[02:00.000]就算生命像尘埃分不开
[02:05.000]我们也许反而更相信爱
[02:34.000]''
[02:35.000]我明白太放不开你的爱
[02:40.000]太熟悉你的关怀分不开
[02:45.000]想你算是安慰还是悲哀
[02:49.000]而现在就算时针都停摆
[02:54.000]就算生命像尘埃分不开
[03:00.000]我们也许反而更相信爱`,
      lrcData: "",
      dataWords: "",
    };
  },
  name: "HelloWorld",
  methods: {
    //歌词数据转化为数组
    formatLrc() {
      var strLrc = this.LRC.split("\n");
      let arr = [];
      for (var i = 0; i < strLrc.length; i++) {
        var str = strLrc[i];
        var parts = str.split("]");
        var timeStr = parts[0].substring(1);
        var obj = {
          time: this.formatTime(timeStr),
          words: parts[1],
        };
        arr.push(obj);
      }
      this.lrcData = arr;
    },
    //时间转换（秒）
    formatTime(time) {
      var parts = time.split(":"); //[03:00.000]==>[03,00.00]
      return +parts[0] * 60 + +parts[1]; //计算秒
    },
    audioTime(e) {
      var time = e.target.currentTime; //当前播放器时间
      for (var i = 0; i < this.lrcData.length; i++) {
        if (time < this.lrcData[i].time) {
          //循环歌词数组，当播放器当前时间第一次小于歌词时间时当前数组下标减一即为当前时间数组所对应歌词下标
          this.lrcTime = this.lrcData[i].time - this.lrcData[i - 1].time;
          this.dataWords = this.lrcData[i - 1].words;
          return i - 1;
        }
      }
    },
  },
  watch: {
    dataWords() {
      this.className = "text";
      setTimeout(() => {
        this.className = "text load";
      }, 50);
    },
  },
  mounted() {
    this.formatLrc();
  },
};
</script> 
<style scoped>
@keyframes scan {
  0% {
    background-size: 0 100%;
  }

  100% {
    background-size: 100% 100%;
  }
}

.text {
  background: #7e7e7e -webkit-linear-gradient(left, #76ca16, #0fa046) no-repeat 0 0;
  /* -webkit-text-fill-color: transparent; */
  -webkit-background-clip: text;
  background-size: 0 100%;
  color: aqua;
}

/* .load {
  background-size: 100% 100%;
  animation: scan linear;
} */
</style>