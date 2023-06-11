<template>
  <div class="lectionContainer">
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
    <div></div>
    <div class="lectionProcess">《{{ props.lectionType }}》&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{ sentenceIndex }}/{{ totalSentence }}</div>
  </div>
</template>
 
<script setup name="Lection">
import { progressProps } from 'element-plus';
import { ref, reactive, watch, nextTick } from 'vue'
import axios from 'axios'
import { onMounted } from 'vue';
let childRef = ref(null)
const lectionset = [
  `第一品 法会因由分
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
众生，实无众生得灭度者。何以故？须菩提！若菩萨有我相、人相、众生相、寿者相，即非菩萨。”`,
  `观自在菩萨，行深般若波罗蜜多时，照见五蕴皆空，度一切苦厄。舍利子，色不异空，空不异色；色即是空，空即是色。受、想、行、识，亦复如是。
舍利子，是诸法空相，不生不灭，不垢不净，不增不减，是故空中无色，无受、想、行、识；无眼、耳、鼻、舌、身、意；无色、声、香、味、触、法；无眼界，乃至无意识界；
无无明，亦无无明尽；乃至无老死，亦无老死尽。无苦、集、灭、道，无智亦无得。以无所得故，菩提萨埵，依般若波罗蜜多故，心无罣碍。无罣碍故，无有恐怖，远离颠倒梦想，究竟涅槃。
三世诸佛，依般若波罗蜜多故，得阿耨多罗三藐三菩提。故知般若波罗蜜多，是大神咒，是大明咒，是无上咒，是无等等咒，能除一切苦，真实不虚。故说般若波罗蜜多咒，
即说咒曰：“揭谛、揭谛，波罗揭谛，波罗僧揭谛，菩提萨婆诃`,
  `行由品第一
时大师至宝林。韶州韦刺史名璩与官僚入山。请师出。于城中大梵寺讲堂。为众开缘说法。师升座。刺史官僚三十余人。儒宗学士三十余人。僧尼道俗一千余人。同时作礼。愿闻法要。
大师告众曰。善知识。菩提自性。本来清净。但用此心。直了成佛。
善知识。且听惠能行由得法事意。惠能严父。本贯范阳。左降流于岭南。作新州百姓。此身不幸。父又早亡。老母孤遗。移来南海。艰辛贫乏。于市卖柴。
时有一客买柴。使令送至客店。客收去。惠能得钱。却出门外。见一客诵经。惠能一闻经语。心即开悟。
遂问客诵何经。客曰。金刚经。复问从何所来。持此经典。客云。我从蕲州黄梅县东禅寺来。其寺是五祖忍大师在彼主化。门人一千有余。我到彼中礼拜听受此经。
大师常劝僧俗。但持金刚经。即自见性。直了成佛。惠能闻说。宿昔有缘。乃蒙一客。取银十两。与惠能。令充老母衣粮。教便往黄梅参礼五祖。
惠能安置母毕。即便辞违。不经三十余日。便至黄梅。礼拜五祖。祖问曰。汝何方人。欲求何物。惠能对曰。弟子是岭南新州百姓。远来礼师。惟求作佛。不求余物。祖言。汝是岭南人。又是獦獠。若为堪作佛。惠能曰。人虽有南北。佛性本无南北。獦獠身与和尚不同。佛性有何差别。五祖更欲与语。且见徒众。总在左右。乃令随众作务。惠能曰。惠能启和尚。弟子自心常生智慧。不离自性。即是福田。未审和尚教作何务。祖云。这獦獠根性大利。汝更勿言。着槽厂去。惠能退至后院。有一行者。差惠能剁柴踏碓。经八月余。祖一日忽见惠能曰。吾思汝 之见可用。恐有恶人害汝。遂不与汝言。汝知之否。惠能曰。弟子亦知师意。不敢行至堂前。令人不觉。
祖一日唤诸门人总来。吾向汝说。世人生死事大。汝等终日只求福田。不求出离生死苦海。自性若迷。福何可救。汝等各去自看智慧。取自本心般若之性。各作一偈。来呈吾看。若悟大意。付汝衣法。为第六代祖。火急速去。不得迟滞。思量即不中用。见性之人。言下须见。若如此者。轮刀上阵。亦得见之。

众得处分。退而递相谓曰。我等众人。不须澄心用意作偈。将呈和尚。有何所益。神秀上座现为教授师。必是他得。我辈谩作偈颂。枉用心力。诸人闻语。总皆息心。咸言我等已后。依止秀师。何烦作偈。

神秀思惟。诸人不呈偈者。为我与他为教授师。我须作偈将呈和尚。若不呈偈。和尚如何知我心中见解深浅。我呈偈意。求法即善。觅祖即恶。却同凡心。夺其圣位奚别。若不呈偈。终不得法。大难大难。

五祖堂前。有步廊三间。拟请供奉卢珍。画楞伽经变相。及五祖血脉图。流传供养。

神秀作偈成已。数度欲呈。行至堂前。心中恍惚。遍身汗流。拟呈不得。前后经四日。一十三度。呈偈不得。

秀乃思惟。不如向廊下书着。从他和尚看见。忽若道好。即出礼拜。云是秀作。若道不堪。枉向山中数年。受人礼拜。更修何道。是夜三更。不使人知。自执灯。书偈于南廊壁间。呈心所见。

偈曰。

身是菩提树　心如明镜台
时时勤拂拭　勿使惹尘埃

秀书偈了。便却归房。人总不知。秀复思惟。五祖明日。见偈欢喜。即我与法有缘。若言不堪。自是我迷。宿业障重。不合得法。圣意难测。房中思想。坐卧不安。直至五更。

祖已知神秀入门未得。不见自性。天明。祖唤卢供奉来。向南廊壁间绘画图相。忽见其偈。报言。供奉却不用画。劳尔远来。经云。凡所有相。皆是虚妄。但留此偈。与人诵持。依此偈修。免堕恶道。依此偈修。有大利益。令门人炷香礼敬。尽诵此偈。即得见性。门人诵偈。皆叹善哉。

祖三更。唤秀入堂。问曰。偈是汝作否。秀言。实是秀作。不敢妄求祖位。望和尚慈悲。看弟子有少智慧否。

祖曰。汝作此偈。未见本性。只到门外。未入门内。如此见解。觅无上菩提。了不可得。无上菩提。须得言下识自本心。见自本性。不生不灭。于一切时中。念念自见。万法无滞。一真一切真。万境自如如。如如之心。即是真实。若如是见。即是无上菩提之自性也。

汝且去。一两日思惟。更作一偈。将来吾看。汝偈若入得门。付汝衣法。神秀作礼而出。又经数日。作偈不成。心中恍惚。神思不安。犹如梦中。行坐不乐。复两日。有一童子于碓坊过。唱诵其偈。惠能一闻。便知此偈未见本性。虽未蒙教授。早识大意。遂问童子曰。诵者何偈。

童子曰。尔这獦獠不知。大师言。世人生死事大。欲得传付衣法。令门人作偈来看。若悟大意。即付衣法。为第六祖。神秀上座。于南廊壁上。书无相偈。大师令人皆诵。依此偈修。免堕恶道。依此偈修。有大利益。

惠能曰。我亦要诵此。结来生缘。上人。我此踏碓。八个余月。未曾行到堂前。望上人引至偈前礼拜。童子引至偈前礼拜。惠能曰。惠能不识字。请上人为读。时有江州别驾。姓张。名日用。便高声读。惠能闻已。遂言。亦有一偈。望别驾为书。别驾言。汝亦作偈。其事希有。

惠能向别驾言。欲学无上菩提。不可轻于初学。下下人有上上智。上上人有没意智。若轻人。即有无量无边罪。别驾言。汝但诵偈。吾为汝书。汝若得法。先须度吾。勿忘此言。惠能偈曰。

菩提本无树　明镜亦非台
本来无一物　何处惹尘埃

书此偈已。徒众总惊。无不嗟讶。各相谓言。奇哉。不得以貌取人。何得多时。使他肉身菩萨。

祖见众人惊怪。恐人损害。遂将鞋擦了偈。曰。亦未见性。

众以为然。次日祖潜至碓坊。见能腰石舂米。语曰。求道之人。为法忘躯。当如是乎。

乃问曰。米熟也未。惠能曰。米熟久矣。犹欠筛在。

祖以杖击碓三下而去。惠能即会祖意。三鼓入室。

祖以袈裟遮围。不令人见。为说金刚经。至应无所住而生其心。

惠能言下大悟。一切万法不离自性。遂启祖言。何期自性本自清净。何期自性本不生灭。何期自性本自具足。何期自性本无动摇。何期自性能生万法。

祖知悟本性。谓惠能曰。不识本心。学法无益。若识自本心。见自本性。即名丈夫。天人师。佛。

三更受法。人尽不知。便传顿教。及衣钵。云。汝为第六代祖。善自护念。广度有情。流布将来。无令断绝。听吾偈曰。

有情来下种　因地果还生
无情即无种　无性亦无生

祖复曰。昔达摩大师。初来此土。人未之信。故传此衣。以为信体。代代相承。法则以心传心。皆令自悟自证。自古佛佛惟传本体。师师密付本心。衣为争端。止汝勿传。若传此衣。命如悬丝。汝须速去。恐人害汝。

惠能启曰。向甚处去。祖云。逢怀则止。遇会则藏。惠能三更领得衣钵。云。能本是南中人。素不知此山路。如何出得江口。五祖言。汝不须忧。吾自送汝。

祖相送直至九江驿边。祖令上船。五祖把橹自摇。惠能言。请和尚坐。弟子合摇橹。祖云。合是吾渡汝。惠能曰。迷时师度。悟了自度。度名虽一。用处不同。惠能生在边方。语音不正。蒙师传法。今已得悟。只合自性自度。祖云。如是如是。

以后佛法。由汝大行。汝去三年。吾方逝世。汝今好去。努力向南。不宜速说。佛法难起。

惠能辞违祖已。发足南行。两月中间。至大庾岭。五祖归，数日不上堂。众疑。诣问曰。和尚少病少恼否。曰。病即无。衣法已南矣。问。谁人传授。曰。能者得之。众乃知焉。逐后数百人来。欲夺衣钵。

一僧俗姓陈。名惠明。先是四品将军。性行粗糙。极意参寻。为众人先。趁及惠能。惠能掷下衣钵于石上。曰。此衣表信。可力争耶。能隐草莽中。惠明至。提掇不动。乃唤云。行者。行者。我为法来。不为衣来。

惠能遂出。坐盘石上。惠明作礼云。望行者为我说法。惠能云。汝既为法而来。可屏息诸缘。勿生一念。吾为汝说明。良久。

惠能云。不思善。不思恶。正与么时。那个是明上座本来面目。惠明言下大悟。

复问云。上来密语密意外。还更有密意否。惠能云。与汝说者。即非密也。汝若返照。密在汝边。明曰。惠明虽在黄梅。实未省自己面目。今蒙指示。如人饮水。冷暖自知。今行者即惠明师也。惠能曰。汝若如是。吾与汝同师黄梅。善自护持。

明又问。惠明今后向甚处去。惠能曰。逢袁则止。遇蒙则居。明礼辞。明回至岭下。谓趁众曰。向陟崔嵬。竟无踪迹。当别道寻之。趁众咸以为然。

惠明后改道明。避师上字。惠能后至曹溪。又被恶人寻逐。乃于四会。避难猎人队中。凡经一十五载。时与猎人随宜说法。猎人常令守网。每见生命。尽放之。每至饭时。以菜寄煮肉锅。或问。则对曰。但吃肉边菜。

一日思惟。时当弘法。不可终遯。遂出至广州法性寺。值印宗法师讲涅槃经。时有风吹幡动。一僧曰风动。一僧曰幡动。议论不已。惠能进曰。不是风动。不是幡动。仁者心动。一众骇然。印宗延至上席。征诘奥义。见惠能言简理当。不由文字。宗云。行者定非常人。久闻黄梅衣法南来。莫是行者否。惠能曰。不敢。宗于是作礼。告请传来衣钵。出示大众。
宗复问曰。黄梅付嘱。如何指授。惠能曰。指授即无。惟论见性。不论禅定解脱。宗曰。何不论禅定解脱。能曰。为是二法。不是佛法。佛法是不二之法。宗又问。如何是佛法不二之法。惠能曰。法师讲涅槃经。明佛性是佛法不二之法。如高贵 德王菩萨白佛言。犯四重禁。作五逆罪。及一阐提等。当断善根佛性否。佛言。善根有二。一者常。二者无常。佛性非常非无常。是故不断。名为不二。一者善。二者不善。佛性非善非不善。是 名不二。蕴之与界。凡夫见二。智者了达。其性无二。无二之性。即是佛性。
印宗闻说。欢喜合掌。言某甲讲经。犹如瓦砾。仁者论义。犹如真金。于是为惠能剃发。愿事为师。惠能遂于菩提树下。开东山法门。
惠能于东山得法。辛苦受尽。命似悬丝。今日得与使君官僚僧尼道俗。同此一会。莫非累劫之缘。亦是过去生中供养诸佛。同种善根。方始得闻如上顿教。得法之因。教是先圣所传。不是惠能自智。愿闻先圣教者。各令净心。闻了。各自除疑。如先代圣人无别。一众闻法。欢喜作礼而退。`,
  `佛国品第一
如是我闻：一时，佛在毗耶离庵罗树园，与大比丘众八千人俱，菩萨三万二千，众所知识。大智本行，皆悉成就。诸佛威神之所建立，为护法城，受持正法；能师子吼，名闻十方；众人不请，友而安之；绍隆三宝，能使不绝；降伏魔怨，制诸外道，悉已清净，永离盖缠；心常安住，无碍解脱；念、定、总持，辩才不断；布施、持戒、忍辱、精进、禅定、智慧及方便力，无不具足；逮无所得，不起法忍；已能随顺，转不退轮；善解法相，知众生根；盖诸大众，得无所畏；功德智慧，以修其心；相好严身，色像第一，舍诸世间所有饰好；名称高远，踰于须弥；深信坚固，犹若金刚；法宝普照，而雨甘露；于众言音，微妙第一；深入缘起，断诸邪见，有无二边，无复余习；演法无畏，犹师子吼，其所讲说，乃如雷震，无有量，已过量；集众法宝，如海导师，了达诸法深妙之义；善知众生往来所趣及心所行；近无等等佛自在慧、十力、无畏、十八不共；关闭一切诸恶趣门，而生五道以现其身；为大医王，善疗众病，应病与药，令得服行；无量功德皆成就，无量佛土皆严净；其见闻者，无不蒙益；诸有所作，亦不唐捐；如是一切功德、皆悉具足，其名曰：等观菩萨、不等观菩萨、等不等观菩萨、定自在王菩萨、法自在王菩萨、法相菩萨、光相菩萨、光严菩萨、大严菩萨、宝积菩萨、辩积菩萨、宝手菩萨、宝印手菩萨、常举手菩萨、常下手菩萨、常惨菩萨、喜根菩萨、喜王菩萨、辩音菩萨、虚空藏菩萨、执宝炬菩萨、宝勇菩萨、宝见菩萨、帝网菩萨、明网菩萨、无缘观菩萨、慧积菩萨、宝胜菩萨、天王菩萨、坏魔菩萨、电德菩萨、自在王菩萨、功德相严菩萨、师子吼菩萨、雷音菩萨、山相击音菩萨、香象菩萨、白香象菩萨、常精进菩萨、不休息菩萨、妙生菩萨、华严菩萨、观世音菩萨、得大势菩萨、梵网菩萨、宝杖菩萨、无胜菩萨、严土菩萨、金髻菩萨、珠髻菩萨、弥勒菩萨、文殊师利法王子菩萨，如是等三万二千人。
复有万梵天王尸弃等，从余四天下，来诣佛所，而为听法；复有万二千天帝，亦从余四天下，来在会坐；并余大威力诸天、龙神、夜叉、乾闼婆、阿修罗、迦楼罗、紧那罗、摩侯罗伽等，悉来会坐；诸比丘、比丘尼、优婆塞、优婆夷、俱来会坐。彼时佛与无量百千之众，恭敬围绕，而为说法，譬如须弥山王，显于大海，安处众宝师子之座，蔽于一切诸来大众。
尔时，毗耶离城，有长者子，名曰宝积，与五百长者子，俱持七宝盖，来诣佛所，头面礼足，各以其盖共供养佛；佛之威神，令诸宝盖合成一盖，遍覆三千大千世界，而此世界广长之相，悉于中现；又此三千大千世界诸须弥山、雪山、目真邻陀山、摩诃目真邻陀山、香山、宝山、金山、黑山、铁围山、大铁围山，大海江河，川流泉源，及日月星辰，天宫龙宫，诸尊神宫，悉现于宝盖中；又十方诸佛，诸佛说法，亦现于宝盖中。尔时，一切大众，睹佛神力，叹未曾有！合掌礼佛，瞻仰尊颜，目不暂舍。长者子宝积，即于佛前，以偈颂曰：‘
目净修广如青莲  心净已度诸禅定  久积净业称无量  导众以寂故稽首
既见大圣以神变  普现十方无量土  其中诸佛演说法  于是一切悉见闻
法王法力超群生  常以法财施一切  能善分别诸法相  于第一义而不动
已于诸法得自在  是故稽首此法王  说法不有亦不无  以因缘故诸法生
无我无造无受者  善恶之业亦不亡  始在佛树力降魔  得甘露灭觉道成
已无心意无受行  而悉摧伏诸外道  三转法轮于大千  其轮本来常清净
天人得道此为证  三宝于是现世间  以斯妙法济群生  一受不退常寂然
度老病死大医王  当礼法海德无边  毁誉不动如须弥  于善不善等以慈
心行平等如虚空  孰闻人宝不敬承  今奉世尊此微盖  于中现我三千界
诸天龙神所居宫  乾闼婆等及夜叉  悉见世间诸所有  十力哀现是化变
众睹希有皆叹佛  今我稽首三界尊  大圣法王众所归  净心观佛靡不欣
各见世尊在其前  斯则神力不共法  佛以一音演说法  众生随类各得解
皆谓世尊同其语  斯则神力不共法  佛以一音演说法  众生各各随所解
普得受行获其利  斯则神力不共法  佛以一音演说法  或有恐畏或欢喜
或生厌离或断疑  斯则神力不共法  稽首十力大精进  稽首已得无所畏
稽首住于不共法  稽首一切大导师  稽首能断诸结缚  稽首已到于彼岸
稽首能度诸世间  稽首永离生死道  悉知众生来去相  善于诸法得解脱
不著世间如莲华  常善入于空寂行  达诸法相无挂碍  稽首如空无所依’
尔时，长者子宝积说此偈已，白佛言：‘世尊！是五百长者子，皆已发阿耨多罗三藐三菩提心，愿闻得佛国土清净，唯愿世尊说诸菩萨净土之行。’佛言：‘善哉！宝积！乃能为诸菩萨，问于如来净土之行，谛听！谛听！善思念之！当为汝说。’于是宝积及五百长者子，受教而听。
佛言：‘宝积！众生之类是菩萨佛土。所以者何？菩萨随所化众生而取佛土，随所调伏众生而取佛土，随诸众生应以何国入佛智慧而取佛土，随诸众生应以何国起菩萨根而取佛土。所以者何？菩萨取于净国，皆为饶益诸众生故。譬如有人，欲于空地，造立宫室，随意无碍，若于虚空，终不能成！菩萨如是，为成就众生故，愿取佛国，愿取佛国者，非于空也。’
‘宝积当知，直心是菩萨净土，菩萨成佛时，不谄众生来生其国；深心是菩萨净土，菩萨成佛时，具足功德众生来生其国；大乘心是菩萨净土，菩萨成佛时，大乘众生来生其国；布施是菩萨净土，菩萨成佛时，一切能舍众生来生其国；持戒是菩萨净土，菩萨成佛时，行十善道满愿众生来生其国；忍辱是菩萨净土，菩萨成佛时，三十二相庄严众生来生其国；精进是菩萨净土，菩萨成佛时，勤修一切功德众生来生其国；禅定是菩萨净土，菩萨成佛时，摄心不乱众生来生其国；智慧是菩萨净土，菩萨成佛时，正定众生来生其国；四无量心是菩萨净土，菩萨成佛时，成就慈悲喜舍众生来生其国；四摄法是菩萨净土，菩萨成佛时，解脱所摄众生来生其国；方便是菩萨净土，菩萨成佛时，于一切法方便无碍众生来生其国；三十七道品是菩萨净土，菩萨成佛时，念处正勤神足根力觉道众生来生其国；回向心是菩萨净土，菩萨成佛时，得一切具足功德国土；说除八难是菩萨净土，菩萨成佛时，国土无有三恶八难；自守戒行不讥彼阙是菩萨净土，菩萨成佛时，国土无有犯禁之名；十善是菩萨净土，菩萨成佛时，命不中夭，大富梵行，所言诚谛；常以软语，眷属不离，善和斗讼。言必饶益，不嫉不恚，正见众生来生其国。如是宝积，菩萨随其直心，则能发行；随其发行，则得深心；随其深心，则意调伏；随意调伏，则如说行；随如说行，则能回向；随其回向，则有方便；随其方便，则成就众生；随成就众生，则佛土净；随佛土净，则说法净；随说法净，则智慧净；随智慧净，则其心净；随其心净，则一切功德净。是故宝积，若菩萨欲得净土，当净其心；随其心净，则佛土净。’
尔时，舍利弗承佛威神作是念：若菩萨心净，则佛土净者，我世尊本为菩萨时，意岂不净，而是佛土不净若此？佛知其念，即告之言：‘于意云何？日月岂不净耶！而盲者不见。’对曰‘不也！世尊！是盲者过，非日月咎。’‘舍利弗！众生罪故，不见如来国土严净，非如来咎；舍利弗！我此土净，而汝不见。’
尔时，螺髻梵王语舍利弗：‘勿作是念，谓此佛土以为不净，所以者何？我见释迦牟尼佛土清净，譬如自在天宫。’舍利弗言：‘我见此土丘陵坑坎，荆棘沙砾，土石诸山，秽恶充满。’螺髻梵王言：‘仁者心有高下，不依佛慧，故见此土为不净耳！舍利弗！菩萨于一切众生，悉皆平等，深心清净，依佛智慧，则能见此佛土清净。’
于是佛以足指按地，即时三千大千世界，若干百千珍宝严饰，譬如宝庄严佛，无量功德宝庄严土，一切大众叹未曾有！而皆自见坐宝莲华。佛告舍利弗：‘汝且观是佛土严净？’舍利弗言：‘唯然，世尊！本所不见，本所不闻，今佛国土严净悉现。’佛语舍利弗：‘我佛国土，常净若此，为欲度斯下劣人故，示是众恶不净土耳！譬如诸天，共宝器食，随其福德，饭色有异；如是舍利弗，若人心净，便见此土功德庄严。’
当佛现此国土严净之时，宝积所将五百长者子，皆得无生法忍，八万四千人皆发阿耨多罗三藐三菩提心。佛摄神足，于是世界，还复如故；求声闻乘，三万二千诸天及人，知有为法，皆悉无常，远尘离垢，得法眼净；八千比丘，不受诸法，漏尽意解。`
]
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

let lection
if (props.lectionType == "金刚经")
  lection = lectionset[0]
else if (props.lectionType == '心经')
  lection = lectionset[1]
else if (props.lectionType == '坛经')
  lection = lectionset[2]
else if (props.lectionType == '维摩诘经')
  lection = lectionset[3]
let sentences = splitSentence(lection)

const sentenceIndex = ref(1)
const totalSentence = ref(lection.length)
const lastS = ref(["       "])
const currS = ref(sentences[0])
const nextS = ref(sentences[1])

const index = ref(-1)
const roll = ref(false)

// 接收来自WoodBlockd的属性
const props = defineProps({
  mindfulModel: {
    type: Boolean,
    default: true
  },
  wordNum: {
    type: Number,
    default: 1
  },
  lectionType: {
    type: String,
    default: "金刚经",
  },
  playType: {
    type: String,
    default: "循环佛经",
  }
})

watch(() => props.lectionType, (newValue) => {
  if (newValue == "金刚经")
    lection = lectionset[0]
  else if (newValue == '心经')
    lection = lectionset[1]
  else if (newValue == '坛经')
    lection = lectionset[2]
  else if (newValue == '维摩诘经')
    lection = lectionset[3]
  totalSentence.value = lection.length
  console.log(newValue)
  console.log(lection)
  sentences = splitSentence(lection)
}), { immediate: true }

// 用户重新进入专注页面时，经文重置
watch(() => props.mindfulModel, (newValue, oldValue) => {

  sentenceIndex.value = 1
  index.value = -1
  lastS.value = ["       "]
  currS.value = sentences[0]
  nextS.value = sentences[1]
}), { immediate: true }



const play = () => {
  let wordNum = props.wordNum
  if (index.value == currS.value.length - 1)
    index.value += 1
  while (wordNum--) {
    if (index.value >= currS.value.length - 1)
      break
    while (currS.value[index.value + 1] == "\xa0") {
      index.value += 3
    }
    index.value += 1
  }
  if (index.value >= currS.value.length) {
    index.value = -1
    sentenceIndex.value += 1
    lastS.value = currS.value
    currS.value = nextS.value
    if (sentences[sentenceIndex.value] == null) {
      sentenceIndex.value = 0
    }
    nextS.value = sentences[sentenceIndex.value]
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
.lectionContainer {
  justify-items: center;
  display: grid;
  grid-template-rows: 1fr 55px 1fr;
  grid-auto-columns: 1fr;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 48px;
  padding: 25px;
}

.container {
  display: grid;
  grid-auto-columns: 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 0px;
  justify-items: center;
}

.lectionProcess {
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 10px;
  line-height: 12px;
  color: #FFFFFF;
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