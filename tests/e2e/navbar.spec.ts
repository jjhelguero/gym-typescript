import { test, expect, Page } from '@playwright/test';
import { debounceDom } from '../utils/debounceDom';

async function checkNavbarNavigation(
  page: Page,
  headerTestId: string,
  navBarTestId: string,
  sectionTestId: string,
): Promise<void> {
  await page
    .getByTestId(headerTestId)
    .evaluate((el) => el.scrollIntoView({ block: 'center' }));
  await debounceDom(page);
  await page.getByTestId(navBarTestId).click();
  await debounceDom(page);

  await expect(page.getByTestId(sectionTestId)).toBeVisible();
}

test.describe('Header', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await debounceDom(page);
  });

  test('navigates to Home section with narbar Home link', async ({ page }) => {
    await checkNavbarNavigation(
      page,
      'headerOurClasses',
      'navbarHome',
      'homePageJoinNow',
    );
  });

  test('navigates to Benefits section with narbar Benefits link', async ({
    page,
  }) => {
    await checkNavbarNavigation(
      page,
      'headerOurClasses',
      'navbarBenefits',
      'headerBenefits',
    );
  });

  test('navigates to OurClasses section with narbar Our Classes link', async ({
    page,
  }) => {
    await checkNavbarNavigation(
      page,
      'homePageImg',
      'navbarOurClasses',
      'headerOurClasses',
    );
  });

  test('navigates to Contact Us section with narbar Contact Us link', async ({
    page,
  }) => {
    await checkNavbarNavigation(
      page,
      'homePageImg',
      'navbarContactUs',
      'headerContactUs',
    );
  });

  test('navigates to Contact Us section with narbar Become a Member button', async ({
    page,
  }) => {
    await checkNavbarNavigation(
      page,
      'homePageImg',
      'navbarBecomeAMemberButton',
      'headerContactUs',
    );
  });
});
