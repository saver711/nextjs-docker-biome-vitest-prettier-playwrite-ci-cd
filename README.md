# 🚀 Next.js + Docker + CI/CD + AWS EC2 Production Guide  

This repository serves as a **comprehensive guide** for setting up a modern frontend project — from **local development** to **production deployment** on AWS EC2 using Docker and GitHub Actions.  

It’s tailored for **senior frontend developers** who want a **clean, structured, and scalable setup** with best practices baked in.

Full Documentation 👇[![N](https://img.shields.io/badge/notion-000?style=for-the-badge&logo=notion&logoColor=white)](https://www.notion.so/ahassan711/Perfect-Nextjs-app-with-tools-including-CI-CD-24d6891c5ba7808e9217e2834d0eba11)

---

## 🔑 Key Features  

### 🛠 Development Setup  
- **Next.js 15** with React 19  
- **TypeScript** for type safety  
- **TailwindCSS 4** for styling  
- **Biome** (modern linter & formatter) replacing ESLint + Prettier  
- **Vitest** + **Testing Library** for fast unit testing  
- **Playwright** for end-to-end testing  
- **Husky + Lint-Staged** for pre-commit hooks & clean git history  
- **Commitlint** for conventional commits  

### ⚙️ CI/CD with GitHub Actions  
- ✅ Linting (Biome)  
- ✅ Branch naming enforcement  
- ✅ Commit message validation (Conventional Commits)  
- ✅ Type-checking (`tsc`)  
- ✅ Unit tests (Vitest + coverage)  
- ✅ E2E tests (Playwright)  
- ✅ Automated build & deployment  

### 🐳 Docker & Deployment  
- **Multi-stage Dockerfile** (builder, runner)  
- **Nginx** as reverse proxy (optimized for Next.js)  
- **docker-compose** for local & production setup  
- **Automated Docker builds & push to Docker Hub**  
- **Self-hosted GitHub runner on AWS EC2** for deployment  

---

## 🚦 Getting Started  
Full Documentation 👇[![N](https://img.shields.io/badge/notion-000?style=for-the-badge&logo=notion&logoColor=white)](https://www.notion.so/ahassan711/Perfect-Nextjs-app-with-tools-including-CI-CD-24d6891c5ba7808e9217e2834d0eba11)

### 1️⃣ Install dependencies  
```sh
pnpm install
```

### 2️⃣ Run dev server  
```sh
pnpm dev
```

### 3️⃣ Run tests  
```sh
pnpm test
pnpm playwright test
```

### 4️⃣ Lint & format  
```sh
pnpm lint
```

---

## 🚀 Deployment  
Full Documentation 👇[![N](https://img.shields.io/badge/notion-000?style=for-the-badge&logo=notion&logoColor=white)](https://www.notion.so/ahassan711/Perfect-Nextjs-app-with-tools-including-CI-CD-24d6891c5ba7808e9217e2834d0eba11)

1. **Build & push Docker image** (automated via GitHub Actions):  
   ```sh
   docker build --target runner -t <your-dockerhub-user>/nextjs-app:latest .
   docker push <your-dockerhub-user>/nextjs-app:latest
   ```

2. **Deploy on EC2 (self-hosted runner)**:  
   ```sh
   docker-compose -f docker-compose.prod.yml pull
   docker-compose -f docker-compose.prod.yml up -d
   ```

---

## 🌟 Why This Repo is Valuable  

This repo is not just a boilerplate — it’s a **battle-tested blueprint**:  

| 🔹 Area              | ✅ Best Practice Applied |
|----------------------|--------------------------|
| Code Quality         | Biome, TypeScript, Pre-commit hooks |
| Git Workflow         | Branch naming, Conventional commits |
| Testing              | Vitest (unit), Playwright (E2E) |
| CI/CD                | Full pipeline (lint → build → test → deploy) |
| Deployment           | Docker + Nginx + AWS EC2 |
| Scalability          | Modular setup, ready for team collaboration |

> 📘 Use this as a **learning resource** or as a **starter kit** for production-grade frontend projects.  