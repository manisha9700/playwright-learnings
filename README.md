# playwright-learnings
learning Playwright automation
# Playwright Automation Framework

## Overview
This repository contains my Playwright automation testing practice, covering UI automation, API testing, authentication, and reusable test components using TypeScript.

## Tech Stack
- Playwright Test
- TypeScript
- Node.js
- GitHub

## Project Structure

```text
.
├── tests/
│   ├── PlayLab/
│   └── API/
├── Pages/
├── playwright.config.ts
├── package.json
├── .gitignore
└── README.md
```

*Note: The structure above is an example. Update it to match the actual folders in this repository.*

## Topics Covered
- UI automation and locator strategies
- Positive and negative test scenarios
- API testing and response validation
- Authentication and storage state
- Page Object Model (POM)
- Reusable fixtures
- Test configuration and reporting

## Getting Started

### Prerequisites
- Node.js
- npm

### Install dependencies

```bash
npm install
npx playwright install chromium
```

### Run tests

```bash
npx playwright test --project=chromium
```

### Open the HTML report

```bash
npx playwright show-report
```

## Security
- Authentication state files and credentials must not be committed.
- Environment secrets must be stored securely.
- Generated test reports and results should generally remain untracked.

## Learning Goal
Build practical skills in Playwright automation, API testing, TypeScript, reusable frameworks, and version control.
