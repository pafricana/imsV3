# frozen_string_literal: true

require 'rails_helper'

RSpec.describe 'Rating columns', type: :system do
  fab!(:topic) { Fabricate(:topic) }
  fab!(:user) { Fabricate(:user) }

  before do
    SiteSetting.imsv3_enabled = true
    sign_in(user)
  end

  it 'shows rating columns' do
    visit '/latest'
    expect(page).to have_content('Importance')
    expect(page).to have_content('Feasibility')
    expect(page).to have_content('Sort')
  end
end
