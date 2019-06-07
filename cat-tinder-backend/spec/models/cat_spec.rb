require 'rails_helper'

RSpec.describe Cat, type: :model do
  
   it "should validate name" do
    cat = Cat.create
    expect(cat.errors[:name]).to_not be_empty
  end
  
     it "should include an enjoys section with more than 10 chars" do
    cat = Cat.create
    expect(cat.errors[:enjoys].text).to be > 10
  end
end
