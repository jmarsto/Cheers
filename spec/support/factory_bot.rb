require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password { 'password' }
    password_confirmation { 'password' }
    user_name { 'user name' }
    first_name { 'first name' }
    last_name { 'last name' }
    age { '22' }
  end

end
