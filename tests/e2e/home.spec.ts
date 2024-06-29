import { test, expect, Page } from '@playwright/test';
import { debounceDom } from '../utils/debounceDom';

test.describe('Home Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    await debounceDom(page);
    await expect(page).toHaveTitle('EVOGYM');
  });

  test('has "EVOGYM evoluntionary fitness." image', async ({ page }) => {
    const homePageImg = page.getByTestId('homePageImg');
    await expect(homePageImg).toBeVisible();
    await expect(homePageImg).toHaveAttribute(
      'src',
      '/src/assets/HomePageText.png',
    );
  });

  test('has home page text', async ({ page }) => {
    const homePageText = page.getByTestId('homePageText');
    await expect(homePageText).toBeVisible();
    await expect(homePageText).toContainText(
      /Unrivaled Gym. Unparalleled Training Fitness Classes. World Class Studios to get the Body Shapes That you Dream of. Get Your Dream Body Now./,
    );
  });

  test('has "Join Now" button', async ({ page }) => {
    const homePageJoinNowButton = page.getByTestId('homePageJoinNow');
    await expect(homePageJoinNowButton).toBeVisible();
    await expect(homePageJoinNowButton).toContainText('Join Now');
    await expect(homePageJoinNowButton).toHaveAttribute('href', '#contactus');
  });

  test('has "Learn More" link', async ({ page }) => {
    const homePageLearnMore = page.getByTestId('homePageLearnMore');
    await expect(homePageLearnMore).toBeVisible();
    await expect(homePageLearnMore).toContainText('Learn More');
    await expect(homePageLearnMore).toHaveAttribute('href', '#contactus');
  });

  test('has page graphic', async ({ page }) => {
    const homePageGraphic = page.getByTestId('homePageGraphic');
    await expect(homePageGraphic).toBeVisible();
    await expect(homePageGraphic).toHaveAttribute(
      'src',
      '/src/assets/HomePageGraphic.png',
    );
  });
});
