import { test, expect } from "@playwright/test";

const positiveTestCases = [
  { id: "Pos_Fun_0001", input: "mama podi gamakata yanavaa." },
  { id: "Pos_Fun_0002", input: "api bath kanavaa." },
  {
    id: "Pos_Fun_0003",
    input: "mama office yanne, namuth traffic thibba nisaa late unaa.",
  },
  {
    id: "Pos_Fun_0004",
    input: "api shopping karala passe movie ekak balanavaa.",
  },
  { id: "Pos_Fun_0005", input: "oya call karoth mama enavaa." },
  {
    id: "Pos_Fun_0006",
    input: "vaessa thibba nisaa api gamana aththarinna unaa.",
  },
  {
    id: "Pos_Fun_0021",
    input: "adha Zoom meeting ekak thiyenavaa office ekee.",
  },
  { id: "Pos_Fun_0022", input: "mage ID saha NIC eka bag eke thiyenavaa." },
  {
    id: "Pos_Fun_0023",
    input: "meeting eka 2026-03-18 9.30 AM patan gannavaa.",
  },
  {
    id: "Pos_Fun_0024",
    input: `adha api Colombo giyaa. office vaeda thibba nisaa podi amaaruwak unaa.
namuth meeting eka hariyata avasan unaa saha api passe lunch karalaa gedhara enavaa.`,
  },
];

for (const tc of positiveTestCases) {
  test(`${tc.id} - Positive Functional Test`, async ({ page }) => {
    await page.goto("https://www.swifttranslator.com/", {
      waitUntil: "networkidle",
    });

    const inputBox = page.getByRole("textbox", {
      name: "Input Your Singlish Text Here.",
    });
    await inputBox.fill(tc.input);

    const typedValue = await inputBox.inputValue();
    expect(typedValue).toBe(tc.input);

    // Keep browser open for 3 seconds for visibility
    await page.waitForTimeout(3000);
  });
}
