# React Frontend Scholarship — Shared Assignments

This repo is where everyone in the group uploads their session assignments, so we can all see each other's solutions, compare approaches, and discuss different ways of solving the same problem.

## Folder structure

Each session gets its own folder. Inside it, everyone has a subfolder named after their GitHub username:

```
TECH-D01/
  <your-github-username>/
TECH-D02/
  <your-github-username>/
```

**Rules:**
- Session numbers are zero-padded: `TECH-D01`, not `TECH-D1` — this keeps sessions sorted correctly once we pass session 9.
- Your subfolder name must match your exact GitHub username.
- Only add or edit files inside your own subfolder.

## How to submit an assignment

**First time only:**
```bash
git clone <repo-url>
```

**Every session after that:**
```bash
git pull
# create your folder if it doesn't exist yet, e.g. TECH-D11/<your-username>/
git add .
git commit -m "TECH-D11 - <your name>"
git push
```

## Want to discuss a solution?

Use the **Discussions** tab instead of other group chats — open a new discussion, link the file or folder you're talking about, and tag whoever you're responding to. This keeps the conversation attached to the actual code instead of scattered across chat apps.

## A few notes

- Don't edit files inside someone else's folder.
- `node_modules` is already excluded via `.gitignore` — no need to upload it.
- Questions about the repo itself → ask [team lead's name / contact].
