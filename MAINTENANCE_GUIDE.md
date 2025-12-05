# Website Maintenance Guide for Non-Technical Users

This guide will help you maintain the website even if you're not familiar with web development.

## What You Need

- A text editor (Notepad++, VS Code, Sublime Text, or even basic Notepad)
- Access to the website files
- 5-10 minutes of your time

## The Three Files You'll Edit Most Often

### 1. `data/team.yaml` - For Team Members
### 2. `data/publications.yaml` - For Publications
### 3. `data/software.yaml` - For Software Tools

These files use a simple format called YAML. Think of it like a structured list.

---

## How to Add a Team Member

### Step-by-Step Instructions:

1. **Open the file** `data/team.yaml` in your text editor

2. **Find the right section:**
   - For professors: Look for `professors:`
   - For postdocs: Look for `postdocs:`
   - For PhD students: Look for `phd_students:`
   - For staff: Look for `staff:`

3. **Copy an existing entry** (easiest way!)

4. **Paste it below** the last person in that section

5. **Edit the information:**

```yaml
- name: "Jean Dupont"              ← Change to the person's name
  role: "PhD Student"              ← Change their role
  email: "jean.dupont@ulb.be"      ← Change their email
  phone: "+32 (0)2 650 12 34"      ← Change their phone
  office: "S.UD3.205"              ← Change their office
  bio: ""                           ← Optional: add a short bio
  research_interests: []            ← Optional: add research interests
  website: ""                       ← Optional: add personal website
```

6. **Important formatting rules:**
   - Keep the same indentation (spaces at the start)
   - Keep the quotes around text: `"like this"`
   - Keep the dash `-` at the start of each person's entry
   - Don't forget the colon `:` after each field name

7. **Save the file**

8. **Preview your changes** (ask your system admin to run `hugo server`)

### To Remove Someone:
Just delete their entire entry (from the dash `-` to the last line of their info).

### To Update Someone's Info:
Find their entry and change the specific field you need.

---

## How to Add a Publication

### Step-by-Step Instructions:

1. **Open** `data/publications.yaml`

2. **Go to the top** of the publications list (after the comments)

3. **Copy this template:**

```yaml
- title: "Your Paper Title Goes Here"
  authors: "Smith J, Doe A, Johnson B"
  year: 2025
  venue: "Nature Communications"
  volume: "16(1)"
  pages: "123-145"
  doi: "10.1038/xxxxx"
  pdf: ""
  abstract: "Brief summary of what the paper is about"
```

4. **Fill in your publication details:**
   - `title`: The full title of your paper
   - `authors`: List all authors, separated by commas
   - `year`: Just the number, no quotes (e.g., 2025)
   - `venue`: Journal or conference name
   - `volume`: Volume and issue number
   - `pages`: Page numbers
   - `doi`: The DOI number (from the journal)
   - `pdf`: Link to PDF (if you have one)
   - `abstract`: Short description

5. **Save the file**

### Important Notes:
- Publications are automatically sorted by year (newest first)
- The `year` field should be just a number: `year: 2025` NOT `year: "2025"`
- If you don't have a PDF link, leave it as empty quotes: `pdf: ""`

---

## How to Add Software

### Step-by-Step Instructions:

1. **Open** `data/software.yaml`

2. **Copy this template:**

```yaml
- name: "Tool Name"
  description: "Brief description of what it does"
  url: "https://github.com/yourusername/tool"
  documentation: "https://tool-docs.example.com"
  publication_doi: "10.xxxx/xxxxx"
```

3. **Fill in the details**

4. **Save the file**

---

## Common Mistakes to Avoid

### ❌ Wrong: Indentation not aligned
```yaml
- name: "John Doe"
    email: "john@ulb.be"  ← Too much space!
```

### ✅ Correct: Proper indentation
```yaml
- name: "John Doe"
  email: "john@ulb.be"
```

---

### ❌ Wrong: Forgot quotes
```yaml
- name: John Doe  ← Missing quotes!
```

### ✅ Correct: Has quotes
```yaml
- name: "John Doe"
```

---

### ❌ Wrong: Year with quotes
```yaml
year: "2025"  ← Don't use quotes for year!
```

### ✅ Correct: Year without quotes
```yaml
year: 2025
```

---

## Quick Checklist Before Saving

- [ ] Did you keep the same indentation as other entries?
- [ ] Did you put quotes around text fields?
- [ ] Did you start each new person/publication/tool with a dash `-`?
- [ ] Did you save the file?
- [ ] Did you test it? (Ask admin to run: `hugo server`)

---

## If Something Goes Wrong

Don't panic! YAML is picky about formatting, but errors are easy to fix.

### Common Error Messages:

**"Cannot parse YAML"**
→ Check your indentation and quotes

**"Field not found"**
→ Make sure you spelled field names correctly (name, email, year, etc.)

**"Unexpected character"**
→ Check for missing quotes or colons

### Recovery:
If you're really stuck, you can:
1. Copy your changes to a separate document
2. Revert the file to the last working version
3. Carefully re-apply your changes
4. Or ask for help!

---

## Getting Help

- **Hugo documentation:** https://gohugo.io/documentation/
- **YAML syntax guide:** https://yaml.org/
- **Your system administrator**

---

## Pro Tips

1. **Before making changes:** Make a backup copy of the file
2. **After changes:** Always preview before publishing
3. **Keep it consistent:** Use the same format as existing entries
4. **Small changes first:** Make one change, test it, then continue
5. **Regular updates:** It's easier to add publications throughout the year than all at once

---

## Example: Complete Team Member Entry

Here's what a complete, properly formatted team member looks like:

```yaml
- name: "Marie Curie"
  role: "Professor"
  email: "marie.curie@ulb.be"
  phone: "+32 (0)2 650 20 00"
  office: "S.UD3.201"
  bio: "Marie is a leading researcher in computational biology with 15 years of experience."
  research_interests: ["Protein folding", "Machine learning", "Structural biology"]
  website: "https://mariecurie.example.com"
```

Notice:
- Each line is indented the same (2 spaces)
- Text is in quotes
- The list of research interests uses square brackets
- Everything is properly aligned

---

## You're Ready!

Remember: The website is designed to be easy to maintain. If you can edit a text file, you can maintain this website!

When in doubt, look at existing entries and copy their format. That's the easiest way to get it right.
