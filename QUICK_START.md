# Quick Start Guide

## Get Your Site Running in 3 Steps

### 1. Preview Locally

```bash
cd /home/ben/projects/3BIO-Bioinfo
hugo server
```

Open your browser to: http://localhost:1313/bioinfo/

### 2. Make Changes

Edit these files to update your site:

- **Team members:** Edit `data/team.yaml`
- **Publications:** Edit `data/publications.yaml`
- **Software:** Edit `data/software.yaml`
- **Content pages:** Edit files in `content/` folder

### 3. Build for Production

```bash
hugo
```

Upload the `public/` folder to your web server.

---

## Most Common Tasks

### Update Team Member Email

1. Open `data/team.yaml`
2. Find the person's name
3. Change their `email: "new@email.com"`
4. Save

### Add a 2025 Publication

1. Open `data/publications.yaml`
2. Copy this at the top:
```yaml
- title: "Paper Title"
  authors: "Author1, Author2"
  year: 2025
  venue: "Journal Name"
  volume: "16(2)"
  pages: "100-120"
  doi: "10.xxxx/xxxxx"
  pdf: ""
  abstract: "Brief description"
```
3. Fill in your details
4. Save

### Add a Research Project

1. Create: `content/research/new-project.md`
2. Add:
```markdown
---
title: "Project Name"
date: 2025-01-01
---

Project description here.
```
3. Save

---

## File Organization

```
Important Files:
├── data/
│   ├── team.yaml          ← Edit team members here
│   ├── publications.yaml  ← Edit publications here
│   └── software.yaml      ← Edit software here
├── content/               ← Edit page content here
└── hugo.toml             ← Site configuration
```

---

## Getting Help

- Full guide: See `README.md`
- Maintenance help: See `MAINTENANCE_GUIDE.md`
- Hugo docs: https://gohugo.io/

---

## That's It!

Your modern lab website is ready to use. The design is clean, professional, and extremely easy to maintain.
