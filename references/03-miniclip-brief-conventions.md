# Miniclip / Masomo Brief 规范（硬性约束）

> 这些是反复在 Brief PDF 里出现的规则，做脚本前必须对表。

---

## ⏱ 时长规范

- **标准**：30 秒总时长 = **25 秒正片** + **5 秒 End Card**
- **长版**：60 秒 = 30 秒正片 ×2 + 5 秒 End Card（通常直接复制并加变体段）
- **短版**：部分平台需 15 秒（从 30s 裁剪重点段）

---

## 📐 尺寸规范（必须全部交付）

| 尺寸 | 用途 |
|------|------|
| 1920×1080 | 横屏（Google / YouTube） |
| 1080×1920 | 竖屏（TikTok / Reels / Shorts） |
| 1280×1920 | 2:3（部分程序化广告位） |
| 1536×1920 | 4:5（Meta Feed） |
| 1920×1920 | 1:1（方形） |

---

## 🎮 主角 & 画面规则

- **主角始终在屏幕左侧**（左右攻防固定）
- **End Card** 必须包含：Logo + 角色形象 + CTA 文案 + App Store + Google Play 图标
- **CTA 文案**：常用 "Play Now, It's Free!" / "Download Free!" / "Play the most INSANE ..."

---

## 🎬 素材来源

| 类型 | 来源 |
|------|------|
| **2D** | 官方录屏 + 官方 2D 素材包（角色、UI、特效） |
| **3D** | 全部自制（Miniclip 游戏本身是 2D，3D 版本需重建） |
| **AI Hook** | Seedance / Kling / Runway / Pika / Sora 生成 3–5s 片段 |
| **UGC** | 自拍 + 游戏录屏叠加 |
| **真人出镜** | 需工作室批准 talent |

---

## 📡 投放平台清单（默认全覆盖）

Google / Facebook / AppLovin / Unity / ironSource / Liftoff / TikTok / Snapchat / Mintegral / Moloco

### 平台特殊要求

| 平台 | 特殊点 |
|------|-------|
| TikTok | 0.5s Hook + 趋势音乐 + UGC 风 |
| Meta | 1.5s Hook + 30+ 素材轮换 |
| Google UAC | 每方向 5 横 + 5 竖 + 5 方 + 5 图 + 5 文案 |
| Mintegral | 3 秒内进试玩交互 |
| Snapchat | 疲劳最快，需高频换 Hook |

---

## 📋 Brief 交付包（Nate 的习惯组合）

### 第一次交付（调研阶段）
1. `[GAME] - UA素材调研报告.md` — Phase 1 产出
2. `UA广告创意-成功案例与方法论调研报告.md` — 可复用

### 脚本交付
3. `[GAME]-2D创意脚本-5条.md`
4. `[GAME]-AI Hook+Gameplay创意脚本-5条.md`
5. `[GAME]-Meme热梗&体育热点创意脚本-5条.md`（可选）
6. `[GAME]-3D运镜复刻×场地热点-创意方案.md`（可选）

### Pitch 交付
7. `Ideation/[GAME]-[MONTH]创意Brief-5条-主题语言切换版.html`
8. `Ideation/brief-theme-toggle.css`
9. `Ideation/brief-theme-toggle.js`

### 参考图
10. `02_Assets/` 下分类：
    - `ref-hook/` — Hook 参考图
    - `ref-gameplay/` — Gameplay 录屏截图
    - `ref-location/` — 场地参考
    - `ref-meme/` — Meme 模板

---

## 🗓 月度节奏（观察到的 Masomo 规律）

- 每月 1 次新 Brief（月初下发）
- 每月 5 条新创意起步
- 每周至少 1 条变体（应对疲劳）
- 季度大 campaign（如 4 月 Grand Cup 对应世界杯）

---

*根据每次 Brief 实际内容，需要反向更新此文档。*
