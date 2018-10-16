require 'rails_helper'

RSpec.describe Beer, type: :model do
  it { should have_valid(:name).when("Julius") }
  it { should_not have_valid(:name).when(nil, "") }
  it { should have_valid(:style).when("American IPA") }
  it { should_not have_valid(:style).when(nil, "") }
end
