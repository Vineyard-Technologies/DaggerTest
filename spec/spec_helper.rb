require 'selenium-webdriver'
require 'rspec'

RSpec.configure do |config|
  config.expect_with :rspec do |expectations|
    expectations.include_chain_clauses_in_custom_matcher_descriptions = true
  end

  config.mock_with :rspec do |mocks|
    mocks.verify_partial_doubles = true
  end

  config.shared_context_metadata_behavior = :apply_to_host_groups
end

# Configure webdriver to use the default browser on the host machine
def setup_driver
  puts "Attempting to find and use system browsers..."
  
  # Try Chrome first (most common)
  begin
    puts "Trying Chrome..."
    options = Selenium::WebDriver::Chrome::Options.new
    options.add_argument('--no-sandbox')
    options.add_argument('--disable-dev-shm-usage')
    options.add_argument('--disable-web-security')
    options.add_argument('--allow-running-insecure-content')
    
    # Let Selenium find Chrome automatically
    driver = Selenium::WebDriver.for :chrome, options: options
    puts "✓ Successfully initialized Chrome driver"
    return driver
  rescue => e
    puts "Chrome failed: #{e.message}"
  end
  
  # Try Firefox
  begin
    puts "Trying Firefox..."
    driver = Selenium::WebDriver.for :firefox
    puts "✓ Successfully initialized Firefox driver"
    return driver
  rescue => e
    puts "Firefox failed: #{e.message}"
  end
  
  # Try Edge
  begin
    puts "Trying Edge..."
    driver = Selenium::WebDriver.for :edge
    puts "✓ Successfully initialized Edge driver"
    return driver
  rescue => e
    puts "Edge failed: #{e.message}"
  end
  
  # If all fail, provide helpful error message
  raise <<~ERROR
    No compatible browser found. Please ensure you have one of the following installed:
    
    1. Google Chrome (recommended)
    2. Mozilla Firefox  
    3. Microsoft Edge
    
    Also ensure the browser is properly installed and accessible from the system PATH.
    
    You may need to manually install the appropriate driver:
    - ChromeDriver: https://chromedriver.chromium.org/
    - GeckoDriver (Firefox): https://github.com/mozilla/geckodriver/releases
    - EdgeDriver: https://developer.microsoft.com/en-us/microsoft-edge/tools/webdriver/
  ERROR
end
