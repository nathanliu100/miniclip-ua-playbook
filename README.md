# 🎮 Miniclip UA Playbook

> **Miniclip / 休闲竞技手游 UA 素材创作完整方法论**
> 从「游戏调研 → 方法论对齐 → 脚本创作 → HTML Brief 展示」全流程驱动。

## 这是什么？

这是一个 [WorkBuddy](https://www.codebuddy.cn) Skill，从 Head Ball 2 项目中沉淀出来的完整 UA 素材创作方法论。包含：

- 📊 **游戏调研报告模板** — 8 模块标准化调研
- 🧠 **8 套核心方法论速查** — 3C 原则 / 4 层 Hook / 情感五段式 / 注意力四象限 / 七大广告类型 / 测试金字塔 / 疲劳管理 / Fail-Upgrade-Win
- ✍️ **5 类脚本模板** — 2D 实录 / AI Hook + Gameplay / Meme 热梗 / 3D 运镜 / UGC 叙事
- 🎨 **HTML Brief 展示页模板** — 浅色/深色切换、中/英切换、在线编辑、上传参考图
- 📋 **Miniclip/Masomo Brief 规范** — 时长/尺寸/投放平台/硬性约束

## 如何使用

### 方式 1：WorkBuddy 中导入 Skill

将本仓库 clone 到 `~/.workbuddy/skills/miniclip-ua-playbook/`：

```bash
git clone https://github.com/nathanliu100/miniclip-ua-playbook.git ~/.workbuddy/skills/miniclip-ua-playbook
```

然后在 WorkBuddy 中说："我要做 [游戏名] 的 UA"，Skill 会自动触发。

### 方式 2：直接阅读方法论

- [`SKILL.md`](./SKILL.md) — 完整 5 阶段工作流
- [`references/02-ua-methodology-cheatsheet.md`](./references/02-ua-methodology-cheatsheet.md) — 方法论速查卡
- [`references/01-game-research-template.md`](./references/01-game-research-template.md) — 调研报告模板
- [`references/03-miniclip-brief-conventions.md`](./references/03-miniclip-brief-conventions.md) — Brief 交付规范

## 目录结构

```
miniclip-ua-playbook/
├── SKILL.md                              # 主入口：5 阶段工作流
├── README.md                             # 本文件
├── references/
│   ├── 01-game-research-template.md      # 游戏调研报告模板
│   ├── 02-ua-methodology-cheatsheet.md   # 8 套方法论速查
│   └── 03-miniclip-brief-conventions.md  # Miniclip/Masomo 规范
└── templates/
    ├── script-2d.md                      # 2D 实录脚本模板
    ├── script-ai-hook.md                 # AI Hook + Gameplay 脚本模板
    ├── script-meme.md                    # Meme 热梗融合脚本模板
    ├── script-3d.md                      # 3D 运镜复刻脚本模板
    ├── script-ugc.md                     # UGC/叙事型脚本模板
    ├── brief.html                        # HTML Pitch 模板
    ├── brief.css                         # 配套样式
    └── brief.js                          # 切换/编辑/上传交互
```

## 核心方法论一览

| # | 方法论 | 要点 |
|---|--------|------|
| 1 | **3C 原则** | Context / Clarity / Curiosity |
| 2 | **4 层 Hook** | 视觉+文字+语言+音频，≥3 层留存 ×2.8 |
| 3 | **情感五段式** | Hook → Problem → Solution → Proof → CTA |
| 4 | **注意力四象限** | Bottom-up → Emotional → Cognitive → Top-down |
| 5 | **七大广告类型** | 试玩/激励/叙事/悬念/社交证明/挑战/个性化 |
| 6 | **测试金字塔** | Hook(40-80%) > CTA(15-30%) > 配色(5-15%) |
| 7 | **疲劳管理** | 换Hook/换脚本/全新概念 三级刷新 |
| 8 | **Fail/Upgrade/Win** | 失败→升级→赢回 经典循环 |

## 30 秒标准结构

```
0–3s   🔴 Hook（模式中断 + 4 层同步）
3–8s   Problem（痛点激化）
8–12s  Solution（游戏作为答案）
12–20s Proof（游戏实录为主）
20–25s 过渡 + 庆祝
25–30s 🏁 End Card（Logo + CTA + 商店按钮）
```

## 致谢

方法论来源：RocketShip HQ / AdQuantum / Segwise / Gamelight / PlayableMaker / Udonis / SocialPeta / FoxData / Press For Play

---

*Made with ❤️ by Nate @ IEG Creative Team, powered by WorkBuddy*
