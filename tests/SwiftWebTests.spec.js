//ITPM Assignment 01 - Positive and negative functional test cases

import { test, expect } from "@playwright/test";

const testCases = [
  {
    id: "Pos_Fun_001",
    input: "mama paasal yanavaa",
    expectedOutput: "මම පාසල් යනවා",
  },
  {
    id: "Pos_Fun_002",
    input: "mokoo vennee mee tikee?",
    expectedOutput: "මොකෝ වෙන්නේ මේ ටිකේ?",
  },
  {
    id: "Pos_Fun_003",
    input: "mata adha enna venne naehae, man panthi yanavaa.",
    expectedOutput: "මට අද එන්න වෙන්නේ නැහැ, මන් පන්ති යනවා.",
  },
  {
    id: "Pos_Fun_004",
    input: "heta havasata sellam karamudha?",
    expectedOutput: "හෙට හවසට සෙල්ලම් කරමුද?",
  },
  {
    id: "Pos_Fun_005",
    input: "mee tikee hodhatama  vaeda, viBhaagee LaGA indhaa",
    expectedOutput: "මේ ටිකේ හොදටම වැඩ, විභාගේ ළඟ ඉන්දා",
  },
  {
    id: "Pos_Fun_006",
    input: "giya sathiyee pansal giyaadha?",
    expectedOutput: "ගිය සතියේ පන්සල් ගියාද?",
  },
  {
    id: "Pos_Fun_007",
    input: "ikmanata enna",
    expectedOutput: "ඉක්මනට එන්න",
  },
  {
    id: "Pos_Fun_008",
    input: "mathaka aethuva heta magee potha aran enna",
    expectedOutput: "මතක ඇතුව හෙට මගේ පොත අරන් එන්න",
  },
  {
    id: "Pos_Fun_009",
    input: "man udheenma naegitinavaa",
    expectedOutput: "මන් උදේන්ම නැගිටිනවා",
  },
  {
    id: "Pos_Fun_010",
    input: "suBha raathriyak!",
    expectedOutput: "සුභ රාත්‍රියක්!",
  },
  {
    id: "Pos_Fun_011",
    input: "magee vathura boothalee aran dhenna puluvandha?",
    expectedOutput: "මගේ වතුර බෝතලේ අරන් දෙන්න පුලුවන්ද?",
  },
  {
    id: "Pos_Fun_012",
    input: "man kiyapu dhee poddak hoyalaa balanna.",
    expectedOutput: " මන් කියපු දේ පොඩ්ඩක් හොයල බලන්න",
  },
  {
    id: "Neg_Fun_001",
    input: "ela heta ennam",
    expectedOutput: "එල හෙට එන්නම්",
  },
  {
    id: "Pos_Fun_013",
    input: "oyaa vaeradhi eeka ehema nimiyi karannee",
    expectedOutput: "ඔයා වැරදි ඒක එහෙම නිමියි කරන්නේ",
  },
  {
    id: "Pos_Fun_014",
    input: "mata oyaagee oraloosuva dhenna puluvandha adhata vitharak?",
    expectedOutput: "මට ඔයාගේ ඔරලෝසුව දෙන්න පුලුවන්ද අදට විතරක්?",
  },
  {
    id: "Pos_Fun_015",
    input: "mathak karalaa beheth tika bonna.",
    expectedOutput: "මතක් කරලා බෙහෙත් ටික බොන්න.",
  },
  {
    id: "Pos_Fun_016",
    input: "anee ban pissu vaeda karanna epaa",
    expectedOutput: "අනේ බන් පිස්සු වැඩ කරන්න එපා",
  },
  {
    id: "Pos_Fun_017",
    input: "uba haedhennee naehae",
    expectedOutput: "උබ හැදෙන්නේ නැහැ",
  },
  {
    id: "Pos_Fun_018",
    input: "man yanavaa nidhaa ganna",
    expectedOutput: "මන් යනවා නිදා ගන්න",
  },
  {
    id: "Pos_Fun_019",
    input: "mata badaginiyi",
    expectedOutput: "මට බඩගිනියි",
  },
  {
    id: "Pos_Fun_020",
    input: "api heta yamu maathara",
    expectedOutput: "අපි හෙට යමු මාතර",
  },
  {
    id: "Pos_Fun_021",
    input:
      "mokakdha balanna oyaa karapu vaedee oyaata thibbee eeka nokara inna",
    expectedOutput: "මොකක්ද බලන්න ඔයා කරපු වැඩේ ඔයාට තිබ්බේ ඒක නොකර ඉන්න",
  },
  {
    id: "Pos_Fun_022",
    input:
      "heta kattiya mokadha karannee, vaedakuth naethi ekee koyihari ravumak dhaanna yamudha?",
    expectedOutput:
      "හෙට කට්ටිය මොකද කරන්නේ, වැඩකුත් නැති එකේ කොයිහරි රවුමක් දාන්න යමුද?",
  },
  {
    id: "Pos_Fun_023",
    input:
      "mama iiyee nuvara giyaa maamalaagee gedhara, ehe maru, api dhavas dhekak ehee hitiyaa",
    expectedOutput:
      "මම ඊයේ නුවර ගියා මාමලාගේ ගෙදර, එහෙ මරු, අපි දවස් දෙකක් එහේ හිටියා",
  },
  {
    id: "Pos_Fun_024",
    input:
      "heta havasa 3ta mathak karalaa apee gedhara enna, podi vaedak thiyanavaa kiyanna. mathaka aethuva enna.",
    expectedOutput:
      "හෙට හවස 3ට මතක් කරලා අපේ ගෙදර එන්න, පොඩි වැඩක් තියනවා කියන්න. මතක ඇතුව එන්න.",
  },
  {
    id: "Neg_Fun_003",
    input: "karunakaralamagepothadhenna",
    expectedOutput: "කරුණාකරලා මගේ පොත දෙන්න",
  },
  {
    id: "Neg_Fun_004",
    input:
      "ithin ithin mokadha venennee me tikheee mnm nivaaduvata yaapanaee giyaaa",
    expectedOutput: "ඉතින් ඉතින් මොකද වෙනේ මේ  ටිකේ මන්නම් නිවාඩුවට යාපනේ ගියා",
  },
  {
    id: "Neg_Fun_005",
    input:
      "hellooooo helooooo kohomadha mokadha veennee koheevath giyee nadaha meee tikeee",
    expectedOutput: "hello hello කොහොමද මොකද වෙන්නේ කොහෙවත් ගියේ නැද්ද මේ ටිකේ",
  },
  {
    id: "Neg_Fun_006",
    input: "nethmigee    gedhara    giyadhaa   oyaa?",
    expectedOutput: "නෙත්මිගේ ගෙදර ගියාද ඔයා?",
  },
  {
    id: "Neg_Fun_007",
    input:
      "oyaa enawaanam mama gedhara innam, namuth wasoth oyaata enna vennee nae",
    expectedOutput:
      "ඔයා එනවනම් මන් ඉන්නම්, නමුත් වැස්ස ආවොත් ඔයාට එන්න වෙන්නේ නැ",
  },
  {
    id: "Neg_Fun_008",
    input: "mata meeting ekata yanna vennee nae, vaedak vaetilaa",
    expectedOutput: "මට meeting එකට යන්න වෙන්නේ නැ, වැඩක් වැටිලා",
  },
  {
    id: "Neg_Fun_009",
    input:
      "mee man heta enakota parakku veyi???!!!!!! mathak karalaa mata rayis ekak hadhalaa thiyanna",
    expectedOutput:
      "මේ මන් හෙට එනකොට පරක්කු වෙයි, මතක් කරලා මට රයිස් එකක් හදලා තියන්න",
  },
  {
    id: "Neg_Fun_010",
    input:
      "mee eyee mara wade une mage bayik eka peralunane parae, mata hitha gana bari una mokkda une kika, thulanm wadiya mukuth une na habai kakula podak hiruna, loku aulak na",
    expectedOutput:
      "මේ ඊයේ මාර වැඩේනේ උනේ බයික් එක පෙරලුනා පාරේ, මට හිතාගන්න බැරි උනා මොකක්ද උනේ කියලා, තුවාලනම් වැඩිය මුකුත් නෑ, හැබැයි කකුල පොඩ්ඩක් හීරුනා, ලොකු අවුලක් නෑ ",
  },
  {
    id: "Pos_Fun_025",
    input:
      "heta akkaa yanavaa kivuvaa naendhaalagee gedhara, kaalekin ehee giyapu naethi indhaa, dhavas dhekak navathinavalu",
    expectedOutput:
      "හෙට අක්කා යනවා කිවුවා නැන්දාලගේ ගෙදර, කාලෙකින් එහේ ගියපු නැති ඉන්දා, දවස් දෙකක් නවතිනවලු ",
  },
  {
    id: "Neg_Fun_011",
    input:
      "bro, heta seminar ekata yanavadha? yamu needha, api giya sathiyee giyapu ekee mee sathiyeth yamu, naethnam apita samahara karuNu miss veyi",
    expectedOutput:
      "bro, හෙට seminar එකට යනවද? යමු නේද, අපි ගිය සතියේ ගියපු එකේ මේ සතියෙත් යමු, නැත්නම් අපිට සමහර කරුණු miss වෙයි",
  },
  {
    id: "Pos_Fun_026",
    input: "oyaa aapu ekee bath tikak kaalaa yamu",
    expectedOutput: "ඔයා ආපු එකේ බත් ටිකක් කාලා යමු",
  },
  {
    id: "Neg_Fun_012",
    input:
      "mee apee project ekee progress eka kohomadha? vaedha tika hoDHAta yanavaa needha",
    expectedOutput:
      "මේ අපේ project එකේ progress එක කොහොමද? වැද ටික හොඳට යනවා නේද,",
  },
];

for (const tc of testCases) {
  test(tc.id, async ({ page }) => {
    await page.goto("https://www.swifttranslator.com/");
    const inputBox = page.locator(
      'textarea[placeholder="Input Your Singlish Text Here."]',
    );
    const outputBox = page
      .locator('div:has(> div.panel-title:has-text("Sinhala")) div.w-full.h-80')
      .first();
    await inputBox.fill(tc.input);
    //In here check expected output exactly matches the output
    await expect(outputBox).toContainText(tc.expectedOutput, {
      timeout: 15000,
    });
  });
}
