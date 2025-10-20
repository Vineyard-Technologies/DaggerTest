![DaggerTest Logo](images/logo.webp)

### A Playwright JavaScript testing framework for [*DaggerQuest*](https://github.com/Vineyard-Technologies/DaggerQuest) and [*DaggerQuest.com*](https://github.com/Vineyard-Technologies/DaggerQuest.com).

## 🛠️ Setup & Development

### Prerequisites
- Node.js (version 18.0 or higher)
- npm (comes with Node.js)
- A web browser (Chrome, Firefox, Edge, or Safari)

### Installation
1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```
   This will automatically install Playwright browsers via the `postinstall` script.

## 🚀 Running Tests
- **Run all tests**: `npm test`
- **Run basic DaggerQuest.com test**: `npm run test:basic`
- **Run with visible browser**: `npm run test:headed`
- **Interactive UI mode**: `npm run test:ui`
- **Debug mode**: `npm run test:debug`
- **View test reports**: `npm run test:report`

## 📁 Test Structure
- `tests/` - Contains all test files
- `tests/test-helpers.js` - Test utilities and helper functions
- `tests/daggerquest-basic.spec.js` - Basic navigation and URL verification tests
- `playwright.config.js` - Playwright configuration and browser settings

## 🌐 Browser Support
Playwright supports multiple browsers out of the box:
- **Chromium** (Chrome/Edge)
- **Firefox** 
- **WebKit** (Safari)
- Cross-platform testing (Windows, macOS, Linux)

The framework runs tests across all configured browsers by default. You can target specific browsers using the `--project` flag.

### 📋 Related Repositories

- [**DaggerQuest**](https://github.com/Vineyard-Technologies/DaggerQuest) - The main repository for the *DaggerQuest* codebase.
- [**DaggerQuest.com**](https://github.com/Vineyard-Technologies/DaggerQuest.com) - The website where you can play *DaggerQuest*, read news posts, and browse the guide.
- [**DaggerQuest-Test-Realm**](https://github.com/Vineyard-Technologies/DaggerQuest-Test-Realm) - The official testing environment for *DaggerQuest*.
- [**Overlord**](https://github.com/Vineyard-Technologies/Overlord) - An render pipeline management tool used to generated assets for *DaggerQuest*.
- [**CAFfeine**](https://github.com/Vineyard-Technologies/CAFfeine) - An automation and testing framework for *DaggerQuest* and Construct 3 in general.

## ✒️ License

This project is licensed under the [AGPL 3.0 License](https://www.gnu.org/licenses/agpl-3.0.html.en) - see the [LICENSE](LICENSE) file for details.
