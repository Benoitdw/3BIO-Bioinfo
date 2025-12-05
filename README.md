# 3BIO-BioInfo Laboratory Website

Modern, easy-to-maintain website built with Hugo static site generator.

## Quick Start

### Prerequisites

- Hugo (v0.100.0 or higher) installed on your system
- Git (for version control and GitHub Pages deployment)

### Running the Site Locally

```bash
# Navigate to the project directory
cd /path/to/3BIO-Bioinfo

# Start the Hugo development server
hugo server -D

# Open your browser to http://localhost:1313
```

### Building for Production

```bash
# Build the static site
hugo

# The generated site will be in the 'public/' directory
# Upload the contents of 'public/' to your web server
```

## Easy Maintenance Guide

This website is designed to be extremely easy to maintain. All common updates can be done by editing simple YAML files - no coding required!

### Adding or Updating Team Members

**File to edit:** `data/team.yaml`

1. Open `data/team.yaml` in any text editor
2. Find the appropriate section (professors, postdocs, phd_students, or staff)
3. To add a new member, copy this template:

```yaml
- name: "Full Name"
  role: "Job Title"
  email: "email@ulb.be"
  phone: "+32 (0)2 650 XX XX"
  office: "S.UD3.XXX"
  bio: "Brief biography (optional)"
  research_interests: []
  website: ""
```

4. Fill in the details
5. Save the file
6. The website will automatically update when you rebuild

**To remove a team member:** Simply delete their entire block from the file.

**To update information:** Just change the relevant fields and save.

### Adding Publications

**File to edit:** `data/publications.yaml`

1. Open `data/publications.yaml`
2. Add a new publication using this template:

```yaml
- title: "Your Publication Title"
  authors: "Author1, Author2, Author3"
  year: 2025
  venue: "Journal Name"
  volume: "Volume(Issue)"
  pages: "Page numbers"
  doi: "10.xxxx/xxxxx"
  pdf: "https://link-to-pdf.com"
  abstract: "Brief description of the publication"
```

3. Publications are automatically sorted by year (newest first)
4. Save and rebuild

### Adding Software Tools

**File to edit:** `data/software.yaml`

1. Open `data/software.yaml`
2. Add a new tool:

```yaml
- name: "Tool Name"
  description: "What the tool does"
  url: "https://github.com/username/tool"
  documentation: "https://docs.example.com"
  publication_doi: "10.xxxx/xxxxx"
```

3. Save and rebuild

### Adding Research Projects

**Directory:** `content/research/`

1. Create a new file: `content/research/project-name.md`
2. Use this template:

```markdown
---
title: "Project Title"
date: 2024-01-01
---

Description of the research project goes here. You can use regular text,
**bold**, *italic*, bullet points, etc.
```

3. Save the file
4. The project will automatically appear on the Research page

### Adding News/Blog Posts

**Directory:** `content/news/`

1. Create a new file: `content/news/2025-01-15-news-title.md`
2. Use this template:

```markdown
---
title: "News Title"
date: 2025-01-15
---

Your news content here...
```

3. The 3 most recent news items appear on the homepage

### Updating Site Configuration

**File:** `hugo.toml`

Update site-wide settings like:
- Site title
- Contact information
- Menu items
- Social media links

## File Structure

```
3BIO-Bioinfo/
├── hugo.toml              # Main configuration file
├── content/               # Page content
│   ├── _index.md         # Homepage content
│   ├── team.md           # Team page
│   ├── publications.md   # Publications page
│   ├── research/         # Research project pages
│   ├── software.md       # Software page
│   ├── opportunities.md  # Opportunities page
│   ├── teaching.md       # Teaching page
│   └── news/             # News/blog posts
├── data/                  # Data files (EASY TO EDIT!)
│   ├── team.yaml         # Team members data
│   ├── publications.yaml # Publications data
│   └── software.yaml     # Software tools data
├── themes/
│   └── bioinfo-clean/    # Custom theme
└── public/               # Generated site (after running 'hugo')
```

## Common Tasks

### Task 1: Add a New PhD Student

1. Open `data/team.yaml`
2. Scroll to the `phd_students:` section
3. Add:
```yaml
- name: "New Student Name"
  role: "PhD Student"
  email: "student@ulb.be"
  phone: ""
  office: "S.UD3.XXX"
  bio: ""
  research_interests: []
  website: ""
```
4. Save and run `hugo server` to preview

### Task 2: Update Someone's Contact Info

1. Open `data/team.yaml`
2. Find the person's entry
3. Update their `email`, `phone`, or `office` field
4. Save

### Task 3: Add This Year's Publications

1. Open `data/publications.yaml`
2. Add all new publications with `year: 2025`
3. They'll automatically appear under a "2025" heading
4. Save

### Task 4: Change Homepage Text

1. Open `content/_index.md`
2. Edit the text below the `---` markers
3. Save

## Styling and Design

The site uses a clean, minimal design with:
- Responsive layout (works on mobile, tablet, desktop)
- Professional color scheme
- Easy-to-read typography
- Organized layouts for different content types

To modify colors, fonts, or layouts, edit:
- CSS: `themes/bioinfo-clean/static/css/style.css`
- HTML templates: `themes/bioinfo-clean/layouts/`

## Deployment

### Option 1: GitHub Pages (Recommended - Automatic!)

**Automatic deployment on every push to master!**

See **`GITHUB_PAGES_DEPLOYMENT.md`** for complete setup instructions.

Quick setup:
```bash
git init
git add .
git commit -m "Initial commit"
git branch -M master
git remote add origin https://github.com/YOUR-USERNAME/REPO-NAME.git
git push -u origin master
```

Enable GitHub Pages in your repository settings → Pages → Source: GitHub Actions

Your site will be live at: `https://YOUR-USERNAME.github.io/REPO-NAME/`

Every time you push to master, GitHub Actions automatically rebuilds and deploys your site!

### Option 2: Manual FTP/SFTP Upload

1. Run `hugo` to build the site
2. Upload the entire `public/` directory to your web server
3. Done!

### Option 3: Other Platforms

Works with: Netlify, Vercel, CloudFlare Pages, AWS S3, etc.

## Support

For Hugo documentation: https://gohugo.io/documentation/

For questions about this specific site, contact the system administrator.

## Tips

- Always test locally with `hugo server` before deploying
- Keep backups of your `data/` directory
- Use descriptive file names for content
- Check that all links work after making changes
- The site builds in seconds, so iterate quickly!
