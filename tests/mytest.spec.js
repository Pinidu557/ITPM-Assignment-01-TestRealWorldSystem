import { test, expect } from "@playwright/test";

test("my first test", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  const outputBox = page
    .locator('div:has(> div.panel-title:has-text("Sinhala")) div.w-full.h-80')
    .first();
  const inputText = "mama paasal yanavaa";
  const expectOutputText = "මම පාසල් යනවා";
  await inputBox.fill(inputText);
  await expect(outputBox).toContainText(expectOutputText, {
    timeout: 15000,
  });
});

test("my second test", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  const outputBox = page
    .locator('div:has(> div.panel-title:has-text("Sinhala")) div.w-full.h-80')
    .first();
  const inputText = "mokoo vennee mee tikee?";
  const expectOutputText = "මොකෝ වෙන්නේ මේ ටිකේ?";
  await inputBox.fill(inputText);
  await expect(outputBox).toContainText(expectOutputText, {
    timeout: 15000,
  });
});

test("my third test", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  const outputBox = page
    .locator('div:has(> div.panel-title:has-text("Sinhala")) div.w-full.h-80')
    .first();
  const inputText = "mata adha enna venne naehae, man panthi yanavaa.";
  const expectOutputText = "මට අද එන්න වෙන්නේ නැහැ, මන් පන්ති යනවා.";
  await inputBox.fill(inputText);
  await expect(outputBox).toContainText(expectOutputText, {
    timeout: 15000,
  });
});

test("my fourth test", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  const outputBox = page
    .locator('div:has(> div.panel-title:has-text("Sinhala")) div.w-full.h-80')
    .first();
  const inputText = "anee ban pissu vaeda karanna epaa";
  const expectOutputText = "අනේ බන් පිස්සු වැඩ කරන්න එපා";
  await inputBox.fill(inputText);
  await expect(outputBox).toContainText(expectOutputText, {
    timeout: 15000,
  });
});

test("my fifth test", async ({ page }) => {
  await page.goto("https://www.swifttranslator.com/");
  const inputBox = page.locator(
    'textarea[placeholder="Input Your Singlish Text Here."]',
  );
  const outputBox = page
    .locator('div:has(> div.panel-title:has-text("Sinhala")) div.w-full.h-80')
    .first();
  const inputText =
    "mee man heta enakota parakku veyi???!!!!!! mathak karalaa mata rayis ekak hadhalaa thiyanna";
  const expectOutputText =
    "මේ මන් හෙට එනකොට පරක්කු වෙයි, මතක් කරලා මට රයිස් එකක් හදලා තියන්න";
  await inputBox.fill(inputText);
  await expect(outputBox).toContainText(expectOutputText, {
    timeout: 15000,
  });
});
