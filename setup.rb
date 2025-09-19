#!/usr/bin/env ruby

puts "Setting up DaggerTest - Selenium Ruby Test Framework for DaggerQuest.com"
puts "=" * 60

# Check if bundler is installed
if system('bundle --version > nul 2>&1')
  puts "✓ Bundler is installed"
else
  puts "Installing bundler..."
  system('gem install bundler')
end

# Install gems
puts "Installing required gems..."
if system('bundle install')
  puts "✓ All gems installed successfully"
else
  puts "✗ Failed to install gems"
  exit 1
end

puts ""
puts "Setup complete! You can now run tests with:"
puts "  bundle exec rspec                    # Run all tests"
puts "  bundle exec rake basic               # Run basic DaggerQuest.com test"
puts "  bundle exec rspec --format documentation  # Run with detailed output"
