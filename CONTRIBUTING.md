# Contributing to DaggerTest

Thank you for your interest in contributing to DaggerTest! This is the testing framework for DaggerQuest and DaggerQuest.com.

## Getting Started

1. Fork the repository
2. Clone your fork locally
3. Create a new branch for your feature or bug fix
4. Make your changes
5. Test your changes thoroughly
6. Submit a pull request

## About DaggerTest

DaggerTest is a Playwright JavaScript testing framework that provides:

- Automated testing for DaggerQuest game functionality
- Web interface testing for DaggerQuest.com
- Integration testing for the iframe-embedded game
- Regression testing capabilities

## Development Environment

To contribute to DaggerTest:

- JavaScript/Node.js programming knowledge
- Familiarity with Playwright testing framework
- Understanding of modern web automation
- Knowledge of HTML5 game testing methodologies
- Basic understanding of iframe interactions

## Project Structure

- `tests/` - Test specifications and test cases
- `package.json` - Node.js dependencies and scripts
- `playwright.config.js` - Playwright configuration
- `tests/test-helpers.js` - Helper functions and utilities

## Testing Guidelines

### Writing Tests

- Follow Playwright best practices
- Write clear, descriptive test descriptions
- Use appropriate assertions and expectations
- Include both positive and negative test cases
- Test edge cases and error conditions

### Test Categories

- **Game Functionality**: Core game mechanics and features
- **Website Integration**: DaggerQuest.com functionality
- **Iframe Testing**: Game embedding and communication
- **Cross-browser Testing**: Compatibility across browsers
- **Performance Testing**: Load times and responsiveness

## Code Style and Standards

- Follow JavaScript best practices and conventions
- Use descriptive variable and method names
- Write clear comments for complex test logic
- Keep tests focused and atomic
- Avoid test dependencies and ordering issues

## Submitting Changes

### Pull Requests

1. Ensure all existing tests pass
2. Add tests for new functionality
3. Include clear commit messages
4. Provide detailed description of changes
5. Reference any related issues
6. Update documentation if needed

### Bug Reports

When reporting testing issues:

- Describe the expected vs actual test behavior
- Include test output and error messages
- Specify Node.js and Playwright versions
- Note browser/environment details
- Provide steps to reproduce the issue

### Feature Requests

For new testing features:

- Describe the testing scenario or requirement
- Explain why the feature would be valuable
- Consider implementation complexity
- Discuss integration with existing tests

## Running Tests

### Local Development

```bash
# Install dependencies
npm install

# Run all tests
npm test

# Run specific test file
npx playwright test tests/daggerquest-basic.spec.js

# Run tests in UI mode
npm run test:ui

# Run tests with headed browser
npm run test:headed
```

### Continuous Integration

- Tests should pass in CI environment
- Consider browser compatibility requirements
- Ensure tests are stable and reliable
- Avoid flaky or timing-dependent tests

## Code Review Process

All submissions are reviewed for:

- Test quality and coverage
- Code maintainability
- Following testing best practices
- Proper error handling
- Documentation completeness

## Questions?

If you have questions about the testing framework or contributing, feel free to open an issue for discussion.

Thank you for helping improve DaggerQuest through better testing!
