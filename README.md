# ITPM-Assignment-01-TestRealWorldSystem

# StudentID - IT23670020

# Group - Y3.S1.WD.IT.02.01

In this project I tested a real world system. I wrote test cases to identify which conditions the system passes and fails. I used over 40 test cases and the Playwright tool for automated testing.

## Added Dependencies

- "@playwright/test": "^1.58.1"
- "@types/node": "^25.1.0"

## How to Run Project

1. Clone the project
2. If your PC does not have Node.js, install Node.js
3. In the terminal, install Playwright (command: `npm init playwright@latest`)
4. Choose "JavaScript"
5. Choose where to put your end-to-end tests: `tests`

## How to Run Tests

### Run SwiftWeb Test Cases

```bash
npx playwright test tests/SwiftWebTests.spec.js --project=chromium --headed
```

### Run SwiftUI Test Cases

```bash
npx playwright test tests/SwiftUiTests.spec.js --project=chromium --headed
```
