require 'rspec/core/rake_task'

RSpec::Core::RakeTask.new(:spec) do |t|
  t.pattern = 'spec/**/*_spec.rb'
end

task default: :spec

desc 'Run all tests'
task :test => :spec

desc 'Run basic DaggerQuest.com test'
task :basic do
  system('rspec spec/daggerquest_basic_spec.rb --format documentation')
end
