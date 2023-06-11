<template>
  <div class="container">
    <div id="lasttxt" style="opacity: 0;"
      :class="[{ txtArea: lastWidthStatus }, { 'txtArea-2': !lastWidthStatus }, { currtxt: roll }]">
      <div v-for="(rchar, index) in lastS" :key="index" class="unread">
        {{ rchar }}
      </div>
    </div>
    <div id="currtxt" :class="[{ txtArea: currWidthStatus }, { 'txtArea-2': !currWidthStatus }, { newtxt: roll }]">
      <div v-for="(rchar, index) in currS" :key="index" :class="{ read: currClass(index), unread: !currClass(index) }">
        {{ rchar }}
      </div>
    </div>
  </div>
  <div>{{  }}</div>
</template>
 
<script setup name="Lection">
import { progressProps } from 'element-plus';
import { ref, reactive, watch, nextTick } from 'vue'
import { onMounted } from 'vue';
let childRef = ref(null)
const lection = `第一品 法会因由分

如是我闻，一时，佛在舍卫国祗树给孤独园，与大比丘众千二百五十人俱。尔时，世尊食时，著衣持钵，

入舍卫大城乞食。于其城中，次第乞已，还至本处。饭食讫，收衣钵，洗足已，敷座而坐。



第二品 善现启请分

时，长老须菩提在大众中即从座起，偏袒右肩，右膝着地，合掌恭敬而白佛言：“希有！世尊！如来善护念

诸菩萨，善付嘱诸菩萨。世尊！善男子、善女人，发阿耨多罗三藐三菩提心，应云何住，云何降伏其心？

”佛言：“善哉，善哉。须菩提！如汝所说，如来善护念诸菩萨，善付嘱诸菩萨。汝今谛听！当为汝说：善

男子、善女人，发阿耨多罗三藐三菩提心，应如是住，如是降伏其心。”“唯然，世尊！愿乐欲闻。”

　

第三品 大乘正宗分

佛告须菩提：“诸菩萨摩诃萨应如是降伏其心！所有一切众生之类：若卵生、若胎生、若湿生、若化生；若

有色、若无色；若有想、若无想、若非有想非无想，我皆令入无余涅盘而灭度之。如是灭度无量无数无边

众生，实无众生得灭度者。何以故？须菩提！若菩萨有我相、人相、众生相、寿者相，即非菩萨。”`
// 检测当前语句的字数，调整滚动文字区域宽度
const lastWidthStatus = ref(true)
const currWidthStatus = ref(true)

const changeWidth = () => {
  lastWidthStatus.value = currWidthStatus.value
  currWidthStatus.value = false
}

const restoreWidth = () => {
  lastWidthStatus.value = currWidthStatus.value
  currWidthStatus.value = true
}

const checkWidthStatus = () => {
  let font_number = 0
  for (let i = 0; i < currS.value.length; i++) {
    if (currS.value[i] == '\xa0') {
      font_number += 0.5;
    } else {
      font_number += 1;
    }
  }
  if (font_number >= 14)
    changeWidth()
  else
    restoreWidth()
}

// 分割源文本
function splitSentence(inputText) {
  const punctuations = /[,.，。？！：；、]/;
  const maxSentenceLength = 10;
  const maxConcatLength = 15;

  const sentences = [];
  let currentSentence = "";

  inputText = inputText.replace(/\s+|["'“”‘’]/g, '');

  for (let i = 0; i < inputText.length; i++) {
    const char = inputText.charAt(i);
    let ifAddSpace = false;
    if (char.match(punctuations)) {
      currentSentence += "\xa0 \xa0"
      ifAddSpace = true;
    }
    else
      currentSentence += char
    // currentSentence += char;
    // 如果此时检测到的字符为标点符号
    if (ifAddSpace) {
      if (currentSentence.length > maxSentenceLength) {
        sentences.push(currentSentence.trim());
        currentSentence = "";
      } else {
        const nextChar = inputText.charAt(i + 1);
        if (nextChar && nextChar.match(punctuations)) {
          if ((currentSentence + nextChar).length > maxConcatLength) {
            sentences.push(currentSentence.trim());
            currentSentence = "";
          } else {
            currentSentence += nextChar;
            i++;
          }
        }
      }
    }
  }
  if (currentSentence.length > 0) {
    sentences.push(currentSentence.trim());
  }
  return sentences.map(sentence => {
    const splitChars = [];
    for (let i = 0; i < sentence.length; i++) {
      splitChars.push(sentence[i]);
    }
    return splitChars;
  })
}

const sentences = splitSentence(lection)

var sentenceIndex = 1
const lastS = ref(["       "])
const currS = ref(sentences[0])
const nextS = ref(sentences[1])

const index = ref(-1)
const roll = ref(false)

// 接收来自WoodBlockd的属性
const props = defineProps({
  mindfulModel:{
    type: Boolean,
    default: true
  },
  wordNum:{
    type: Number,
    default: 1
  }
})

// 用户重新进入专注页面时，经文重置
watch(() => props.mindfulModel, (newValue, oldValue) =>{
  sentenceIndex = 1
  index.value = -1
  lastS.value = ["       "]
  currS.value = sentences[0]
  nextS.value = sentences[1]
}),{ immediate: true }



const play = () => {
  let wordNum = props.wordNum
  if(index.value==currS.value.length-1)
    index.value+=1
  while(wordNum--){
    if(index.value>=currS.value.length-1)
      break
    while(currS.value[index.value+1]=="\xa0"){
      index.value+=3
    }
      // console.log("未加：",currS.value[index.value])
      index.value+=1
      // console.log("加：",currS.value[index.value])
  }
  console.log(index.value)
  if (index.value >= currS.value.length) {
    index.value = -1
    sentenceIndex += 1
    lastS.value = currS.value
    currS.value = nextS.value
    nextS.value = sentences[sentenceIndex]
    checkWidthStatus()
    rollAnimation()
  }
}

const currClass = (i) => {
  return i <= index.value;
};

const rollAnimation = () => {
  roll.value = true
  setTimeout(() => {
    roll.value = false

  }, 1000)

}
defineExpose({ play })


</script>

<style scoped>
.container {
  height: 100vh;
  display: grid;
  display: grid;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px;
}

.txtArea {
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
}

.txtArea-2 {
  display: block;
  width: 60%;
  position: absolute;
}

.currtxt {
  animation: fade-out 0.7s forwards;
}

.newtxt {
  opacity: 0;
  animation: fade-in 0.7s forwards;
}

@keyframes fade-out {
  0% {
    opacity: 1;
    transform: translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateY(-100%);
  }
}

@keyframes fade-in {
  0% {
    opacity: 0;
    transform: translateY(100%);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes fade-in-letter {
  0% {
    color: #737373;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  }
  100% {
    color: #FFFFFF;
    text-shadow: -33px 7px 9px rgba(255, 255, 255, 0.01), -21px 4px 9px rgba(255, 255, 255, 0.07), -12px 2px 7px rgba(255, 255, 255, 0.25), -5px 1px 5px rgba(255, 255, 255, 0.43), -1px 0px 3px rgba(255, 255, 255, 0.49), 0px 0px 0px rgba(255, 255, 255, 0.5);
  }
}

.read {
  font-family: 'STXihei';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  letter-spacing: 0.16em;
  display: inline-block;
  animation: fade-in-letter linear 0.2s forwards;
  color: #FFFFFF;
  text-shadow: -33px 7px 9px rgba(255, 255, 255, 0.01), -21px 4px 9px rgba(255, 255, 255, 0.07), -12px 2px 7px rgba(255, 255, 255, 0.25), -5px 1px 5px rgba(255, 255, 255, 0.43), -1px 0px 3px rgba(255, 255, 255, 0.49), 0px 0px 0px rgba(255, 255, 255, 0.5);
}

.unread {
  font-family: 'STXihei';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 33px;
  letter-spacing: 0.16em;
  display: inline-block;
  color: #737373;

  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>