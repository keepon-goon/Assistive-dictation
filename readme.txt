项目名称：基于作答过程感知、错因诊断与知识点迁移的儿童无屏自适应陪练终端设计

目录结构：
- frontend：Vue 前端工程（Vite）
- backend：后端目录（当前为空，由后端同学维护）

前端技术栈：
- Vue 3
- Vite

协作约定：
- 前端同学主要在 frontend 目录开发。
- 后端同学主要在 backend 目录开发。
- 根目录用于放置项目说明、协作文档和仓库配置。


协作约定

本项目采用 `main + dev + feature` 的分支协作方式。

分支说明

- `main`：稳定分支，仅保存阶段性可运行版本，不直接用于日常开发。
- `dev`：开发分支，所有功能完成后先合并到该分支。
- `feature/*`：功能分支，用于具体功能开发，例如：
  - `feature/frontend-word-page`
  - `feature/backend-practice-api`
  - `feature/docs-update`

开发流程

  开发前先同步最新dev分支
  开发具体功能使用git checkout -b feature/功能名称
  完成后Pull Request 申请向dev分支提交
