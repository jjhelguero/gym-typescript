import { Page } from '@playwright/test';

export async function debounceDom(
  page: Page,
  pollDelay = 50,
  stableDelay = 350,
) {
  let markupPrevious = '';
  const timerStart = new Date();
  let isStable = false;
  while (!isStable) {
    const markupCurrent = await page.evaluate(() => document.body.innerHTML);
    if (markupCurrent == markupPrevious) {
      const elapsed = new Date().getTime() - timerStart.getTime();
      isStable = stableDelay <= elapsed;
    } else {
      markupPrevious = markupCurrent;
    }
    if (!isStable)
      await new Promise((resolve) => setTimeout(resolve, pollDelay));
  }
}
