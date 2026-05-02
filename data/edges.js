window.EDGES_DATA = [
  // ============================================================
  // 1. belongs-to edges (process → knowledge-area)
  // 过程属于哪个知识领域
  // ============================================================

  // 整合管理 (proc-int-* → ka-1)
  { source: "proc-int-1", target: "ka-1", type: "belongs-to", label: "属于整合管理" },
  { source: "proc-int-2", target: "ka-1", type: "belongs-to", label: "属于整合管理" },
  { source: "proc-int-3", target: "ka-1", type: "belongs-to", label: "属于整合管理" },
  { source: "proc-int-4", target: "ka-1", type: "belongs-to", label: "属于整合管理" },
  { source: "proc-int-5", target: "ka-1", type: "belongs-to", label: "属于整合管理" },
  { source: "proc-int-6", target: "ka-1", type: "belongs-to", label: "属于整合管理" },
  { source: "proc-int-7", target: "ka-1", type: "belongs-to", label: "属于整合管理" },

  // 范围管理 (proc-scope-* → ka-2)
  { source: "proc-scope-1", target: "ka-2", type: "belongs-to", label: "属于范围管理" },
  { source: "proc-scope-2", target: "ka-2", type: "belongs-to", label: "属于范围管理" },
  { source: "proc-scope-3", target: "ka-2", type: "belongs-to", label: "属于范围管理" },
  { source: "proc-scope-4", target: "ka-2", type: "belongs-to", label: "属于范围管理" },
  { source: "proc-scope-5", target: "ka-2", type: "belongs-to", label: "属于范围管理" },
  { source: "proc-scope-6", target: "ka-2", type: "belongs-to", label: "属于范围管理" },

  // 进度管理 (proc-sched-* → ka-3)
  { source: "proc-sched-1", target: "ka-3", type: "belongs-to", label: "属于进度管理" },
  { source: "proc-sched-2", target: "ka-3", type: "belongs-to", label: "属于进度管理" },
  { source: "proc-sched-3", target: "ka-3", type: "belongs-to", label: "属于进度管理" },
  { source: "proc-sched-4", target: "ka-3", type: "belongs-to", label: "属于进度管理" },
  { source: "proc-sched-5", target: "ka-3", type: "belongs-to", label: "属于进度管理" },
  { source: "proc-sched-6", target: "ka-3", type: "belongs-to", label: "属于进度管理" },

  // 成本管理 (proc-cost-* → ka-4)
  { source: "proc-cost-1", target: "ka-4", type: "belongs-to", label: "属于成本管理" },
  { source: "proc-cost-2", target: "ka-4", type: "belongs-to", label: "属于成本管理" },
  { source: "proc-cost-3", target: "ka-4", type: "belongs-to", label: "属于成本管理" },
  { source: "proc-cost-4", target: "ka-4", type: "belongs-to", label: "属于成本管理" },

  // 质量管理 (proc-qual-* → ka-5)
  { source: "proc-qual-1", target: "ka-5", type: "belongs-to", label: "属于质量管理" },
  { source: "proc-qual-2", target: "ka-5", type: "belongs-to", label: "属于质量管理" },
  { source: "proc-qual-3", target: "ka-5", type: "belongs-to", label: "属于质量管理" },

  // 资源管理 (proc-res-* → ka-6)
  { source: "proc-res-1", target: "ka-6", type: "belongs-to", label: "属于资源管理" },
  { source: "proc-res-2", target: "ka-6", type: "belongs-to", label: "属于资源管理" },
  { source: "proc-res-3", target: "ka-6", type: "belongs-to", label: "属于资源管理" },
  { source: "proc-res-4", target: "ka-6", type: "belongs-to", label: "属于资源管理" },
  { source: "proc-res-5", target: "ka-6", type: "belongs-to", label: "属于资源管理" },
  { source: "proc-res-6", target: "ka-6", type: "belongs-to", label: "属于资源管理" },

  // 沟通管理 (proc-comm-* → ka-7)
  { source: "proc-comm-1", target: "ka-7", type: "belongs-to", label: "属于沟通管理" },
  { source: "proc-comm-2", target: "ka-7", type: "belongs-to", label: "属于沟通管理" },
  { source: "proc-comm-3", target: "ka-7", type: "belongs-to", label: "属于沟通管理" },

  // 风险管理 (proc-risk-* → ka-8)
  { source: "proc-risk-1", target: "ka-8", type: "belongs-to", label: "属于风险管理" },
  { source: "proc-risk-2", target: "ka-8", type: "belongs-to", label: "属于风险管理" },
  { source: "proc-risk-3", target: "ka-8", type: "belongs-to", label: "属于风险管理" },
  { source: "proc-risk-4", target: "ka-8", type: "belongs-to", label: "属于风险管理" },
  { source: "proc-risk-5", target: "ka-8", type: "belongs-to", label: "属于风险管理" },
  { source: "proc-risk-6", target: "ka-8", type: "belongs-to", label: "属于风险管理" },
  { source: "proc-risk-7", target: "ka-8", type: "belongs-to", label: "属于风险管理" },

  // 采购管理 (proc-proc-* → ka-9)
  { source: "proc-proc-1", target: "ka-9", type: "belongs-to", label: "属于采购管理" },
  { source: "proc-proc-2", target: "ka-9", type: "belongs-to", label: "属于采购管理" },
  { source: "proc-proc-3", target: "ka-9", type: "belongs-to", label: "属于采购管理" },

  // 干系人管理 (proc-stk-* → ka-10)
  { source: "proc-stk-1", target: "ka-10", type: "belongs-to", label: "属于干系人管理" },
  { source: "proc-stk-2", target: "ka-10", type: "belongs-to", label: "属于干系人管理" },
  { source: "proc-stk-3", target: "ka-10", type: "belongs-to", label: "属于干系人管理" },
  { source: "proc-stk-4", target: "ka-10", type: "belongs-to", label: "属于干系人管理" },

  // ============================================================
  // 2. in-group edges (process → process-group)
  // 过程属于哪个过程组
  // ============================================================

  // 整合管理过程的过程组归属
  { source: "proc-int-1", target: "pg-1", type: "in-group", label: "属于启动过程组" },
  { source: "proc-int-2", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-int-3", target: "pg-3", type: "in-group", label: "属于执行过程组" },
  { source: "proc-int-4", target: "pg-3", type: "in-group", label: "属于执行过程组" },
  { source: "proc-int-5", target: "pg-4", type: "in-group", label: "属于监控过程组" },
  { source: "proc-int-6", target: "pg-4", type: "in-group", label: "属于监控过程组" },
  { source: "proc-int-7", target: "pg-5", type: "in-group", label: "属于收尾过程组" },

  // 范围管理过程的过程组归属
  { source: "proc-scope-1", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-scope-2", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-scope-3", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-scope-4", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-scope-5", target: "pg-4", type: "in-group", label: "属于监控过程组" },
  { source: "proc-scope-6", target: "pg-4", type: "in-group", label: "属于监控过程组" },

  // 进度管理过程的过程组归属
  { source: "proc-sched-1", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-sched-2", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-sched-3", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-sched-4", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-sched-5", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-sched-6", target: "pg-4", type: "in-group", label: "属于监控过程组" },

  // 成本管理过程的过程组归属
  { source: "proc-cost-1", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-cost-2", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-cost-3", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-cost-4", target: "pg-4", type: "in-group", label: "属于监控过程组" },

  // 质量管理过程的过程组归属
  { source: "proc-qual-1", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-qual-2", target: "pg-3", type: "in-group", label: "属于执行过程组" },
  { source: "proc-qual-3", target: "pg-4", type: "in-group", label: "属于监控过程组" },

  // 资源管理过程的过程组归属
  { source: "proc-res-1", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-res-2", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-res-3", target: "pg-3", type: "in-group", label: "属于执行过程组" },
  { source: "proc-res-4", target: "pg-3", type: "in-group", label: "属于执行过程组" },
  { source: "proc-res-5", target: "pg-3", type: "in-group", label: "属于执行过程组" },
  { source: "proc-res-6", target: "pg-4", type: "in-group", label: "属于监控过程组" },

  // 沟通管理过程的过程组归属
  { source: "proc-comm-1", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-comm-2", target: "pg-3", type: "in-group", label: "属于执行过程组" },
  { source: "proc-comm-3", target: "pg-4", type: "in-group", label: "属于监控过程组" },

  // 风险管理过程的过程组归属
  { source: "proc-risk-1", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-risk-2", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-risk-3", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-risk-4", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-risk-5", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-risk-6", target: "pg-3", type: "in-group", label: "属于执行过程组" },
  { source: "proc-risk-7", target: "pg-4", type: "in-group", label: "属于监控过程组" },

  // 采购管理过程的过程组归属
  { source: "proc-proc-1", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-proc-2", target: "pg-3", type: "in-group", label: "属于执行过程组" },
  { source: "proc-proc-3", target: "pg-4", type: "in-group", label: "属于监控过程组" },

  // 干系人管理过程的过程组归属
  { source: "proc-stk-1", target: "pg-1", type: "in-group", label: "属于启动过程组" },
  { source: "proc-stk-2", target: "pg-2", type: "in-group", label: "属于规划过程组" },
  { source: "proc-stk-3", target: "pg-3", type: "in-group", label: "属于执行过程组" },
  { source: "proc-stk-4", target: "pg-4", type: "in-group", label: "属于监控过程组" },

  // ============================================================
  // 3. produces edges (process → document)
  // 过程输出文档
  // ============================================================

  // --- 整合管理 ---
  { source: "proc-int-1", target: "doc-charter", type: "produces", label: "输出项目章程" },
  { source: "proc-int-1", target: "doc-assumption-log", type: "produces", label: "输出假设日志" },
  { source: "proc-int-2", target: "doc-pm-plan", type: "produces", label: "输出项目管理计划" },
  { source: "proc-int-3", target: "doc-deliverable", type: "produces", label: "输出可交付成果" },
  { source: "proc-int-3", target: "doc-work-perf-data", type: "produces", label: "输出工作绩效数据" },
  { source: "proc-int-3", target: "doc-issue-log", type: "produces", label: "输出问题日志" },
  { source: "proc-int-3", target: "doc-change-request", type: "produces", label: "输出变更请求" },
  { source: "proc-int-3", target: "doc-activity-list", type: "produces", label: "更新活动清单" },
  { source: "proc-int-3", target: "doc-assumption-log", type: "produces", label: "更新假设日志" },
  { source: "proc-int-3", target: "doc-lessons-learned", type: "produces", label: "更新经验教训登记册" },
  { source: "proc-int-3", target: "doc-req-file", type: "produces", label: "更新需求文件" },
  { source: "proc-int-3", target: "doc-risk-register", type: "produces", label: "更新风险登记册" },
  { source: "proc-int-3", target: "doc-stakeholder-register", type: "produces", label: "更新干系人登记册" },
  { source: "proc-int-4", target: "doc-lessons-learned", type: "produces", label: "更新经验教训登记册" },
  { source: "proc-int-5", target: "doc-work-perf-report", type: "produces", label: "输出工作绩效报告" },
  { source: "proc-int-5", target: "doc-change-request", type: "produces", label: "输出变更请求" },
  { source: "proc-int-5", target: "doc-cost-forecast", type: "produces", label: "更新成本预测" },
  { source: "proc-int-5", target: "doc-issue-log", type: "produces", label: "更新问题日志" },
  { source: "proc-int-5", target: "doc-lessons-learned", type: "produces", label: "更新经验教训登记册" },
  { source: "proc-int-5", target: "doc-risk-register", type: "produces", label: "更新风险登记册" },
  { source: "proc-int-5", target: "doc-sched-forecast", type: "produces", label: "更新进度预测" },
  { source: "proc-int-6", target: "doc-approved-change", type: "produces", label: "输出批准的变更请求" },
  { source: "proc-int-6", target: "doc-change-log", type: "produces", label: "更新变更日志" },
  { source: "proc-int-7", target: "doc-lessons-learned", type: "produces", label: "更新经验教训登记册" },
  { source: "proc-int-7", target: "doc-final-report", type: "produces", label: "输出最终报告" },

  // --- 范围管理 ---
  { source: "proc-scope-1", target: "doc-scope-plan", type: "produces", label: "输出范围管理计划" },
  { source: "proc-scope-1", target: "doc-req-plan", type: "produces", label: "输出需求管理计划" },
  { source: "proc-scope-2", target: "doc-req-file", type: "produces", label: "输出需求文件" },
  { source: "proc-scope-2", target: "doc-req-trace", type: "produces", label: "输出需求跟踪矩阵" },
  { source: "proc-scope-3", target: "doc-scope-stmt", type: "produces", label: "输出项目范围说明书" },
  { source: "proc-scope-4", target: "doc-scope-baseline", type: "produces", label: "输出范围基准" },
  { source: "proc-scope-4", target: "doc-wbs", type: "produces", label: "输出WBS" },
  { source: "proc-scope-4", target: "doc-wbs-dict", type: "produces", label: "输出WBS词典" },
  { source: "proc-scope-5", target: "doc-accepted-deliverable", type: "produces", label: "输出验收的可交付成果" },
  { source: "proc-scope-5", target: "doc-work-perf-info", type: "produces", label: "输出工作绩效信息" },
  { source: "proc-scope-5", target: "doc-change-request", type: "produces", label: "输出变更请求" },
  { source: "proc-scope-6", target: "doc-work-perf-info", type: "produces", label: "输出工作绩效信息" },
  { source: "proc-scope-6", target: "doc-change-request", type: "produces", label: "输出变更请求" },

  // --- 进度管理 ---
  { source: "proc-sched-1", target: "doc-sched-plan", type: "produces", label: "输出进度管理计划" },
  { source: "proc-sched-2", target: "doc-activity-list", type: "produces", label: "输出活动清单" },
  { source: "proc-sched-2", target: "doc-activity-attr", type: "produces", label: "输出活动属性" },
  { source: "proc-sched-2", target: "doc-milestone-list", type: "produces", label: "输出里程碑清单" },
  { source: "proc-sched-3", target: "doc-sched-network", type: "produces", label: "输出项目进度网络图" },
  { source: "proc-sched-4", target: "doc-duration-est", type: "produces", label: "输出持续时间估算" },
  { source: "proc-sched-4", target: "doc-est-basis", type: "produces", label: "输出估算依据" },
  { source: "proc-sched-2", target: "doc-change-request", type: "produces", label: "输出变更请求" },
  { source: "proc-sched-5", target: "doc-sched-baseline", type: "produces", label: "输出进度基准" },
  { source: "proc-sched-5", target: "doc-proj-sched", type: "produces", label: "输出项目进度计划" },
  { source: "proc-sched-5", target: "doc-proj-calendar", type: "produces", label: "输出项目日历" },
  { source: "proc-sched-5", target: "doc-sched-data", type: "produces", label: "输出进度数据" },
  { source: "proc-sched-5", target: "doc-change-request", type: "produces", label: "输出变更请求" },
  { source: "proc-sched-6", target: "doc-work-perf-info", type: "produces", label: "输出工作绩效信息" },
  { source: "proc-sched-6", target: "doc-sched-forecast", type: "produces", label: "输出进度预测" },
  { source: "proc-sched-6", target: "doc-change-request", type: "produces", label: "输出变更请求" },

  // --- 成本管理 ---
  { source: "proc-cost-1", target: "doc-cost-plan", type: "produces", label: "输出成本管理计划" },
  { source: "proc-cost-2", target: "doc-cost-est", type: "produces", label: "输出成本估算" },
  { source: "proc-cost-2", target: "doc-est-basis", type: "produces", label: "输出估算依据" },
  { source: "proc-cost-3", target: "doc-cost-baseline", type: "produces", label: "输出成本基准" },
  { source: "proc-cost-3", target: "doc-fund-req", type: "produces", label: "输出项目资金需求" },
  { source: "proc-cost-4", target: "doc-work-perf-info", type: "produces", label: "输出工作绩效信息" },
  { source: "proc-cost-4", target: "doc-cost-forecast", type: "produces", label: "输出成本预测" },
  { source: "proc-cost-4", target: "doc-change-request", type: "produces", label: "输出变更请求" },

  // --- 质量管理 ---
  { source: "proc-qual-1", target: "doc-qual-plan", type: "produces", label: "输出质量管理计划" },
  { source: "proc-qual-1", target: "doc-qual-metrics", type: "produces", label: "输出质量测量指标" },
  { source: "proc-qual-2", target: "doc-qual-report", type: "produces", label: "输出质量报告" },
  { source: "proc-qual-2", target: "doc-test-file", type: "produces", label: "输出测试与评估文件" },
  { source: "proc-qual-2", target: "doc-change-request", type: "produces", label: "输出变更请求" },
  { source: "proc-qual-3", target: "doc-qual-measure", type: "produces", label: "输出质量控制测量结果" },
  { source: "proc-qual-3", target: "doc-verified-deliverable", type: "produces", label: "输出核实的可交付成果" },
  { source: "proc-qual-3", target: "doc-work-perf-info", type: "produces", label: "输出工作绩效信息" },
  { source: "proc-qual-3", target: "doc-change-request", type: "produces", label: "输出变更请求" },

  // --- 资源管理 ---
  { source: "proc-res-1", target: "doc-res-plan", type: "produces", label: "输出资源管理计划" },
  { source: "proc-res-1", target: "doc-team-charter", type: "produces", label: "输出团队章程" },
  { source: "proc-res-2", target: "doc-res-req", type: "produces", label: "输出资源需求" },
  { source: "proc-res-2", target: "doc-est-basis", type: "produces", label: "输出估算依据" },
  { source: "proc-res-2", target: "doc-res-breakdown", type: "produces", label: "输出资源分解结构" },
  { source: "proc-res-3", target: "doc-material-assign", type: "produces", label: "输出物质资源分配单" },
  { source: "proc-res-3", target: "doc-team-assign", type: "produces", label: "输出项目团队派工单" },
  { source: "proc-res-3", target: "doc-res-calendar", type: "produces", label: "输出资源日历" },
  { source: "proc-res-3", target: "doc-change-request", type: "produces", label: "输出变更请求" },
  { source: "proc-res-4", target: "doc-team-performance", type: "produces", label: "输出团队绩效评价" },
  { source: "proc-res-4", target: "doc-change-request", type: "produces", label: "输出变更请求" },
  { source: "proc-res-5", target: "doc-change-request", type: "produces", label: "输出变更请求" },
  { source: "proc-res-6", target: "doc-work-perf-info", type: "produces", label: "输出工作绩效信息" },
  { source: "proc-res-6", target: "doc-change-request", type: "produces", label: "输出变更请求" },

  // --- 风险管理 ---
  { source: "proc-risk-1", target: "doc-risk-plan", type: "produces", label: "输出风险管理计划" },
  { source: "proc-risk-2", target: "doc-risk-register", type: "produces", label: "输出风险登记册" },
  { source: "proc-risk-2", target: "doc-risk-report", type: "produces", label: "输出风险报告" },
  { source: "proc-risk-3", target: "doc-risk-register", type: "produces", label: "更新风险登记册" },
  { source: "proc-risk-3", target: "doc-risk-report", type: "produces", label: "更新风险报告" },
  { source: "proc-risk-4", target: "doc-risk-register", type: "produces", label: "更新风险登记册" },
  { source: "proc-risk-5", target: "doc-change-request", type: "produces", label: "输出变更请求" },
  { source: "proc-risk-6", target: "doc-change-request", type: "produces", label: "输出变更请求" },
  { source: "proc-risk-7", target: "doc-work-perf-info", type: "produces", label: "输出工作绩效信息" },
  { source: "proc-risk-7", target: "doc-change-request", type: "produces", label: "输出变更请求" },

  // --- 采购管理 ---
  { source: "proc-proc-1", target: "doc-proc-plan", type: "produces", label: "输出采购管理计划" },
  { source: "proc-proc-1", target: "doc-proc-strategy", type: "produces", label: "输出采购策略" },
  { source: "proc-proc-1", target: "doc-bid-doc", type: "produces", label: "输出招标文件" },
  { source: "proc-proc-1", target: "doc-proc-doc", type: "produces", label: "输出采购文件" },
  { source: "proc-proc-1", target: "doc-statement-work", type: "produces", label: "输出工作说明书" },
  { source: "proc-proc-1", target: "doc-source-criteria", type: "produces", label: "输出供方选择标准" },
  { source: "proc-proc-1", target: "doc-make-buy", type: "produces", label: "输出自制或外购决策" },
  { source: "proc-proc-1", target: "doc-independent-cost", type: "produces", label: "输出独立成本估算" },
  { source: "proc-proc-1", target: "doc-change-request", type: "produces", label: "输出变更请求" },
  { source: "proc-proc-2", target: "doc-selected-seller", type: "produces", label: "输出选定的卖方" },
  { source: "proc-proc-2", target: "doc-agreement", type: "produces", label: "输出协议" },
  { source: "proc-proc-2", target: "doc-change-request", type: "produces", label: "输出变更请求" },
  { source: "proc-proc-3", target: "doc-proc-close", type: "produces", label: "输出采购关闭" },
  { source: "proc-proc-3", target: "doc-work-perf-info", type: "produces", label: "输出工作绩效信息" },
  { source: "proc-proc-3", target: "doc-change-request", type: "produces", label: "输出变更请求" },

  // --- 干系人管理 ---
  { source: "proc-stk-1", target: "doc-stakeholder-register", type: "produces", label: "输出干系人登记册" },
  { source: "proc-stk-1", target: "doc-change-request", type: "produces", label: "输出变更请求" },
  { source: "proc-stk-2", target: "doc-stakeholder-plan", type: "produces", label: "输出干系人参与计划" },
  { source: "proc-stk-3", target: "doc-change-request", type: "produces", label: "输出变更请求" },
  { source: "proc-stk-4", target: "doc-work-perf-info", type: "produces", label: "输出工作绩效信息" },
  { source: "proc-stk-4", target: "doc-change-request", type: "produces", label: "输出变更请求" },

  // --- 沟通管理 ---
  { source: "proc-comm-1", target: "doc-comm-plan", type: "produces", label: "输出沟通管理计划" },
  { source: "proc-comm-2", target: "doc-comm-record", type: "produces", label: "输出项目沟通记录" },
  { source: "proc-comm-2", target: "doc-change-request", type: "produces", label: "输出变更请求" },
  { source: "proc-comm-3", target: "doc-work-perf-info", type: "produces", label: "输出工作绩效信息" },
  { source: "proc-comm-3", target: "doc-change-request", type: "produces", label: "输出变更请求" },

  // ============================================================
  // 4. consumed-by edges (document → process as input)
  // 文档是过程的输入
  // ============================================================

  // ===== 项目章程作为输入 =====
  { source: "doc-charter", target: "proc-int-2", type: "consumed-by", label: "项目章程是制定项目管理计划的输入" },
  { source: "doc-charter", target: "proc-int-7", type: "consumed-by", label: "项目章程是结束项目或阶段的输入" },
  { source: "doc-charter", target: "proc-scope-1", type: "consumed-by", label: "项目章程是规划范围管理的输入" },
  { source: "doc-charter", target: "proc-sched-1", type: "consumed-by", label: "项目章程是规划进度管理的输入" },
  { source: "doc-charter", target: "proc-cost-1", type: "consumed-by", label: "项目章程是规划成本管理的输入" },
  { source: "doc-charter", target: "proc-qual-1", type: "consumed-by", label: "项目章程是规划质量管理的输入" },
  { source: "doc-charter", target: "proc-res-1", type: "consumed-by", label: "项目章程是规划资源管理的输入" },
  { source: "doc-charter", target: "proc-comm-1", type: "consumed-by", label: "项目章程是规划沟通管理的输入" },
  { source: "doc-charter", target: "proc-risk-1", type: "consumed-by", label: "项目章程是规划风险管理的输入" },
  { source: "doc-charter", target: "proc-proc-1", type: "consumed-by", label: "项目章程是规划采购管理的输入" },
  { source: "doc-charter", target: "proc-stk-1", type: "consumed-by", label: "项目章程是识别干系人的输入" },
  { source: "doc-charter", target: "proc-stk-2", type: "consumed-by", label: "项目章程是规划干系人参与的输入" },

  // ===== 商业论证/工作说明书/协议作为输入 =====
  { source: "doc-contract", target: "proc-int-1", type: "consumed-by", label: "协议是制定项目章程的输入" },
  { source: "doc-contract", target: "proc-int-5", type: "consumed-by", label: "协议是监控项目工作的输入" },
  { source: "doc-contract", target: "proc-int-7", type: "consumed-by", label: "协议是结束项目或阶段的输入" },

  // ===== 项目管理计划作为输入 =====
  { source: "doc-pm-plan", target: "proc-int-3", type: "consumed-by", label: "项目管理计划是指导与管理项目工作的输入" },
  { source: "doc-pm-plan", target: "proc-int-4", type: "consumed-by", label: "项目管理计划是管理项目知识的输入" },
  { source: "doc-pm-plan", target: "proc-int-5", type: "consumed-by", label: "项目管理计划是监控项目工作的输入" },
  { source: "doc-pm-plan", target: "proc-int-6", type: "consumed-by", label: "项目管理计划是整体变更控制的输入" },
  { source: "doc-pm-plan", target: "proc-int-7", type: "consumed-by", label: "项目管理计划是结束项目或阶段的输入" },

  // ===== 范围基准作为输入 =====
  { source: "doc-scope-baseline", target: "proc-int-6", type: "consumed-by", label: "范围基准是实施整体变更控制的输入" },
  { source: "doc-scope-baseline", target: "proc-sched-2", type: "consumed-by", label: "范围基准是定义活动的输入" },
  { source: "doc-scope-baseline", target: "proc-sched-3", type: "consumed-by", label: "范围基准是排列活动顺序的输入" },
  { source: "doc-scope-baseline", target: "proc-sched-4", type: "consumed-by", label: "范围基准是估算活动持续时间的输入" },
  { source: "doc-scope-baseline", target: "proc-sched-5", type: "consumed-by", label: "范围基准是制定进度计划的输入" },
  { source: "doc-scope-baseline", target: "proc-cost-2", type: "consumed-by", label: "范围基准是估算成本的输入" },
  { source: "doc-scope-baseline", target: "proc-cost-3", type: "consumed-by", label: "范围基准是制定预算的输入" },
  { source: "doc-scope-baseline", target: "proc-qual-1", type: "consumed-by", label: "范围基准是规划质量管理的输入" },
  { source: "doc-scope-baseline", target: "proc-res-1", type: "consumed-by", label: "范围基准是规划资源管理的输入" },
  { source: "doc-scope-baseline", target: "proc-res-2", type: "consumed-by", label: "范围基准是估算活动资源的输入" },
  { source: "doc-scope-baseline", target: "proc-risk-2", type: "consumed-by", label: "范围基准是识别风险的输入" },
  { source: "doc-scope-baseline", target: "proc-risk-4", type: "consumed-by", label: "范围基准是定量风险分析的输入" },
  { source: "doc-scope-baseline", target: "proc-proc-1", type: "consumed-by", label: "范围基准是规划采购管理的输入" },

  // ===== 范围管理计划作为输入 =====
  { source: "doc-scope-plan", target: "proc-scope-2", type: "consumed-by", label: "范围管理计划是收集需求的输入" },
  { source: "doc-scope-plan", target: "proc-scope-3", type: "consumed-by", label: "范围管理计划是定义范围的输入" },
  { source: "doc-scope-plan", target: "proc-scope-5", type: "consumed-by", label: "范围管理计划是确认范围的输入" },
  { source: "doc-scope-plan", target: "proc-proc-1", type: "consumed-by", label: "范围管理计划是规划采购管理的输入" },
  { source: "doc-scope-plan", target: "proc-proc-2", type: "consumed-by", label: "范围管理计划是实施采购的输入" },

  // ===== 需求管理计划作为输入 =====
  { source: "doc-req-plan", target: "proc-scope-2", type: "consumed-by", label: "需求管理计划是收集需求的输入" },
  { source: "doc-req-plan", target: "proc-qual-1", type: "consumed-by", label: "需求管理计划是规划质量管理的输入" },
  { source: "doc-req-plan", target: "proc-risk-2", type: "consumed-by", label: "需求管理计划是识别风险的输入" },
  { source: "doc-req-plan", target: "proc-proc-2", type: "consumed-by", label: "需求管理计划是实施采购的输入" },
  { source: "doc-req-plan", target: "proc-proc-3", type: "consumed-by", label: "需求管理计划是控制采购的输入" },

  // ===== 需求文件作为输入 =====
  { source: "doc-req-file", target: "proc-int-7", type: "consumed-by", label: "需求文件是结束项目或阶段的输入" },
  { source: "doc-req-file", target: "proc-scope-3", type: "consumed-by", label: "需求文件是定义范围的输入" },
  { source: "doc-req-file", target: "proc-scope-4", type: "consumed-by", label: "需求文件是创建WBS的输入" },
  { source: "doc-req-file", target: "proc-qual-1", type: "consumed-by", label: "需求文件是规划质量管理的输入" },
  { source: "doc-req-file", target: "proc-res-1", type: "consumed-by", label: "需求文件是规划资源管理的输入" },
  { source: "doc-req-file", target: "proc-comm-1", type: "consumed-by", label: "需求文件是规划沟通管理的输入" },
  { source: "doc-req-file", target: "proc-risk-2", type: "consumed-by", label: "需求文件是识别风险的输入" },
  { source: "doc-req-file", target: "proc-proc-1", type: "consumed-by", label: "需求文件是规划采购管理的输入" },
  { source: "doc-req-file", target: "proc-proc-2", type: "consumed-by", label: "需求文件是实施采购的输入" },
  { source: "doc-req-file", target: "proc-proc-3", type: "consumed-by", label: "需求文件是控制采购的输入" },
  { source: "doc-req-file", target: "proc-stk-1", type: "consumed-by", label: "需求文件是识别干系人的输入" },

  // ===== 需求跟踪矩阵作为输入 =====
  { source: "doc-req-trace", target: "proc-int-3", type: "consumed-by", label: "需求跟踪矩阵是指导与管理项目工作的输入" },
  { source: "doc-req-trace", target: "proc-int-6", type: "consumed-by", label: "需求跟踪矩阵是实施整体变更控制的输入" },
  { source: "doc-req-trace", target: "proc-scope-5", type: "consumed-by", label: "需求跟踪矩阵是确认范围的输入" },
  { source: "doc-req-trace", target: "proc-qual-1", type: "consumed-by", label: "需求跟踪矩阵是规划质量管理的输入" },
  { source: "doc-req-trace", target: "proc-proc-1", type: "consumed-by", label: "需求跟踪矩阵是规划采购管理的输入" },
  { source: "doc-req-trace", target: "proc-proc-3", type: "consumed-by", label: "需求跟踪矩阵是控制采购的输入" },

  // ===== 范围说明书作为输入 =====
  { source: "doc-scope-stmt", target: "proc-scope-4", type: "consumed-by", label: "范围说明书是创建WBS的输入" },

  // ===== WBS作为输入 =====
  { source: "doc-wbs", target: "proc-scope-5", type: "consumed-by", label: "WBS是确认范围的输入" },

  // ===== 进度管理计划作为输入 =====
  { source: "doc-sched-plan", target: "proc-sched-2", type: "consumed-by", label: "进度管理计划是定义活动的输入" },
  { source: "doc-sched-plan", target: "proc-sched-3", type: "consumed-by", label: "进度管理计划是排列活动顺序的输入" },
  { source: "doc-sched-plan", target: "proc-sched-4", type: "consumed-by", label: "进度管理计划是估算活动持续时间的输入" },
  { source: "doc-sched-plan", target: "proc-sched-5", type: "consumed-by", label: "进度管理计划是制定进度计划的输入" },
  { source: "doc-sched-plan", target: "proc-cost-1", type: "consumed-by", label: "进度管理计划是规划成本管理的输入" },
  { source: "doc-sched-plan", target: "proc-risk-2", type: "consumed-by", label: "进度管理计划是识别风险的输入" },

  // ===== 活动清单作为输入 =====
  { source: "doc-activity-list", target: "proc-sched-3", type: "consumed-by", label: "活动清单是排列活动顺序的输入" },
  { source: "doc-activity-list", target: "proc-sched-4", type: "consumed-by", label: "活动清单是估算活动持续时间的输入" },
  { source: "doc-activity-list", target: "proc-sched-5", type: "consumed-by", label: "活动清单是制定进度计划的输入" },
  { source: "doc-activity-list", target: "proc-res-2", type: "consumed-by", label: "活动清单是估算活动资源的输入" },

  // ===== 活动属性作为输入 =====
  { source: "doc-activity-attr", target: "proc-sched-3", type: "consumed-by", label: "活动属性是排列活动顺序的输入" },
  { source: "doc-activity-attr", target: "proc-sched-4", type: "consumed-by", label: "活动属性是估算活动持续时间的输入" },
  { source: "doc-activity-attr", target: "proc-sched-5", type: "consumed-by", label: "活动属性是制定进度计划的输入" },
  { source: "doc-activity-attr", target: "proc-res-2", type: "consumed-by", label: "活动属性是估算活动资源的输入" },

  // ===== 里程碑清单作为输入 =====
  { source: "doc-milestone-list", target: "proc-int-3", type: "consumed-by", label: "里程碑清单是指导与管理项目工作的输入" },
  { source: "doc-milestone-list", target: "proc-int-5", type: "consumed-by", label: "里程碑清单是监控项目工作的输入" },
  { source: "doc-milestone-list", target: "proc-int-7", type: "consumed-by", label: "里程碑清单是结束项目或阶段的输入" },
  { source: "doc-milestone-list", target: "proc-sched-4", type: "consumed-by", label: "里程碑清单是估算活动持续时间的输入" },
  { source: "doc-milestone-list", target: "proc-sched-5", type: "consumed-by", label: "里程碑清单是制定进度计划的输入" },
  { source: "doc-milestone-list", target: "proc-risk-4", type: "consumed-by", label: "里程碑清单是定量风险分析的输入" },
  { source: "doc-milestone-list", target: "proc-proc-1", type: "consumed-by", label: "里程碑清单是规划采购管理的输入" },
  { source: "doc-milestone-list", target: "proc-proc-3", type: "consumed-by", label: "里程碑清单是控制采购的输入" },

  // ===== 进度网络图作为输入 =====
  { source: "doc-sched-network", target: "proc-sched-5", type: "consumed-by", label: "进度网络图是制定进度计划的输入" },

  // ===== 持续时间估算作为输入 =====
  { source: "doc-duration-est", target: "proc-sched-5", type: "consumed-by", label: "持续时间估算是制定进度计划的输入" },
  { source: "doc-duration-est", target: "proc-risk-2", type: "consumed-by", label: "持续时间估算是识别风险的输入" },
  { source: "doc-duration-est", target: "proc-risk-4", type: "consumed-by", label: "持续时间估算是定量风险分析的输入" },

  // ===== 估算依据作为输入 =====
  { source: "doc-est-basis", target: "proc-int-5", type: "consumed-by", label: "估算依据是监控项目工作的输入" },
  { source: "doc-est-basis", target: "proc-int-6", type: "consumed-by", label: "估算依据是整体变更控制的输入" },
  { source: "doc-est-basis", target: "proc-int-7", type: "consumed-by", label: "估算依据是结束项目或阶段的输入" },
  { source: "doc-est-basis", target: "proc-sched-5", type: "consumed-by", label: "估算依据是制定进度计划的输入" },
  { source: "doc-est-basis", target: "proc-cost-3", type: "consumed-by", label: "估算依据是制定预算的输入" },
  { source: "doc-est-basis", target: "proc-risk-4", type: "consumed-by", label: "估算依据是定量风险分析的输入" },

  // ===== 进度基准作为输入 =====
  { source: "doc-sched-baseline", target: "proc-int-6", type: "consumed-by", label: "进度基准是实施整体变更控制的输入" },
  { source: "doc-sched-baseline", target: "proc-sched-6", type: "consumed-by", label: "进度基准是控制进度的输入" },
  { source: "doc-sched-baseline", target: "proc-risk-2", type: "consumed-by", label: "进度基准是识别风险的输入" },
  { source: "doc-sched-baseline", target: "proc-risk-4", type: "consumed-by", label: "进度基准是定量风险分析的输入" },
  { source: "doc-sched-baseline", target: "proc-proc-3", type: "consumed-by", label: "进度基准是控制采购的输入" },

  // ===== 项目进度计划作为输入 =====
  { source: "doc-proj-sched", target: "proc-int-3", type: "consumed-by", label: "项目进度计划是指导与管理项目工作的输入" },
  { source: "doc-proj-sched", target: "proc-cost-2", type: "consumed-by", label: "项目进度计划是估算成本的输入" },
  { source: "doc-proj-sched", target: "proc-cost-3", type: "consumed-by", label: "项目进度计划是制定预算的输入" },
  { source: "doc-proj-sched", target: "proc-res-1", type: "consumed-by", label: "项目进度计划是规划资源管理的输入" },
  { source: "doc-proj-sched", target: "proc-res-3", type: "consumed-by", label: "项目进度计划是获取资源的输入" },
  { source: "doc-proj-sched", target: "proc-res-4", type: "consumed-by", label: "项目进度计划是建设团队的输入" },
  { source: "doc-proj-sched", target: "proc-res-6", type: "consumed-by", label: "项目进度计划是控制资源的输入" },
  { source: "doc-proj-sched", target: "proc-risk-5", type: "consumed-by", label: "项目进度计划是规划风险应对的输入" },
  { source: "doc-proj-sched", target: "proc-proc-2", type: "consumed-by", label: "项目进度计划是实施采购的输入" },
  { source: "doc-proj-sched", target: "proc-sched-6", type: "consumed-by", label: "项目进度计划是控制进度的输入" },
  { source: "doc-proj-sched", target: "proc-stk-2", type: "consumed-by", label: "项目进度计划是规划干系人参与的输入" },

  // ===== 项目日历作为输入 =====
  { source: "doc-proj-calendar", target: "proc-sched-6", type: "consumed-by", label: "项目日历是控制进度的输入" },

  // ===== 进度数据作为输入 =====
  { source: "doc-sched-data", target: "proc-sched-6", type: "consumed-by", label: "进度数据是控制进度的输入" },

  // ===== 成本管理计划作为输入 =====
  { source: "doc-cost-plan", target: "proc-cost-2", type: "consumed-by", label: "成本管理计划是估算成本的输入" },
  { source: "doc-cost-plan", target: "proc-cost-3", type: "consumed-by", label: "成本管理计划是制定预算的输入" },
  { source: "doc-cost-plan", target: "proc-risk-2", type: "consumed-by", label: "成本管理计划是识别风险的输入" },

  // ===== 成本估算作为输入 =====
  { source: "doc-cost-est", target: "proc-cost-3", type: "consumed-by", label: "成本估算是制定预算的输入" },
  { source: "doc-cost-est", target: "proc-res-2", type: "consumed-by", label: "成本估算是估算活动资源的输入" },
  { source: "doc-cost-est", target: "proc-risk-2", type: "consumed-by", label: "成本估算是识别风险的输入" },
  { source: "doc-cost-est", target: "proc-risk-4", type: "consumed-by", label: "成本估算是定量风险分析的输入" },

  // ===== 成本基准作为输入 =====
  { source: "doc-cost-baseline", target: "proc-int-6", type: "consumed-by", label: "成本基准是实施整体变更控制的输入" },
  { source: "doc-cost-baseline", target: "proc-res-3", type: "consumed-by", label: "成本基准是获取资源的输入" },
  { source: "doc-cost-baseline", target: "proc-risk-2", type: "consumed-by", label: "成本基准是识别风险的输入" },
  { source: "doc-cost-baseline", target: "proc-risk-4", type: "consumed-by", label: "成本基准是定量风险分析的输入" },
  { source: "doc-cost-baseline", target: "proc-risk-5", type: "consumed-by", label: "成本基准是规划风险应对的输入" },
  { source: "doc-cost-baseline", target: "proc-proc-2", type: "consumed-by", label: "成本基准是实施采购的输入" },
  { source: "doc-cost-baseline", target: "proc-cost-4", type: "consumed-by", label: "成本基准是控制成本的输入" },

  // ===== 项目资金需求作为输入 =====
  { source: "doc-fund-req", target: "proc-cost-4", type: "consumed-by", label: "项目资金需求是控制成本的输入" },

  // ===== 成本预测作为输入 =====
  { source: "doc-cost-forecast", target: "proc-int-5", type: "consumed-by", label: "成本预测是监控项目工作的输入" },
  { source: "doc-cost-forecast", target: "proc-risk-4", type: "consumed-by", label: "成本预测是定量风险分析的输入" },

  // ===== 质量管理计划作为输入 =====
  { source: "doc-qual-plan", target: "proc-qual-2", type: "consumed-by", label: "质量管理计划是管理质量的输入" },
  { source: "doc-qual-plan", target: "proc-qual-3", type: "consumed-by", label: "质量管理计划是控制质量的输入" },
  { source: "doc-qual-plan", target: "proc-cost-2", type: "consumed-by", label: "质量管理计划是估算成本的输入" },
  { source: "doc-qual-plan", target: "proc-res-1", type: "consumed-by", label: "质量管理计划是规划资源管理的输入" },

  // ===== 质量测量指标作为输入 =====
  { source: "doc-qual-metrics", target: "proc-qual-2", type: "consumed-by", label: "质量测量指标是管理质量的输入" },
  { source: "doc-qual-metrics", target: "proc-qual-3", type: "consumed-by", label: "质量测量指标是控制质量的输入" },

  // ===== 质量控制测量结果作为输入 =====
  { source: "doc-qual-measure", target: "proc-int-7", type: "consumed-by", label: "质量控制测量结果是结束项目或阶段的输入" },
  { source: "doc-qual-measure", target: "proc-qual-2", type: "consumed-by", label: "质量控制测量结果是管理质量的输入" },

  // ===== 质量报告作为输入 =====
  { source: "doc-qual-report", target: "proc-int-5", type: "consumed-by", label: "质量报告是监控项目工作的输入" },
  { source: "doc-qual-report", target: "proc-int-7", type: "consumed-by", label: "质量报告是结束项目或阶段的输入" },
  { source: "doc-qual-report", target: "proc-comm-2", type: "consumed-by", label: "质量报告是管理沟通的输入" },
  { source: "doc-qual-report", target: "proc-proc-3", type: "consumed-by", label: "质量报告是控制采购的输入" },

  // ===== 测试与评估文件作为输入 =====
  { source: "doc-test-file", target: "proc-qual-3", type: "consumed-by", label: "测试与评估文件是控制质量的输入" },

  // ===== 资源管理计划作为输入 =====
  { source: "doc-res-plan", target: "proc-res-2", type: "consumed-by", label: "资源管理计划是估算活动资源的输入" },
  { source: "doc-res-plan", target: "proc-res-3", type: "consumed-by", label: "资源管理计划是获取资源的输入" },
  { source: "doc-res-plan", target: "proc-res-4", type: "consumed-by", label: "资源管理计划是建设团队的输入" },
  { source: "doc-res-plan", target: "proc-res-5", type: "consumed-by", label: "资源管理计划是管理团队的输入" },
  { source: "doc-res-plan", target: "proc-res-6", type: "consumed-by", label: "资源管理计划是控制资源的输入" },
  { source: "doc-res-plan", target: "proc-comm-1", type: "consumed-by", label: "资源管理计划是规划沟通管理的输入" },
  { source: "doc-res-plan", target: "proc-comm-2", type: "consumed-by", label: "资源管理计划是管理沟通的输入" },
  { source: "doc-res-plan", target: "proc-comm-3", type: "consumed-by", label: "资源管理计划是监督沟通的输入" },
  { source: "doc-res-plan", target: "proc-cost-3", type: "consumed-by", label: "资源管理计划是制定预算的输入" },
  { source: "doc-res-plan", target: "proc-risk-5", type: "consumed-by", label: "资源管理计划是规划风险应对的输入" },
  { source: "doc-res-plan", target: "proc-stk-2", type: "consumed-by", label: "资源管理计划是规划干系人参与的输入" },
  { source: "doc-res-plan", target: "proc-stk-4", type: "consumed-by", label: "资源管理计划是监督干系人参与的输入" },

  // ===== 团队章程作为输入 =====
  { source: "doc-team-charter", target: "proc-res-4", type: "consumed-by", label: "团队章程是建设团队的输入" },
  { source: "doc-team-charter", target: "proc-res-5", type: "consumed-by", label: "团队章程是管理团队的输入" },

  // ===== 资源需求作为输入 =====
  { source: "doc-res-req", target: "proc-cost-2", type: "consumed-by", label: "资源需求是估算成本的输入" },
  { source: "doc-res-req", target: "proc-proc-1", type: "consumed-by", label: "资源需求是规划采购管理的输入" },
  { source: "doc-res-req", target: "proc-sched-4", type: "consumed-by", label: "资源需求是估算活动持续时间的输入" },
  { source: "doc-res-req", target: "proc-sched-5", type: "consumed-by", label: "资源需求是制定进度计划的输入" },
  { source: "doc-res-req", target: "proc-res-6", type: "consumed-by", label: "资源需求是控制资源的输入" },
  { source: "doc-res-req", target: "proc-risk-2", type: "consumed-by", label: "资源需求是识别风险的输入" },
  { source: "doc-res-req", target: "proc-risk-4", type: "consumed-by", label: "资源需求是定量风险分析的输入" },

  // ===== 资源分解结构作为输入 =====
  { source: "doc-res-breakdown", target: "proc-int-4", type: "consumed-by", label: "资源分解结构是管理项目知识的输入" },
  { source: "doc-res-breakdown", target: "proc-sched-4", type: "consumed-by", label: "资源分解结构是估算活动持续时间的输入" },
  { source: "doc-res-breakdown", target: "proc-res-6", type: "consumed-by", label: "资源分解结构是控制资源的输入" },

  // ===== 项目团队派工单作为输入 =====
  { source: "doc-team-assign", target: "proc-int-4", type: "consumed-by", label: "项目团队派工单是管理项目知识的输入" },
  { source: "doc-team-assign", target: "proc-sched-4", type: "consumed-by", label: "项目团队派工单是估算活动持续时间的输入" },
  { source: "doc-team-assign", target: "proc-sched-5", type: "consumed-by", label: "项目团队派工单是制定进度计划的输入" },
  { source: "doc-team-assign", target: "proc-res-4", type: "consumed-by", label: "项目团队派工单是建设团队的输入" },
  { source: "doc-team-assign", target: "proc-res-5", type: "consumed-by", label: "项目团队派工单是管理团队的输入" },
  { source: "doc-team-assign", target: "proc-risk-5", type: "consumed-by", label: "项目团队派工单是规划风险应对的输入" },
  { source: "doc-team-assign", target: "proc-proc-1", type: "consumed-by", label: "项目团队派工单是规划采购管理的输入" },

  // ===== 资源日历作为输入 =====
  { source: "doc-res-calendar", target: "proc-sched-4", type: "consumed-by", label: "资源日历是估算活动持续时间的输入" },
  { source: "doc-res-calendar", target: "proc-sched-5", type: "consumed-by", label: "资源日历是制定进度计划的输入" },
  { source: "doc-res-calendar", target: "proc-res-2", type: "consumed-by", label: "资源日历是估算活动资源的输入" },
  { source: "doc-res-calendar", target: "proc-res-3", type: "consumed-by", label: "资源日历是获取资源的输入" },
  { source: "doc-res-calendar", target: "proc-res-4", type: "consumed-by", label: "资源日历是建设团队的输入" },
  { source: "doc-res-calendar", target: "proc-sched-6", type: "consumed-by", label: "资源日历是控制进度的输入" },
  { source: "doc-res-calendar", target: "proc-risk-5", type: "consumed-by", label: "资源日历是规划风险应对的输入" },

  // ===== 物质资源分配单作为输入 =====
  { source: "doc-material-assign", target: "proc-res-6", type: "consumed-by", label: "物质资源分配单是控制资源的输入" },

  // ===== 团队绩效评价作为输入 =====
  { source: "doc-team-performance", target: "proc-res-5", type: "consumed-by", label: "团队绩效评价是管理团队的输入" },

  // ===== 沟通管理计划作为输入 =====
  { source: "doc-comm-plan", target: "proc-comm-2", type: "consumed-by", label: "沟通管理计划是管理沟通的输入" },
  { source: "doc-comm-plan", target: "proc-comm-3", type: "consumed-by", label: "沟通管理计划是监督沟通的输入" },
  { source: "doc-comm-plan", target: "proc-stk-1", type: "consumed-by", label: "沟通管理计划是识别干系人的输入" },
  { source: "doc-comm-plan", target: "proc-proc-2", type: "consumed-by", label: "沟通管理计划是实施采购的输入" },

  // ===== 项目沟通记录作为输入 =====
  { source: "doc-comm-record", target: "proc-int-3", type: "consumed-by", label: "项目沟通记录是指导与管理项目工作的输入" },
  { source: "doc-comm-record", target: "proc-int-7", type: "consumed-by", label: "项目沟通记录是结束项目或阶段的输入" },
  { source: "doc-comm-record", target: "proc-comm-3", type: "consumed-by", label: "项目沟通记录是监督沟通的输入" },
  { source: "doc-comm-record", target: "proc-stk-4", type: "consumed-by", label: "项目沟通记录是监督干系人参与的输入" },

  // ===== 风险管理计划作为输入 =====
  { source: "doc-risk-plan", target: "proc-risk-2", type: "consumed-by", label: "风险管理计划是识别风险的输入" },
  { source: "doc-risk-plan", target: "proc-risk-3", type: "consumed-by", label: "风险管理计划是定性风险分析的输入" },
  { source: "doc-risk-plan", target: "proc-risk-4", type: "consumed-by", label: "风险管理计划是定量风险分析的输入" },
  { source: "doc-risk-plan", target: "proc-risk-5", type: "consumed-by", label: "风险管理计划是规划风险应对的输入" },
  { source: "doc-risk-plan", target: "proc-risk-6", type: "consumed-by", label: "风险管理计划是实施风险应对的输入" },
  { source: "doc-risk-plan", target: "proc-risk-7", type: "consumed-by", label: "风险管理计划是监督风险的输入" },
  { source: "doc-risk-plan", target: "proc-cost-1", type: "consumed-by", label: "风险管理计划是规划成本管理的输入" },
  { source: "doc-risk-plan", target: "proc-proc-2", type: "consumed-by", label: "风险管理计划是实施采购的输入" },
  { source: "doc-risk-plan", target: "proc-proc-3", type: "consumed-by", label: "风险管理计划是控制采购的输入" },
  { source: "doc-risk-plan", target: "proc-stk-2", type: "consumed-by", label: "风险管理计划是规划干系人参与的输入" },
  { source: "doc-risk-plan", target: "proc-stk-3", type: "consumed-by", label: "风险管理计划是管理干系人参与的输入" },

  // ===== 风险登记册作为输入 =====
  { source: "doc-risk-register", target: "proc-int-3", type: "consumed-by", label: "风险登记册是指导与管理项目工作的输入" },
  { source: "doc-risk-register", target: "proc-int-5", type: "consumed-by", label: "风险登记册是监控项目工作的输入" },
  { source: "doc-risk-register", target: "proc-int-7", type: "consumed-by", label: "风险登记册是结束项目或阶段的输入" },
  { source: "doc-risk-register", target: "proc-risk-3", type: "consumed-by", label: "风险登记册是定性风险分析的输入" },
  { source: "doc-risk-register", target: "proc-risk-4", type: "consumed-by", label: "风险登记册是定量风险分析的输入" },
  { source: "doc-risk-register", target: "proc-risk-5", type: "consumed-by", label: "风险登记册是规划风险应对的输入" },
  { source: "doc-risk-register", target: "proc-risk-6", type: "consumed-by", label: "风险登记册是实施风险应对的输入" },
  { source: "doc-risk-register", target: "proc-risk-7", type: "consumed-by", label: "风险登记册是监督风险的输入" },
  { source: "doc-risk-register", target: "proc-cost-2", type: "consumed-by", label: "风险登记册是估算成本的输入" },
  { source: "doc-risk-register", target: "proc-cost-3", type: "consumed-by", label: "风险登记册是制定预算的输入" },
  { source: "doc-risk-register", target: "proc-sched-4", type: "consumed-by", label: "风险登记册是估算活动持续时间的输入" },
  { source: "doc-risk-register", target: "proc-sched-5", type: "consumed-by", label: "风险登记册是制定进度计划的输入" },
  { source: "doc-risk-register", target: "proc-proc-1", type: "consumed-by", label: "风险登记册是规划采购管理的输入" },
  { source: "doc-risk-register", target: "proc-res-1", type: "consumed-by", label: "风险登记册是规划资源管理的输入" },
  { source: "doc-risk-register", target: "proc-res-2", type: "consumed-by", label: "风险登记册是估算活动资源的输入" },
  { source: "doc-risk-register", target: "proc-res-6", type: "consumed-by", label: "风险登记册是控制资源的输入" },
  { source: "doc-risk-register", target: "proc-proc-3", type: "consumed-by", label: "风险登记册是控制采购的输入" },
  { source: "doc-risk-register", target: "proc-stk-4", type: "consumed-by", label: "风险登记册是监督干系人参与的输入" },

  // ===== 风险报告作为输入 =====
  { source: "doc-risk-report", target: "proc-int-3", type: "consumed-by", label: "风险报告是指导与管理项目工作的输入" },
  { source: "doc-risk-report", target: "proc-int-5", type: "consumed-by", label: "风险报告是监控项目工作的输入" },
  { source: "doc-risk-report", target: "proc-int-6", type: "consumed-by", label: "风险报告是实施整体变更控制的输入" },
  { source: "doc-risk-report", target: "proc-int-7", type: "consumed-by", label: "风险报告是结束项目或阶段的输入" },
  { source: "doc-risk-report", target: "proc-risk-4", type: "consumed-by", label: "风险报告是定量风险分析的输入" },
  { source: "doc-risk-report", target: "proc-risk-5", type: "consumed-by", label: "风险报告是规划风险应对的输入" },
  { source: "doc-risk-report", target: "proc-risk-6", type: "consumed-by", label: "风险报告是实施风险应对的输入" },
  { source: "doc-risk-report", target: "proc-risk-7", type: "consumed-by", label: "风险报告是监督风险的输入" },
  { source: "doc-risk-report", target: "proc-qual-2", type: "consumed-by", label: "风险报告是管理质量的输入" },
  { source: "doc-risk-report", target: "proc-comm-2", type: "consumed-by", label: "风险报告是管理沟通的输入" },

  // ===== 采购管理计划作为输入 =====
  { source: "doc-proc-plan", target: "proc-proc-2", type: "consumed-by", label: "采购管理计划是实施采购的输入" },
  { source: "doc-proc-plan", target: "proc-proc-3", type: "consumed-by", label: "采购管理计划是控制采购的输入" },
  { source: "doc-proc-plan", target: "proc-res-3", type: "consumed-by", label: "采购管理计划是获取资源的输入" },

  // ===== 采购文档作为输入 =====
  { source: "doc-proc-doc", target: "proc-int-7", type: "consumed-by", label: "采购文档是结束项目或阶段的输入" },
  { source: "doc-proc-doc", target: "proc-risk-2", type: "consumed-by", label: "采购文档是识别风险的输入" },
  { source: "doc-proc-doc", target: "proc-proc-2", type: "consumed-by", label: "采购文档是实施采购的输入" },
  { source: "doc-proc-doc", target: "proc-proc-3", type: "consumed-by", label: "采购文档是控制采购的输入" },

  // ===== 卖方建议书作为输入 =====
  { source: "doc-source-select", target: "proc-proc-2", type: "consumed-by", label: "卖方建议书是实施采购的输入" },

  // ===== 供方选择标准作为输入 =====
  { source: "doc-source-criteria", target: "proc-int-4", type: "consumed-by", label: "供方选择标准是管理项目知识的输入" },

  // ===== 协议作为输入 =====
  { source: "doc-agreement", target: "proc-sched-5", type: "consumed-by", label: "协议是制定进度计划的输入" },
  { source: "doc-agreement", target: "proc-cost-3", type: "consumed-by", label: "协议是制定预算的输入" },
  { source: "doc-agreement", target: "proc-res-6", type: "consumed-by", label: "协议是控制资源的输入" },
  { source: "doc-agreement", target: "proc-risk-2", type: "consumed-by", label: "协议是识别风险的输入" },
  { source: "doc-agreement", target: "proc-proc-3", type: "consumed-by", label: "协议是控制采购的输入" },
  { source: "doc-agreement", target: "proc-stk-1", type: "consumed-by", label: "协议是识别干系人的输入" },
  { source: "doc-agreement", target: "proc-stk-2", type: "consumed-by", label: "协议是规划干系人参与的输入" },

  // ===== 干系人登记册作为输入 =====
  { source: "doc-stakeholder-register", target: "proc-int-4", type: "consumed-by", label: "干系人登记册是管理项目知识的输入" },
  { source: "doc-stakeholder-register", target: "proc-scope-2", type: "consumed-by", label: "干系人登记册是收集需求的输入" },
  { source: "doc-stakeholder-register", target: "proc-qual-1", type: "consumed-by", label: "干系人登记册是规划质量管理的输入" },
  { source: "doc-stakeholder-register", target: "proc-res-1", type: "consumed-by", label: "干系人登记册是规划资源管理的输入" },
  { source: "doc-stakeholder-register", target: "proc-res-3", type: "consumed-by", label: "干系人登记册是获取资源的输入" },
  { source: "doc-stakeholder-register", target: "proc-comm-1", type: "consumed-by", label: "干系人登记册是规划沟通管理的输入" },
  { source: "doc-stakeholder-register", target: "proc-comm-2", type: "consumed-by", label: "干系人登记册是管理沟通的输入" },
  { source: "doc-stakeholder-register", target: "proc-risk-1", type: "consumed-by", label: "干系人登记册是规划风险管理的输入" },
  { source: "doc-stakeholder-register", target: "proc-risk-2", type: "consumed-by", label: "干系人登记册是识别风险的输入" },
  { source: "doc-stakeholder-register", target: "proc-risk-3", type: "consumed-by", label: "干系人登记册是定性风险分析的输入" },
  { source: "doc-stakeholder-register", target: "proc-risk-5", type: "consumed-by", label: "干系人登记册是规划风险应对的输入" },
  { source: "doc-stakeholder-register", target: "proc-proc-1", type: "consumed-by", label: "干系人登记册是规划采购管理的输入" },
  { source: "doc-stakeholder-register", target: "proc-proc-2", type: "consumed-by", label: "干系人登记册是实施采购的输入" },
  { source: "doc-stakeholder-register", target: "proc-proc-3", type: "consumed-by", label: "干系人登记册是控制采购的输入" },
  { source: "doc-stakeholder-register", target: "proc-stk-2", type: "consumed-by", label: "干系人登记册是规划干系人参与的输入" },

  // ===== 干系人参与计划作为输入 =====
  { source: "doc-stakeholder-plan", target: "proc-scope-2", type: "consumed-by", label: "干系人参与计划是收集需求的输入" },
  { source: "doc-stakeholder-plan", target: "proc-qual-1", type: "consumed-by", label: "干系人参与计划是规划质量管理的输入" },
  { source: "doc-stakeholder-plan", target: "proc-comm-1", type: "consumed-by", label: "干系人参与计划是规划沟通管理的输入" },
  { source: "doc-stakeholder-plan", target: "proc-comm-2", type: "consumed-by", label: "干系人参与计划是管理沟通的输入" },
  { source: "doc-stakeholder-plan", target: "proc-comm-3", type: "consumed-by", label: "干系人参与计划是监督沟通的输入" },
  { source: "doc-stakeholder-plan", target: "proc-stk-1", type: "consumed-by", label: "干系人参与计划是识别干系人的输入" },
  { source: "doc-stakeholder-plan", target: "proc-stk-3", type: "consumed-by", label: "干系人参与计划是管理干系人参与的输入" },
  { source: "doc-stakeholder-plan", target: "proc-stk-4", type: "consumed-by", label: "干系人参与计划是监督干系人参与的输入" },

  // ===== 变更管理计划作为输入 =====
  { source: "doc-change-mgmt-plan", target: "proc-int-6", type: "consumed-by", label: "变更管理计划是实施整体变更控制的输入" },
  { source: "doc-change-mgmt-plan", target: "proc-proc-3", type: "consumed-by", label: "变更管理计划是控制采购的输入" },
  { source: "doc-change-mgmt-plan", target: "proc-stk-3", type: "consumed-by", label: "变更管理计划是管理干系人参与的输入" },

  // ===== 配置管理计划作为输入 =====
  { source: "doc-config-plan", target: "proc-int-6", type: "consumed-by", label: "配置管理计划是实施整体变更控制的输入" },
  { source: "doc-config-plan", target: "proc-proc-2", type: "consumed-by", label: "配置管理计划是实施采购的输入" },

  // ===== 绩效测量基准作为输入 =====
  { source: "doc-perf-measure-baseline", target: "proc-int-6", type: "consumed-by", label: "绩效测量基准是实施整体变更控制的输入" },
  { source: "doc-perf-measure-baseline", target: "proc-sched-6", type: "consumed-by", label: "绩效测量基准是控制进度的输入" },
  { source: "doc-perf-measure-baseline", target: "proc-cost-4", type: "consumed-by", label: "绩效测量基准是控制成本的输入" },

  // ===== 工作绩效数据作为输入 =====
  { source: "doc-work-perf-data", target: "proc-scope-5", type: "consumed-by", label: "工作绩效数据是确认范围的输入" },
  { source: "doc-work-perf-data", target: "proc-scope-6", type: "consumed-by", label: "工作绩效数据是控制范围的输入" },
  { source: "doc-work-perf-data", target: "proc-sched-6", type: "consumed-by", label: "工作绩效数据是控制进度的输入" },
  { source: "doc-work-perf-data", target: "proc-cost-4", type: "consumed-by", label: "工作绩效数据是控制成本的输入" },
  { source: "doc-work-perf-data", target: "proc-qual-3", type: "consumed-by", label: "工作绩效数据是控制质量的输入" },
  { source: "doc-work-perf-data", target: "proc-res-6", type: "consumed-by", label: "工作绩效数据是控制资源的输入" },
  { source: "doc-work-perf-data", target: "proc-comm-3", type: "consumed-by", label: "工作绩效数据是监督沟通的输入" },
  { source: "doc-work-perf-data", target: "proc-risk-7", type: "consumed-by", label: "工作绩效数据是监督风险的输入" },
  { source: "doc-work-perf-data", target: "proc-proc-3", type: "consumed-by", label: "工作绩效数据是控制采购的输入" },
  { source: "doc-work-perf-data", target: "proc-stk-4", type: "consumed-by", label: "工作绩效数据是监督干系人参与的输入" },

  // ===== 工作绩效信息作为输入 =====
  { source: "doc-work-perf-info", target: "proc-int-5", type: "consumed-by", label: "工作绩效信息是监控项目工作的输入" },

  // ===== 工作绩效报告作为输入 (狗团变疯) =====
  { source: "doc-work-perf-report", target: "proc-int-5", type: "consumed-by", label: "工作绩效报告是监控项目工作的输入" },
  { source: "doc-work-perf-report", target: "proc-int-6", type: "consumed-by", label: "工作绩效报告是整体变更控制的输入" },
  { source: "doc-work-perf-report", target: "proc-res-5", type: "consumed-by", label: "工作绩效报告是管理团队的输入" },
  { source: "doc-work-perf-report", target: "proc-comm-2", type: "consumed-by", label: "工作绩效报告是管理沟通的输入" },
  { source: "doc-work-perf-report", target: "proc-risk-7", type: "consumed-by", label: "工作绩效报告是监督风险的输入" },

  // ===== 批准的变更请求作为输入 =====
  { source: "doc-approved-change", target: "proc-int-3", type: "consumed-by", label: "批准的变更请求是指导与管理项目工作的输入" },
  { source: "doc-approved-change", target: "proc-qual-3", type: "consumed-by", label: "批准的变更请求是控制质量的输入" },
  { source: "doc-approved-change", target: "proc-proc-3", type: "consumed-by", label: "批准的变更请求是控制采购的输入" },

  // ===== 可交付成果作为输入 =====
  { source: "doc-deliverable", target: "proc-int-4", type: "consumed-by", label: "可交付成果是管理项目知识的输入" },
  { source: "doc-deliverable", target: "proc-qual-3", type: "consumed-by", label: "可交付成果是控制质量的输入" },

  // ===== 核实的可交付成果作为输入 =====
  { source: "doc-verified-deliverable", target: "proc-scope-5", type: "consumed-by", label: "核实的可交付成果是确认范围的输入" },

  // ===== 验收的可交付成果作为输入 =====
  { source: "doc-accepted-deliverable", target: "proc-int-7", type: "consumed-by", label: "验收的可交付成果是结束项目或阶段的输入" },

  // ===== 经验教训登记册作为输入 =====
  { source: "doc-lessons-learned", target: "proc-int-4", type: "consumed-by", label: "经验教训登记册是管理项目知识的输入" },
  { source: "doc-lessons-learned", target: "proc-int-5", type: "consumed-by", label: "经验教训登记册是监控项目工作的输入" },
  { source: "doc-lessons-learned", target: "proc-sched-4", type: "consumed-by", label: "经验教训登记册是估算活动持续时间的输入" },
  { source: "doc-lessons-learned", target: "proc-sched-5", type: "consumed-by", label: "经验教训登记册是制定进度计划的输入" },
  { source: "doc-lessons-learned", target: "proc-sched-6", type: "consumed-by", label: "经验教训登记册是控制进度的输入" },
  { source: "doc-lessons-learned", target: "proc-cost-2", type: "consumed-by", label: "经验教训登记册是估算成本的输入" },
  { source: "doc-lessons-learned", target: "proc-qual-1", type: "consumed-by", label: "经验教训登记册是规划质量管理的输入" },
  { source: "doc-lessons-learned", target: "proc-qual-2", type: "consumed-by", label: "经验教训登记册是管理质量的输入" },
  { source: "doc-lessons-learned", target: "proc-qual-3", type: "consumed-by", label: "经验教训登记册是控制质量的输入" },
  { source: "doc-lessons-learned", target: "proc-res-2", type: "consumed-by", label: "经验教训登记册是估算活动资源的输入" },
  { source: "doc-lessons-learned", target: "proc-res-4", type: "consumed-by", label: "经验教训登记册是建设团队的输入" },
  { source: "doc-lessons-learned", target: "proc-res-5", type: "consumed-by", label: "经验教训登记册是管理团队的输入" },
  { source: "doc-lessons-learned", target: "proc-res-6", type: "consumed-by", label: "经验教训登记册是控制资源的输入" },
  { source: "doc-lessons-learned", target: "proc-comm-2", type: "consumed-by", label: "经验教训登记册是管理沟通的输入" },
  { source: "doc-lessons-learned", target: "proc-comm-3", type: "consumed-by", label: "经验教训登记册是监督沟通的输入" },
  { source: "doc-lessons-learned", target: "proc-risk-2", type: "consumed-by", label: "经验教训登记册是识别风险的输入" },
  { source: "doc-lessons-learned", target: "proc-risk-5", type: "consumed-by", label: "经验教训登记册是规划风险应对的输入" },
  { source: "doc-lessons-learned", target: "proc-risk-6", type: "consumed-by", label: "经验教训登记册是实施风险应对的输入" },
  { source: "doc-lessons-learned", target: "proc-risk-7", type: "consumed-by", label: "经验教训登记册是监督风险的输入" },
  { source: "doc-lessons-learned", target: "proc-proc-2", type: "consumed-by", label: "经验教训登记册是实施采购的输入" },
  { source: "doc-lessons-learned", target: "proc-proc-3", type: "consumed-by", label: "经验教训登记册是控制采购的输入" },
  { source: "doc-lessons-learned", target: "proc-stk-3", type: "consumed-by", label: "经验教训登记册是管理干系人参与的输入" },
  { source: "doc-lessons-learned", target: "proc-stk-4", type: "consumed-by", label: "经验教训登记册是监督干系人参与的输入" },

  // ===== 假设日志作为输入 =====
  { source: "doc-assumption-log", target: "proc-int-3", type: "consumed-by", label: "假设日志是指导与管理项目工作的输入" },
  { source: "doc-assumption-log", target: "proc-int-5", type: "consumed-by", label: "假设日志是监控项目工作的输入" },
  { source: "doc-assumption-log", target: "proc-int-7", type: "consumed-by", label: "假设日志是结束项目或阶段的输入" },
  { source: "doc-assumption-log", target: "proc-scope-2", type: "consumed-by", label: "假设日志是收集需求的输入" },
  { source: "doc-assumption-log", target: "proc-scope-3", type: "consumed-by", label: "假设日志是定义范围的输入" },
  { source: "doc-assumption-log", target: "proc-sched-3", type: "consumed-by", label: "假设日志是排列活动顺序的输入" },
  { source: "doc-assumption-log", target: "proc-sched-4", type: "consumed-by", label: "假设日志是估算活动持续时间的输入" },
  { source: "doc-assumption-log", target: "proc-qual-1", type: "consumed-by", label: "假设日志是规划质量管理的输入" },
  { source: "doc-assumption-log", target: "proc-res-2", type: "consumed-by", label: "假设日志是估算活动资源的输入" },
  { source: "doc-assumption-log", target: "proc-risk-2", type: "consumed-by", label: "假设日志是识别风险的输入" },
  { source: "doc-assumption-log", target: "proc-risk-3", type: "consumed-by", label: "假设日志是定性风险分析的输入" },
  { source: "doc-assumption-log", target: "proc-risk-4", type: "consumed-by", label: "假设日志是定量风险分析的输入" },
  { source: "doc-assumption-log", target: "proc-proc-3", type: "consumed-by", label: "假设日志是控制采购的输入" },
  { source: "doc-assumption-log", target: "proc-stk-2", type: "consumed-by", label: "假设日志是规划干系人参与的输入" },

  // ===== 问题日志作为输入 =====
  { source: "doc-issue-log", target: "proc-int-5", type: "consumed-by", label: "问题日志是监控项目工作的输入" },
  { source: "doc-issue-log", target: "proc-int-7", type: "consumed-by", label: "问题日志是结束项目或阶段的输入" },
  { source: "doc-issue-log", target: "proc-res-5", type: "consumed-by", label: "问题日志是管理团队的输入" },
  { source: "doc-issue-log", target: "proc-res-6", type: "consumed-by", label: "问题日志是控制资源的输入" },
  { source: "doc-issue-log", target: "proc-risk-2", type: "consumed-by", label: "问题日志是识别风险的输入" },
  { source: "doc-issue-log", target: "proc-risk-7", type: "consumed-by", label: "问题日志是监督风险的输入" },
  { source: "doc-issue-log", target: "proc-comm-3", type: "consumed-by", label: "问题日志是监督沟通的输入" },
  { source: "doc-issue-log", target: "proc-stk-3", type: "consumed-by", label: "问题日志是管理干系人参与的输入" },
  { source: "doc-issue-log", target: "proc-stk-4", type: "consumed-by", label: "问题日志是监督干系人参与的输入" },

  // ===== 变更日志作为输入 =====
  { source: "doc-change-log", target: "proc-int-3", type: "consumed-by", label: "变更日志是指导与管理项目工作的输入" },
  { source: "doc-change-log", target: "proc-int-7", type: "consumed-by", label: "变更日志是结束项目或阶段的输入" },
  { source: "doc-change-log", target: "proc-comm-2", type: "consumed-by", label: "变更日志是管理沟通的输入" },
  { source: "doc-change-log", target: "proc-stk-1", type: "consumed-by", label: "变更日志是识别干系人的输入" },
  { source: "doc-change-log", target: "proc-stk-3", type: "consumed-by", label: "变更日志是管理干系人参与的输入" },

  // ===== 变更请求作为输入 =====
  { source: "doc-change-request", target: "proc-int-6", type: "consumed-by", label: "变更请求是实施整体变更控制的输入" },

  // ===== 项目立项文件作为输入 =====
  { source: "doc-project-init", target: "proc-int-1", type: "consumed-by", label: "项目立项文件是制定项目章程的输入" },
  { source: "doc-project-init", target: "proc-int-7", type: "consumed-by", label: "项目立项文件是结束项目或阶段的输入" },
  { source: "doc-project-init", target: "proc-stk-1", type: "consumed-by", label: "项目立项文件是识别干系人的输入" },

  // ===== 商业论证作为输入 =====
  { source: "doc-business-case", target: "proc-cost-3", type: "consumed-by", label: "商业论证是制定预算的输入" },
  { source: "doc-business-case", target: "proc-proc-1", type: "consumed-by", label: "商业论证是规划采购管理的输入" },

  // ===== 效益管理计划作为输入 =====
  { source: "doc-benefit-plan", target: "proc-cost-3", type: "consumed-by", label: "效益管理计划是制定预算的输入" },
  { source: "doc-benefit-plan", target: "proc-proc-1", type: "consumed-by", label: "效益管理计划是规划采购管理的输入" },

  // ===== 进度预测作为输入 =====
  { source: "doc-sched-forecast", target: "proc-int-5", type: "consumed-by", label: "进度预测是监控项目工作的输入" },
  { source: "doc-sched-forecast", target: "proc-risk-4", type: "consumed-by", label: "进度预测是定量风险分析的输入" },

  // ============================================================
  // 5. used-in edges (tool → process)
  // 工具用于过程
  // ============================================================

  // ===== 专家判断 (广泛使用于规划过程) =====
  { source: "tool-expert", target: "proc-int-1", type: "used-in", label: "专家判断用于制定项目章程" },
  { source: "tool-expert", target: "proc-int-2", type: "used-in", label: "专家判断用于制定项目管理计划" },
  { source: "tool-expert", target: "proc-int-3", type: "used-in", label: "专家判断用于指导与管理项目工作" },
  { source: "tool-expert", target: "proc-int-4", type: "used-in", label: "专家判断用于管理项目知识" },
  { source: "tool-expert", target: "proc-int-5", type: "used-in", label: "专家判断用于监控项目工作" },
  { source: "tool-expert", target: "proc-int-6", type: "used-in", label: "专家判断用于实施整体变更控制" },
  { source: "tool-expert", target: "proc-int-7", type: "used-in", label: "专家判断用于结束项目或阶段" },
  { source: "tool-expert", target: "proc-scope-1", type: "used-in", label: "专家判断用于规划范围管理" },
  { source: "tool-expert", target: "proc-scope-2", type: "used-in", label: "专家判断用于收集需求" },
  { source: "tool-expert", target: "proc-scope-3", type: "used-in", label: "专家判断用于定义范围" },
  { source: "tool-expert", target: "proc-scope-4", type: "used-in", label: "专家判断用于创建WBS" },
  { source: "tool-expert", target: "proc-sched-1", type: "used-in", label: "专家判断用于规划进度管理" },
  { source: "tool-expert", target: "proc-sched-2", type: "used-in", label: "专家判断用于定义活动" },
  { source: "tool-expert", target: "proc-sched-3", type: "used-in", label: "专家判断用于排列活动顺序" },
  { source: "tool-expert", target: "proc-sched-4", type: "used-in", label: "专家判断用于估算活动持续时间" },
  { source: "tool-expert", target: "proc-sched-5", type: "used-in", label: "专家判断用于制定进度计划" },
  { source: "tool-expert", target: "proc-cost-1", type: "used-in", label: "专家判断用于规划成本管理" },
  { source: "tool-expert", target: "proc-cost-2", type: "used-in", label: "专家判断用于估算成本" },
  { source: "tool-expert", target: "proc-cost-3", type: "used-in", label: "专家判断用于制定预算" },
  { source: "tool-expert", target: "proc-cost-4", type: "used-in", label: "专家判断用于控制成本" },
  { source: "tool-expert", target: "proc-qual-1", type: "used-in", label: "专家判断用于规划质量管理" },
  { source: "tool-expert", target: "proc-qual-2", type: "used-in", label: "专家判断用于管理质量" },
  { source: "tool-expert", target: "proc-res-1", type: "used-in", label: "专家判断用于规划资源管理" },
  { source: "tool-expert", target: "proc-res-2", type: "used-in", label: "专家判断用于估算活动资源" },
  { source: "tool-expert", target: "proc-risk-1", type: "used-in", label: "专家判断用于规划风险管理" },
  { source: "tool-expert", target: "proc-risk-2", type: "used-in", label: "专家判断用于识别风险" },
  { source: "tool-expert", target: "proc-risk-3", type: "used-in", label: "专家判断用于定性风险分析" },
  { source: "tool-expert", target: "proc-risk-4", type: "used-in", label: "专家判断用于定量风险分析" },
  { source: "tool-expert", target: "proc-risk-5", type: "used-in", label: "专家判断用于规划风险应对" },
  { source: "tool-expert", target: "proc-risk-6", type: "used-in", label: "专家判断用于实施风险应对" },
  { source: "tool-expert", target: "proc-proc-1", type: "used-in", label: "专家判断用于规划采购管理" },
  { source: "tool-expert", target: "proc-proc-2", type: "used-in", label: "专家判断用于实施采购" },
  { source: "tool-expert", target: "proc-proc-3", type: "used-in", label: "专家判断用于控制采购" },
  { source: "tool-expert", target: "proc-stk-1", type: "used-in", label: "专家判断用于识别干系人" },
  { source: "tool-expert", target: "proc-stk-2", type: "used-in", label: "专家判断用于规划干系人参与" },
  { source: "tool-expert", target: "proc-stk-3", type: "used-in", label: "专家判断用于管理干系人参与" },

  // ===== 会议 =====
  { source: "tool-meeting", target: "proc-int-1", type: "used-in", label: "会议用于制定项目章程" },
  { source: "tool-meeting", target: "proc-int-2", type: "used-in", label: "会议用于制定项目管理计划" },
  { source: "tool-meeting", target: "proc-int-3", type: "used-in", label: "会议用于指导与管理项目工作" },
  { source: "tool-meeting", target: "proc-int-5", type: "used-in", label: "会议用于监控项目工作" },
  { source: "tool-meeting", target: "proc-int-6", type: "used-in", label: "会议用于实施整体变更控制" },
  { source: "tool-meeting", target: "proc-int-7", type: "used-in", label: "会议用于结束项目或阶段" },
  { source: "tool-meeting", target: "proc-scope-1", type: "used-in", label: "会议用于规划范围管理" },
  { source: "tool-meeting", target: "proc-sched-1", type: "used-in", label: "会议用于规划进度管理" },
  { source: "tool-meeting", target: "proc-sched-2", type: "used-in", label: "会议用于定义活动" },
  { source: "tool-meeting", target: "proc-sched-4", type: "used-in", label: "会议用于估算活动持续时间" },
  { source: "tool-meeting", target: "proc-cost-1", type: "used-in", label: "会议用于规划成本管理" },
  { source: "tool-meeting", target: "proc-qual-1", type: "used-in", label: "会议用于规划质量管理" },
  { source: "tool-meeting", target: "proc-qual-3", type: "used-in", label: "会议用于控制质量" },
  { source: "tool-meeting", target: "proc-res-1", type: "used-in", label: "会议用于规划资源管理" },
  { source: "tool-meeting", target: "proc-res-2", type: "used-in", label: "会议用于估算活动资源" },
  { source: "tool-meeting", target: "proc-res-4", type: "used-in", label: "会议用于建设团队" },
  { source: "tool-meeting", target: "proc-comm-1", type: "used-in", label: "会议用于规划沟通管理" },
  { source: "tool-meeting", target: "proc-comm-3", type: "used-in", label: "会议用于监督沟通" },
  { source: "tool-meeting", target: "proc-risk-1", type: "used-in", label: "会议用于规划风险管理" },
  { source: "tool-meeting", target: "proc-risk-2", type: "used-in", label: "会议用于识别风险" },
  { source: "tool-meeting", target: "proc-risk-3", type: "used-in", label: "会议用于定性风险分析" },
  { source: "tool-meeting", target: "proc-risk-5", type: "used-in", label: "会议用于规划风险应对" },
  { source: "tool-meeting", target: "proc-risk-7", type: "used-in", label: "会议用于监督风险" },
  { source: "tool-meeting", target: "proc-proc-1", type: "used-in", label: "会议用于规划采购管理" },
  { source: "tool-meeting", target: "proc-stk-1", type: "used-in", label: "会议用于识别干系人" },

  // ===== 头脑风暴 =====
  { source: "tool-brainstorm", target: "proc-int-1", type: "used-in", label: "头脑风暴用于制定项目章程" },
  { source: "tool-brainstorm", target: "proc-int-2", type: "used-in", label: "头脑风暴用于制定项目管理计划" },
  { source: "tool-brainstorm", target: "proc-scope-2", type: "used-in", label: "头脑风暴用于收集需求" },
  { source: "tool-brainstorm", target: "proc-qual-1", type: "used-in", label: "头脑风暴用于规划质量管理" },
  { source: "tool-brainstorm", target: "proc-risk-2", type: "used-in", label: "头脑风暴用于识别风险" },
  { source: "tool-brainstorm", target: "proc-stk-1", type: "used-in", label: "头脑风暴用于识别干系人" },

  // ===== 访谈 =====
  { source: "tool-interview", target: "proc-int-1", type: "used-in", label: "访谈用于制定项目章程" },
  { source: "tool-interview", target: "proc-int-2", type: "used-in", label: "访谈用于制定项目管理计划" },
  { source: "tool-interview", target: "proc-scope-2", type: "used-in", label: "访谈用于收集需求" },
  { source: "tool-interview", target: "proc-qual-1", type: "used-in", label: "访谈用于规划质量管理" },
  { source: "tool-interview", target: "proc-risk-2", type: "used-in", label: "访谈用于识别风险" },
  { source: "tool-interview", target: "proc-risk-3", type: "used-in", label: "访谈用于定性风险分析" },
  { source: "tool-interview", target: "proc-risk-4", type: "used-in", label: "访谈用于定量风险分析" },
  { source: "tool-interview", target: "proc-risk-5", type: "used-in", label: "访谈用于规划风险应对" },

  // ===== 焦点小组 =====
  { source: "tool-focus-group", target: "proc-int-1", type: "used-in", label: "焦点小组用于制定项目章程" },
  { source: "tool-focus-group", target: "proc-int-2", type: "used-in", label: "焦点小组用于制定项目管理计划" },
  { source: "tool-focus-group", target: "proc-scope-2", type: "used-in", label: "焦点小组用于收集需求" },

  // ===== 问卷调查 =====
  { source: "tool-questionnaire", target: "proc-scope-2", type: "used-in", label: "问卷调查用于收集需求" },
  { source: "tool-questionnaire", target: "proc-qual-3", type: "used-in", label: "问卷调查用于控制质量" },
  { source: "tool-questionnaire", target: "proc-stk-1", type: "used-in", label: "问卷调查用于识别干系人" },

  // ===== 标杆对照 =====
  { source: "tool-benchmarking", target: "proc-scope-2", type: "used-in", label: "标杆对照用于收集需求" },
  { source: "tool-benchmarking", target: "proc-qual-1", type: "used-in", label: "标杆对照用于规划质量管理" },
  { source: "tool-benchmarking", target: "proc-stk-2", type: "used-in", label: "标杆对照用于规划干系人参与" },

  // ===== 备选方案分析 =====
  { source: "tool-alt-analysis", target: "proc-int-5", type: "used-in", label: "备选方案分析用于监控项目工作" },
  { source: "tool-alt-analysis", target: "proc-int-6", type: "used-in", label: "备选方案分析用于实施整体变更控制" },
  { source: "tool-alt-analysis", target: "proc-scope-1", type: "used-in", label: "备选方案分析用于规划范围管理" },
  { source: "tool-alt-analysis", target: "proc-scope-3", type: "used-in", label: "备选方案分析用于定义范围" },
  { source: "tool-alt-analysis", target: "proc-sched-1", type: "used-in", label: "备选方案分析用于规划进度管理" },
  { source: "tool-alt-analysis", target: "proc-qual-2", type: "used-in", label: "备选方案分析用于管理质量" },
  { source: "tool-alt-analysis", target: "proc-cost-2", type: "used-in", label: "备选方案分析用于估算成本" },
  { source: "tool-alt-analysis", target: "proc-res-2", type: "used-in", label: "备选方案分析用于估算活动资源" },
  { source: "tool-alt-analysis", target: "proc-res-6", type: "used-in", label: "备选方案分析用于控制资源" },
  { source: "tool-alt-analysis", target: "proc-risk-5", type: "used-in", label: "备选方案分析用于规划风险应对" },
  { source: "tool-alt-analysis", target: "proc-stk-4", type: "used-in", label: "备选方案分析用于监督干系人参与" },

  // ===== 储备分析 =====
  { source: "tool-reserve-analysis", target: "proc-sched-4", type: "used-in", label: "储备分析用于估算活动持续时间" },
  { source: "tool-reserve-analysis", target: "proc-cost-2", type: "used-in", label: "储备分析用于估算成本" },
  { source: "tool-reserve-analysis", target: "proc-cost-3", type: "used-in", label: "储备分析用于制定预算" },
  { source: "tool-reserve-analysis", target: "proc-cost-4", type: "used-in", label: "储备分析用于控制成本" },
  { source: "tool-reserve-analysis", target: "proc-risk-7", type: "used-in", label: "储备分析用于监督风险" },

  // ===== 偏差分析 =====
  { source: "tool-variance-analysis", target: "proc-int-5", type: "used-in", label: "偏差分析用于监控项目工作" },
  { source: "tool-variance-analysis", target: "proc-scope-6", type: "used-in", label: "偏差分析用于控制范围" },
  { source: "tool-variance-analysis", target: "proc-sched-6", type: "used-in", label: "偏差分析用于控制进度" },
  { source: "tool-variance-analysis", target: "proc-cost-4", type: "used-in", label: "偏差分析用于控制成本" },
  { source: "tool-variance-analysis", target: "proc-int-7", type: "used-in", label: "偏差分析用于结束项目或阶段" },

  // ===== 趋势分析 =====
  { source: "tool-trend-analysis", target: "proc-int-5", type: "used-in", label: "趋势分析用于监控项目工作" },
  { source: "tool-trend-analysis", target: "proc-scope-6", type: "used-in", label: "趋势分析用于控制范围" },
  { source: "tool-trend-analysis", target: "proc-sched-6", type: "used-in", label: "趋势分析用于控制进度" },
  { source: "tool-trend-analysis", target: "proc-cost-4", type: "used-in", label: "趋势分析用于控制成本" },
  { source: "tool-trend-analysis", target: "proc-res-6", type: "used-in", label: "趋势分析用于控制资源" },
  { source: "tool-trend-analysis", target: "proc-proc-3", type: "used-in", label: "趋势分析用于控制采购" },
  { source: "tool-trend-analysis", target: "proc-int-7", type: "used-in", label: "趋势分析用于结束项目或阶段" },

  // ===== 根本原因分析 =====
  { source: "tool-root-cause", target: "proc-int-5", type: "used-in", label: "根本原因分析用于监控项目工作" },
  { source: "tool-root-cause", target: "proc-qual-2", type: "used-in", label: "根本原因分析用于管理质量" },
  { source: "tool-root-cause", target: "proc-qual-3", type: "used-in", label: "根本原因分析用于控制质量" },
  { source: "tool-root-cause", target: "proc-risk-2", type: "used-in", label: "根本原因分析用于识别风险" },
  { source: "tool-root-cause", target: "proc-stk-2", type: "used-in", label: "根本原因分析用于规划干系人参与" },
  { source: "tool-root-cause", target: "proc-stk-4", type: "used-in", label: "根本原因分析用于监督干系人参与" },

  // ===== 挣值分析 =====
  { source: "tool-ev-analysis", target: "proc-int-5", type: "used-in", label: "挣值分析用于监控项目工作" },
  { source: "tool-ev-analysis", target: "proc-sched-6", type: "used-in", label: "挣值分析用于控制进度" },
  { source: "tool-ev-analysis", target: "proc-cost-4", type: "used-in", label: "挣值分析用于控制成本" },
  { source: "tool-ev-analysis", target: "proc-proc-3", type: "used-in", label: "挣值分析用于控制采购" },

  // ===== 类比估算 =====
  { source: "tool-analogous", target: "proc-sched-4", type: "used-in", label: "类比估算用于估算活动持续时间" },
  { source: "tool-analogous", target: "proc-cost-2", type: "used-in", label: "类比估算用于估算成本" },
  { source: "tool-analogous", target: "proc-res-2", type: "used-in", label: "类比估算用于估算活动资源" },

  // ===== 参数估算 =====
  { source: "tool-parametric", target: "proc-sched-4", type: "used-in", label: "参数估算用于估算活动持续时间" },
  { source: "tool-parametric", target: "proc-cost-2", type: "used-in", label: "参数估算用于估算成本" },
  { source: "tool-parametric", target: "proc-res-2", type: "used-in", label: "参数估算用于估算活动资源" },

  // ===== 三点估算 =====
  { source: "tool-three-point", target: "proc-sched-4", type: "used-in", label: "三点估算用于估算活动持续时间" },
  { source: "tool-three-point", target: "proc-cost-2", type: "used-in", label: "三点估算用于估算成本" },

  // ===== 自下而上估算 =====
  { source: "tool-bottom-up", target: "proc-sched-4", type: "used-in", label: "自下而上估算用于估算活动持续时间" },
  { source: "tool-bottom-up", target: "proc-cost-2", type: "used-in", label: "自下而上估算用于估算成本" },
  { source: "tool-bottom-up", target: "proc-res-2", type: "used-in", label: "自下而上估算用于估算活动资源" },

  // ===== 紧前关系绘图法 =====
  { source: "tool-pdm", target: "proc-sched-3", type: "used-in", label: "紧前关系绘图法用于排列活动顺序" },

  // ===== 确定依赖关系 =====
  { source: "tool-dependency", target: "proc-sched-3", type: "used-in", label: "确定依赖关系用于排列活动顺序" },

  // ===== 提前量和滞后量 =====
  { source: "tool-lead-lag", target: "proc-sched-3", type: "used-in", label: "提前量和滞后量用于排列活动顺序" },
  { source: "tool-lead-lag", target: "proc-sched-5", type: "used-in", label: "提前量和滞后量用于制定进度计划" },
  { source: "tool-lead-lag", target: "proc-sched-6", type: "used-in", label: "提前量和滞后量用于控制进度" },

  // ===== 关键路径法 =====
  { source: "tool-cpm", target: "proc-sched-5", type: "used-in", label: "关键路径法用于制定进度计划" },
  { source: "tool-cpm", target: "proc-sched-6", type: "used-in", label: "关键路径法用于控制进度" },

  // ===== 资源优化 =====
  { source: "tool-resource-opt", target: "proc-sched-5", type: "used-in", label: "资源优化用于制定进度计划" },
  { source: "tool-resource-opt", target: "proc-sched-6", type: "used-in", label: "资源优化用于控制进度" },

  // ===== 进度压缩 =====
  { source: "tool-sched-compress", target: "proc-sched-5", type: "used-in", label: "进度压缩用于制定进度计划" },
  { source: "tool-sched-compress", target: "proc-sched-6", type: "used-in", label: "进度压缩用于控制进度" },

  // ===== PMIS =====
  { source: "tool-pmis", target: "proc-int-3", type: "used-in", label: "PMIS用于指导与管理项目工作" },
  { source: "tool-pmis", target: "proc-int-6", type: "used-in", label: "PMIS用于整体变更控制" },
  { source: "tool-pmis", target: "proc-sched-3", type: "used-in", label: "PMIS用于排列活动顺序" },
  { source: "tool-pmis", target: "proc-sched-5", type: "used-in", label: "PMIS用于制定进度计划" },
  { source: "tool-pmis", target: "proc-cost-2", type: "used-in", label: "PMIS用于估算成本" },
  { source: "tool-pmis", target: "proc-cost-4", type: "used-in", label: "PMIS用于控制成本" },
  { source: "tool-pmis", target: "proc-res-2", type: "used-in", label: "PMIS用于估算活动资源" },
  { source: "tool-pmis", target: "proc-res-5", type: "used-in", label: "PMIS用于管理团队" },
  { source: "tool-pmis", target: "proc-res-6", type: "used-in", label: "PMIS用于控制资源" },
  { source: "tool-pmis", target: "proc-comm-2", type: "used-in", label: "PMIS用于管理沟通" },
  { source: "tool-pmis", target: "proc-comm-3", type: "used-in", label: "PMIS用于监督沟通" },
  { source: "tool-pmis", target: "proc-risk-6", type: "used-in", label: "PMIS用于实施风险应对" },

  // ===== 投票 =====
  { source: "tool-voting", target: "proc-int-6", type: "used-in", label: "投票用于实施整体变更控制" },
  { source: "tool-voting", target: "proc-scope-2", type: "used-in", label: "投票用于收集需求" },
  { source: "tool-voting", target: "proc-scope-5", type: "used-in", label: "投票用于确认范围" },
  { source: "tool-voting", target: "proc-cost-2", type: "used-in", label: "投票用于估算成本" },
  { source: "tool-voting", target: "proc-sched-4", type: "used-in", label: "投票用于估算活动持续时间" },
  { source: "tool-voting", target: "proc-stk-4", type: "used-in", label: "投票用于监督干系人参与" },

  // ===== 多标准决策分析 =====
  { source: "tool-multi-criteria", target: "proc-int-6", type: "used-in", label: "多标准决策分析用于实施整体变更控制" },
  { source: "tool-multi-criteria", target: "proc-scope-2", type: "used-in", label: "多标准决策分析用于收集需求" },
  { source: "tool-multi-criteria", target: "proc-scope-3", type: "used-in", label: "多标准决策分析用于定义范围" },
  { source: "tool-multi-criteria", target: "proc-qual-1", type: "used-in", label: "多标准决策分析用于规划质量管理" },
  { source: "tool-multi-criteria", target: "proc-qual-2", type: "used-in", label: "多标准决策分析用于管理质量" },
  { source: "tool-multi-criteria", target: "proc-res-3", type: "used-in", label: "多标准决策分析用于获取资源" },
  { source: "tool-multi-criteria", target: "proc-risk-5", type: "used-in", label: "多标准决策分析用于规划风险应对" },
  { source: "tool-multi-criteria", target: "proc-stk-4", type: "used-in", label: "多标准决策分析用于监督干系人参与" },

  // ===== 亲和图 =====
  { source: "tool-affinity", target: "proc-scope-2", type: "used-in", label: "亲和图用于收集需求" },
  { source: "tool-affinity", target: "proc-qual-2", type: "used-in", label: "亲和图用于管理质量" },

  // ===== 思维导图 =====
  { source: "tool-mind-map", target: "proc-scope-2", type: "used-in", label: "思维导图用于收集需求" },
  { source: "tool-mind-map", target: "proc-qual-1", type: "used-in", label: "思维导图用于规划质量管理" },
  { source: "tool-mind-map", target: "proc-stk-2", type: "used-in", label: "思维导图用于规划干系人参与" },

  // ===== 流程图 =====
  { source: "tool-flowchart", target: "proc-qual-1", type: "used-in", label: "流程图用于规划质量管理" },
  { source: "tool-flowchart", target: "proc-qual-2", type: "used-in", label: "流程图用于管理质量" },

  // ===== 因果图/鱼骨图 =====
  { source: "tool-cause-effect", target: "proc-qual-2", type: "used-in", label: "因果图用于管理质量" },
  { source: "tool-cause-effect", target: "proc-qual-3", type: "used-in", label: "因果图用于控制质量" },

  // ===== 直方图 =====
  { source: "tool-histogram", target: "proc-qual-2", type: "used-in", label: "直方图用于管理质量" },
  { source: "tool-histogram", target: "proc-qual-3", type: "used-in", label: "直方图用于控制质量" },

  // ===== 散点图 =====
  { source: "tool-scatter", target: "proc-qual-2", type: "used-in", label: "散点图用于管理质量" },
  { source: "tool-scatter", target: "proc-qual-3", type: "used-in", label: "散点图用于控制质量" },

  // ===== 控制图 =====
  { source: "tool-control-chart", target: "proc-qual-3", type: "used-in", label: "控制图用于控制质量" },

  // ===== 矩阵图 =====
  { source: "tool-matrix", target: "proc-qual-1", type: "used-in", label: "矩阵图用于规划质量管理" },
  { source: "tool-matrix", target: "proc-qual-2", type: "used-in", label: "矩阵图用于管理质量" },

  // ===== 检查 =====
  { source: "tool-inspection", target: "proc-scope-5", type: "used-in", label: "检查用于确认范围" },
  { source: "tool-inspection", target: "proc-qual-3", type: "used-in", label: "检查用于控制质量" },
  { source: "tool-inspection", target: "proc-proc-3", type: "used-in", label: "检查用于控制采购" },

  // ===== 审计 =====
  { source: "tool-audit", target: "proc-qual-2", type: "used-in", label: "审计用于管理质量" },
  { source: "tool-audit", target: "proc-risk-7", type: "used-in", label: "审计用于监督风险" },
  { source: "tool-audit", target: "proc-proc-3", type: "used-in", label: "审计用于控制采购" },

  // ===== 测试/产品评估 =====
  { source: "tool-test", target: "proc-qual-3", type: "used-in", label: "测试/产品评估用于控制质量" },

  // ===== 引导 =====
  { source: "tool-facilitation", target: "proc-int-1", type: "used-in", label: "引导用于制定项目章程" },
  { source: "tool-facilitation", target: "proc-int-2", type: "used-in", label: "引导用于制定项目管理计划" },
  { source: "tool-facilitation", target: "proc-int-4", type: "used-in", label: "引导用于管理项目知识" },
  { source: "tool-facilitation", target: "proc-scope-2", type: "used-in", label: "引导用于收集需求" },
  { source: "tool-facilitation", target: "proc-scope-3", type: "used-in", label: "引导用于定义范围" },
  { source: "tool-facilitation", target: "proc-risk-2", type: "used-in", label: "引导用于识别风险" },
  { source: "tool-facilitation", target: "proc-risk-3", type: "used-in", label: "引导用于定性风险分析" },
  { source: "tool-facilitation", target: "proc-risk-4", type: "used-in", label: "引导用于定量风险分析" },
  { source: "tool-facilitation", target: "proc-risk-5", type: "used-in", label: "引导用于规划风险应对" },

  // ===== 分解 =====
  { source: "tool-decomposition", target: "proc-scope-4", type: "used-in", label: "分解用于创建WBS" },
  { source: "tool-decomposition", target: "proc-sched-2", type: "used-in", label: "分解用于定义活动" },

  // ===== 滚动式规划 =====
  { source: "tool-rolling-wave", target: "proc-sched-2", type: "used-in", label: "滚动式规划用于定义活动" },

  // ===== 原型法 =====
  { source: "tool-prototype", target: "proc-scope-2", type: "used-in", label: "原型法用于收集需求" },

  // ===== 系统交互图 =====
  { source: "tool-system-interaction", target: "proc-scope-2", type: "used-in", label: "系统交互图用于收集需求" },

  // ===== 名义小组 =====
  { source: "tool-nominal-group", target: "proc-scope-2", type: "used-in", label: "名义小组用于收集需求" },

  // ===== 观察/交谈 =====
  { source: "tool-observation", target: "proc-scope-2", type: "used-in", label: "观察/交谈用于收集需求" },
  { source: "tool-observation", target: "proc-comm-3", type: "used-in", label: "观察/交谈用于监督沟通" },
  { source: "tool-observation", target: "proc-stk-3", type: "used-in", label: "观察/交谈用于管理干系人参与" },

  // ===== 文件分析 =====
  { source: "tool-file-analysis", target: "proc-int-7", type: "used-in", label: "文件分析用于结束项目或阶段" },
  { source: "tool-file-analysis", target: "proc-scope-2", type: "used-in", label: "文件分析用于收集需求" },
  { source: "tool-file-analysis", target: "proc-risk-2", type: "used-in", label: "文件分析用于识别风险" },
  { source: "tool-file-analysis", target: "proc-stk-1", type: "used-in", label: "文件分析用于识别干系人" },

  // ===== 知识管理 =====
  { source: "tool-knowledge-mgmt", target: "proc-int-4", type: "used-in", label: "知识管理用于管理项目知识" },

  // ===== 信息管理 =====
  { source: "tool-info-mgmt", target: "proc-int-4", type: "used-in", label: "信息管理用于管理项目知识" },

  // ===== 假设条件和制约因素 =====
  { source: "tool-assumption-constraint", target: "proc-risk-2", type: "used-in", label: "假设条件和制约因素用于识别风险" },
  { source: "tool-assumption-constraint", target: "proc-stk-2", type: "used-in", label: "假设条件和制约因素用于规划干系人参与" },

  // ===== 干系人参与评估矩阵 (2规2监) =====
  { source: "tool-stakeholder-matrix", target: "proc-comm-1", type: "used-in", label: "干系人参与评估矩阵用于规划沟通管理" },
  { source: "tool-stakeholder-matrix", target: "proc-stk-2", type: "used-in", label: "干系人参与评估矩阵用于规划干系人参与" },
  { source: "tool-stakeholder-matrix", target: "proc-comm-3", type: "used-in", label: "干系人参与评估矩阵用于监督沟通" },
  { source: "tool-stakeholder-matrix", target: "proc-stk-4", type: "used-in", label: "干系人参与评估矩阵用于监督干系人参与" },

  // ===== 冲突管理 =====
  { source: "tool-conflict-mgmt", target: "proc-int-1", type: "used-in", label: "冲突管理用于制定项目章程" },
  { source: "tool-conflict-mgmt", target: "proc-int-2", type: "used-in", label: "冲突管理用于制定项目管理计划" },
  { source: "tool-conflict-mgmt", target: "proc-res-4", type: "used-in", label: "冲突管理用于建设团队" },
  { source: "tool-conflict-mgmt", target: "proc-res-5", type: "used-in", label: "冲突管理用于管理团队" },
  { source: "tool-conflict-mgmt", target: "proc-comm-2", type: "used-in", label: "冲突管理用于管理沟通" },
  { source: "tool-conflict-mgmt", target: "proc-stk-3", type: "used-in", label: "冲突管理用于管理干系人参与" },

  // ===== PDCA =====
  { source: "tool-pdca", target: "proc-qual-2", type: "used-in", label: "PDCA用于管理质量" },

  // ===== 六西格玛 =====
  { source: "tool-six-sigma", target: "proc-qual-2", type: "used-in", label: "六西格玛用于管理质量" },

  // ===== 问题解决 =====
  { source: "tool-problem-solving", target: "proc-qual-2", type: "used-in", label: "问题解决用于管理质量" },
  { source: "tool-problem-solving", target: "proc-res-6", type: "used-in", label: "问题解决用于控制资源" },

  // ===== 面向X的设计 =====
  { source: "tool-design-for-x", target: "proc-qual-2", type: "used-in", label: "面向X的设计用于管理质量" },

  // ===== 成本汇总 =====
  { source: "tool-cost-aggregation", target: "proc-cost-3", type: "used-in", label: "成本汇总用于制定预算" },

  // ===== 成本效益分析 =====
  { source: "tool-cost-benefit", target: "proc-int-5", type: "used-in", label: "成本效益分析用于监控项目工作" },
  { source: "tool-cost-benefit", target: "proc-int-6", type: "used-in", label: "成本效益分析用于实施整体变更控制" },
  { source: "tool-cost-benefit", target: "proc-qual-1", type: "used-in", label: "成本效益分析用于规划质量管理" },
  { source: "tool-cost-benefit", target: "proc-res-6", type: "used-in", label: "成本效益分析用于控制资源" },
  { source: "tool-cost-benefit", target: "proc-risk-5", type: "used-in", label: "成本效益分析用于规划风险应对" },

  // ===== 质量成本 =====
  { source: "tool-quality-cost", target: "proc-qual-1", type: "used-in", label: "质量成本用于规划质量管理" },
  { source: "tool-quality-cost", target: "proc-cost-2", type: "used-in", label: "质量成本用于估算成本" },

  // ===== 假设情景分析 =====
  { source: "tool-what-if", target: "proc-sched-5", type: "used-in", label: "假设情景分析用于制定进度计划" },
  { source: "tool-what-if", target: "proc-sched-6", type: "used-in", label: "假设情景分析用于控制进度" },

  // ===== 模拟 =====
  { source: "tool-simulation", target: "proc-sched-5", type: "used-in", label: "模拟用于制定进度计划" },
  { source: "tool-simulation", target: "proc-risk-4", type: "used-in", label: "模拟用于定量风险分析" },

  // ===== 敏捷发布规划 =====
  { source: "tool-agile-release", target: "proc-sched-5", type: "used-in", label: "敏捷发布规划用于制定进度计划" },

  // ===== 历史信息审核 =====
  { source: "tool-historical-info", target: "proc-cost-3", type: "used-in", label: "历史信息审核用于制定预算" },

  // ===== 资源限制平衡 =====
  { source: "tool-funding-limit", target: "proc-cost-3", type: "used-in", label: "资源限制平衡用于制定预算" },

  // ===== 绩效审查 =====
  { source: "tool-performance-review", target: "proc-qual-3", type: "used-in", label: "绩效审查用于控制质量" },
  { source: "tool-performance-review", target: "proc-res-6", type: "used-in", label: "绩效审查用于控制资源" },
  { source: "tool-performance-review", target: "proc-proc-3", type: "used-in", label: "绩效审查用于控制采购" },

  // ===== 进度网络分析 =====
  { source: "tool-sched-network-analysis", target: "proc-sched-5", type: "used-in", label: "进度网络分析用于制定进度计划" },

  // ===== 变更控制工具 =====
  { source: "tool-change-control", target: "proc-int-6", type: "used-in", label: "变更控制工具用于实施整体变更控制" },

  // ===== 回归分析 =====
  { source: "tool-regression-analysis", target: "proc-int-7", type: "used-in", label: "回归分析用于结束项目或阶段" },

  // ===== 完工尚需绩效指数 =====
  { source: "tool-tcp", target: "proc-cost-4", type: "used-in", label: "完工尚需绩效指数用于控制成本" },

  // ===== 融资 =====
  { source: "tool-financing", target: "proc-cost-3", type: "used-in", label: "融资用于制定预算" },

  // ===== 产品分析 =====
  { source: "tool-product-analysis", target: "proc-scope-3", type: "used-in", label: "产品分析用于定义范围" },

  // ===== 过程分析 =====
  { source: "tool-process-analysis", target: "proc-qual-2", type: "used-in", label: "过程分析用于管理质量" },

  // ===== 测试与检查的规划 =====
  { source: "tool-test-planning", target: "proc-qual-1", type: "used-in", label: "测试与检查的规划用于规划质量管理" },

  // ===== 逻辑数据模型 =====
  { source: "tool-logic-data-model", target: "proc-qual-1", type: "used-in", label: "逻辑数据模型用于规划质量管理" },

  // ===== 迭代燃尽图 =====
  { source: "tool-burn-down", target: "proc-sched-6", type: "used-in", label: "迭代燃尽图用于控制进度" },

  // ===== 决策 =====
  { source: "tool-decision", target: "proc-int-5", type: "used-in", label: "决策用于监控项目工作" },
  { source: "tool-decision", target: "proc-int-6", type: "used-in", label: "决策用于实施整体变更控制" },
  { source: "tool-decision", target: "proc-res-5", type: "used-in", label: "决策用于管理团队" },

  // ===== 统计抽样 =====
  { source: "tool-statistical-sampling", target: "proc-qual-3", type: "used-in", label: "统计抽样用于控制质量" },

  // ===== 沟通管理工具 =====
  { source: "tool-comm-need", target: "proc-comm-1", type: "used-in", label: "沟通需求分析用于规划沟通管理" },
  { source: "tool-comm-tech", target: "proc-comm-1", type: "used-in", label: "沟通技术用于规划沟通管理" },
  { source: "tool-comm-tech", target: "proc-comm-2", type: "used-in", label: "沟通技术用于管理沟通" },
  { source: "tool-comm-tech", target: "proc-res-4", type: "used-in", label: "沟通技术用于建设团队" },
  { source: "tool-comm-model", target: "proc-comm-1", type: "used-in", label: "沟通模型用于规划沟通管理" },
  { source: "tool-comm-method", target: "proc-comm-1", type: "used-in", label: "沟通方法用于规划沟通管理" },
  { source: "tool-comm-method", target: "proc-comm-2", type: "used-in", label: "沟通方法用于管理沟通" },
  { source: "tool-comm-style", target: "proc-comm-1", type: "used-in", label: "沟通风格评估用于规划沟通管理" },
  { source: "tool-comm-competence", target: "proc-comm-2", type: "used-in", label: "沟通胜任力用于管理沟通" },
  { source: "tool-feedback", target: "proc-comm-2", type: "used-in", label: "反馈用于管理沟通" },
  { source: "tool-feedback", target: "proc-stk-3", type: "used-in", label: "反馈用于管理干系人参与" },
  { source: "tool-feedback", target: "proc-stk-4", type: "used-in", label: "反馈用于监督干系人参与" },
  { source: "tool-nonverbal", target: "proc-comm-2", type: "used-in", label: "非语言用于管理沟通" },
  { source: "tool-presentation", target: "proc-comm-2", type: "used-in", label: "演示用于管理沟通" },
  { source: "tool-presentation", target: "proc-stk-4", type: "used-in", label: "演示用于监督干系人参与" },
  { source: "tool-project-report", target: "proc-comm-2", type: "used-in", label: "项目报告用于管理沟通" },
  { source: "tool-meeting-mgmt", target: "proc-int-1", type: "used-in", label: "会议管理用于制定项目章程" },
  { source: "tool-meeting-mgmt", target: "proc-int-2", type: "used-in", label: "会议管理用于制定项目管理计划" },
  { source: "tool-meeting-mgmt", target: "proc-comm-2", type: "used-in", label: "会议管理用于管理沟通" },

  // ===== 人际关系工具 =====
  { source: "tool-active-listen", target: "proc-int-4", type: "used-in", label: "积极倾听用于管理项目知识" },
  { source: "tool-active-listen", target: "proc-comm-2", type: "used-in", label: "积极倾听用于管理沟通" },
  { source: "tool-active-listen", target: "proc-stk-4", type: "used-in", label: "积极倾听用于监督干系人参与" },
  { source: "tool-networking", target: "proc-int-4", type: "used-in", label: "人际交往用于管理项目知识" },
  { source: "tool-networking", target: "proc-comm-2", type: "used-in", label: "人际交往用于管理沟通" },
  { source: "tool-political", target: "proc-int-4", type: "used-in", label: "政治意识用于管理项目知识" },
  { source: "tool-political", target: "proc-comm-1", type: "used-in", label: "政治意识用于规划沟通管理" },
  { source: "tool-political", target: "proc-comm-2", type: "used-in", label: "政治意识用于管理沟通" },
  { source: "tool-political", target: "proc-stk-3", type: "used-in", label: "政治意识用于管理干系人参与" },
  { source: "tool-political", target: "proc-stk-4", type: "used-in", label: "政治意识用于监督干系人参与" },
  { source: "tool-cultural", target: "proc-comm-1", type: "used-in", label: "文化意识用于规划沟通管理" },
  { source: "tool-cultural", target: "proc-comm-2", type: "used-in", label: "文化意识用于管理沟通" },
  { source: "tool-cultural", target: "proc-stk-3", type: "used-in", label: "文化意识用于管理干系人参与" },
  { source: "tool-cultural", target: "proc-stk-4", type: "used-in", label: "文化意识用于监督干系人参与" },
  { source: "tool-negotiation", target: "proc-res-3", type: "used-in", label: "谈判用于获取资源" },
  { source: "tool-negotiation", target: "proc-res-4", type: "used-in", label: "谈判用于建设团队" },
  { source: "tool-negotiation", target: "proc-res-6", type: "used-in", label: "谈判用于控制资源" },
  { source: "tool-negotiation", target: "proc-proc-2", type: "used-in", label: "谈判用于实施采购" },
  { source: "tool-negotiation", target: "proc-stk-3", type: "used-in", label: "谈判用于管理干系人参与" },
  { source: "tool-influence", target: "proc-res-4", type: "used-in", label: "影响力用于建设团队" },
  { source: "tool-influence", target: "proc-res-5", type: "used-in", label: "影响力用于管理团队" },
  { source: "tool-influence", target: "proc-res-6", type: "used-in", label: "影响力用于控制资源" },
  { source: "tool-influence", target: "proc-risk-6", type: "used-in", label: "影响力用于实施风险应对" },
  { source: "tool-leadership", target: "proc-int-4", type: "used-in", label: "领导力用于管理项目知识" },
  { source: "tool-leadership", target: "proc-res-5", type: "used-in", label: "领导力用于管理团队" },
  { source: "tool-leadership", target: "proc-stk-4", type: "used-in", label: "领导力用于监督干系人参与" },
  { source: "tool-motivation", target: "proc-res-4", type: "used-in", label: "激励用于建设团队" },
  { source: "tool-emotional-intel", target: "proc-res-5", type: "used-in", label: "情商用于管理团队" },

  // ===== 资源管理工具 =====
  { source: "tool-ram", target: "proc-res-1", type: "used-in", label: "责任分配矩阵用于规划资源管理" },
  { source: "tool-org-theory", target: "proc-res-1", type: "used-in", label: "组织理论用于规划资源管理" },
  { source: "tool-pre-assignment", target: "proc-res-3", type: "used-in", label: "预分派用于获取资源" },
  { source: "tool-virtual-team", target: "proc-res-3", type: "used-in", label: "虚拟团队用于获取资源" },
  { source: "tool-virtual-team", target: "proc-res-4", type: "used-in", label: "虚拟团队用于建设团队" },
  { source: "tool-colocation", target: "proc-res-4", type: "used-in", label: "集中办公用于建设团队" },
  { source: "tool-recognition", target: "proc-res-4", type: "used-in", label: "认可与奖励用于建设团队" },
  { source: "tool-training", target: "proc-res-4", type: "used-in", label: "培训用于建设团队" },
  { source: "tool-team-assess", target: "proc-res-4", type: "used-in", label: "个人和团队评估用于建设团队" },
  { source: "tool-team-building", target: "proc-res-4", type: "used-in", label: "团队建设用于建设团队" },

  // ===== 风险管理工具 =====
  { source: "tool-swot", target: "proc-risk-2", type: "used-in", label: "SWOT分析用于识别风险" },
  { source: "tool-prompt-list", target: "proc-risk-2", type: "used-in", label: "提示清单用于识别风险" },
  { source: "tool-risk-data-quality", target: "proc-risk-3", type: "used-in", label: "风险数据质量评估用于定性风险分析" },
  { source: "tool-risk-prob-impact", target: "proc-risk-3", type: "used-in", label: "风险概率和影响评估用于定性风险分析" },
  { source: "tool-risk-params", target: "proc-risk-3", type: "used-in", label: "其他风险参数评估用于定性风险分析" },
  { source: "tool-risk-classify", target: "proc-risk-3", type: "used-in", label: "风险分类用于定性风险分析" },
  { source: "tool-prob-impact-matrix", target: "proc-risk-3", type: "used-in", label: "概率和影响矩阵用于定性风险分析" },
  { source: "tool-hierarchy-diagram", target: "proc-risk-3", type: "used-in", label: "层级图用于定性风险分析" },
  { source: "tool-uncertainty-repr", target: "proc-risk-4", type: "used-in", label: "不确定性表现方式用于定量风险分析" },
  { source: "tool-sensitivity", target: "proc-risk-4", type: "used-in", label: "敏感性分析用于定量风险分析" },
  { source: "tool-decision-tree", target: "proc-risk-4", type: "used-in", label: "决策树分析用于定量风险分析" },
  { source: "tool-influence-diagram", target: "proc-risk-4", type: "used-in", label: "影响图用于定量风险分析" },
  { source: "tool-threat-response", target: "proc-risk-5", type: "used-in", label: "威胁应对策略用于规划风险应对" },
  { source: "tool-opportunity-response", target: "proc-risk-5", type: "used-in", label: "机会应对策略用于规划风险应对" },
  { source: "tool-contingency-response", target: "proc-risk-5", type: "used-in", label: "应急应对策略用于规划风险应对" },
  { source: "tool-overall-risk-response", target: "proc-risk-5", type: "used-in", label: "整体项目风险应对策略用于规划风险应对" },
  { source: "tool-tech-perf", target: "proc-risk-7", type: "used-in", label: "技术绩效分析用于监督风险" },

  // ===== 采购管理工具 =====
  { source: "tool-market-research", target: "proc-proc-1", type: "used-in", label: "市场调研用于规划采购管理" },
  { source: "tool-make-buy", target: "proc-proc-1", type: "used-in", label: "自制或外购分析用于规划采购管理" },
  { source: "tool-source-select", target: "proc-proc-1", type: "used-in", label: "供方选择分析用于规划采购管理" },
  { source: "tool-advertising", target: "proc-proc-2", type: "used-in", label: "广告用于实施采购" },
  { source: "tool-bidder-conf", target: "proc-proc-2", type: "used-in", label: "投标人会议用于实施采购" },
  { source: "tool-proposal-eval", target: "proc-proc-2", type: "used-in", label: "建议书评价用于实施采购" },
  { source: "tool-claim-mgmt", target: "proc-proc-3", type: "used-in", label: "索赔管理用于控制采购" },

  // ===== 干系人管理工具 =====
  { source: "tool-stakeholder-analysis", target: "proc-risk-1", type: "used-in", label: "干系人分析用于规划风险管理" },
  { source: "tool-stakeholder-analysis", target: "proc-stk-1", type: "used-in", label: "干系人分析用于识别干系人" },
  { source: "tool-stakeholder-analysis", target: "proc-stk-4", type: "used-in", label: "干系人分析用于监督干系人参与" },
  { source: "tool-stakeholder-mapping", target: "proc-stk-1", type: "used-in", label: "干系人映射分析用于识别干系人" },
  { source: "tool-prioritization", target: "proc-stk-2", type: "used-in", label: "优先级排序用于规划干系人参与" },

  // ============================================================
  // 6. flows-to edges (process → process sequence)
  // 过程之间的先后流转
  // ============================================================

  // 整合管理流程
  { source: "proc-int-1", target: "proc-int-2", type: "flows-to", label: "制定章程→制定计划" },
  { source: "proc-int-2", target: "proc-int-3", type: "flows-to", label: "制定计划→指导管理" },
  { source: "proc-int-3", target: "proc-int-4", type: "flows-to", label: "指导管理→管理知识" },
  { source: "proc-int-3", target: "proc-int-5", type: "flows-to", label: "指导管理→监控工作" },
  { source: "proc-int-5", target: "proc-int-6", type: "flows-to", label: "监控工作→变更控制" },
  { source: "proc-int-6", target: "proc-int-7", type: "flows-to", label: "变更控制→结束项目" },

  // 范围管理流程
  { source: "proc-scope-1", target: "proc-scope-2", type: "flows-to", label: "规划范围→收集需求" },
  { source: "proc-scope-2", target: "proc-scope-3", type: "flows-to", label: "收集需求→定义范围" },
  { source: "proc-scope-3", target: "proc-scope-4", type: "flows-to", label: "定义范围→创建WBS" },
  { source: "proc-scope-4", target: "proc-scope-5", type: "flows-to", label: "创建WBS→确认范围" },
  { source: "proc-scope-5", target: "proc-scope-6", type: "flows-to", label: "确认范围→控制范围" },

  // 进度管理流程
  { source: "proc-sched-1", target: "proc-sched-2", type: "flows-to", label: "规划进度→定义活动" },
  { source: "proc-sched-2", target: "proc-sched-3", type: "flows-to", label: "定义活动→排列顺序" },
  { source: "proc-sched-3", target: "proc-sched-4", type: "flows-to", label: "排列顺序→估算持续时间" },
  { source: "proc-sched-4", target: "proc-sched-5", type: "flows-to", label: "估算持续时间→制定进度计划" },
  { source: "proc-sched-5", target: "proc-sched-6", type: "flows-to", label: "制定进度计划→控制进度" },

  // 成本管理流程
  { source: "proc-cost-1", target: "proc-cost-2", type: "flows-to", label: "规划成本→估算成本" },
  { source: "proc-cost-2", target: "proc-cost-3", type: "flows-to", label: "估算成本→制定预算" },
  { source: "proc-cost-3", target: "proc-cost-4", type: "flows-to", label: "制定预算→控制成本" },

  // 质量管理流程
  { source: "proc-qual-1", target: "proc-qual-2", type: "flows-to", label: "规划质量→管理质量" },
  { source: "proc-qual-2", target: "proc-qual-3", type: "flows-to", label: "管理质量→控制质量" },

  // 资源管理流程
  { source: "proc-res-1", target: "proc-res-2", type: "flows-to", label: "规划资源→估算资源" },
  { source: "proc-res-2", target: "proc-res-3", type: "flows-to", label: "估算资源→获取资源" },
  { source: "proc-res-3", target: "proc-res-4", type: "flows-to", label: "获取资源→建设团队" },
  { source: "proc-res-4", target: "proc-res-5", type: "flows-to", label: "建设团队→管理团队" },

  // 风险管理流程
  { source: "proc-risk-1", target: "proc-risk-2", type: "flows-to", label: "规划风险→识别风险" },
  { source: "proc-risk-2", target: "proc-risk-3", type: "flows-to", label: "识别风险→定性分析" },
  { source: "proc-risk-3", target: "proc-risk-4", type: "flows-to", label: "定性分析→定量分析" },
  { source: "proc-risk-4", target: "proc-risk-5", type: "flows-to", label: "定量分析→规划应对" },
  { source: "proc-risk-5", target: "proc-risk-6", type: "flows-to", label: "规划应对→实施应对" },
  { source: "proc-risk-6", target: "proc-risk-7", type: "flows-to", label: "实施应对→监督风险" },

  // 采购管理流程
  { source: "proc-proc-1", target: "proc-proc-2", type: "flows-to", label: "规划采购→实施采购" },
  { source: "proc-proc-2", target: "proc-proc-3", type: "flows-to", label: "实施采购→控制采购" },

  // 干系人管理流程
  { source: "proc-stk-1", target: "proc-stk-2", type: "flows-to", label: "识别干系人→规划参与" },
  { source: "proc-stk-2", target: "proc-stk-3", type: "flows-to", label: "规划参与→管理参与" },
  { source: "proc-stk-3", target: "proc-stk-4", type: "flows-to", label: "管理参与→监督参与" },

  // 沟通管理流程
  { source: "proc-comm-1", target: "proc-comm-2", type: "flows-to", label: "规划沟通→管理沟通" },
  { source: "proc-comm-2", target: "proc-comm-3", type: "flows-to", label: "管理沟通→监督沟通" },

  // ============================================================
  // 7. related-to edges (cross-domain relationships)
  // 跨领域关联
  // ============================================================

  // 知识领域之间的关系
  { source: "ka-2", target: "ka-3", type: "related-to", label: "范围→进度: 范围影响进度" },
  { source: "ka-2", target: "ka-4", type: "related-to", label: "范围→成本: 范围影响成本" },
  { source: "ka-3", target: "ka-4", type: "related-to", label: "进度→成本: 铁三角" },
  { source: "ka-2", target: "ka-5", type: "related-to", label: "范围→质量: 范围影响质量标准" },
  { source: "ka-5", target: "ka-6", type: "related-to", label: "质量→资源: 质量需要资源投入" },
  { source: "ka-7", target: "ka-10", type: "related-to", label: "沟通→干系人: 沟通服务于干系人管理" },
  { source: "ka-8", target: "ka-3", type: "related-to", label: "风险→进度: 风险影响进度" },
  { source: "ka-8", target: "ka-4", type: "related-to", label: "风险→成本: 风险影响成本" },
  { source: "ka-8", target: "ka-5", type: "related-to", label: "风险→质量: 风险影响质量" },
  { source: "ka-9", target: "ka-6", type: "related-to", label: "采购→资源: 采购获取外部资源" },

  // 绩效域与知识领域的关系
  { source: "pd-2", target: "ka-6", type: "related-to", label: "团队绩效域→资源管理" },
  { source: "pd-4", target: "ka-3", type: "related-to", label: "规划绩效域→进度管理" },
  { source: "pd-4", target: "ka-4", type: "related-to", label: "规划绩效域→成本管理" },
  { source: "pd-5", target: "ka-5", type: "related-to", label: "工作绩效域→质量管理" },
  { source: "pd-6", target: "ka-2", type: "related-to", label: "交付绩效域→范围管理" },
  { source: "pd-7", target: "ka-4", type: "related-to", label: "度量绩效域→成本管理" },
  { source: "pd-8", target: "ka-8", type: "related-to", label: "不确定性绩效域→风险管理" },

  // 文档之间的流转关系
  { source: "doc-deliverable", target: "doc-verified-deliverable", type: "related-to", label: "可交付成果→核实的可交付成果" },
  { source: "doc-verified-deliverable", target: "doc-accepted-deliverable", type: "related-to", label: "核实的可交付成果→验收的可交付成果" }
];
