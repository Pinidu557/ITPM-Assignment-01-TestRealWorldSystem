//ITPM Assignment 01 - UI functional test cases

import { test, expect } from "@playwright/test";

//check automatically output comes without clicking buttons
test("Pos_UI_001", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  const outputBox = page
    .locator('div:has(> div.panel-title:has-text("Sinhala")) div.w-full.h-80')
    .first();
  await expect(outputBox).toHaveText("");
  inputBox.fill("ithin ithin kohomadha?");
  await expect(outputBox).not.toHaveText("", {
    timeout: 15000,
  });
});

//check when the input field is empty, the output field does not show any errors.
test("Pos_Ui_002", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  const outputBox = page
    .locator('div:has(> div.panel-title:has-text("Sinhala")) div.w-full.h-80')
    .first();
  await inputBox.fill("");
  await expect(outputBox).toHaveText("", {
    timeout: 1500,
  });
});
