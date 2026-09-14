# Meta Ads Mastery

A complete Meta advertising course written in plain English: **341 lessons, 38 modules, 10 levels.**

Open `index.html` in any browser. Nothing to install, no build step, no internet connection required
apart from the web fonts.

## What each lesson contains

- A plain-English introduction
- **🫧 In everyday words** — the idea explained through something familiar, before any technical detail
- The full explanation, with nothing left out
- A worked example with real numbers
- Step-by-step instructions
- Common mistakes
- A words-to-know list, so no term goes undefined
- **📌 Key takeaways**
- **☑️ Self-assessment**
- **🧠 Quiz** with explained answers
- **💪 Practical exercise** and **🎯 Expert challenge**
- **🏆 Mastery score** — the rank the lesson builds toward, and your progress at that rank

## Dashboard features

- ✅ Complete, ⭐ Important, 🔖 Bookmark and 📝 Notes on every lesson
- 📊 Progress tracking: overall ring, per-level bars, and counts for quizzes, exercises and challenges
- 🏆 Eight mastery ranks: Beginner → Foundational → Intermediate → Advanced → Expert → Elite → Master → Top 1%
- A warning when you skip lessons, naming exactly which ones you jumped over
- Filters for completed, important, bookmarked, annotated and unfinished lessons
- Search across all 341 lesson titles
- Light and dark themes, and a layout that works on a phone

Everything you tick, write or save is stored in your own browser. Nothing is sent anywhere.

## The ten levels

| Level | Subject | Modules | Lessons |
|------:|---------|--------:|--------:|
| 1 | Foundations | 3 | 26 |
| 2 | Campaign Building | 3 | 27 |
| 3 | Creative | 6 | 54 |
| 4 | Budgeting, Bidding and Scaling | 3 | 27 |
| 5 | Tracking and Measurement | 5 | 45 |
| 6 | Advanced Campaign Types | 6 | 54 |
| 7 | Experimentation and Economics | 3 | 27 |
| 8 | Diagnosis, Policy and Technical Mastery | 3 | 27 |
| 9 | Strategy and Business | 4 | 36 |
| 10 | Vertical Playbooks and Elite Mastery | 2 | 18 |

## How the files fit together

```
index.html        the whole application: layout, styles and logic
data/outline.js   every level, module and lesson title
data/m01.js       lesson content for module 01
...               one file per module
data/m38.js       lesson content for module 38
```

Each module file adds its lessons to a shared object, keyed by `level.module.lesson`
(for example `5.17.4`). To edit a lesson, open its module file and change the text.
To add a module, create the file, list its lessons in `outline.js`, and add one
`<script>` tag in `index.html`.

## Publishing it on the web

The course is a static site, so GitHub Pages will host it free:

1. Push this folder to a GitHub repository.
2. In the repository, open **Settings → Pages**.
3. Under **Source**, choose **Deploy from a branch**, select `main` and the `/ (root)` folder.
4. Save. The course appears at `https://YOUR-USERNAME.github.io/REPOSITORY-NAME/` within a minute or two.

## Progress data

Progress lives in the reader's browser under the key `meta-ads-mastery-v1`. It is private to that
browser and never leaves the device, which also means it does not follow a reader to another computer.
