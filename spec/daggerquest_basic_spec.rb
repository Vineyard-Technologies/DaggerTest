require_relative 'spec_helper'

describe 'DaggerQuest.com Basic Test' do
  before(:each) do
    @driver = setup_driver
  end

  after(:each) do
    @driver&.quit
  end

  it 'should navigate to DaggerQuest.com and verify the URL' do
    # Navigate to DaggerQuest.com
    @driver.get('https://daggerquest.com')
    
    # Wait for page to load
    wait = Selenium::WebDriver::Wait.new(timeout: 10)
    wait.until { @driver.execute_script('return document.readyState') == 'complete' }
    
    # Verify the URL is DaggerQuest.com
    current_url = @driver.current_url
    expect(current_url).to match(/daggerquest\.com/i)
    
    # Verify page title contains DaggerQuest
    page_title = @driver.title
    expect(page_title).to include('DaggerQuest')
    
    puts "Successfully navigated to: #{current_url}"
    puts "Page title: #{page_title}"
  end
end
