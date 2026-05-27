---
name: miniclip-ua-playbook
description: Miniclip / 休闲竞技手游 UA 素材创作方法论。当用户开始一个新的 Miniclip（或类似休闲手游）UA 项目时，从「游戏调研 → 受众画像 → UA 现状分析 → 脚本创作 → HTML Brief 展示」全流程驱动创作。触发场景：用户提到某款 Miniclip 游戏名、要做 UA brief、要写 30s 广告脚本、要制作 pitch 用的 HTML 展示页、或说"我要开始做一个新游戏的 UA"。
agent_created: true
---

# Miniclip UA 素材 Playbook

> 这是 Nate 从 Head Ball 2 项目沉淀的「从零开始做一个 Miniclip 游戏 UA 项目」的完整方法论。
> 新项目只需要告诉我游戏名，我就按这份 playbook 一步步推进。

---

## 🎯 触发时机

用户说出类似下面的话，立刻启动本 skill：
- "我要开始做一个新的 Miniclip 游戏的 UA，游戏是 XXX"
- "帮我做 XXX 这个游戏的 UA brief"
- "给 XXX 写 30 秒广告脚本"
- "我要做 pitch 展示页，游戏是 XXX"
- 任何 Miniclip / Masomo / Voodoo / Homa / 类似休闲手游 UA 制作请求

---

## 📋 标准工作流（6 阶段）

### Phase 0 · 需求收集 & 参考文件导入（必做首步）

> 目的：在动手调研之前，先把用户手里已有的参考资料收齐。过往 brief、成功素材、客户需求文档等都是最直接的方向指引，比外部调研更准。

**执行步骤**：

1. **建立参考文件夹**：在项目根目录下创建 `00_References/` 文件夹（如已存在则跳过）
   ```
   00_References/
   ├── client_briefs/    ← 客户/工作室下发的 brief PDF
   ├── past_creatives/   ← 过往成功素材的截图 / 链接 / 脚本
   └── other/            ← 其他参考（竞品广告截图 / moodboard 等）
   ```

2. **询问用户是否有参考资料**（必问，不能跳过）：
   ```
   在正式开始之前，想先确认：
   
   📂 你手里有没有过往的参考资料？比如：
   - 客户/工作室之前下发的 Brief PDF？
   - 过往做过的成功素材（视频 / 脚本 / 截图）？
   - 竞品广告的参考（链接 / 截图）？
   - 其他你觉得有用的参考文档？
   
   如果有的话，请放到项目里的 `00_References/` 文件夹下。
   我会先读完这些参考，理解客户的风格偏好和过往方向，再出脚本。
   
   如果暂时没有，我们直接进入调研阶段。
   ```

3. **等待用户放入文件 → 读取并理解**：
   - 用户确认放好后，**逐个读取** `00_References/` 下的所有文件（PDF / MD / 图片）
   - 提炼出以下要点并记录到 MEMORY：
     - 客户偏好的创意方向（哪些在跑 / 哪些效果好）
     - 交付规格的特殊要求
     - 需要避开的方向（已经做过的 / 客户否决的）
     - 视觉风格偏好
     - 角色/IP 使用规则

4. **产出"参考文件理解摘要"**（口头或简短文字）：
   - 告诉用户"我从你的参考里读到了这些关键信息：[列点]"
   - 确认理解是否正确，**确认后再进入 Phase 1**

**关键规则**：
- ⚠️ 这一步**不能跳过**。即使用户说"没有参考"，也要明确确认一次
- ⚠️ 如果用户有参考但还没放进来，**等用户放好再继续**，不要抢跑
- ⚠️ Phase 3 出脚本之前，必须再回顾一次参考文件的要点，确保创意方向不偏

---

### Phase 1 · 游戏调研（必做，写成 `[GAME] - UA素材调研报告.md`）

> 目的：在写任何脚本之前，先把游戏吃透，这样 Hook 的方向才有抓手。

**必须产出的 8 个模块**：

1. **游戏概况** —— 开发商 / 收购关系 / 类型 / 平台 / 上线时间 / 累计下载 / 月下载 / 月收入 / 评分 / 大小 / 分级
2. **核心玩法** —— 操作逻辑 / PvP 或 PvE / 养成系统 / 社交系统 / 进阶系统
3. **核心卖点 (USP)** —— 用一句话列 3–5 条，每条都要能成为 Hook 的抓手
4. **竞品定位** —— 找 3–4 个相似游戏，列「相似点 / 差异点」
5. **目标受众画像** —— 年龄 / 性别 / 偏好 / 平台习惯 / 动机（技术精通 / 竞争心理 / 社交认同 / 碎片娱乐）
6. **现有 UA 素材分析** —— 去 TikTok Creative Centre、Meta Ad Library、Sensor Tower、AppBrain 扒对手和自己的现有广告，看什么在跑、什么在疲劳
7. **工作室 Brief 需求总结** —— 读近几个月的 Brief PDF（Ideation/ 目录），列月度方向、必须元素、投放平台、交付规格
8. **创意策略建议** —— 综合前 7 条，给出 3–5 个高潜力方向（排序 🥇🥈🥉）

**数据信源**：
- 下载量 / 收入：Sensor Tower、AppBrain、data.ai
- 广告现状：TikTok Creative Centre、Meta Ad Library、AppGrowing、SocialPeta
- 玩法细节：Google Play / App Store 官方页面、官方 Reddit、YouTube "Gameplay" 录屏

**参考模板**：`references/01-game-research-template.md`

---

### Phase 2 · UA 方法论对齐（可复用，只需更新数据）

> 目的：每次项目都要用同一套方法论框架，保证脚本不是凭感觉写的。

**核心方法论清单（8 套）**：

| # | 方法论 | 一句话要点 | 用在哪 |
|---|--------|----------|-------|
| 1 | **3C 原则** | Context（平台原生）/ Clarity（单一卖点）/ Curiosity（开放循环） | 判断每个创意元素是否合格 |
| 2 | **4 层 Hook 系统** | 视觉 + 文字 + 语言 + 音频同步，3 层以上留存 ×2.8 | 前 0.5–3 秒的结构 |
| 3 | **情感五段式** | Hook → Problem → Solution → Proof → CTA | 30 秒脚本的骨架 |
| 4 | **注意力四象限** | 自下而上 → 情绪性 → 认知性 → 自上而下 | 前 3 秒的激活顺序 |
| 5 | **七大广告类型** | 试玩 / 激励 / 叙事 / 悬念 / 社交证明 / 挑战 / 个性化 | 选创意大方向 |
| 6 | **测试优先级金字塔** | Tier 1 Hook（40–80%）> Tier 2 CTA / 脚本（15–30%）> Tier 3 配色（5–15%） | 决定做哪些变体 |
| 7 | **疲劳管理** | Tier 1 换 Hook / Tier 2 换脚本 / Tier 3 全新概念 | 素材上线后的迭代 |
| 8 | **Fail/Upgrade/Win** | 失败→升级→赢回 的经典手游循环 | 适合休闲竞技类的默认骨架 |

**关键基准数据（写脚本时挂在脑子里）**：
- TikTok 决策窗口 **0.5s**，Meta **0.8–1.2s**，YouTube **5s**
- 3 层以上 Hook 比单层 Hook 的 3 秒留存 **×2.8**
- 跳过"痛点激化"转化率下降 **45–65%**
- 游戏实录 vs 风格化素材转化率 **+80–110%**
- 单一卖点 vs 多卖点 **+60–120%**
- 对话式旁白 vs 专业播音员 **+90–130%**

**参考文档**：`references/02-ua-methodology-cheatsheet.md`

---

### Phase 3 · 脚本创作（5 类脚本模板，每类 5 条）

> Nate 的习惯：每次 brief 产出 **5 条脚本 × 可达 5 类风格**，覆盖不同风险/回报比。

**⚠️ 出脚本前的必做检查**：
- 回顾 `00_References/` 中的客户 brief 和过往素材
- 确认不要和过往已做过的创意重复
- 确认方向符合客户在 brief 中明确要求的风格/元素
- 如果参考文件中有"效果好的成功案例"，优先在此基础上做变体/迭代

**五类风格矩阵**：

| 类型 | 制作成本 | 风险 | 上限 | 什么时候用 |
|------|---------|------|------|-----------|
| **A. 纯 2D 实录** | 低 | 低 | 稳 | 基本盘，每个 brief 必出 |
| **B. AI Hook + Gameplay** | 中 | 中 | 高 | 制作效率极高，Hook 只 3–5s，剩下复用录屏 |
| **C. Meme 热梗 / 体育热点融合** | 中 | 高 | 爆 | 追当季热点，让广告"不像广告" |
| **D. 3D 运镜复刻 × 场地热点** | 高 | 中 | 高 | 电影级转播感，蹭世界杯/奇观场地 |
| **E. 叙事 / UGC 真人** | 中 | 中 | 高 | 社交证明 + 情感连接 |

**每条脚本必须包含的字段**：
- 创意名称（中英双语）
- 创意方向（如"好奇心驱动 + 超能力展示"）
- 核心卖点（对应游戏 USP 的哪一条）
- 方法论依据（3C / 4 层 Hook / 五段式 / Fail-Upgrade-Win 等）
- 分镜表格（时间 / 画面 / 文字叠加 / 音效）
- 2–3 条变体建议（V2 / V3）

**30 秒标准结构**：
```
25 秒正片 + 5 秒 End Card
---
0–3s   🔴 Hook（模式中断 + 4 层同步）
3–8s   Problem（痛点激化，不能跳过！）
8–12s  Solution（游戏作为答案）
12–20s Proof（游戏实录为主，不要风格化）
20–25s 过渡文案 + 庆祝
25–30s 🏁 End Card（Logo + CTA + 商店按钮）
```

**硬性规则（来自 Masomo/Miniclip brief 常见要求）**：
- 主角始终在屏幕左侧
- 60s 版 = 30s 正片 ×2 + End Card
- 必出尺寸：1920×1080 / 1080×1920 / 1280×1920 / 1536×1920 / 1920×1920
- 投放平台默认：Google / Facebook / AppLovin / Unity / ironSource / Liftoff / TikTok / Snapchat / Mintegral / Moloco
- 素材来源：2D 用官方录屏，3D 需自制

**脚本模板**：`templates/script-2d.md` / `script-ai-hook.md` / `script-meme.md` / `script-3d.md` / `script-ugc.md`

---

### Phase 4 · HTML Brief 展示页（Nate 的招牌打法）

> 目的：给团队和客户看的 pitch 版本，要能在浏览器里直接改字、切语言、切主题、上传参考图。

**固定规格**：
- **单 HTML 文件**（带外部 CSS/JS 也可，但必须能原地打开）
- **顶部工具栏**：月份切换 / 中文 EN 切换 / 浅色深色切换 / 编辑文本 / 上传图片 / 打印 PDF
- **每条创意一页**，共 5 页（或按 brief 要求）
- **每页四模块**（见下）
- **印刷级品质**：FK Display 衬线 + FK Grotesk 风格、米白纸感浅色、深色带背景噪点

**每页四模块结构**：
1. **页头**：页码 `CONCEPT 01 / 05`、标题（中英）、副标题（一句话说清这条创意）、右上角 3–4 个 tag
2. **参考画面**：图片占位（可上传），底下加 label + hint
3. **创意核心**：2 段文字，说清为什么这个 Hook 成立 + 这条能和其他条区分的点
4. **分镜流程**：用 emoji 前缀，不用数字编号。标准是 🔴 Hook / 🔀 转场 / 🎮 Gameplay / 🏁 End Card
5. **制作要点**：3 段，每段讲一个技术 or 执行细节
6. **底部 key-points**：3 个圆角标签，用"结构 / Hook 核心 / 格式"这类横向 key-value 展示
7. **note**：一句话作者批注，左边带竖线

**Nate 已确认的视觉偏好（必须遵守）**：
- 不用数字编号或时间码，用 emoji（🔴🔀🎮🏁）
- 语言切换 ≠ 双语同显（同页面只出一种语言，通过 `body[data-lang]` 切）
- 主题切换保留「浅色米白纸感」和「深色沉浸」两套
- 分镜段放在「创意核心」右边，形成左右对照

**参考模板**：`templates/brief.html` + `templates/brief.css` + `templates/brief.js`

---

### Phase 5 · 工作记忆 & 交付

项目进行中持续更新 `MEMORY.md`（项目长期记忆）：
- 已产出文件清单
- Nate 选定的创意（哪几条被 pick）
- 场地/道具/角色调研结论
- 创意偏好的更新（比如新发现 Nate 喜欢某种 meme）
- Phase 0 参考文件的关键要点摘要

项目标准目录结构：
```
[PROJECT]/
├── 00_References/           ← Phase 0 用户放入的参考文件
│   ├── client_briefs/       ← 客户 brief PDF
│   ├── past_creatives/      ← 过往成功素材
│   └── other/               ← 其他参考
├── 01_Research/             ← Phase 1 调研报告
├── 02_Scripts/              ← Phase 3 脚本
├── 03_Briefs/               ← Phase 4 HTML Brief
│   ├── Client_Briefs/       ← 客户原始 brief 存档
│   └── Our_Briefs/          ← 我们产出的 brief
├── 04_Assets/               ← 参考图 / 录屏
├── 05_Data/                 ← 投放数据
└── 99_Misc/                 ← 其他
```

交付时：
- 所有 md 脚本放 `02_Scripts/`
- HTML brief 放 `03_Briefs/Our_Briefs/`
- 参考图放 `04_Assets/`
- 最后用 `deliver_attachments` 把所有关键文件传给用户

---

## 🚀 新项目快速启动模板

用户说"我要做 [游戏名] 的 UA"时，立刻这样回应：

```
好，[游戏名] UA 项目启动。按 Miniclip UA Playbook 走。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Phase 0 · 先收齐参考资料

📂 你手里有没有过往的参考资料？比如：
- 客户/工作室之前下发的 Brief PDF？
- 过往做过的成功素材（视频 / 脚本 / 截图）？
- 竞品广告参考（链接 / 截图）？
- 其他觉得有用的参考文档？

如果有的话，请放到项目里的 `00_References/` 文件夹：
  00_References/
  ├── client_briefs/    ← 客户 brief PDF
  ├── past_creatives/   ← 过往成功素材
  └── other/            ← 其他参考

我会先读完这些参考，理解客户风格和过往方向，再出东西。
如果暂时没有，告诉我一声我们直接进调研。

━━━━━━━━━━━━━━━━━━━━━━━━━━━━

同时确认 3 件事：
1. 这次 brief 的月份和主题方向（如果有）？
2. 有没有官方 gameplay 录屏 / 参考素材包？
3. 要不要我也同步产出 HTML pitch 版本？

确认完 + 参考文件就绪后，我进入 Phase 1 调研。
```

**流程顺序**：Phase 0（参考收集 + 理解）→ Phase 1（调研）→ Phase 2（方法论）→ Phase 3（脚本，出脚本前再回顾参考）→ Phase 4（HTML Brief）→ Phase 5（交付）

**每个 Phase 完成后问用户要不要继续**（用户习惯分阶段 review）。

---

## 🧰 参考资料索引

- `references/01-game-research-template.md` — 游戏调研报告模板
- `references/02-ua-methodology-cheatsheet.md` — UA 方法论速查
- `references/03-miniclip-brief-conventions.md` — Miniclip/Masomo brief 规范
- `templates/script-2d.md` — 2D 实录脚本模板
- `templates/script-ai-hook.md` — AI Hook + Gameplay 脚本模板
- `templates/script-meme.md` — Meme 热梗融合脚本模板
- `templates/script-3d.md` — 3D 运镜复刻脚本模板
- `templates/brief.html` — HTML Brief 展示页模板
- `templates/brief.css` — 配套样式
- `templates/brief.js` — 配套交互（切换 / 编辑 / 上传）

---

## 💡 Nate 偏好（写脚本和 brief 时牢记）

- 喜欢 **AI Hook + Gameplay** 的高效组合模式
- 喜欢 **meme 热梗 + 体育热点** 的差异化融合
- 偏好"**不像广告的广告**"风格
- 对 **TikTok 原生感**内容感兴趣
- Brief 格式偏好：**可直接在浏览器改字/上传图**的 HTML
- Brief UI：**浅色 / 深色 + 中文 / English**切换（不是双语同显）
- 分镜用 **emoji 前缀**（🔴🔀🎮🏁），不用数字或时间码

---

*本 skill 从 Head Ball 2 项目（2026.4）沉淀，将持续根据新项目经验更新。*
