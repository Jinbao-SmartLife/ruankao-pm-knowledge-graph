window.NODES_DATA = [
// ============================================================
// 知识领域节点 (ka-1 ~ ka-10)
// ============================================================
{id:"ka-1",label:"整合管理",type:"knowledge-area",knowledgeArea:"整合管理",processGroup:"",description:"项目整合管理是项目管理的中枢",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},
{id:"ka-2",label:"范围管理",type:"knowledge-area",knowledgeArea:"范围管理",processGroup:"",description:"确保项目做且只做所需的全部工作",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},
{id:"ka-3",label:"进度管理",type:"knowledge-area",knowledgeArea:"进度管理",processGroup:"",description:"管理项目按时完成",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},
{id:"ka-4",label:"成本管理",type:"knowledge-area",knowledgeArea:"成本管理",processGroup:"",description:"确保项目在批准预算内完成",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},
{id:"ka-5",label:"质量管理",type:"knowledge-area",knowledgeArea:"质量管理",processGroup:"",description:"确保项目满足既定质量要求",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},
{id:"ka-6",label:"资源管理",type:"knowledge-area",knowledgeArea:"资源管理",processGroup:"",description:"确保项目团队和物资资源有效利用",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},
{id:"ka-7",label:"沟通管理",type:"knowledge-area",knowledgeArea:"沟通管理",processGroup:"",description:"确保项目信息及时准确传递",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},
{id:"ka-8",label:"风险管理",type:"knowledge-area",knowledgeArea:"风险管理",processGroup:"",description:"识别分析和应对项目风险",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},
{id:"ka-9",label:"采购管理",type:"knowledge-area",knowledgeArea:"采购管理",processGroup:"",description:"从外部获取产品或服务",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},
{id:"ka-10",label:"干系人管理",type:"knowledge-area",knowledgeArea:"干系人管理",processGroup:"",description:"识别分析和管理干系人期望",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},

// ============================================================
// 绩效域节点 (pd-1 ~ pd-8)
// ============================================================
{id:"pd-1",label:"干系人绩效域",type:"performance-domain",knowledgeArea:"",processGroup:"",description:"与干系人有效互动",examFrequency:{choice:3,case:2,essay:3},mnemonic:"",notes:""},
{id:"pd-2",label:"团队绩效域",type:"performance-domain",knowledgeArea:"",processGroup:"",description:"建设高效的项目团队",examFrequency:{choice:3,case:2,essay:3},mnemonic:"",notes:""},
{id:"pd-3",label:"开发方法和生命周期绩效域",type:"performance-domain",knowledgeArea:"",processGroup:"",description:"选择合适的开发方法和生命周期",examFrequency:{choice:3,case:2,essay:3},mnemonic:"",notes:""},
{id:"pd-4",label:"规划绩效域",type:"performance-domain",knowledgeArea:"",processGroup:"",description:"制定项目计划并进行范围进度成本规划",examFrequency:{choice:3,case:2,essay:3},mnemonic:"",notes:""},
{id:"pd-5",label:"工作绩效域",type:"performance-domain",knowledgeArea:"",processGroup:"",description:"管理项目工作以实现项目目标",examFrequency:{choice:3,case:2,essay:3},mnemonic:"",notes:""},
{id:"pd-6",label:"交付绩效域",type:"performance-domain",knowledgeArea:"",processGroup:"",description:"交付满足业务需求的可交付成果",examFrequency:{choice:3,case:2,essay:3},mnemonic:"",notes:""},
{id:"pd-7",label:"度量绩效域",type:"performance-domain",knowledgeArea:"",processGroup:"",description:"评估项目绩效和进展",examFrequency:{choice:3,case:2,essay:3},mnemonic:"",notes:""},
{id:"pd-8",label:"不确定性绩效域",type:"performance-domain",knowledgeArea:"",processGroup:"",description:"探索和应对项目中的不确定性",examFrequency:{choice:3,case:2,essay:3},mnemonic:"",notes:""},

// ============================================================
// 过程组节点 (pg-1 ~ pg-5)
// ============================================================
{id:"pg-1",label:"启动过程组",type:"process-group",knowledgeArea:"",processGroup:"启动",description:"定义新项目或阶段并获授权",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"pg-2",label:"规划过程组",type:"process-group",knowledgeArea:"",processGroup:"规划",description:"明确项目范围优化目标制定计划",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"pg-3",label:"执行过程组",type:"process-group",knowledgeArea:"",processGroup:"执行",description:"完成项目管理计划中的工作",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"pg-4",label:"监控过程组",type:"process-group",knowledgeArea:"",processGroup:"监控",description:"跟踪审查进展并采取纠正措施",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"pg-5",label:"收尾过程组",type:"process-group",knowledgeArea:"",processGroup:"收尾",description:"正式完成项目或阶段",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},

// ============================================================
// 过程节点 - 整合管理 (proc-int-1 ~ proc-int-7)
// ============================================================
{id:"proc-int-1",label:"制定项目章程",type:"process",knowledgeArea:"整合管理",processGroup:"启动",description:"编写一份正式批准项目并授权项目经理在项目活动中使用组织资源的文件的过程。",purpose:"①明确项目与组织战略目标之间的直接联系 ②确立项目的正式地位 ③展示组织对项目的承诺",frequency:"once",examFrequency:{choice:5,case:4,essay:5},mnemonic:"",notes:""},
{id:"proc-int-2",label:"制定项目管理计划",type:"process",knowledgeArea:"整合管理",processGroup:"规划",description:"定义、准备和协调所有子计划，并把它们整合为一份综合项目管理计划的过程。",purpose:"生成一份核心文件，作为所有项目工作的依据。",frequency:"once",examFrequency:{choice:5,case:4,essay:5},mnemonic:"",notes:""},
{id:"proc-int-3",label:"指导与管理项目工作",type:"process",knowledgeArea:"整合管理",processGroup:"执行",description:"为实现项目目标而领导和执行项目管理计划中所确定的工作，并实施已批准变更的过程。",purpose:"对项目工作提供全面管理。",frequency:"ongoing",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},
{id:"proc-int-4",label:"管理项目知识",type:"process",knowledgeArea:"整合管理",processGroup:"执行",description:"使用现有知识并生成新知识，以实现项目目标，并且利用组织知识的过程。",purpose:"①利用已有组织知识 ②生成新知识 ③为未来项目积累知识",frequency:"ongoing",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},
{id:"proc-int-5",label:"监控项目工作",type:"process",knowledgeArea:"整合管理",processGroup:"监控",description:"跟踪、审查和报告整体项目进展，以实现项目管理计划中确定的绩效目标的过程。",purpose:"让干系人了解项目当前状态并认可为处理绩效问题而采取的行动。",frequency:"ongoing",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},
{id:"proc-int-6",label:"实施整体变更控制",type:"process",knowledgeArea:"整合管理",processGroup:"监控",description:"审查所有变更请求、批准变更，管理对可交付成果、组织过程资产、项目文件和项目管理计划的变更的过程。",purpose:"从整合的角度考虑记录在案的项目变更，降低项目风险。",frequency:"ongoing",examFrequency:{choice:5,case:5,essay:5},mnemonic:"",notes:""},
{id:"proc-int-7",label:"结束项目或阶段",type:"process",knowledgeArea:"整合管理",processGroup:"收尾",description:"终结项目、阶段或合同的所有活动的过程。",purpose:"①存档项目信息 ②完成计划的工作 ③释放组织资源",frequency:"once",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},

// ============================================================
// 过程节点 - 范围管理 (proc-scope-1 ~ proc-scope-6)
// ============================================================
{id:"proc-scope-1",label:"规划范围管理",type:"process",knowledgeArea:"范围管理",processGroup:"规划",description:"是为了记录如何定义、确认和控制项目范围及产品范围，而创建范围管理计划的过程。",purpose:"在整个项目期间对如何管理范围提供指南和方向。",frequency:"once",examFrequency:{choice:4,case:3,essay:4},mnemonic:"",notes:""},
{id:"proc-scope-2",label:"收集需求",type:"process",knowledgeArea:"范围管理",processGroup:"规划",description:"为实现目标而确定、记录并管理干系人的需要和需求的过程。",purpose:"为定义产品范围和项目范围奠定基础。",frequency:"once",examFrequency:{choice:5,case:4,essay:5},mnemonic:"",notes:""},
{id:"proc-scope-3",label:"定义范围",type:"process",knowledgeArea:"范围管理",processGroup:"规划",description:"是制定项目和产品详细描述的过程。",purpose:"描述产品、服务或成果的边界和验收标准。",frequency:"repeat",examFrequency:{choice:4,case:3,essay:4},mnemonic:"",notes:""},
{id:"proc-scope-4",label:"创建WBS",type:"process",knowledgeArea:"范围管理",processGroup:"规划",description:"是把项目可交付成果和项目工作分解成较小、更易于管理的组件的过程。",purpose:"为所要交付的内容提供架构。",frequency:"once",examFrequency:{choice:5,case:4,essay:5},mnemonic:"面向成果、4-6层、一人负责",notes:""},
{id:"proc-scope-5",label:"确认范围",type:"process",knowledgeArea:"范围管理",processGroup:"监控",description:"是正式验收已完成的项目可交付成果的过程。",purpose:"①使验收过程具有客观性 ②通过确认每个可交付成果来提高最终产品获得验收的可能性。",frequency:"periodic",examFrequency:{choice:4,case:3,essay:4},mnemonic:"石头准不会",notes:""},
{id:"proc-scope-6",label:"控制范围",type:"process",knowledgeArea:"范围管理",processGroup:"监控",description:"是监督项目和产品的范围状态，管理范围基准的变更的过程。",purpose:"在整个项目期间保持对范围基准的维护。",frequency:"ongoing",examFrequency:{choice:3,case:3,essay:3},mnemonic:"",notes:""},

// ============================================================
// 过程节点 - 进度管理 (proc-sched-1 ~ proc-sched-6)
// ============================================================
{id:"proc-sched-1",label:"规划进度管理",type:"process",knowledgeArea:"进度管理",processGroup:"规划",description:"是为规划、编制、管理、执行和控制项目进度而制定政策、程序和文档的过程。",purpose:"为如何在整个项目期间管理项目进度提供指南和方向。",frequency:"once",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},
{id:"proc-sched-2",label:"定义活动",type:"process",knowledgeArea:"进度管理",processGroup:"规划",description:"是识别和记录为完成项目可交付成果而须采取的具体行动的过程。",purpose:"将工作包分解为进度活动，作为对项目工作进行进度估算、规划、执行、监督和控制的基础。",frequency:"ongoing",examFrequency:{choice:4,case:3,essay:3},mnemonic:"2单1属",notes:""},
{id:"proc-sched-3",label:"排列活动顺序",type:"process",knowledgeArea:"进度管理",processGroup:"规划",description:"是识别和记录项目活动之间关系的过程。",purpose:"定义工作之间的逻辑顺序，以便在既定的所有项目制约因素下获得最高的效率。",frequency:"ongoing",examFrequency:{choice:4,case:4,essay:3},mnemonic:"",notes:""},
{id:"proc-sched-4",label:"估算活动持续时间",type:"process",knowledgeArea:"进度管理",processGroup:"规划",description:"是根据资源估算的结果，估算完成单项活动所需工作时段数的过程。",purpose:"确定完成每个活动所需花费的时间量。",frequency:"ongoing",examFrequency:{choice:5,case:4,essay:3},mnemonic:"",notes:""},
{id:"proc-sched-5",label:"制定进度计划",type:"process",knowledgeArea:"进度管理",processGroup:"规划",description:"是分析活动顺序、持续时间、资源需求和进度制约因素，创建进度模型，从而落实项目执行和监控的过程。",purpose:"为完成项目活动而制定具有计划日期的进度模型。",frequency:"ongoing",examFrequency:{choice:5,case:5,essay:4},mnemonic:"",notes:""},
{id:"proc-sched-6",label:"控制进度",type:"process",knowledgeArea:"进度管理",processGroup:"监控",description:"是监督项目状态，以更新项目进度和管理进度基准变更的过程。",purpose:"在整个项目期间保持对进度基准的维护。",frequency:"ongoing",examFrequency:{choice:5,case:5,essay:3},mnemonic:"",notes:""},

// ============================================================
// 过程节点 - 成本管理 (proc-cost-1 ~ proc-cost-4)
// ============================================================
{id:"proc-cost-1",label:"规划成本管理",type:"process",knowledgeArea:"成本管理",processGroup:"规划",description:"是确定如何估算、预算、管理、监督和控制项目成本的过程。",purpose:"在整个项目期间为如何管理项目成本提供指南和方向。",frequency:"once",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},
{id:"proc-cost-2",label:"估算成本",type:"process",knowledgeArea:"成本管理",processGroup:"规划",description:"是对完成项目工作所需资源成本进行近似估算的过程。",purpose:"确定项目所需的资金。",frequency:"periodic",examFrequency:{choice:5,case:4,essay:4},mnemonic:"",notes:""},
{id:"proc-cost-3",label:"制定预算",type:"process",knowledgeArea:"成本管理",processGroup:"规划",description:"是汇总所有单个活动或工作包的估算成本，建立一个经批准的成本基准的过程。",purpose:"确定可以依据其来进行监督和控制项目绩效的成本基准。",frequency:"once",examFrequency:{choice:5,case:4,essay:4},mnemonic:"",notes:""},
{id:"proc-cost-4",label:"控制成本",type:"process",knowledgeArea:"成本管理",processGroup:"监控",description:"是监督项目状态，以更新项目成本和管理成本基准变更的过程。",purpose:"在整个项目期间保持对成本基准的维护。",frequency:"ongoing",examFrequency:{choice:5,case:5,essay:4},mnemonic:"",notes:""},

// ============================================================
// 过程节点 - 质量管理 (proc-qual-1 ~ proc-qual-3)
// ============================================================
{id:"proc-qual-1",label:"规划质量管理",type:"process",knowledgeArea:"质量管理",processGroup:"规划",description:"是识别项目及其可交付成果的质量要求、标准并书面描述项目将如何证明符合质量要求、标准的过程。",purpose:"为在整个项目期间如何管理和核实质量提供指南和方向。",frequency:"once",examFrequency:{choice:4,case:3,essay:3},mnemonic:"3需2册",notes:""},
{id:"proc-qual-2",label:"管理质量",type:"process",knowledgeArea:"质量管理",processGroup:"执行",description:"是把组织的质量政策用于项目，并将质量管理计划转化为可执行的质量活动的过程。",purpose:"①提高实现质量目标的可能性 ②识别无效过程和导致质量低劣的原因 ③促进质量过程改进。",frequency:"ongoing",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},
{id:"proc-qual-3",label:"控制质量",type:"process",knowledgeArea:"质量管理",processGroup:"监控",description:"是为了评估绩效，确保项目输出完整、正确且满足客户期望，而监督和记录质量管理活动执行结果的过程。",purpose:"①核实项目可交付成果和工作已经达到主要干系人的质量要求 ②确定项目输出是否达到预期目的。",frequency:"ongoing",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},

// ============================================================
// 过程节点 - 资源管理 (proc-res-1 ~ proc-res-6)
// ============================================================
{id:"proc-res-1",label:"规划资源管理",type:"process",knowledgeArea:"资源管理",processGroup:"规划",description:"是定义如何估算、获取、管理和利用团队以及实物资源的过程。",purpose:"根据项目类型和复杂程度确定适用于项目资源的管理方法和管理程度。",frequency:"once",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},
{id:"proc-res-2",label:"估算活动资源",type:"process",knowledgeArea:"资源管理",processGroup:"规划",description:"是估算执行项目所需的团队资源，以及材料、设备和用品的类型和数量的过程。",purpose:"明确完成项目所需的资源种类、数量和特性。",frequency:"periodic",examFrequency:{choice:3,case:2,essay:1},mnemonic:"",notes:""},
{id:"proc-res-3",label:"获取资源",type:"process",knowledgeArea:"资源管理",processGroup:"执行",description:"是获取项目所需的团队成员、设施、设备、材料、用品和其他资源的过程。",purpose:"①概述和指导资源的选择 ②将选择的资源分配给相应的活动。",frequency:"periodic",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},
{id:"proc-res-4",label:"建设团队",type:"process",knowledgeArea:"资源管理",processGroup:"执行",description:"是提高工作能力，促进团队成员互动，改善团队整体氛围，以提高项目绩效的过程。",purpose:"改进团队协作、增强人际关系技能、激励员工、减少摩擦以及提升整体项目绩效。",frequency:"ongoing",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},
{id:"proc-res-5",label:"管理团队",type:"process",knowledgeArea:"资源管理",processGroup:"执行",description:"是跟踪团队成员工作表现、提供反馈、解决问题并管理团队变更以优化项目绩效的过程。",purpose:"影响团队行为、管理冲突以及解决问题。",frequency:"ongoing",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},
{id:"proc-res-6",label:"控制资源",type:"process",knowledgeArea:"资源管理",processGroup:"监控",description:"是确保按计划为项目分配实物资源，以及根据资源使用计划监督资源实际使用情况，并采取必要纠正措施的过程。",purpose:"①确保所分配的资源适时、适地可用于项目 ②资源在不再需要时被释放。",frequency:"ongoing",examFrequency:{choice:3,case:2,essay:1},mnemonic:"",notes:""},

// ============================================================
// 过程节点 - 沟通管理 (proc-comm-1 ~ proc-comm-3)
// ============================================================
{id:"proc-comm-1",label:"规划沟通管理",type:"process",knowledgeArea:"沟通管理",processGroup:"规划",description:"是基于每个干系人或干系人群体的信息需求、可用的组织资产，以及具体项目的需求，为项目沟通活动制定恰当的方法和管理计划的过程。",purpose:"①及时向干系人提供相关信息 ②引导干系人有效参与项目 ③编制书面沟通计划。",frequency:"periodic",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},
{id:"proc-comm-2",label:"管理沟通",type:"process",knowledgeArea:"沟通管理",processGroup:"执行",description:"确保项目信息及时且恰当地收集、生成、发布、存储、检索、管理、监督和最终处置的过程。",purpose:"促成项目团队与干系人之间的有效率且有效果的沟通。",frequency:"ongoing",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},
{id:"proc-comm-3",label:"监督沟通",type:"process",knowledgeArea:"沟通管理",processGroup:"监控",description:"是确保满足项目及其干系人的信息需求的过程。",purpose:"按沟通管理计划和干系人参与计划的要求优化信息传递流程。",frequency:"ongoing",examFrequency:{choice:2,case:2,essay:1},mnemonic:"",notes:""},

// ============================================================
// 过程节点 - 风险管理 (proc-risk-1 ~ proc-risk-7)
// ============================================================
{id:"proc-risk-1",label:"规划风险管理",type:"process",knowledgeArea:"风险管理",processGroup:"规划",description:"是定义如何实施项目风险管理活动的过程。",purpose:"确保风险管理的水平、方法和可见度与项目风险程度相匹配，与对组织和其他干系人的重要程度相匹配。",frequency:"once",examFrequency:{choice:4,case:3,essay:4},mnemonic:"",notes:""},
{id:"proc-risk-2",label:"识别风险",type:"process",knowledgeArea:"风险管理",processGroup:"规划",description:"是识别单个项目风险以及整体项目风险的来源，并记录风险特征的过程。",purpose:"①记录现有的单个项目风险，以及整体项目风险的来源 ②汇总相关信息以便项目团队恰当应对已识别风险。",frequency:"ongoing",examFrequency:{choice:5,case:4,essay:5},mnemonic:"",notes:""},
{id:"proc-risk-3",label:"定性风险分析",type:"process",knowledgeArea:"风险管理",processGroup:"规划",description:"是通过评估单个项目风险发生的概率和影响及其他特征，对风险进行优先级排序，从而为后续分析或行动提供基础的过程。",purpose:"重点关注高优先级的风险。",frequency:"ongoing",examFrequency:{choice:4,case:3,essay:4},mnemonic:"",notes:""},
{id:"proc-risk-4",label:"定量风险分析",type:"process",knowledgeArea:"风险管理",processGroup:"规划",description:"是就已识别的单个项目风险和不确定性的其他来源对整体项目目标的影响进行定量分析的过程。",purpose:"①量化整体项目风险 ②提供额外的定量风险信息，以支持风险应对规划。",frequency:"ongoing",examFrequency:{choice:4,case:3,essay:4},mnemonic:"",notes:""},
{id:"proc-risk-5",label:"规划风险应对",type:"process",knowledgeArea:"风险管理",processGroup:"规划",description:"是为了应对项目风险，而制定可选方案、选择应对策略并商定应对行动的过程。",purpose:"①制定应对整体项目风险和单个项目风险的适当方法 ②分配资源，并将相关活动添加进项目文件和项目管理计划中。",frequency:"ongoing",examFrequency:{choice:5,case:4,essay:5},mnemonic:"",notes:""},
{id:"proc-risk-6",label:"实施风险应对",type:"process",knowledgeArea:"风险管理",processGroup:"执行",description:"是执行商定的风险应对计划的过程。",purpose:"①确保按计划执行商定的风险应对措施 ②管理整体项目风险入口、最小化单个项目威胁，以及最大化单个项目机会。",frequency:"ongoing",examFrequency:{choice:3,case:2,essay:3},mnemonic:"",notes:""},
{id:"proc-risk-7",label:"监督风险",type:"process",knowledgeArea:"风险管理",processGroup:"监控",description:"是在整个项目期间，监督风险应对计划的实施，并跟踪已识别风险、识别和分析新风险，以及评估风险管理有效性的过程。",purpose:"保证项目决策是在整体项目风险和单个项目风险当前信息的基础上进行。",frequency:"ongoing",examFrequency:{choice:4,case:3,essay:4},mnemonic:"",notes:""},

// ============================================================
// 过程节点 - 采购管理 (proc-proc-1 ~ proc-proc-3)
// ============================================================
{id:"proc-proc-1",label:"规划采购管理",type:"process",knowledgeArea:"采购管理",processGroup:"规划",description:"是记录项目采购决策、明确采购方法，及识别潜在卖方的过程。",purpose:"确定是否从项目外部获取货物和服务，如果是，确定将在什么时间、以什么方式获取什么货物和服务。",frequency:"once",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},
{id:"proc-proc-2",label:"实施采购",type:"process",knowledgeArea:"采购管理",processGroup:"执行",description:"是获取卖方应答、选择卖方并授予合同的过程。",purpose:"选定合格卖方并签署关于货物或服务交付的法律协议。",frequency:"periodic",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},
{id:"proc-proc-3",label:"控制采购",type:"process",knowledgeArea:"采购管理",processGroup:"监控",description:"是管理采购关系、监督合同绩效、实施必要的变更和纠偏，以及关闭合同的过程。",purpose:"确保买卖双方履行法律协议，满足项目需求。",frequency:"ongoing",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},

// ============================================================
// 过程节点 - 干系人管理 (proc-stk-1 ~ proc-stk-4)
// ============================================================
{id:"proc-stk-1",label:"识别干系人",type:"process",knowledgeArea:"干系人管理",processGroup:"启动",description:"是定期识别项目干系人，分析和记录他们的利益、参与度、相互依赖性、影响力和对项目成功的潜在影响的过程。",purpose:"使项目团队能够建立对每个干系人或干系人群体的适度关注。",frequency:"periodic",examFrequency:{choice:3,case:2,essay:3},mnemonic:"",notes:""},
{id:"proc-stk-2",label:"规划干系人参与",type:"process",knowledgeArea:"干系人管理",processGroup:"规划",description:"是根据干系人的需求、期望、利益和对项目的潜在影响，制定项目干系人参与项目的方法的过程。",purpose:"提供与干系人进行有效互动的可行计划。",frequency:"periodic",examFrequency:{choice:3,case:2,essay:3},mnemonic:"",notes:""},
{id:"proc-stk-3",label:"管理干系人参与",type:"process",knowledgeArea:"干系人管理",processGroup:"执行",description:"是通过与干系人进行沟通协作，以满足其需求与期望、处理问题，并促进干系人合力参与的过程。",purpose:"尽可能提高干系人的支持度，并降低干系人的抵制程度。",frequency:"ongoing",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},
{id:"proc-stk-4",label:"监督干系人参与",type:"process",knowledgeArea:"干系人管理",processGroup:"监控",description:"是监督项目干系人的关系，并通过修订参与策略和计划来引导干系人合理参与项目的过程。",purpose:"随着项目进展和环境变化，维持或提升干系人参与活动的效率和效果。",frequency:"ongoing",examFrequency:{choice:2,case:2,essay:2},mnemonic:"",notes:""},

// ============================================================
// 文档节点 - 整合管理
// ============================================================
{id:"doc-charter",label:"项目章程",type:"document",knowledgeArea:"整合管理",processGroup:"启动",description:"正式批准项目并授权PM的文件",examFrequency:{choice:5,case:3,essay:4},mnemonic:"",notes:""},
{id:"doc-pm-plan",label:"项目管理计划",type:"document",knowledgeArea:"整合管理",processGroup:"规划",description:"描述项目执行和监控方式的综合计划",examFrequency:{choice:5,case:4,essay:5},mnemonic:"",notes:""},
{id:"doc-assumption-log",label:"假设日志",type:"document",knowledgeArea:"整合管理",processGroup:"启动",description:"记录项目假设条件和制约因素",examFrequency:{choice:3,case:2,essay:1},mnemonic:"",notes:""},
{id:"doc-change-log",label:"变更日志",type:"document",knowledgeArea:"整合管理",processGroup:"监控",description:"记录所有变更请求及其状态",examFrequency:{choice:3,case:2,essay:1},mnemonic:"",notes:""},
{id:"doc-lessons-learned",label:"经验教训登记册",type:"document",knowledgeArea:"整合管理",processGroup:"执行",description:"记录项目过程中获得的经验教训",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},
{id:"doc-final-report",label:"最终报告",type:"document",knowledgeArea:"整合管理",processGroup:"收尾",description:"项目或阶段结束时编写的总结报告",examFrequency:{choice:2,case:1,essay:1},mnemonic:"",notes:""},
{id:"doc-issue-log",label:"问题日志",type:"document",knowledgeArea:"整合管理",processGroup:"执行",description:"记录和跟进项目问题",examFrequency:{choice:3,case:2,essay:1},mnemonic:"",notes:""},

// ============================================================
// 文档节点 - 范围管理
// ============================================================
{id:"doc-scope-plan",label:"范围管理计划",type:"document",knowledgeArea:"范围管理",processGroup:"规划",description:"描述如何定义确认和控制项目范围",examFrequency:{choice:3,case:2,essay:3},mnemonic:"",notes:""},
{id:"doc-req-plan",label:"需求管理计划",type:"document",knowledgeArea:"范围管理",processGroup:"规划",description:"描述如何分析记录和管理项目需求",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},
{id:"doc-req-file",label:"需求文件",type:"document",knowledgeArea:"范围管理",processGroup:"规划",description:"记录项目需求的详细文件",examFrequency:{choice:4,case:3,essay:4},mnemonic:"",notes:""},
{id:"doc-req-trace",label:"需求跟踪矩阵",type:"document",knowledgeArea:"范围管理",processGroup:"规划",description:"跟踪需求到可交付成果的表格",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},
{id:"doc-scope-stmt",label:"项目范围说明书",type:"document",knowledgeArea:"范围管理",processGroup:"规划",description:"详细描述项目范围包括除外责任",examFrequency:{choice:4,case:3,essay:4},mnemonic:"",notes:""},
{id:"doc-wbs",label:"WBS",type:"document",knowledgeArea:"范围管理",processGroup:"规划",description:"对项目团队要提交的可交付成果进行层级分解",examFrequency:{choice:4,case:3,essay:4},mnemonic:"",notes:""},
{id:"doc-wbs-dict",label:"WBS词典",type:"document",knowledgeArea:"范围管理",processGroup:"规划",description:"对WBS每个组件的详细描述",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},
{id:"doc-scope-baseline",label:"范围基准",type:"document",knowledgeArea:"范围管理",processGroup:"规划",description:"经批准的范围说明书WBS及WBS词典",examFrequency:{choice:5,case:4,essay:4},mnemonic:"",notes:""},

// ============================================================
// 文档节点 - 进度管理
// ============================================================
{id:"doc-sched-plan",label:"进度管理计划",type:"document",knowledgeArea:"进度管理",processGroup:"规划",description:"描述如何管理项目进度",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},
{id:"doc-activity-list",label:"活动清单",type:"document",knowledgeArea:"进度管理",processGroup:"规划",description:"记录项目所有活动的清单",examFrequency:{choice:3,case:2,essay:1},mnemonic:"",notes:""},
{id:"doc-activity-attr",label:"活动属性",type:"document",knowledgeArea:"进度管理",processGroup:"规划",description:"描述活动的各项特征属性",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"doc-milestone-list",label:"里程碑清单",type:"document",knowledgeArea:"进度管理",processGroup:"规划",description:"列出项目的所有里程碑",examFrequency:{choice:3,case:2,essay:1},mnemonic:"",notes:""},
{id:"doc-sched-network",label:"项目进度网络图",type:"document",knowledgeArea:"进度管理",processGroup:"规划",description:"展示活动之间逻辑关系的图形",examFrequency:{choice:3,case:2,essay:1},mnemonic:"",notes:""},
{id:"doc-duration-est",label:"持续时间估算",type:"document",knowledgeArea:"进度管理",processGroup:"规划",description:"完成每项活动的所需时间估算",examFrequency:{choice:3,case:2,essay:1},mnemonic:"",notes:""},
{id:"doc-est-basis",label:"估算依据",type:"document",knowledgeArea:"进度管理",processGroup:"规划",description:"支持估算的假设条件和数据",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"doc-sched-baseline",label:"进度基准",type:"document",knowledgeArea:"进度管理",processGroup:"规划",description:"经批准的项目进度计划",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},
{id:"doc-proj-sched",label:"项目进度计划",type:"document",knowledgeArea:"进度管理",processGroup:"规划",description:"包含活动日期和里程碑的进度模型",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},
{id:"doc-proj-calendar",label:"项目日历",type:"document",knowledgeArea:"进度管理",processGroup:"规划",description:"规定可开展活动的工作日和班次",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"doc-sched-data",label:"进度数据",type:"document",knowledgeArea:"进度管理",processGroup:"规划",description:"支持进度计划的详细数据",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"doc-sched-forecast",label:"进度预测",type:"document",knowledgeArea:"进度管理",processGroup:"监控",description:"根据当前进度预测完工日期",examFrequency:{choice:3,case:2,essay:1},mnemonic:"",notes:""},

// ============================================================
// 文档节点 - 成本管理
// ============================================================
{id:"doc-cost-plan",label:"成本管理计划",type:"document",knowledgeArea:"成本管理",processGroup:"规划",description:"描述如何规划估算和控制项目成本",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},
{id:"doc-cost-est",label:"成本估算",type:"document",knowledgeArea:"成本管理",processGroup:"规划",description:"完成活动所需资源的成本近似值",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},
{id:"doc-cost-baseline",label:"成本基准",type:"document",knowledgeArea:"成本管理",processGroup:"规划",description:"经批准的按时间段分配的项目预算",examFrequency:{choice:5,case:4,essay:4},mnemonic:"",notes:""},
{id:"doc-fund-req",label:"项目资金需求",type:"document",knowledgeArea:"成本管理",processGroup:"规划",description:"基于成本基准的资金需求计划",examFrequency:{choice:3,case:2,essay:1},mnemonic:"",notes:""},
{id:"doc-cost-forecast",label:"成本预测",type:"document",knowledgeArea:"成本管理",processGroup:"监控",description:"根据当前绩效预测完工成本",examFrequency:{choice:3,case:2,essay:1},mnemonic:"",notes:""},

// ============================================================
// 文档节点 - 质量管理
// ============================================================
{id:"doc-qual-plan",label:"质量管理计划",type:"document",knowledgeArea:"质量管理",processGroup:"规划",description:"描述如何实施适用的质量政策",examFrequency:{choice:4,case:3,essay:4},mnemonic:"目标职责过程活动工具",notes:""},
{id:"doc-qual-metrics",label:"质量测量指标",type:"document",knowledgeArea:"质量管理",processGroup:"规划",description:"描述项目或产品属性及测量方式",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},
{id:"doc-qual-report",label:"质量报告",type:"document",knowledgeArea:"质量管理",processGroup:"执行",description:"包含质量管理问题的报告",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},
{id:"doc-test-file",label:"测试与评估文件",type:"document",knowledgeArea:"质量管理",processGroup:"执行",description:"用于评估质量目标的测试文件",examFrequency:{choice:2,case:1,essay:1},mnemonic:"",notes:""},
{id:"doc-qual-measure",label:"质量控制测量结果",type:"document",knowledgeArea:"质量管理",processGroup:"监控",description:"质量控制活动的测量结果记录",examFrequency:{choice:3,case:2,essay:1},mnemonic:"",notes:""},

// ============================================================
// 文档节点 - 资源管理
// ============================================================
{id:"doc-res-plan",label:"资源管理计划",type:"document",knowledgeArea:"资源管理",processGroup:"规划",description:"描述如何估算获取和管理项目资源",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},
{id:"doc-team-charter",label:"团队章程",type:"document",knowledgeArea:"资源管理",processGroup:"规划",description:"记录团队价值观和工作指南",examFrequency:{choice:2,case:1,essay:1},mnemonic:"",notes:""},
{id:"doc-res-req",label:"资源需求",type:"document",knowledgeArea:"资源管理",processGroup:"规划",description:"执行活动所需资源的类型和数量",examFrequency:{choice:3,case:2,essay:1},mnemonic:"",notes:""},
{id:"doc-res-breakdown",label:"资源分解结构",type:"document",knowledgeArea:"资源管理",processGroup:"规划",description:"按类型划分的资源层级结构",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"doc-team-assign",label:"项目团队派工单",type:"document",knowledgeArea:"资源管理",processGroup:"执行",description:"记录团队成员及其任务分配",examFrequency:{choice:2,case:1,essay:1},mnemonic:"",notes:""},
{id:"doc-res-calendar",label:"资源日历",type:"document",knowledgeArea:"资源管理",processGroup:"执行",description:"记录资源的可用工作日和班次",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"doc-material-assign",label:"物质资源分配单",type:"document",knowledgeArea:"资源管理",processGroup:"执行",description:"记录物质资源的分配情况",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"doc-team-performance",label:"团队绩效评价",type:"document",knowledgeArea:"资源管理",processGroup:"执行",description:"对团队整体绩效的评估结果",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},

// ============================================================
// 文档节点 - 沟通管理
// ============================================================
{id:"doc-comm-plan",label:"沟通管理计划",type:"document",knowledgeArea:"沟通管理",processGroup:"规划",description:"描述项目沟通方式和方法",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},
{id:"doc-comm-record",label:"项目沟通记录",type:"document",knowledgeArea:"沟通管理",processGroup:"执行",description:"项目沟通活动的记录",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},

// ============================================================
// 文档节点 - 风险管理
// ============================================================
{id:"doc-risk-plan",label:"风险管理计划",type:"document",knowledgeArea:"风险管理",processGroup:"规划",description:"描述如何实施项目风险管理活动",examFrequency:{choice:4,case:3,essay:4},mnemonic:"",notes:""},
{id:"doc-risk-register",label:"风险登记册",type:"document",knowledgeArea:"风险管理",processGroup:"规划",description:"记录已识别风险的详细信息",examFrequency:{choice:5,case:4,essay:5},mnemonic:"",notes:""},
{id:"doc-risk-report",label:"风险报告",type:"document",knowledgeArea:"风险管理",processGroup:"规划",description:"汇总项目整体风险信息",examFrequency:{choice:3,case:2,essay:3},mnemonic:"",notes:""},

// ============================================================
// 文档节点 - 采购管理
// ============================================================
{id:"doc-proc-plan",label:"采购管理计划",type:"document",knowledgeArea:"采购管理",processGroup:"规划",description:"描述如何管理采购过程",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},
{id:"doc-proc-doc",label:"采购文档",type:"document",knowledgeArea:"采购管理",processGroup:"规划",description:"用于征求卖方建议的文件",examFrequency:{choice:3,case:2,essay:1},mnemonic:"",notes:""},
{id:"doc-source-select",label:"卖方建议书",type:"document",knowledgeArea:"采购管理",processGroup:"执行",description:"卖方提供的建议书或投标文件",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"doc-contract",label:"合同/协议",type:"document",knowledgeArea:"采购管理",processGroup:"执行",description:"买卖双方之间的法律合同",examFrequency:{choice:3,case:2,essay:2},mnemonic:"",notes:""},
{id:"doc-statement-work",label:"工作说明书(SOW)",type:"document",knowledgeArea:"采购管理",processGroup:"规划",description:"对所需采购的产品或服务的详细描述",examFrequency:{choice:2,case:1,essay:1},mnemonic:"",notes:""},
{id:"doc-proc-strategy",label:"采购策略",type:"document",knowledgeArea:"采购管理",processGroup:"规划",description:"确定采购方法和管理策略",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"doc-bid-doc",label:"招标文件",type:"document",knowledgeArea:"采购管理",processGroup:"规划",description:"用于招标的正式文件",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"doc-source-criteria",label:"供方选择标准",type:"document",knowledgeArea:"采购管理",processGroup:"规划",description:"选择卖方的评估标准",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"doc-make-buy",label:"自制或外购决策",type:"document",knowledgeArea:"采购管理",processGroup:"规划",description:"决定某项工作是内部完成还是外部采购",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"doc-independent-cost",label:"独立成本估算",type:"document",knowledgeArea:"采购管理",processGroup:"规划",description:"由独立第三方进行的成本估算",examFrequency:{choice:1,case:1,essay:0},mnemonic:"",notes:""},
{id:"doc-selected-seller",label:"选定的卖方",type:"document",knowledgeArea:"采购管理",processGroup:"执行",description:"经过评估选定的合格卖方",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"doc-proc-close",label:"采购关闭",type:"document",knowledgeArea:"采购管理",processGroup:"监控",description:"确认采购完成并正式关闭",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},

// ============================================================
// 文档节点 - 干系人管理
// ============================================================
{id:"doc-stakeholder-register",label:"干系人登记册",type:"document",knowledgeArea:"干系人管理",processGroup:"启动",description:"记录已识别干系人的信息",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},
{id:"doc-stakeholder-plan",label:"干系人参与计划",type:"document",knowledgeArea:"干系人管理",processGroup:"规划",description:"描述促进干系人参与的策略",examFrequency:{choice:3,case:2,essay:3},mnemonic:"",notes:""},

// ============================================================
// 文档节点 - 跨领域
// ============================================================
{id:"doc-work-perf-data",label:"工作绩效数据",type:"document",knowledgeArea:"跨领域",processGroup:"执行",description:"执行过程中收集的原始观察结果",examFrequency:{choice:4,case:3,essay:2},mnemonic:"",notes:""},
{id:"doc-work-perf-info",label:"工作绩效信息",type:"document",knowledgeArea:"跨领域",processGroup:"监控",description:"经过分析整合的绩效数据",examFrequency:{choice:4,case:3,essay:2},mnemonic:"",notes:""},
{id:"doc-work-perf-report",label:"工作绩效报告",type:"document",knowledgeArea:"跨领域",processGroup:"监控",description:"为制定决策而编制的绩效报告",examFrequency:{choice:4,case:3,essay:2},mnemonic:"",notes:""},
{id:"doc-change-request",label:"变更请求",type:"document",knowledgeArea:"跨领域",processGroup:"执行",description:"关于修改文件的正式提议",examFrequency:{choice:5,case:4,essay:3},mnemonic:"",notes:""},
{id:"doc-approved-change",label:"批准的变更请求",type:"document",knowledgeArea:"跨领域",processGroup:"监控",description:"经CCB批准同意实施的变更",examFrequency:{choice:4,case:3,essay:2},mnemonic:"",notes:""},
{id:"doc-deliverable",label:"可交付成果",type:"document",knowledgeArea:"跨领域",processGroup:"执行",description:"为完成项目而产生的独特可验证的产品",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},
{id:"doc-accepted-deliverable",label:"验收的可交付成果",type:"document",knowledgeArea:"跨领域",processGroup:"监控",description:"经客户或发起人验收的可交付成果",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},
{id:"doc-verified-deliverable",label:"核实的可交付成果",type:"document",knowledgeArea:"跨领域",processGroup:"监控",description:"经质量控制过程检验合格的可交付成果",examFrequency:{choice:4,case:3,essay:3},mnemonic:"",notes:""},

// ============================================================
// 文档节点 - 配置管理
// ============================================================
{id:"doc-config-plan",label:"配置管理计划",type:"document",knowledgeArea:"配置管理",processGroup:"规划",description:"描述如何管理项目配置",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"doc-config-item",label:"配置项",type:"document",knowledgeArea:"配置管理",processGroup:"规划",description:"需要配置管理的项目组件",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"doc-config-baseline",label:"配置基线",type:"document",knowledgeArea:"配置管理",processGroup:"规划",description:"经批准的配置项集合",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"doc-config-report",label:"配置状态报告",type:"document",knowledgeArea:"配置管理",processGroup:"监控",description:"记录配置管理状态信息",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},

// ============================================================
// 其他文档节点
// ============================================================
{id:"doc-project-init",label:"项目立项文件",type:"document",knowledgeArea:"整合管理",processGroup:"启动",description:"项目立项阶段形成的文件",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"doc-business-case",label:"商业论证",type:"document",knowledgeArea:"整合管理",processGroup:"启动",description:"论证项目投资可行性的文件",examFrequency:{choice:3,case:2,essay:1},mnemonic:"",notes:""},
{id:"doc-benefit-plan",label:"效益管理计划",type:"document",knowledgeArea:"整合管理",processGroup:"启动",description:"描述如何创造和保持项目效益",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"doc-agreement",label:"协议",type:"document",knowledgeArea:"跨领域",processGroup:"执行",description:"项目与外部方达成的合同或协议",examFrequency:{choice:3,case:2,essay:1},mnemonic:"",notes:""},
{id:"doc-change-mgmt-plan",label:"变更管理计划",type:"document",knowledgeArea:"整合管理",processGroup:"规划",description:"描述如何管理项目变更",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"doc-perf-measure-baseline",label:"绩效测量基准",type:"document",knowledgeArea:"跨领域",processGroup:"规划",description:"综合范围进度成本的基准",examFrequency:{choice:3,case:2,essay:1},mnemonic:"",notes:""},
{id:"doc-checklist",label:"核对单",type:"document",knowledgeArea:"质量管理",processGroup:"监控",description:"用于核对质量的清单",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"doc-check-sheet",label:"核查表",type:"document",knowledgeArea:"质量管理",processGroup:"监控",description:"用于收集数据的表格",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"doc-statistical-sampling",label:"统计抽样",type:"document",knowledgeArea:"质量管理",processGroup:"监控",description:"从总体中抽取样本进行检查",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},

// ============================================================
// 工具节点 - 通用工具
// ============================================================
{id:"tool-expert",label:"专家判断",type:"tool",knowledgeArea:"",processGroup:"",description:"基于专业知识的判断",examFrequency:{choice:4,case:3,essay:1},mnemonic:"",notes:""},
{id:"tool-meeting",label:"会议",type:"tool",knowledgeArea:"",processGroup:"",description:"项目团队和干系人之间的信息交流",examFrequency:{choice:3,case:2,essay:1},mnemonic:"",notes:""},
{id:"tool-brainstorm",label:"头脑风暴",type:"tool",knowledgeArea:"",processGroup:"",description:"在短时间内获取大量创意",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-interview",label:"访谈",type:"tool",knowledgeArea:"",processGroup:"",description:"通过与干系人直接交谈获取信息",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-focus-group",label:"焦点小组",type:"tool",knowledgeArea:"",processGroup:"",description:"召集特定人群了解期望和态度",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-questionnaire",label:"问卷调查",type:"tool",knowledgeArea:"",processGroup:"",description:"通过书面问卷收集大量信息",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-benchmarking",label:"标杆对照",type:"tool",knowledgeArea:"",processGroup:"",description:"与最佳实践进行对比分析",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-data-collection",label:"数据收集",type:"tool",knowledgeArea:"",processGroup:"",description:"通过各种方式收集项目数据",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-alt-analysis",label:"备选方案分析",type:"tool",knowledgeArea:"",processGroup:"",description:"比较不同可选方案的优劣",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-reserve-analysis",label:"储备分析",type:"tool",knowledgeArea:"",processGroup:"",description:"分析应急储备和管理储备",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-variance-analysis",label:"偏差分析",type:"tool",knowledgeArea:"",processGroup:"",description:"比较实际绩效与计划基准的差异",examFrequency:{choice:4,case:3,essay:1},mnemonic:"",notes:""},
{id:"tool-trend-analysis",label:"趋势分析",type:"tool",knowledgeArea:"",processGroup:"",description:"根据历史数据预测未来绩效",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-ev-analysis",label:"挣值分析",type:"tool",knowledgeArea:"",processGroup:"",description:"综合范围进度和成本度量项目绩效",examFrequency:{choice:5,case:5,essay:1},mnemonic:"",notes:""},
{id:"tool-root-cause",label:"根本原因分析",type:"tool",knowledgeArea:"",processGroup:"",description:"找出导致问题的根本原因",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-what-if",label:"假设情景分析",type:"tool",knowledgeArea:"",processGroup:"",description:"评估不同情景下的项目结果",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-simulation",label:"模拟",type:"tool",knowledgeArea:"",processGroup:"",description:"使用模型模拟项目可能的结果",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-cost-benefit",label:"成本效益分析",type:"tool",knowledgeArea:"",processGroup:"",description:"比较成本与预期收益",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-quality-cost",label:"质量成本",type:"tool",knowledgeArea:"",processGroup:"",description:"评估一致性成本和非一致性成本",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-performance-review",label:"绩效审查",type:"tool",knowledgeArea:"",processGroup:"",description:"测量比较和分析项目绩效",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-analogous",label:"类比估算",type:"tool",knowledgeArea:"",processGroup:"",description:"使用类似项目的历史数据估算",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-parametric",label:"参数估算",type:"tool",knowledgeArea:"",processGroup:"",description:"基于统计关系进行估算",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-three-point",label:"三点估算",type:"tool",knowledgeArea:"",processGroup:"",description:"使用乐观最可能悲观三个值估算",examFrequency:{choice:4,case:3,essay:1},mnemonic:"",notes:""},
{id:"tool-bottom-up",label:"自下而上估算",type:"tool",knowledgeArea:"",processGroup:"",description:"从工作包层级逐层向上汇总估算",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-pdm",label:"紧前关系绘图法",type:"tool",knowledgeArea:"",processGroup:"",description:"用节点表示活动的进度网络图",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-dependency",label:"确定依赖关系",type:"tool",knowledgeArea:"",processGroup:"",description:"识别活动之间的依赖类型",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-lead-lag",label:"提前量和滞后量",type:"tool",knowledgeArea:"",processGroup:"",description:"调整活动之间的时间关系",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-cpm",label:"关键路径法",type:"tool",knowledgeArea:"",processGroup:"",description:"确定项目最长路径和最短工期",examFrequency:{choice:5,case:4,essay:1},mnemonic:"",notes:""},
{id:"tool-resource-opt",label:"资源优化",type:"tool",knowledgeArea:"",processGroup:"",description:"平衡资源需求和可用性",examFrequency:{choice:4,case:3,essay:1},mnemonic:"",notes:""},
{id:"tool-sched-compress",label:"进度压缩",type:"tool",knowledgeArea:"",processGroup:"",description:"在不改变范围的情况下缩短工期",examFrequency:{choice:4,case:3,essay:1},mnemonic:"",notes:""},
{id:"tool-pmis",label:"项目管理信息系统",type:"tool",knowledgeArea:"",processGroup:"",description:"提供项目管理的自动化支持工具",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-voting",label:"投票",type:"tool",knowledgeArea:"",processGroup:"",description:"通过集体表决达成共识",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-multi-criteria",label:"多标准决策分析",type:"tool",knowledgeArea:"",processGroup:"",description:"使用多个标准评估和排序方案",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-affinity",label:"亲和图",type:"tool",knowledgeArea:"",processGroup:"",description:"将大量创意按自然关系分组",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-mind-map",label:"思维导图",type:"tool",knowledgeArea:"",processGroup:"",description:"以可视化方式组织发散思维",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-flowchart",label:"流程图",type:"tool",knowledgeArea:"",processGroup:"",description:"展示过程步骤和决策点的图形",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-cause-effect",label:"因果图/鱼骨图",type:"tool",knowledgeArea:"",processGroup:"",description:"分析问题根本原因的图形工具",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-histogram",label:"直方图",type:"tool",knowledgeArea:"",processGroup:"",description:"展示数据分布的柱状图",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-scatter",label:"散点图",type:"tool",knowledgeArea:"",processGroup:"",description:"展示两个变量之间关系的图形",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-control-chart",label:"控制图",type:"tool",knowledgeArea:"",processGroup:"",description:"监控过程是否稳定的图形工具",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-matrix",label:"矩阵图",type:"tool",knowledgeArea:"",processGroup:"",description:"展示因素之间关系的表格图形",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-inspection",label:"检查",type:"tool",knowledgeArea:"",processGroup:"",description:"通过检查验证产品是否符合要求",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-audit",label:"审计",type:"tool",knowledgeArea:"",processGroup:"",description:"系统性检查确保符合要求",examFrequency:{choice:4,case:3,essay:1},mnemonic:"",notes:""},
{id:"tool-test",label:"测试/产品评估",type:"tool",knowledgeArea:"",processGroup:"",description:"通过测试验证产品功能和质量",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-facilitation",label:"引导",type:"tool",knowledgeArea:"",processGroup:"",description:"帮助团队有效达成目标",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-decomposition",label:"分解",type:"tool",knowledgeArea:"",processGroup:"",description:"将工作分解为更小更易管理的部分",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-rolling-wave",label:"滚动式规划",type:"tool",knowledgeArea:"",processGroup:"",description:"渐进明细地规划近期和远期工作",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-prototype",label:"原型法",type:"tool",knowledgeArea:"",processGroup:"",description:"通过构建模型获取早期反馈",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-system-interaction",label:"系统交互图",type:"tool",knowledgeArea:"",processGroup:"",description:"展示系统与外部实体交互的图形",examFrequency:{choice:1,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-nominal-group",label:"名义小组",type:"tool",knowledgeArea:"",processGroup:"",description:"通过结构化投票促进创意产生",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-observation",label:"观察/交谈",type:"tool",knowledgeArea:"",processGroup:"",description:"通过直接观察了解工作过程",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-file-analysis",label:"文件分析",type:"tool",knowledgeArea:"",processGroup:"",description:"通过审阅现有文件获取需求信息",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-assumption-constraint",label:"假设条件和制约因素分析",type:"tool",knowledgeArea:"",processGroup:"",description:"分析项目假设和制约因素",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-stakeholder-matrix",label:"干系人参与评估矩阵",type:"tool",knowledgeArea:"",processGroup:"",description:"评估干系人当前和期望参与程度",examFrequency:{choice:3,case:2,essay:0},mnemonic:"2规2监",notes:""},
{id:"tool-conflict-mgmt",label:"冲突管理",type:"tool",knowledgeArea:"",processGroup:"",description:"解决团队内部的冲突和分歧",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-pdca",label:"PDCA循环",type:"tool",knowledgeArea:"",processGroup:"",description:"计划执行检查处理的持续改进循环",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-six-sigma",label:"六西格玛",type:"tool",knowledgeArea:"",processGroup:"",description:"通过减少变异提高质量的方法",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-problem-solving",label:"问题解决",type:"tool",knowledgeArea:"",processGroup:"",description:"系统性地识别和解决问题的方法",examFrequency:{choice:3,case:2,essay:0},mnemonic:"定识生选执政",notes:""},
{id:"tool-design-for-x",label:"面向X的设计",type:"tool",knowledgeArea:"",processGroup:"",description:"针对特定目标优化产品设计",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-cost-aggregation",label:"成本汇总",type:"tool",knowledgeArea:"",processGroup:"",description:"将各工作包成本逐层汇总",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-historical-info",label:"历史信息审核",type:"tool",knowledgeArea:"",processGroup:"",description:"审核历史项目信息辅助决策",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-funding-limit",label:"资源限制平衡",type:"tool",knowledgeArea:"",processGroup:"",description:"在资金限制下平衡支出计划",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-agile-release",label:"敏捷发布规划",type:"tool",knowledgeArea:"",processGroup:"",description:"规划敏捷项目的发布节奏和内容",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-sched-network-analysis",label:"进度网络分析",type:"tool",knowledgeArea:"",processGroup:"",description:"分析进度网络确定活动日期",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-tcp",label:"完工尚需绩效指数",type:"tool",knowledgeArea:"",processGroup:"",description:"预测完成项目所需成本绩效",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-financing",label:"融资",type:"tool",knowledgeArea:"",processGroup:"",description:"获取项目所需资金",examFrequency:{choice:1,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-product-analysis",label:"产品分析",type:"tool",knowledgeArea:"",processGroup:"",description:"分析产品特性以定义范围",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-process-analysis",label:"过程分析",type:"tool",knowledgeArea:"",processGroup:"",description:"分析过程以识别改进机会",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-test-planning",label:"测试与检查的规划",type:"tool",knowledgeArea:"",processGroup:"",description:"规划如何测试和检查产品质量",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-statistical-sampling",label:"统计抽样",type:"tool",knowledgeArea:"",processGroup:"",description:"从总体中抽取样本进行检查",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-logic-data-model",label:"逻辑数据模型",type:"tool",knowledgeArea:"",processGroup:"",description:"描述数据实体间逻辑关系的模型",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},

// ============================================================
// 工具节点 - 沟通管理
// ============================================================
{id:"tool-comm-need",label:"沟通需求分析",type:"tool",knowledgeArea:"",processGroup:"",description:"分析干系人的信息需求",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-comm-tech",label:"沟通技术",type:"tool",knowledgeArea:"",processGroup:"",description:"用于传递信息的技术方法",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-comm-model",label:"沟通模型",type:"tool",knowledgeArea:"",processGroup:"",description:"描述信息发送和接收的模型",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-comm-method",label:"沟通方法",type:"tool",knowledgeArea:"",processGroup:"",description:"交互式推式拉式沟通方法",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-comm-style",label:"沟通风格评估",type:"tool",knowledgeArea:"",processGroup:"",description:"评估干系人偏好的沟通风格",examFrequency:{choice:1,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-political",label:"政治意识",type:"tool",knowledgeArea:"",processGroup:"",description:"理解组织政治环境的能力",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-cultural",label:"文化意识",type:"tool",knowledgeArea:"",processGroup:"",description:"理解文化差异的能力",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-comm-competence",label:"沟通胜任力",type:"tool",knowledgeArea:"",processGroup:"",description:"有效沟通的能力",examFrequency:{choice:1,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-feedback",label:"反馈",type:"tool",knowledgeArea:"",processGroup:"",description:"提供和接收反馈信息",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-nonverbal",label:"非语言",type:"tool",knowledgeArea:"",processGroup:"",description:"非语言沟通方式",examFrequency:{choice:1,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-presentation",label:"演示",type:"tool",knowledgeArea:"",processGroup:"",description:"向干系人正式展示信息",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-active-listen",label:"积极倾听",type:"tool",knowledgeArea:"",processGroup:"",description:"主动专注地听取他人意见",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-networking",label:"人际交往",type:"tool",knowledgeArea:"",processGroup:"",description:"与各方建立和维护关系",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-meeting-mgmt",label:"会议管理",type:"tool",knowledgeArea:"",processGroup:"",description:"有效地准备和管理会议",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-project-report",label:"项目报告",type:"tool",knowledgeArea:"",processGroup:"",description:"发布项目绩效信息",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},

// ============================================================
// 工具节点 - 资源管理
// ============================================================
{id:"tool-pre-assignment",label:"预分派",type:"tool",knowledgeArea:"",processGroup:"",description:"在项目启动前指定团队成员",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-virtual-team",label:"虚拟团队",type:"tool",knowledgeArea:"",processGroup:"",description:"使用远程协作的团队形式",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-colocation",label:"集中办公",type:"tool",knowledgeArea:"",processGroup:"",description:"将团队成员安排在同一地点工作",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-recognition",label:"认可与奖励",type:"tool",knowledgeArea:"",processGroup:"",description:"通过奖励激励团队",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-training",label:"培训",type:"tool",knowledgeArea:"",processGroup:"",description:"提高团队成员能力",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-team-assess",label:"个人和团队评估",type:"tool",knowledgeArea:"",processGroup:"",description:"评估团队成员能力和团队效能",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-influence",label:"影响力",type:"tool",knowledgeArea:"",processGroup:"",description:"通过影响他人实现目标",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-motivation",label:"激励",type:"tool",knowledgeArea:"",processGroup:"",description:"激发团队积极性",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-leadership",label:"领导力",type:"tool",knowledgeArea:"",processGroup:"",description:"引导团队实现目标的能力",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-negotiation",label:"谈判",type:"tool",knowledgeArea:"",processGroup:"",description:"通过协商达成共识",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-team-building",label:"团队建设",type:"tool",knowledgeArea:"",processGroup:"",description:"增强团队凝聚力和协作能力",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-emotional-intel",label:"情商",type:"tool",knowledgeArea:"",processGroup:"",description:"识别和管理自己和他人情绪",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-org-theory",label:"组织理论",type:"tool",knowledgeArea:"",processGroup:"",description:"运用组织行为学原理管理团队",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-ram",label:"责任分配矩阵",type:"tool",knowledgeArea:"",processGroup:"",description:"明确角色和职责的矩阵工具",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},

// ============================================================
// 工具节点 - 风险管理
// ============================================================
{id:"tool-swot",label:"SWOT分析",type:"tool",knowledgeArea:"",processGroup:"",description:"分析优势劣势机会和威胁",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-prompt-list",label:"提示清单",type:"tool",knowledgeArea:"",processGroup:"",description:"用于风险识别的预设清单",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-risk-data-quality",label:"风险数据质量评估",type:"tool",knowledgeArea:"",processGroup:"",description:"评估风险数据的可靠性和质量",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-risk-prob-impact",label:"风险概率和影响评估",type:"tool",knowledgeArea:"",processGroup:"",description:"评估风险发生的概率和影响程度",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-risk-params",label:"其他风险参数评估",type:"tool",knowledgeArea:"",processGroup:"",description:"评估风险的其他特征参数",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-risk-classify",label:"风险分类",type:"tool",knowledgeArea:"",processGroup:"",description:"按类别对风险进行分组",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-prob-impact-matrix",label:"概率和影响矩阵",type:"tool",knowledgeArea:"",processGroup:"",description:"评估和排序风险的矩阵工具",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-hierarchy-diagram",label:"层级图",type:"tool",knowledgeArea:"",processGroup:"",description:"按层级展示风险关系",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-uncertainty-repr",label:"不确定性表现方式",type:"tool",knowledgeArea:"",processGroup:"",description:"描述不确定性的建模方法",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-sensitivity",label:"敏感性分析",type:"tool",knowledgeArea:"",processGroup:"",description:"分析哪个风险对项目影响最大",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-decision-tree",label:"决策树分析",type:"tool",knowledgeArea:"",processGroup:"",description:"通过决策树计算期望货币价值",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-influence-diagram",label:"影响图",type:"tool",knowledgeArea:"",processGroup:"",description:"展示变量之间因果关系的图形",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-tech-perf",label:"技术绩效分析",type:"tool",knowledgeArea:"",processGroup:"",description:"比较技术成果与计划目标的差异",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-threat-response",label:"威胁应对策略",type:"tool",knowledgeArea:"",processGroup:"",description:"规避转移减轻接受威胁",examFrequency:{choice:4,case:3,essay:0},mnemonic:"规避转移减轻接受",notes:""},
{id:"tool-opportunity-response",label:"机会应对策略",type:"tool",knowledgeArea:"",processGroup:"",description:"开拓分享提高接受机会",examFrequency:{choice:3,case:2,essay:0},mnemonic:"开拓分享提高接受",notes:""},
{id:"tool-contingency-response",label:"应急应对策略",type:"tool",knowledgeArea:"",processGroup:"",description:"针对特定触发条件制定应急计划",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-overall-risk-response",label:"整体项目风险应对策略",type:"tool",knowledgeArea:"",processGroup:"",description:"应对整体项目级别的风险",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},

// ============================================================
// 工具节点 - 采购管理
// ============================================================
{id:"tool-market-research",label:"市场调研",type:"tool",knowledgeArea:"",processGroup:"",description:"了解市场供应能力和价格水平",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-make-buy",label:"自制或外购分析",type:"tool",knowledgeArea:"",processGroup:"",description:"分析某项工作是自制还是外购",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-source-select",label:"供方选择分析",type:"tool",knowledgeArea:"",processGroup:"",description:"分析评估潜在卖方的能力",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-advertising",label:"广告",type:"tool",knowledgeArea:"",processGroup:"",description:"发布采购信息吸引潜在卖方",examFrequency:{choice:1,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-bidder-conf",label:"投标人会议",type:"tool",knowledgeArea:"",processGroup:"",description:"与潜在卖方开会澄清要求",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-claim-mgmt",label:"索赔管理",type:"tool",knowledgeArea:"",processGroup:"",description:"处理合同执行中的争议和索赔",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-proposal-eval",label:"建议书评价",type:"tool",knowledgeArea:"",processGroup:"",description:"按标准评估卖方建议书",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},

// ============================================================
// 工具节点 - 干系人管理
// ============================================================
{id:"tool-stakeholder-analysis",label:"干系人分析",type:"tool",knowledgeArea:"",processGroup:"",description:"分析干系人的利益影响力和参与度",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-stakeholder-mapping",label:"干系人映射分析/表现",type:"tool",knowledgeArea:"",processGroup:"",description:"用图形展示干系人的影响和利益",examFrequency:{choice:3,case:2,essay:0},mnemonic:"",notes:""},
{id:"tool-prioritization",label:"优先级排序/分级",type:"tool",knowledgeArea:"",processGroup:"",description:"对干系人进行优先级排序",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},

// ============================================================
// 工具节点 - 其他
// ============================================================
{id:"tool-data-analysis",label:"数据分析",type:"tool",knowledgeArea:"",processGroup:"",description:"使用分析方法处理项目数据",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-decision",label:"决策",type:"tool",knowledgeArea:"",processGroup:"",description:"通过集体或个人决策方法做出决定",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-data-representation",label:"数据表现",type:"tool",knowledgeArea:"",processGroup:"",description:"以图形方式展示数据和信息",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-interpersonal-skill",label:"人际关系与团队技能",type:"tool",knowledgeArea:"",processGroup:"",description:"运用人际技能管理团队和干系人",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-comm-skill",label:"沟通技能",type:"tool",knowledgeArea:"",processGroup:"",description:"运用沟通技能与干系人交流",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-burn-down",label:"迭代燃尽图",type:"tool",knowledgeArea:"",processGroup:"",description:"跟踪迭代中剩余工作的图表",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-change-control",label:"变更控制工具",type:"tool",knowledgeArea:"整合管理",processGroup:"监控",description:"用于管理变更请求的工具",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-knowledge-mgmt",label:"知识管理",type:"tool",knowledgeArea:"整合管理",processGroup:"执行",description:"使用知识管理工具生成、记录和分享知识",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-info-mgmt",label:"信息管理",type:"tool",knowledgeArea:"整合管理",processGroup:"执行",description:"使用信息管理工具管理项目信息",examFrequency:{choice:2,case:1,essay:0},mnemonic:"",notes:""},
{id:"tool-regression-analysis",label:"回归分析",type:"tool",knowledgeArea:"整合管理",processGroup:"收尾",description:"分析变量之间关系的统计方法",examFrequency:{choice:1,case:1,essay:0},mnemonic:"",notes:""}
];
