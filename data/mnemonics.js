/**
 * 口诀数据 - 软考记忆口诀集合
 * window.MNEMONICS_DATA
 */
window.MNEMONICS_DATA = [
  {
    id: "mn-charter",
    title: "项目章程内容",
    mnemonic: "疯婶人进城，目标求财权",
    expansion: "风(风险)-婶(审批)-人(干系人)-进(进度)-城(程序)，目(目的)-标(标准)-求(需求)-财(财务)-权(职权)",
    relatedNodes: ["proc-int-1", "doc-charter"],
    category: "整合管理"
  },
  {
    id: "mn-monitor",
    title: "监控工作主要关注",
    mnemonic: "报查监狱，唯一评比",
    expansion: "报(报告)-查(检查)-监(监督)-狱(预测)，唯(维护信息库)-一(一致性)-评(评估绩效)-比(比较)",
    relatedNodes: ["proc-int-5"],
    category: "整合管理"
  },
  {
    id: "mn-deliverable-flow",
    title: "可交付成果流转",
    mnemonic: "指可→质核→范验→最终移交",
    expansion: "指导与管理工作→可交付成果；质量控制→核实的可交付成果(内查)；确认范围→验收的可交付成果(外查)；项目结束→最终成果移交",
    relatedNodes: ["proc-int-3", "proc-qual-3", "proc-scope-5"],
    category: "跨领域"
  },
  {
    id: "mn-perf-report",
    title: "工作绩效报告输入过程",
    mnemonic: "狗团变疯",
    expansion: "管(管理团队)理-团(管理团队)-变(整体变更控制)-疯(监督风险)。工作绩效报告只在总监控(监控项目工作)输出",
    relatedNodes: ["proc-res-5", "proc-comm-2", "proc-int-6", "proc-risk-7", "doc-work-perf-report"],
    category: "跨领域"
  },
  {
    id: "mn-inspection-audit",
    title: "检查vs审计",
    mnemonic: "检查：质控、确认范围、控制采购；审计：管理质量、监督风险、控制采购、配置审计",
    expansion: "检查关注成果是否合格(质量控制、确认范围、控制采购)；审计关注过程有效性(管理质量-质量审计、监督风险-风险审计、控制采购-采购审计、配置管理-配置审计)",
    relatedNodes: ["tool-inspection", "tool-audit"],
    category: "跨领域"
  },
  {
    id: "mn-two-books-two-needs",
    title: "2册2需",
    mnemonic: "2册2需进采购、规划质量",
    expansion: "需求文件、资源需求、风险登记册、干系人登记册。这四个文档是规划采购管理和规划质量管理的共同输入",
    relatedNodes: ["doc-req-file", "doc-res-req", "doc-risk-register", "doc-stakeholder-register", "proc-proc-1", "proc-qual-1"],
    category: "跨领域"
  },
  {
    id: "mn-benchmarking-mindmap",
    title: "标杆对照和思维导图",
    mnemonic: "标杆对照、思维导图只在规划过程组",
    expansion: "标杆对照：收集需求、规划质量管理、规划干系人参与；思维导图：规划质量管理、收集需求、规划干系人参与",
    relatedNodes: ["tool-benchmarking", "tool-mind-map"],
    category: "跨领域"
  },
  {
    id: "mn-stakeholder-matrix",
    title: "干系人参与评估矩阵",
    mnemonic: "2规2监",
    expansion: "规划沟通管理、规划干系人参与、监督沟通、监督干系人参与",
    relatedNodes: ["tool-stakeholder-matrix", "proc-comm-1", "proc-stk-2", "proc-comm-3", "proc-stk-4"],
    category: "跨领域"
  },
  {
    id: "mn-scope-confirm-steps",
    title: "确认范围的步骤",
    mnemonic: "石头准不会",
    expansion: "时(确定时间)-投(识别投入)-准(接受标准)-步(组织步骤)-会(组织会议)",
    relatedNodes: ["proc-scope-5"],
    category: "范围管理"
  },
  {
    id: "mn-scope-plan",
    title: "范围管理计划内容",
    mnemonic: "范围管理计划规定：范围说明书、创建WBS、范围基准验收、可交付成果",
    expansion: "1.制定范围说明书 2.根据范围说明书创建WBS 3.确定如何审批和维护范围基准 4.正式验收已完成的项目可交付成果",
    relatedNodes: ["doc-scope-plan"],
    category: "范围管理"
  },
  {
    id: "mn-req-plan",
    title: "需求管理计划内容",
    mnemonic: "需求管理计划规定：跟踪报告、配置管理、优先级排序、测量指标、跟踪矩阵",
    expansion: "1.如何规划跟踪报告各种需求活动 2.配置管理活动 3.需求优先级排序过程 4.测量指标及使用理由 5.反映哪些需求属性将列入跟踪矩阵",
    relatedNodes: ["doc-req-plan"],
    category: "范围管理"
  },
  {
    id: "mn-req-trace",
    title: "需求跟踪矩阵内容",
    mnemonic: "过程：需求→设计→开发→测试；成果：目标→成果",
    expansion: "1.业务需求、机会、目的和目标 2.项目目标 3.项目范围(WBS可交付成果) 4.产品设计 5.产品开发 6.测试策略和测试场景 7.高层级需求到详细需求",
    relatedNodes: ["doc-req-trace"],
    category: "范围管理"
  },
  {
    id: "mn-wbs-notes",
    title: "创建WBS注意事项",
    mnemonic: "面向成果、符合范围、支持计划控制、一人负责、4-6层、包括管理、干系人参与、非一成不变",
    expansion: "1.面向可交付成果 2.符合项目范围 3.底层支持计划和控制 4.元素只有一人负责 5.4-6层 6.包括项目管理和分包工作 7.需要主要干系人参与 8.并非一成不变",
    relatedNodes: ["proc-scope-4"],
    category: "范围管理"
  },
  {
    id: "mn-scope-vs-quality",
    title: "确认范围vs质量控制",
    mnemonic: "确认范围：外查、阶段末尾、验收；质量控制：内查、期间开展、正确性",
    expansion: "不同点：1.输出(核实vs验收) 2.负责人(内部vs外部) 3.概念/作用 4.开展顺序(先质控后确认) 5.开展节点(期间vs定期)。相同点：1.工具都用检查 2.都是监控过程组",
    relatedNodes: ["proc-scope-5", "proc-qual-3"],
    category: "跨领域"
  },
  {
    id: "mn-define-activity-output",
    title: "定义活动输出",
    mnemonic: "2单1属",
    expansion: "活动清单、里程碑清单、活动属性",
    relatedNodes: ["proc-sched-2", "doc-activity-list", "doc-milestone-list", "doc-activity-attr"],
    category: "进度管理"
  },
  {
    id: "mn-quality-plan-content",
    title: "质量管理计划内容",
    mnemonic: "目标职责过程活动工具",
    expansion: "1.质量标准 2.质量目标 3.质量角色与职责 4.需要审查的可交付成果和过程 5.质量控制和质量管理活动 6.质量工具 7.主要程序",
    relatedNodes: ["doc-qual-plan"],
    category: "质量管理"
  },
  {
    id: "mn-quality-audit",
    title: "质量审计目标",
    mnemonic: "识别分享识别改进积累",
    expansion: "1.识别全部正在实施的最佳实践 2.分享良好实践 3.识别全部违法做法与差距 4.改进过程执行 5.积累经验教训",
    relatedNodes: ["proc-qual-2"],
    category: "质量管理"
  },
  {
    id: "mn-quality-input",
    title: "规划质量管理输入",
    mnemonic: "3需2册",
    expansion: "3需(需求管理计划、需求文件、需求跟踪矩阵) 2册(风险登记册、干系人登记册)",
    relatedNodes: ["proc-qual-1"],
    category: "质量管理"
  },
  {
    id: "mn-problem-solving",
    title: "问题解决方法",
    mnemonic: "定识生选执政",
    expansion: "定义问题-识别根本原因-生成方案-选择方案-执行方案-验证效果并沉淀经验",
    relatedNodes: ["tool-problem-solving"],
    category: "质量管理"
  },
  {
    id: "mn-config-process",
    title: "配置管理过程",
    mnemonic: "计时制，状态审计会改",
    expansion: "制定配置管理计划-配置识别-配置控制-配置状态报告-配置审计-配置管理回顾与改进",
    relatedNodes: ["doc-config-plan"],
    category: "配置管理"
  },
  {
    id: "mn-config-key-success",
    title: "配置管理关键成功因素",
    mnemonic: "记分联号，变顾审责",
    expansion: "记录-分类-编号-定期审计-负责人-关注变化-定期回顾-关联其他管理活动",
    relatedNodes: ["doc-config-item"],
    category: "配置管理"
  },
  {
    id: "mn-config-library",
    title: "配置库建库模式",
    mnemonic: "类通一并，任专多串",
    expansion: "按配置类型建库(通用软件组织，继承性强，适合并行开发)；按开发任务建库(专业软件组织，工具多，以串行开发为主)",
    relatedNodes: [],
    category: "配置管理"
  },
  {
    id: "mn-func-config-audit",
    title: "功能配置审计",
    mnemonic: "功能一致达到完成",
    expansion: "审计一致性：1.开发已完成 2.已达到规定的性能和功能特征 3.操作和支持文档已完成",
    relatedNodes: [],
    category: "配置管理"
  },
  {
    id: "mn-phys-config-audit",
    title: "物理配置审计",
    mnemonic: "物理完整必须存在",
    expansion: "审计完整性：1.配置项是否存在 2.是否包含所有必须项目",
    relatedNodes: [],
    category: "配置管理"
  },
  {
    id: "mn-ccb-pm-role",
    title: "CCB和PM在变更控制中的角色",
    mnemonic: "CCB：评估、决定、通知、确认；PM：实施修改、验证",
    expansion: "CCB工作：评估变更影响、决定是否变更、通知评估结果、确认变更完成。PM工作：组织修改配置项、指定人员测试验证",
    relatedNodes: [],
    category: "变更管理"
  },
  {
    id: "mn-pd-stakeholder",
    title: "干系人绩效域预期目标",
    mnemonic: "支持反对高效认同",
    expansion: "1.与干系人建立高效的工作关系 2.干系人认同项目目标 3.支持项目的干系人提高了满意度 4.反对项目的干系人没有产生负面影响",
    relatedNodes: ["pd-1"],
    category: "绩效域"
  },
  {
    id: "mn-pd-stakeholder-points",
    title: "干系人绩效域绩效要点",
    mnemonic: "别理分级参见",
    expansion: "识别-理解和分析-优先级排序-参与-监督",
    relatedNodes: ["pd-1"],
    category: "绩效域"
  },
  {
    id: "mn-pd-team",
    title: "团队绩效域预期目标",
    mnemonic: "高绩效领导责任",
    expansion: "1.共享责任 2.建立高绩效团队 3.所有团队成员都展现出相应的领导力和人际关系技能",
    relatedNodes: ["pd-2"],
    category: "绩效域"
  },
  {
    id: "mn-pd-devlifecycle",
    title: "开发方法绩效域预期目标",
    mnemonic: "符合关联组成",
    expansion: "1.开发方法符合交付物 2.生命周期组成(项目阶段+开发方法) 3.价值关联(交付与干系人价值关联)",
    relatedNodes: ["pd-3"],
    category: "绩效域"
  },
  {
    id: "mn-pd-delivery",
    title: "交付绩效域预期目标",
    mnemonic: "做对事、做成事、产生价值、理解需求、干系人满意",
    expansion: "1.项目有助于实现业务目标和战略 2.项目实现了预期成果 3.在预定时间内实现了项目收益 4.团队对需求有清晰理解 5.干系人满意",
    relatedNodes: ["pd-6"],
    category: "绩效域"
  },
  {
    id: "mn-pd-work-summary",
    title: "工作绩效域要点总结",
    mnemonic: "过程优，约束控；能力建，沟通变；资源省，采购活；变更管，知识传",
    expansion: "8个绩效要点：过程评估优化、平衡制约因素、能力建设、管理沟通参与、管理实物资源、处理采购、监督变更、持续改进学习",
    relatedNodes: ["pd-5"],
    category: "绩效域"
  },
  {
    id: "mn-estimation-tools",
    title: "估算工具对比",
    mnemonic: "类比粗估快，参数用模型，三点算概率，自下而上准",
    expansion: "类比估算(粗略快速但不准)、参数估算(用历史数据模型)、三点估算(乐观悲观最可能加权)、自下而上估算(最准确但费时)",
    relatedNodes: ["tool-analogous", "tool-parametric", "tool-three-point", "tool-bottom-up"],
    category: "跨领域"
  },
  {
    id: "mn-contract-type",
    title: "合同类型选择",
    mnemonic: "外包总价，不明成本，外包又不明=工料",
    expansion: "范围明确用总价合同；范围不明确用成本补偿合同；既外包又有不明确部分用工料合同(总价+成本补偿)",
    relatedNodes: ["proc-proc-2"],
    category: "采购管理"
  },
  {
    id: "mn-change-request",
    title: "变更请求",
    mnemonic: "执行/监控过程组都有变更请求输出",
    expansion: "执行过程组和监控过程组都会产生变更请求作为输出。批准的变更请求只在整体变更控制输出",
    relatedNodes: ["doc-change-request", "doc-approved-change"],
    category: "跨领域"
  },
  {
    id: "mn-sub-monitor-input",
    title: "子监控输入必有",
    mnemonic: "子监控输入：1.项目管理计划 2.工作绩效数据",
    expansion: "所有子监控过程的共同输入：项目管理计划和工绩效数据",
    relatedNodes: ["doc-work-perf-data", "doc-pm-plan"],
    category: "跨领域"
  },
  {
    id: "mn-sub-monitor-output",
    title: "子监控输出必有",
    mnemonic: "子监控输出：1.变更请求 2.工作绩效信息",
    expansion: "所有子监控过程的共同输出：变更请求和工作绩效信息",
    relatedNodes: ["doc-change-request", "doc-work-perf-info"],
    category: "跨领域"
  },
  {
    id: "mn-tool-vs-output",
    title: "分析是工具，决策是输出",
    mnemonic: "分析是工具，决策是输出",
    expansion: "在PMBOK中，数据分析类(偏差分析、趋势分析等)属于工具技术，而决策类(投票、多标准决策分析)也属于工具技术。但决策结果本身是输出",
    relatedNodes: [],
    category: "跨领域"
  },
  {
    id: "mn-metric-traps",
    title: "度量陷阱",
    mnemonic: "霍桑虚荣士气误用偏见因果",
    expansion: "霍桑效应(度量影响行为)、虚荣指标(对决策无帮助)、士气低落(目标不可实现)、误用度量指标、确认偏见(选择性看待数据)、相关性与因果关系混淆",
    relatedNodes: ["pd-7"],
    category: "绩效域"
  },
  {
    id: "mn-delivery-metrics",
    title: "交付度量指标",
    mnemonic: "在制控量，提前看总时，周期看干活，队列看排队，批量看一次，效率看增值",
    expansion: "在制品、提前期(总时间)、周期时间(工作时间)、队列大小、批量大小、过程效率",
    relatedNodes: ["pd-7"],
    category: "绩效域"
  },
  {
    id: "mn-uncertainty-types",
    title: "不确定性三要素",
    mnemonic: "风险(未来事件)、模糊性(当前状况不明)、复杂性(系统不可预测)",
    expansion: "风险与不可知未来事件相关；模糊性分概念模糊性(缺乏理解)和情景模糊性(多结果可能)；复杂性与动态系统不可预测结果相关",
    relatedNodes: ["pd-8"],
    category: "绩效域"
  },
  {
    id: "mn-complexity-methods",
    title: "处理复杂性的方法",
    mnemonic: "系统：解耦模拟；重建：多样平衡；过程：迭代参与故障保护",
    expansion: "基于系统的复杂性(解耦、模拟)；重新构建的复杂性(多样性、平衡)；基于过程的复杂性(迭代、参与、故障保护/增加冗余)",
    relatedNodes: ["pd-8"],
    category: "绩效域"
  },
  {
    id: "mn-iron-triangle",
    title: "铁三角",
    mnemonic: "范围、进度、成本三者相互制约",
    expansion: "项目范围、进度和成本三个要素相互制约，改变任何一个都会影响其他两个。范围管理、进度管理、成本管理构成项目管理铁三角",
    relatedNodes: ["ka-2", "ka-3", "ka-4"],
    category: "跨领域"
  }
];
