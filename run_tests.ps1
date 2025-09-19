# DaggerTest Setup and Run Script for Windows
# PowerShell script to set up and run Selenium Ruby tests for DaggerQuest.com

# Change to the script's directory
$scriptPath = Split-Path -Parent $MyInvocation.MyCommand.Definition
Set-Location $scriptPath
Write-Host "Working directory: $scriptPath" -ForegroundColor Cyan

Write-Host "DaggerTest - Selenium Ruby Test Framework for DaggerQuest.com" -ForegroundColor Green
Write-Host "=" * 60

# Check if Gemfile exists
if (-not (Test-Path "Gemfile")) {
    Write-Host "✗ Gemfile not found in current directory!" -ForegroundColor Red
    Write-Host "Please make sure you're running this script from the DaggerTest directory." -ForegroundColor Yellow
    exit 1
}
Write-Host "✓ Gemfile found" -ForegroundColor Green

# Check if Ruby is installed
try {
    $rubyVersion = ruby --version
    Write-Host "✓ Ruby is installed: $rubyVersion" -ForegroundColor Green
} catch {
    Write-Host "✗ Ruby is not installed. Please install Ruby first." -ForegroundColor Red
    exit 1
}

# Check if bundler is installed
try {
    bundle --version | Out-Null
    Write-Host "✓ Bundler is installed" -ForegroundColor Green
} catch {
    Write-Host "Installing bundler..." -ForegroundColor Yellow
    gem install bundler
}

# Install gems
Write-Host "Installing required gems..." -ForegroundColor Yellow
try {
    # Clean any existing bundle state and install fresh
    if (Test-Path ".bundle") {
        Remove-Item -Recurse -Force ".bundle"
    }
    if (Test-Path "Gemfile.lock") {
        Remove-Item -Force "Gemfile.lock"
    }
    bundle install
    Write-Host "✓ All gems installed successfully" -ForegroundColor Green
} catch {
    Write-Host "✗ Failed to install gems" -ForegroundColor Red
    Write-Host "Error: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}

Write-Host ""
Write-Host "Setup complete! Choose an option:" -ForegroundColor Green
Write-Host "1. Run basic DaggerQuest.com test"
Write-Host "2. Run all tests"
Write-Host "3. Exit"

$choice = Read-Host "Enter your choice (1-3)"

switch ($choice) {
    "1" {
        Write-Host "Running basic DaggerQuest.com test..." -ForegroundColor Yellow
        bundle exec rspec spec/daggerquest_basic_spec.rb --format documentation
    }
    "2" {
        Write-Host "Running all tests..." -ForegroundColor Yellow
        bundle exec rspec --format documentation
    }
    "3" {
        Write-Host "Goodbye!" -ForegroundColor Green
        exit 0
    }
    default {
        Write-Host "Invalid choice. Exiting." -ForegroundColor Red
        exit 1
    }
}
