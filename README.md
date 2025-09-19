![DaggerTest Logo](images/logo.webp)

### A Selenium Ruby testing framework for [*DaggerQuest*](https://github.com/Vineyard-Technologies/DaggerQuest) and [*DaggerQuest.com*](https://github.com/Vineyard-Technologies/DaggerQuest.com).

## 🛠️ Setup & Development

### Prerequisites
- Ruby (version 2.7 or higher)
- Bundler gem
- A web browser (Chrome, Firefox, or Edge)

### Installation
1. Clone this repository
2. Run the setup script:
   ```
   ruby setup.rb
   ```
   Or manually install dependencies:
   ```
   bundle install
   ```

## 🚀 Running Tests
- Run all tests: `bundle exec rspec`
- Run basic DaggerQuest.com test: `bundle exec rake basic`
- Run with detailed output: `bundle exec rspec --format documentation`

## 📁 Test Structure
- `spec/` - Contains all test files
- `spec/spec_helper.rb` - Test configuration and helper methods
- `spec/daggerquest_basic_spec.rb` - Basic navigation and URL verification test

## 🌐 Browser Support
The framework automatically detects and uses the default browser on your system:
1. Tries Chrome first
2. Falls back to Firefox if Chrome is not available
3. Falls back to Edge if neither Chrome nor Firefox are available

### 📋 Related Repositories

- [**DaggerQuest**](https://github.com/Vineyard-Technologies/DaggerQuest) - The main repository for the *DaggerQuest* codebase.
- [**DaggerQuest.com**](https://github.com/Vineyard-Technologies/DaggerQuest.com) - The website where you can play *DaggerQuest*, read news posts, and browse the guide.
- [**DaggerQuest-Test-Realm**](https://github.com/Vineyard-Technologies/DaggerQuest-Test-Realm) - The official testing environment for *DaggerQuest*.
- [**Overlord**](https://github.com/Vineyard-Technologies/Overlord) - An render pipeline management tool used to generated assets for *DaggerQuest*.
- [**CAFfeine**](https://github.com/Vineyard-Technologies/CAFfeine) - An automation and testing framework for *DaggerQuest* and Construct 3 in general.

## ✒️ License

This project is licensed under the [AGPL 3.0 License](https://www.gnu.org/licenses/agpl-3.0.html.en) - see the [LICENSE](LICENSE) file for details.
