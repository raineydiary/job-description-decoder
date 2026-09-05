(function () {
  "use strict";

  // Source-grounded selections from document Sections III, IV and V only.
  // Sections VI/VII and standalone general work verbs are intentionally excluded.
  var dictionary = [
    {"sourceId":"USER-LAMER-01","section":"USER","keys":["支持team日常流程性工作","支持 team 日常流程性工作","支持团队日常流程性工作","日常流程性工作"],"label":"团队日常流程支持","signal":"杂活要问","joke":"团队的零碎活，统一发往你这边。","meaning":"流程支持可能包括大量琐碎事务，也可能是了解业务的入口；重点是时间占比和可沉淀的成果。","ask":"日常流程性工作具体有哪些？约占每周多少时间？"},
    {"sourceId":"USER-LAMER-02","section":"USER","keys":["multi-task","multitask","multi task","多任务并行"],"label":"Multi-task","signal":"并行要问","joke":"别人开一个任务，你开八个窗口。","meaning":"多线并行不等于一人承担多个岗位，需要确认同时在手的任务量和优先级机制。","ask":"通常会同时推进几个项目？任务撞期时由谁排优先级？"},
    {"sourceId":"USER-LAMER-03","section":"USER","keys":["time management","时间管理能力强"],"label":"Time management","signal":"排期要问","joke":"活儿一起到，deadline 一起到，怎么塞进一天你自己想办法。","meaning":"时间管理本身不能证明经常加班；结合多任务、交付时限才能判断是否超负荷。","ask":"正常工时内通常能完成吗？需求同时到来时怎样调整排期？"},
    {"sourceId":"USER-LAMER-04","section":"USER","keys":["网感好","网感强","紧跟热点","熟悉网络热点"],"label":"网感好","signal":"在线要问","joke":"希望你 5G 冲浪，热梗刚出生，你的选题就得跟上。","meaning":"通常需要持续关注社媒内容与流行趋势，但不应直接等同于全天在线。","ask":"热点监测是否需要非工作时间响应？选题和内容产出频率怎样？"},
    {"sourceId":"USER-LAMER-05","section":"USER","keys":["agency的沟通","agency 沟通","agency沟通","agency的对接","agency 对接","各大agency","各大 agency"],"label":"对接各大 agency","signal":"端水要问","joke":"这边催稿，那边哄人；进度要追，场面也得圆。","meaning":"对外协作既可能是催交付，也可能包含关系维护；要确认你是否拥有明确的供应商管理权限。","ask":"主要对接多少家 agency？我负责决策、反馈、催进度，还是流程协调？"},
    {"sourceId":"USER-LAMER-07","section":"USER","keys":["体验全链路","的全链路"],"label":"体验全链路","signal":"边界要问","joke":"从 PLAN 看到投流，哪里缺人，你可能就往哪里补。","meaning":"这里写的是参与和体验，不等于独立包办整个流程；要确认每个环节的实际职责。","ask":"全链路中我独立负责哪一段，哪些只是旁听或协助？"},
    {"sourceId":"USER-LAMER-08","section":"USER","keys":["个人成长能力","成长能力的锻炼"],"label":"锻炼个人成长能力","signal":"兑现要问","joke":"成长写进岗位福利里了，能不能兑换，要看入职后的带教。","meaning":"这份 JD 同时写明愿意教新人，是正向信息；仍可用具体安排核实是否兑现。","ask":"入职后由谁带教？多久反馈一次，会让我独立负责什么？"},
    {"sourceId":"USER-LAMER-06","section":"USER","keys":["exposure极高","exposure 极高","high exposure","高曝光度","高层可见度"],"label":"Exposure 极高","signal":"汇报要问","joke":"露脸机会多，也可能是：老板看得多，PPT 得讲得明白。","meaning":"Exposure 也可能指接触更多品牌和业务；高层汇报与展示压力需要结合实际职责确认。","ask":"会向哪些层级汇报？汇报和 PPT 大约占多少工作时间？"},
    {"sourceId":54,"section":3,"keys":["弹性工作","弹性上下班","灵活上下班","不打卡","灵活办公"],"label":"弹性工作制","signal":"细节要问","joke":"\"弹性\"弹的是你的下班时间，不是上班时间。","meaning":"弹性也可能是真正的自由安排，关键是上下班是否都可自主调整。","ask":"最晚几点必须到岗？晚到能否晚走，早到能否早走？"},
    {"sourceId":55,"section":3,"keys":["996工作制","996","995","9106"],"label":"996","signal":"细节要问","joke":"早9点上班、晚9点下班、每周工作6天","meaning":"先确认实际排班、休息时间和补偿安排，不把行业传闻当作这家公司的制度。","ask":"日常排班与高峰期分别怎样？每周工作几天？"},
    {"sourceId":56,"section":3,"keys":["007工作制","007","全天候待命"],"label":"007","signal":"细节要问","joke":"从当日0点到次日0点，一周七天不休息，24小时待命。","meaning":"这常是对随时待命的夸张描述，要核实值班和响应要求。","ask":"下班后哪些情况必须响应？有轮值与补休吗？"},
    {"sourceId":57,"section":3,"keys":["大小周","单双休","大周小周","大小休"],"label":"大小周","signal":"细节要问","joke":"一周单休、一周双休交替进行。","meaning":"这是排班说明，确认合同约定、执行方式和薪资构成。","ask":"单休周如何排班和补偿？这部分是否计入标出的薪资？"},
    {"sourceId":58,"section":3,"keys":["不提倡加班","不鼓励加班","加班自愿","我们不加班","加班文化自由"],"label":"不提倡加班，但任务要按时完成","signal":"细节要问","joke":"公司嘴上说不提倡，实际用工作量逼你加班。","meaning":"这是文档对隐性加班的调侃，不代表承诺不加班的公司都如此。","ask":"按最近一个项目，正常工时内能完成吗？超出时怎样调整任务？"},
    {"sourceId":59,"section":3,"keys":["偶尔加班","偶尔会忙","不定期加班","灵活加班","加班不多","项目忙的时候需要加班","忙季会辛苦一些"],"label":"偶尔加班 / 偶尔会忙","signal":"细节要问","joke":"提前免责声明，意在弱化后续高频加班带来的心理落差。","meaning":"偶尔的频率并不明确，应用近期实际情况核实。","ask":"最近三个月加班几次？一般到几点，怎样调休？"},
    {"sourceId":61,"section":3,"keys":["我们6点准时下班","六点准时下班","6点准时下班","到点就走","不加班文化"],"label":"我们6点准时下班","signal":"细节要问","joke":"曾被戏称为\"凌晨六点下班\"的伏笔。","meaning":"这是一句网络调侃，不是对准点下班承诺的事实判断。","ask":"最近一周同事一般几点离开？离开后还需要在线响应吗？"},
    {"sourceId":62,"section":3,"keys":["快节奏","节奏紧凑"],"label":"能适应快节奏工作环境","signal":"细节要问","joke":"3天的活2天干完，加班没有加班费，但有无限续杯的速溶咖啡。","meaning":"工作节奏快也可能带来学习机会，应确认任务量和优先级机制。","ask":"最近一次紧急项目用了多久？临时加任务时如何取舍？"},
    {"sourceId":63,"section":3,"keys":["包三餐","免费三餐","提供三餐","食堂全包"],"label":"包三餐","signal":"细节要问","joke":"提供三餐不是福利，是让你不用离开公司。","meaning":"三餐也可以是真福利，文档的调侃提醒你核实是否绑定加班。","ask":"晚餐几点供应？不加班也能享用吗？"},
    {"sourceId":64,"section":3,"keys":["双休","做五休二"],"label":"双休","signal":"细节要问","joke":"工作日加班，周末可能也要\"自愿\"来。","meaning":"双休承诺不必然失实，重要的是看近期执行和紧急支援频率。","ask":"过去三个月有几次周末工作？如何补休或补偿？"},
    {"sourceId":65,"section":3,"keys":["WLB","工作生活平衡","生活工作平衡"],"label":"WLB","signal":"细节要问","joke":"Work-Life Balance，工作生活平衡。指工作不会占据太多私人生活时间。","meaning":"这是工作方式的描述，不必硬翻成负面评价。","ask":"下班后和休假时是否需要回复消息？最近项目的节奏如何？"},
    {"sourceId":66,"section":3,"keys":["WFH","远程办公","混合办公","Home Office"],"label":"WFH","signal":"细节要问","joke":"Work From Home，居家办公。疫情后部分公司保留混合办公模式。","meaning":"重点是全程远程、固定混合还是临时批准，以及是否随时可能调整。","ask":"每周可以远程几天？是否写进制度，调整需要多久通知？"},
    {"sourceId":68,"keys":["抗压","皮实"],"label":"抗压能力强","signal":"强度要问","joke":"一个人干三个人的活但只领一份工资，还得笑着加。","meaning":"高峰期压力和长期超负荷不是一回事，不能只凭这个词判断工作环境。","ask":"最近一次高压周期持续多久？团队怎样分工和补充资源？","section":4},
    {"sourceId":69,"keys":["结果导向","结果为导向","目标导向","KPI导向","结果驱动"],"label":"结果导向","signal":"目标要问","joke":"KPI完不成别找借口，老板只给数字，怎么达成你自己想办法。","meaning":"结果要求需要与资源、权限和可控范围对应。","ask":"绩效看哪些结果？哪些变量是我能控制的，目标怎样调整？","section":4},
    {"sourceId":70,"keys":["自驱","自我驱动","内驱力","主动性强","积极主动","有强烈上进心"],"label":"自驱力强","signal":"带教要问","joke":"加入公司后没人带你、没人教你，活儿丢给你自己想办法。","meaning":"主动做事也可能代表自主空间，带教是否缺位需要单独确认。","ask":"新人前三个月有哪些明确目标和带教资源？","section":4},
    {"sourceId":71,"keys":["工作有激情","充满激情","工作热情高","热爱工作","精力充沛","passion","有passion"],"label":"工作有激情","signal":"节奏要问","joke":"自觉加班还要表现得很开心、很享受。","meaning":"热情不等于必须加班，要了解实际工时和休息安排。","ask":"团队最忙的阶段持续多久？通常怎样安排休息？","section":4},
    {"sourceId":72,"keys":["有强烈责任心","责任心强","敢于负责","认真负责"],"label":"有强烈责任心","signal":"权责要问","joke":"没做完不准走，出了问题你全责。","meaning":"责任心是正常要求，风险在于责任是否没有边界、资源是否跟得上。","ask":"需要对哪些结果直接负责？对应的决策权和资源有哪些？","section":4},
    {"sourceId":73,"keys":["沟通协调能力强","跨部门协作能力","沟通能力强","善于协调","cross-functional team","cross functional team"],"label":"沟通协调能力强","signal":"协作要问","joke":"需要你在多方利益冲突中推进事情，经常受夹板气。","meaning":"跨团队协调是否耗时，要看依赖关系和解决冲突的机制。","ask":"主要协调哪些团队？优先级冲突时谁拍板？","section":4},
    {"sourceId":74,"keys":["快速学习","学习能力强","上手快"],"label":"快速学习能力","signal":"上手要问","joke":"无老员工带教，需要你快速独立上手工作。","meaning":"快速学习不代表一定没人教，要确认实际的新人上手周期。","ask":"新人多久开始独立交付？培训和容错空间有哪些？","section":4},
    {"sourceId":76,"keys":["拥抱变化","灵活应变","变化中成长"],"label":"适应性强，拥抱变化","signal":"变化要问","joke":"岗位职责可能频繁调整，业务方向说变就变。","meaning":"正常迭代和频繁换方向需要区分，了解真实案例比猜测更有用。","ask":"最近一次职责或方向调整是什么？由谁确定新优先级？","section":4},
    {"sourceId":77,"keys":["喜欢挑战性工作","能接受挑战","不怕困难"],"label":"喜欢挑战性工作","signal":"现状要问","joke":"需要你在混乱的环境中建立秩序，本质是收拾前人留下的烂摊子。","meaning":"挑战也可能是新机会，先确认现有基础与遗留问题。","ask":"最大的挑战具体是什么？已经有哪些资源和方案？","section":4},
    {"sourceId":78,"keys":["领导安排的其它任务","领导安排的其他任务","上级交办的其他工作","其他临时任务"],"label":"领导安排的其它任务","signal":"边界要问","joke":"岗位职责只是参考，杂活累活临时活都归你。","meaning":"临时支援本身正常，但比例过高会挤占主线工作。","ask":"这类任务大约占多少时间？过去一个月有哪些例子？","section":4},
    {"sourceId":79,"keys":["能独立完成任务","独立从0到1","从0到1搭建","全链路覆盖"],"label":"能独立完成任务 / 独立从0到1","signal":"资源要问","joke":"一人身兼数职，从前端开发、后端接口、测试部署到产品运营全链路覆盖。","meaning":"端到端负责不一定是一人包办，要确认岗位范围及协作资源。","ask":"哪些环节由我完成，哪些有专人支持？目前已有怎样的基础？","section":4},
    {"sourceId":80,"keys":["机会留给主动的人"],"label":"机会留给主动的人","signal":"分工要问","joke":"没人告诉你该做什么，全靠自己摸索。出了问题也是你自己的责任。","meaning":"主动争取机会与缺少工作分配不是一回事。","ask":"日常任务由谁确定？遇到不明确的目标可以向谁求助？","section":4},
    {"sourceId":81,"keys":["接触核心业务","参与核心项目","深入业务一线","核心产品线"],"label":"接触核心业务","signal":"职责要问","joke":"离核心业务近，但你不是做核心业务的人。","meaning":"接触和独立负责的区别，在于有没有可归属的交付成果。","ask":"新人会独立负责哪个环节？最终产出怎样被使用？","section":4},
    {"sourceId":82,"keys":["对数据高度敏感","数据敏感","对数字敏感"],"label":"对数据高度敏感","signal":"数据要问","joke":"需要花大量时间做核对、清洗和口径对齐。","meaning":"数据敏感也可以是分析优势，要核实数据质量和分析支持。","ask":"清洗核对和业务分析各占多少时间？数据口径由谁维护？","section":4},
    {"sourceId":83,"keys":["支持业务快速决策"],"label":"支持业务快速决策","signal":"响应要问","joke":"业务方随时提需求，你随时响应，没有计划性。","meaning":"快速响应不一定等于随叫随到，关键看需求排期和响应约定。","ask":"临时取数由谁排优先级？有没有固定需求入口和响应时间？","section":4},
    {"sourceId":84,"keys":["owner意识","owner 意识","ownership","主人翁意识","有owner","主动担当"],"label":"Owner意识","signal":"授权要问","joke":"这个项目从头到尾都是你的责任，出了问题你背锅，成了功劳是团队的。","meaning":"全程负责要匹配相应的权限，不应只增加责任。","ask":"我能自主决定哪些事？资源不足或协作卡住时如何升级？","section":4},
    {"sourceId":85,"keys":["能吃苦","吃苦耐劳","踏实肯干","任劳任怨"],"label":"能吃苦 / 吃苦耐劳","signal":"工作量要问","joke":"工作真的很苦，不是开玩笑的。","meaning":"不同岗位的辛苦方式不同，要问清体力、沟通压力和工作时长。","ask":"典型一天具体做什么？高强度工作占多少，怎样补偿？","section":4},
    {"sourceId":88,"keys":["初创公司老板亲自带","老板亲自带","创始人直接带"],"label":"初创公司老板亲自带","signal":"带教要问","joke":"没有成熟的管理体系和带教流程，全靠老板个人意志驱动。","meaning":"直接接触老板也可能有学习价值，要确认指导方式和频率。","ask":"每周会怎样带教和反馈？老板不在时由谁指导？","section":4},
    {"sourceId":91,"keys":["提供成长机会","能快速成长","快速成长","成长空间大","能够提供很大的成长空间","学习机会多","学习型组织"],"label":"提供成长机会 / 成长空间大","signal":"成长要问","joke":"要提前问清有没有培训和带教，不然很可能就是让你自学。","meaning":"将相近的成长承诺合为一条；成长应有具体资源和反馈机制。","ask":"能举一个近两年新人的成长案例吗？培训、导师和反馈怎样安排？","section":4},
    {"sourceId":93,"keys":["上升空间大","天花板高","晋升空间大","晋升快","发展通道清晰"],"label":"上升空间大 / 天花板高","signal":"晋升要问","joke":"当下钱少福利差，用未来预期留人。","meaning":"发展承诺需要用实际晋升路径和近期案例核实。","ask":"晋升周期、标准和名额怎样？最近有人实际晋升吗？","section":4},
    {"sourceId":94,"keys":["我们培养体系很完善","培养体系很完善","培训体系完善"],"label":"我们培养体系很完善","signal":"培训要问","joke":"实际可能没有系统培训，全靠自学。","meaning":"不能仅凭一句承诺判断培训好坏，要看可执行的培养计划。","ask":"可以介绍新人培养计划吗？谁负责、安排在什么时间？","section":4},
    {"sourceId":95,"section":5,"keys":["扁平化","层级少","扁平文化","去层级化"],"label":"扁平化管理","signal":"细节要问","joke":"沟通链路短，但岗位边界不清晰，小团队里常见\"一人多岗\"。","meaning":"层级少也可能提升效率，要确认汇报、职责和发展路径。","ask":"直接向谁汇报？意见冲突由谁拍板，晋升通道怎样？"},
    {"sourceId":96,"section":5,"keys":["我们是创业公司","初创团队","早期项目"],"label":"我们是创业公司","signal":"细节要问","joke":"创业公司是个筐，什么不合理的要求都能往里装。","meaning":"创业阶段不等于制度必然不完善，要具体了解资源和保障。","ask":"目前哪些制度已经落地？这个岗位有哪些稳定的资源支持？"},
    {"sourceId":97,"section":5,"keys":["行业独角兽","明年启动IPO","准上市公司","即将上市"],"label":"行业独角兽 / 明年启动IPO","signal":"细节要问","joke":"用\"即将上市\"吸引求职者接受低薪和期权，但上市时间一再推迟。","meaning":"未来计划与已确定待遇应分开看，不能当成兑现保证。","ask":"不考虑上市预期，当前固定待遇是什么？股权条款如何约定？"},
    {"sourceId":98,"section":5,"keys":["千亿市场的探索者","万亿赛道","蓝海市场","风口行业"],"label":"千亿市场的探索者","signal":"细节要问","joke":"商业模式尚未闭环、盈利路径尚不清晰。","meaning":"市场规模大不等于公司已有稳定业务，具体情况仍要核实。","ask":"目前核心收入来自哪里？这个岗位服务什么已验证的业务？"},
    {"sourceId":100,"section":5,"keys":["典型欧美创业工作环境","欧美创业工作环境","Loft风格"],"label":"典型欧美创业工作环境","signal":"细节要问","joke":"用\"欧美风格\"包装简陋的办公条件。","meaning":"办公风格本身不是问题，重点看是否具备工作需要的条件。","ask":"可以看看实际办公场所吗？设备、网络和会议空间如何？"},
    {"sourceId":103,"section":5,"keys":["年轻化团队","团队年轻","平均年龄小","年轻有活力","团队都是年轻人"],"label":"年轻化团队","signal":"细节要问","joke":"人员流动比较快，你的同事可能比你先走。","meaning":"团队年轻并不代表流动率高，要确认经验结构和带教情况。","ask":"团队平均司龄多久？有多少资深同事，新人由谁带？"},
    {"sourceId":104,"section":5,"keys":["团队氛围好","团队融洽","氛围和谐","同事关系好","家文化","组内氛围好","组内氛围非常好","氛围非常好"],"label":"团队氛围好","signal":"细节要问","joke":"大家一起加班，团建也是加班的延伸。","meaning":"融洽也可以是真实体验，重点在于集体活动是否自愿和安排时间。","ask":"团建通常在什么时候？不参加会影响评价吗？"},
    {"sourceId":105,"section":5,"keys":["核心团队来自BAT","创始团队全部来自BAT","大厂背景","知名企业出身","BAT系团队"],"label":"核心团队来自BAT / 创始团队全部来自BAT","signal":"细节要问","joke":"客服、实习生、外包人员的经历不应被等同于核心能力背书。","meaning":"不要仅凭公司名评价成员能力，应了解实际职责、经验和项目成果。","ask":"核心成员此前分别做什么、任职多久？哪些经验适用于当前业务？"},
    {"sourceId":107,"section":5,"keys":["团队稳定性高","人员稳定","团队成熟","低流失率"],"label":"团队稳定性高","signal":"细节要问","joke":"仅1位十年老员工，其他都是未满半年新人。","meaning":"这是文档中的夸张反例，不是对当前团队的判断，应核实整体而非个别人的司龄。","ask":"过去一年团队进出多少人？这个岗位是新增还是替补？"}
  ];

  // Fixed blind boxes: source excerpts, not complete or attributed company JDs.
  var samples = [
  {
    "title": "抗压＋激情",
    "meta": "文档原文节选 · 每盒两条",
    "text": "抗压能力强；工作有激情。"
  },
  {
    "title": "自驱＋学习",
    "meta": "文档原文节选 · 每盒两条",
    "text": "自驱力强；快速学习能力。"
  },
  {
    "title": "数据＋决策",
    "meta": "文档原文节选 · 每盒两条",
    "text": "对数据高度敏感；支持业务快速决策。"
  },
  {
    "title": "Owner＋弹性",
    "meta": "文档原文节选 · 每盒两条",
    "text": "Owner意识；弹性工作制。"
  },
  {
    "title": "变化＋杂活",
    "meta": "文档原文节选 · 每盒两条",
    "text": "适应性强，拥抱变化；领导安排的其它任务。"
  }
];

  var input = document.getElementById("jd-input");
  var sampleBox = document.getElementById("samples");
  var panel = document.getElementById("result-panel");
  var inputPanel = document.getElementById("input-panel");
  var note = document.getElementById("field-note");
  var overlay = document.getElementById("decoding-panel");
  var transmission = document.getElementById("transmission");
  var skip = document.getElementById("skip-typing");
  var previous = document.getElementById("previous");
  var next = document.getElementById("next");
  var motion = window.matchMedia("(prefers-reduced-motion: reduce)");
  var hits = [];
  var page = 0;
  var timer = null;
  var stickerTimer = null;
  var arrivalPending = false;
  var mode = "input";
  var currentMessage = "";
  var decodedText = "";
  var channelNames = ["盲盒", "盲盒", "盲盒", "盲盒", "盲盒"];
  var shellButtons = document.querySelectorAll("[data-shell-option]");
  Array.prototype.forEach.call(shellButtons, function (button) {
    button.addEventListener("click", function () {
      document.body.setAttribute("data-shell", button.getAttribute("data-shell-option"));
      Array.prototype.forEach.call(shellButtons, function (other) {
        other.setAttribute("aria-pressed", other === button ? "true" : "false");
      });
    });
  });

  function put(id, text) { document.getElementById(id).textContent = text; }
  function cancelTimer() { window.clearTimeout(timer); timer = null; }
  function stopStickerMotion() {
    window.clearTimeout(stickerTimer);
    stickerTimer = null;
    document.body.setAttribute("data-sticker-motion", "idle");
  }
  function moveStickers(kind) {
    stopStickerMotion();
    if (motion.matches || document.hidden) { return; }
    // Restart a bounded CSS animation even when the user repeats the same action.
    void document.body.offsetWidth;
    document.body.setAttribute("data-sticker-motion", kind);
    stickerTimer = window.setTimeout(stopStickerMotion, kind === "decode" ? 740 : 600);
  }
  function updateCounter() { put("counter", ("000" + input.value.length).slice(-Math.max(3, String(input.value.length).length)) + " / 1000"); }
  function finishTyping() {
    cancelTimer();
    transmission.textContent = currentMessage;
    panel.classList.remove("is-typing");
    skip.classList.add("hidden");
    put("received-mark", "■ 已接收");
    put("accessible-transmission", currentMessage);
    put("status-announcement", hits.length ? "破译完成，共 " + hits.length + " 条，当前第 " + (page + 1) + " 条。" : "破译完成，暂未命中词库。");
    if (arrivalPending) { arrivalPending = false; moveStickers("received"); }
  }
  function matchedSource(item) {
    if (!hits.length || !decodedText) { return item.label; }
    var lower = decodedText.toLowerCase();
    var position = Infinity;
    var keyLength = 0;
    item.keys.forEach(function (key) {
      var found = keyPosition(lower, key);
      if (found >= 0 && found < position) { position = found; keyLength = key.length; }
    });
    if (position === Infinity) { return item.label; }
    var separators = ["\n", "。", "！", "？", "!", "?", "；", ";"];
    var start = 0;
    var end = decodedText.length;
    separators.forEach(function (separator) {
      var before = decodedText.lastIndexOf(separator, position - 1);
      var after = decodedText.indexOf(separator, position + keyLength);
      if (before >= start) { start = before + 1; }
      if (after >= 0 && after < end) { end = after; }
    });
    var sentence = decodedText.slice(start, end).trim();
    if (sentence.length <= 44) { return sentence || item.label; }
    var within = position - start;
    var from = Math.max(0, Math.min(sentence.length - 42, within - 12));
    return (from ? "…" : "") + sentence.slice(from, from + 42).trim() + (from + 42 < sentence.length ? "…" : "");
  }
  function renderCurrent(isPaging) {
    cancelTimer();
    arrivalPending = !isPaging;
    if (isPaging) { moveStickers("turn"); }
    mode = "result";
    overlay.classList.add("hidden");
    inputPanel.classList.add("hidden");
    panel.classList.remove("hidden");
    note.classList.remove("hidden");
    var item = hits[page] || {
      label: "未命中词库",
      joke: "这次没对上暗号。不是没问题，是词库还没学会。",
      meaning: "没有匹配到常见表达，不代表岗位没有风险。具体职责仍然值得问清楚。",
      ask: "最终交付什么？职责边界在哪？有哪些资源？入职三到六个月后怎么评价表现？"
    };
    currentMessage = item.joke;
    put("message-source", matchedSource(item));
    put("message-count", hits.length ? ("0" + (page + 1)).slice(-2) + " / " + ("0" + hits.length).slice(-2) : "00 / 00");
    put("device-status", "人话已接通");
    put("result-title", hits.length ? "截获 " + hits.length + " 条漂亮话" : "等待词库补课");
    put("reality", item.meaning);
    put("ask", "“" + item.ask + "”");
    put("decode-label", "再破译一段");
    put("decode-sub", "NEW MESSAGE ↵");
    put("key-hint", hits.length > 1 ? "← 左右翻条，笑完记得看小抄 →" : "↓ 换一段黑话，继续破译");
    previous.disabled = page === 0;
    next.disabled = page >= hits.length - 1;
    put("accessible-transmission", "");
    if (motion.matches || document.hidden) { finishTyping(); return; }
    transmission.style.minHeight = "";
    transmission.textContent = currentMessage;
    transmission.style.minHeight = Math.ceil(transmission.getBoundingClientRect().height) + "px";
    transmission.textContent = "";
    panel.classList.add("is-typing");
    skip.classList.remove("hidden");
    put("received-mark", "");
    var cursor = 0;
    function tick() {
      cursor += 1;
      transmission.textContent = currentMessage.slice(0, cursor);
      if (cursor >= currentMessage.length) { finishTyping(); }
      else { timer = window.setTimeout(tick, Math.min(24, 800 / currentMessage.length)); }
    }
    tick();
  }

  samples.forEach(function (item, index) {
    var sample = document.createElement("button");
    sample.type = "button";
    sample.className = "sample-key";
    sample.setAttribute("aria-label", "黑话盲盒 " + (index + 1) + "：" + item.title);
    sample.setAttribute("aria-pressed", "false");
    sample.innerHTML = "<b>0" + (index + 1) + "</b><span>" + channelNames[index] + "</span>";
    sample.addEventListener("click", function () {
      input.value = item.text;
      Array.prototype.forEach.call(sampleBox.children, function (button) { button.setAttribute("aria-pressed", "false"); });
      sample.setAttribute("aria-pressed", "true");
      updateCounter();
      decode();
    });
    sampleBox.appendChild(sample);
  });

  function keyPosition(text, key) {
    var lower = key.toLowerCase();
    // Abbreviations/numeric schedules must not match inside IDs or English words.
    if (/^[a-z0-9]+$/.test(lower)) {
      var match = new RegExp("(^|[^a-z0-9])" + lower + "(?=$|[^a-z0-9])").exec(text);
      return match ? match.index + match[1].length : -1;
    }
    return text.indexOf(lower);
  }
  function decode() {
    decodedText = input.value.trim();
    var text = decodedText.toLowerCase();
    if (!text) { put("device-status", "还没收到黑话"); put("status-announcement", "先粘贴一段 JD，或点击下方黑话盲盒。"); input.focus(); return; }
    cancelTimer();
    hits = dictionary.filter(function (item) {
      return item.keys.some(function (key) { return keyPosition(text, key) !== -1; });
    });
    // Follow the JD's reading order so each channel opens with its defining trait.
    function firstMention(item) {
      return Math.min.apply(null, item.keys.map(function (key) {
        var position = keyPosition(text, key);
        return position < 0 ? Infinity : position;
      }));
    }
    hits.sort(function (a, b) { return firstMention(a) - firstMention(b); });
    page = 0;
    mode = "decoding";
    arrivalPending = true;
    moveStickers("decode");
    input.blur();
    note.open = false;
    note.classList.add("hidden");
    previous.disabled = true;
    next.disabled = true;
    put("device-status", "正在破译…");
    put("status-announcement", "正在破译这段招聘信息。");
    if (motion.matches || document.hidden) { renderCurrent(); }
    else { overlay.classList.remove("hidden"); timer = window.setTimeout(renderCurrent, 320); }
  }

  function reset() {
    cancelTimer();
    stopStickerMotion();
    arrivalPending = false;
    mode = "input";
    input.value = "";
    updateCounter();
    panel.classList.add("hidden");
    panel.classList.remove("is-typing");
    overlay.classList.add("hidden");
    note.classList.add("hidden");
    inputPanel.classList.remove("hidden");
    previous.disabled = true;
    next.disabled = true;
    put("device-status", "等待密电");
    put("message-count", "CH. 01");
    put("decode-label", "破译这段话");
    put("decode-sub", "DECODE ↵");
    put("key-hint", "↓ 按中间键，把黑话翻过来");
    put("accessible-transmission", "");
    Array.prototype.forEach.call(sampleBox.children, function (button) { button.setAttribute("aria-pressed", "false"); });
    input.focus();
  }
  input.addEventListener("input", updateCounter);
  input.addEventListener("keydown", function (event) { if (event.key === "Enter" && (event.ctrlKey || event.metaKey)) { event.preventDefault(); decode(); } });
  document.getElementById("decode").addEventListener("click", function () { if (mode === "input") { decode(); } else { reset(); } });
  previous.addEventListener("click", function () { if (page > 0) { page -= 1; renderCurrent(true); } });
  next.addEventListener("click", function () { if (page < hits.length - 1) { page += 1; renderCurrent(true); } });
  skip.addEventListener("click", finishTyping);
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) { stopStickerMotion(); }
    if (document.hidden && mode === "decoding") { renderCurrent(); }
    else if (document.hidden && mode === "result") { finishTyping(); }
  });
}());
