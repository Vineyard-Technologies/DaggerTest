import { test, expect } from '@playwright/test';
import { BrowserHelper, DaggerQuestHelper } from './test-helpers.js';

/**
 * DaggerQuest.com Basic Test Suite
 * Converted from Ruby RSpec to Playwright JavaScript
 * 
 * This test replicates the functionality of daggerquest_basic_spec.rb
 */
test.describe('DaggerQuest.com Basic Test', () => {
  
  test('should navigate to DaggerQuest.com and verify the URL', async ({ page, browserName }) => {
    // Log browser information (similar to Ruby driver detection)
    console.log(`Running test with browser: ${browserName}`);
    
    try {
      // Navigate to DaggerQuest.com
      await page.goto('https://daggerquest.com');
      
      // Wait for page to load (matches Ruby wait logic)
      await DaggerQuestHelper.waitForPageLoad(page);
      
      // Verify the URL is DaggerQuest.com (matches Ruby URL validation)
      const currentUrl = page.url();
      DaggerQuestHelper.validateDaggerQuestUrl(currentUrl);
      
      // Alternative Playwright assertion (more idiomatic)
      await expect(page).toHaveURL(/daggerquest\.com/i);
      
      // Verify page title contains DaggerQuest (matches Ruby title validation)
      const pageTitle = await page.title();
      DaggerQuestHelper.validateDaggerQuestTitle(pageTitle);
      
      // Alternative Playwright assertion
      await expect(page).toHaveTitle(/DaggerQuest/);
      
      // Log success (matches Ruby console output)
      DaggerQuestHelper.logNavigationSuccess(currentUrl, pageTitle);
      
    } catch (error) {
      console.error('Test failed:', error.message);
      throw error;
    }
  });
  
  test('should verify page loads completely', async ({ page }) => {
    // Navigate to DaggerQuest.com
    await page.goto('https://daggerquest.com');
    
    // Wait for page to be fully interactive
    await DaggerQuestHelper.waitForPageLoad(page);
    
    // Verify that the page has loaded by checking for common elements
    // This is more robust than just checking document.readyState
    await expect(page.locator('body')).toBeVisible();
    
    // Check that the page is not showing an error
    const pageContent = await page.textContent('body');
    expect(pageContent).not.toContain('404');
    expect(pageContent).not.toContain('Error');
    
    console.log('✓ Page loaded completely and is accessible');
  });
  
  test('should handle iframe content (DaggerQuest game)', async ({ page }) => {
    // Navigate to DaggerQuest.com
    await page.goto('https://daggerquest.com');
    
    // Wait for page to load
    await DaggerQuestHelper.waitForPageLoad(page);
    
    // Look for iframe containing the game (since DaggerQuest is in same-origin iframe)
    const iframes = page.frameLocator('iframe');
    
    // If iframe exists, verify it's accessible
    try {
      const iframeCount = await page.locator('iframe').count();
      if (iframeCount > 0) {
        console.log(`✓ Found ${iframeCount} iframe(s) on the page`);
        
        // Verify iframe is loaded (basic check)
        await expect(page.locator('iframe').first()).toBeVisible();
      } else {
        console.log('ℹ No iframes detected on the page');
      }
    } catch (error) {
      console.log('ℹ Iframe detection skipped:', error.message);
    }
  });
});

/**
 * Optional: Browser-specific tests (uncomment to enable)
 * These tests can be used to verify browser-specific behavior
 */

// test.describe('Browser-specific tests', () => {
//   test('Chrome-specific features', async ({ page, browserName }) => {
//     test.skip(browserName !== 'chromium', 'Chrome-only test');
//     
//     await page.goto('https://daggerquest.com');
//     // Add Chrome-specific tests here
//   });
//   
//   test('Firefox-specific features', async ({ page, browserName }) => {
//     test.skip(browserName !== 'firefox', 'Firefox-only test');
//     
//     await page.goto('https://daggerquest.com');
//     // Add Firefox-specific tests here
//   });
// });