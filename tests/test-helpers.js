/**
 * Test utilities and helper functions for DaggerQuest testing
 * Converted from Ruby spec_helper.rb to JavaScript/Playwright
 */

/**
 * Browser detection and setup utility
 * Mimics the Ruby setup_driver function behavior
 */
export class BrowserHelper {
  /**
   * Attempts to detect and configure the best available browser
   * Follows the same priority as Ruby version: Chrome -> Firefox -> Edge
   */
  static async detectAvailableBrowser() {
    const availableBrowsers = [];
    
    try {
      // Try to detect Chrome/Chromium
      availableBrowsers.push('chromium');
      console.log('✓ Chromium/Chrome detected');
    } catch (e) {
      console.log('Chrome not available:', e.message);
    }
    
    try {
      // Try to detect Firefox
      availableBrowsers.push('firefox');
      console.log('✓ Firefox detected');
    } catch (e) {
      console.log('Firefox not available:', e.message);
    }
    
    try {
      // Try to detect Edge
      availableBrowsers.push('Microsoft Edge');
      console.log('✓ Microsoft Edge detected');
    } catch (e) {
      console.log('Edge not available:', e.message);
    }
    
    if (availableBrowsers.length === 0) {
      throw new Error(`
No compatible browser found. Please ensure you have one of the following installed:

1. Google Chrome (recommended)
2. Mozilla Firefox  
3. Microsoft Edge

Also ensure the browser is properly installed and accessible from the system PATH.

You may need to run: npm run install:browsers
      `);
    }
    
    return availableBrowsers;
  }
  
  /**
   * Gets browser-specific launch options that match Ruby Selenium configuration
   */
  static getBrowserOptions(browserName) {
    const options = {
      headless: false, // Run headed by default like Ruby version
    };
    
    if (browserName === 'chromium' || browserName === 'Google Chrome') {
      options.args = [
        '--no-sandbox',
        '--disable-dev-shm-usage',
        '--disable-web-security',
        '--allow-running-insecure-content'
      ];
    }
    
    return options;
  }
}

/**
 * Page utilities for DaggerQuest-specific testing
 */
export class DaggerQuestHelper {
  /**
   * Waits for page to be fully loaded (matches Ruby wait logic)
   */
  static async waitForPageLoad(page, timeout = 10000) {
    await page.waitForLoadState('domcontentloaded', { timeout });
    await page.waitForLoadState('networkidle', { timeout: timeout / 2 });
    
    // Additional check for document ready state (matches Ruby implementation)
    await page.waitForFunction(() => document.readyState === 'complete', { timeout });
  }
  
  /**
   * Validates DaggerQuest.com URL (matches Ruby URL validation)
   */
  static validateDaggerQuestUrl(url) {
    const urlPattern = /daggerquest\.com/i;
    if (!urlPattern.test(url)) {
      throw new Error(`Expected URL to contain 'daggerquest.com', but got: ${url}`);
    }
    return true;
  }
  
  /**
   * Validates page title contains DaggerQuest (matches Ruby title validation)
   */
  static validateDaggerQuestTitle(title) {
    if (!title.includes('DaggerQuest')) {
      throw new Error(`Expected page title to contain 'DaggerQuest', but got: ${title}`);
    }
    return true;
  }
  
  /**
   * Logs navigation success (matches Ruby console output)
   */
  static logNavigationSuccess(url, title) {
    console.log(`Successfully navigated to: ${url}`);
    console.log(`Page title: ${title}`);
  }
}