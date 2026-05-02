/**
 * 考频数据 - 各知识领域和过程的考试频率
 * window.EXAM_FREQUENCY_DATA
 */
window.EXAM_FREQUENCY_DATA = {
  knowledgeAreas: [
    {
      id: "ka-1",
      name: "整合管理",
      choice: 5,
      caseAnalysis: 4,
      essay: 5,
      hotTopics: ["变更控制流程", "项目章程内容", "项目管理计划组成"],
      trend: "高频"
    },
    {
      id: "ka-2",
      name: "范围管理",
      choice: 5,
      caseAnalysis: 4,
      essay: 5,
      hotTopics: ["WBS分解", "需求收集工具", "确认范围vs质量控制"],
      trend: "高频"
    },
    {
      id: "ka-3",
      name: "进度管理",
      choice: 5,
      caseAnalysis: 5,
      essay: 4,
      hotTopics: ["关键路径法", "三点估算", "进度压缩", "挣值分析"],
      trend: "高频"
    },
    {
      id: "ka-4",
      name: "成本管理",
      choice: 5,
      caseAnalysis: 5,
      essay: 4,
      hotTopics: ["挣值分析(EV/PV/AC)", "EAC/ETC计算", "成本基准"],
      trend: "高频"
    },
    {
      id: "ka-5",
      name: "质量管理",
      choice: 4,
      caseAnalysis: 3,
      essay: 3,
      hotTopics: ["质量管理计划", "质量审计", "因果图/鱼骨图", "PDCA"],
      trend: "中高频"
    },
    {
      id: "ka-6",
      name: "资源管理",
      choice: 3,
      caseAnalysis: 2,
      essay: 2,
      hotTopics: ["团队发展阶段", "冲突管理", "权力类型"],
      trend: "中频"
    },
    {
      id: "ka-7",
      name: "沟通管理",
      choice: 3,
      caseAnalysis: 2,
      essay: 2,
      hotTopics: ["沟通渠道计算", "沟通方法"],
      trend: "中频"
    },
    {
      id: "ka-8",
      name: "风险管理",
      choice: 5,
      caseAnalysis: 4,
      essay: 5,
      hotTopics: ["风险登记册", "定性定量分析", "风险应对策略", "EMV计算"],
      trend: "高频"
    },
    {
      id: "ka-9",
      name: "采购管理",
      choice: 3,
      caseAnalysis: 2,
      essay: 2,
      hotTopics: ["合同类型选择", "采购审计"],
      trend: "中频"
    },
    {
      id: "ka-10",
      name: "干系人管理",
      choice: 3,
      caseAnalysis: 2,
      essay: 3,
      hotTopics: ["权力利益方格", "干系人参与评估矩阵"],
      trend: "中频"
    }
  ],
  performanceDomains: [
    {
      id: "pd-1",
      name: "干系人绩效域",
      choice: 3,
      caseAnalysis: 2,
      essay: 3,
      hotTopics: ["预期目标：支持反对高效认同", "绩效要点：别理分级参见"],
      trend: "中频",
      examHistory: ["往年考过"]
    },
    {
      id: "pd-2",
      name: "团队绩效域",
      choice: 3,
      caseAnalysis: 2,
      essay: 2,
      hotTopics: ["预期目标：高绩效领导责任", "团队文化七要素"],
      trend: "中频"
    },
    {
      id: "pd-3",
      name: "开发方法和生命周期绩效域",
      choice: 3,
      caseAnalysis: 2,
      essay: 2,
      hotTopics: ["开发方法选择", "交付节奏四种类型"],
      trend: "中频"
    },
    {
      id: "pd-4",
      name: "规划绩效域",
      choice: 2,
      caseAnalysis: 2,
      essay: 1,
      hotTopics: ["项目估算四因素(区间准确度精确度信心)", "SMART指标"],
      trend: "低频"
    },
    {
      id: "pd-5",
      name: "工作绩效域",
      choice: 3,
      caseAnalysis: 2,
      essay: 2,
      hotTopics: ["精益生产法", "回顾会议", "价值导向审查"],
      trend: "中频",
      examHistory: ["23年考过"]
    },
    {
      id: "pd-6",
      name: "交付绩效域",
      choice: 4,
      caseAnalysis: 3,
      essay: 4,
      hotTopics: ["价值交付", "需求管理", "质量管控"],
      trend: "高频",
      examHistory: ["25.05考了"]
    },
    {
      id: "pd-7",
      name: "度量绩效域",
      choice: 3,
      caseAnalysis: 2,
      essay: 2,
      hotTopics: ["KPI提前/滞后指标", "度量陷阱", "SMART特征"],
      trend: "中频"
    },
    {
      id: "pd-8",
      name: "不确定性绩效域",
      choice: 4,
      caseAnalysis: 3,
      essay: 4,
      hotTopics: ["风险模糊性复杂性", "处理复杂性方法", "应对方法"],
      trend: "高频",
      examHistory: ["25.05考了"]
    }
  ],
  hotProcesses: [
    { id: "proc-int-6", name: "实施整体变更控制", reason: "变更流程是案例必考" },
    { id: "proc-scope-2", name: "收集需求", reason: "工具技术最多" },
    { id: "proc-scope-4", name: "创建WBS", reason: "论文常考" },
    { id: "proc-sched-5", name: "制定进度计划", reason: "关键路径计算必考" },
    { id: "proc-cost-4", name: "控制成本", reason: "挣值计算必考" },
    { id: "proc-qual-2", name: "管理质量", reason: "审计和问题解决常考" },
    { id: "proc-risk-2", name: "识别风险", reason: "风险登记册常考" },
    { id: "proc-risk-5", name: "规划风险应对", reason: "应对策略对比常考" }
  ],
  // 2015-2025 论文题目
  essayHistory: [
    { year: "2015上", topic: "质量管理", area: "ka-5" },
    { year: "2015下", topic: "风险管理", area: "ka-8" },
    { year: "2016上", topic: "范围管理", area: "ka-2" },
    { year: "2016下", topic: "进度管理", area: "ka-3" },
    { year: "2017上", topic: "成本管理", area: "ka-4" },
    { year: "2017下", topic: "质量管理", area: "ka-5" },
    { year: "2018上", topic: "风险管理", area: "ka-8" },
    { year: "2018下", topic: "采购管理", area: "ka-9" },
    { year: "2019上", topic: "整合管理", area: "ka-1" },
    { year: "2019下", topic: "范围管理", area: "ka-2" },
    { year: "2020", topic: "进度管理", area: "ka-3" },
    { year: "2021上", topic: "风险管理", area: "ka-8" },
    { year: "2021下", topic: "整合管理", area: "ka-1" },
    { year: "2022上", topic: "范围管理", area: "ka-2" },
    { year: "2022下", topic: "进度管理", area: "ka-3" },
    { year: "2023上", topic: "干系人管理", area: "ka-10" },
    { year: "2023下", topic: "整合管理", area: "ka-1" },
    { year: "2024上", topic: "交付绩效域+不确定性绩效域", area: "pd-6" },
    { year: "2024下", topic: "范围管理", area: "ka-2" },
    { year: "2025.05", topic: "交付绩效域+不确定性绩效域", area: "pd-6" }
  ]
};
