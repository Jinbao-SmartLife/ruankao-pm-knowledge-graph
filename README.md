# 软考知识图谱

软考（信息系统项目管理师）交互式知识图谱，涵盖十大管理 ITTO、八大绩效域、论文真题、记忆口诀，辅助备考记忆与复习。

## 页面一览

### 主页面 (`index.html`)

三个视图切换，右侧详情面板联动：

| 视图 | 说明 |
|------|------|
| **矩阵视图** | 10 大知识领域 × 5 大过程组完整矩阵，49 个过程，考频热力标识 |
| **绩效域视图** | PMBOK 7th 八大绩效域详细卡片，含口诀与关联过程 |
| **论文真题视图** | 2015-2025 论文真题时间线，含难度评级与知识点标签 |

右侧详情面板 4 个标签页：

- **概览**：类型、定义、要点、关联过程
- **ITTO**：输入/工具/输出芯片，点击可跳转
- **考情**：选择/案例/论文出题频次柱状图、热度标识
- **口诀**：相关记忆口诀及展开说明

### ITTO 总览 (`itto.html`)

四象限布局：

- **左上**：紧凑型 PMBOK 矩阵，点击选择过程
- **左下**：所选过程的输入/工具/输出三栏展示 + 论文写作素材
- **右上**：全部文档按 13 类分组（项目章程、PM 计划、基准等），可折叠
- **右下**：全部工具按 11 类分组（专家判断、数据收集、数据分析等），可折叠

跨面板联动高亮：选择过程时，右侧自动标识相关文档/工具的角色。

### 绩效域记忆 (`performance.html`)

八大绩效域专项记忆页面，辅助理解与背诵。

### 关联记忆 (`memory.html`)

知识点关联记忆页面，通过关系图谱强化记忆。

## 数据内容

| 数据文件 | 全局变量 | 内容 |
|----------|----------|------|
| `nodes.js` | `NODES_DATA` | ~420 个节点（知识领域、绩效域、过程组、过程、文档、工具） |
| `edges.js` | `EDGES_DATA` | ~300+ 条关系（consumed-by / produces / used-in） |
| `exam-frequency.js` | `EXAM_FREQ_DATA` | 各知识领域和绩效域的考频数据 |
| `mnemonics.js` | `MNEMONICS_DATA` | 36 条记忆口诀 |
| `essay-topics.js` | `ESSAY_TOPICS_DATA` | 19 道论文真题（2015-2025），含要点和难度评级 |
| `glossary.js` | `GLOSSARY_DATA` | 68 个项目管理术语释义 |
| `itto-details.js` | `ITTO_DETAILS_DATA` | 49 个过程的论文写作模板 |

## 目录结构

```
├── index.html              # 主页面（矩阵/绩效域/论文真题）
├── itto.html               # ITTO 总览（四象限布局）
├── performance.html         # 绩效域记忆页
├── memory.html              # 关联记忆页
├── css/
│   ├── main.css            # 全局样式、暗色主题变量、布局
│   ├── matrix.css          # 矩阵表格、绩效域卡片、论文时间线
│   ├── panel.css           # 详情面板：标签页、芯片、口诀卡片、考频柱状图
│   └── itto.css            # ITTO 页面：四象限网格、折叠分组、高亮状态
├── js/
│   ├── app.js              # 主应用初始化、视图切换、节点选择
│   ├── data.js             # 数据加载与索引构建
│   ├── matrix.js           # 矩阵渲染、绩效域网格、论文时间线
│   ├── panel.js            # 详情面板渲染
│   ├── search.js           # 全文搜索（防抖、键盘导航、高亮）
│   └── itto.js             # ITTO 页面逻辑（分类、折叠、联动高亮）
├── data/
│   ├── nodes.js            # 节点数据
│   ├── edges.js            # 边数据
│   ├── exam-frequency.js   # 考频数据
│   ├── mnemonics.js        # 口诀数据
│   ├── essay-topics.js     # 论文真题数据
│   ├── glossary.js         # 术语数据
│   └── itto-details.js     # 论文写作模板数据
├── lib/
│   └── d3.v7.min.js        # D3.js v7（已内嵌）
├── docker-compose.yml      # Docker 部署配置
├── nginx.conf              # Nginx 配置（静态资源缓存）
├── 十大管理ITTO知识图谱.md   # 原始 Markdown 版 ITTO 全表
└── 需求内容.md              # 需求设计文档
```

## 使用方式

### 直接打开

浏览器打开 `index.html` 即可，无需安装任何依赖。

### 本地服务器

```bash
python3 -m http.server 8080
# 访问 http://localhost:8080
```

### Docker 部署

```bash
docker-compose up -d
# 访问 http://localhost:18081
```

## 技术栈

- 纯静态页面，无需构建工具或包管理器
- 原生 HTML5 + CSS3 + JavaScript（ES5 模块模式）
- D3.js v7（内嵌，无外部依赖）
- 暗色主题（GitHub Dark 风格）
- 响应式布局（900px / 600px 断点）
