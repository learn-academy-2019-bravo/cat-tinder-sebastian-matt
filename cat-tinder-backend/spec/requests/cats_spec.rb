require 'rails_helper'

describe "Cats API" do
    it "gets a list of cats" do
        Cat.create(name: 'Felix', age: 2, enjoys: 'Walks in the park')
        
        get '/cats'
        
        json = JSON.parse(response.body)
        
        expect(response).to be_success
        
        expect(json.length).to eq 1
    end

it "creates a cat" do
    # The params we are going to send with the request
    cat_params = {
      cat: {
        name: 'Buster',
        age: 4,
        enjoys: 'Meow Mix, and plenty of sunshine.'
      }
    }

    # Send the request to the server
    post '/cats', params: cat_params

    # Assure that we get a success back
    expect(response).to be_successful

    # Look up the cat we expect to be created in the Database
    new_cat = Cat.first

    # Assure that the created cat has the correct attributes
    expect(new_cat.name).to eq('Buster')
  end
  
  it "shouldn't create a new cat profile without a name" do
        cat_params = {
                  cat: {
              age: 4,
              enjoys: 'Meow Mix, and plenty of sunshine.'
            }
        }
                post '/cats', params: cat_params
        
          # This is a new test to make sure that our status is correct when the record can't be created
          # You can read more about HTTP response codes here: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
          expect(response.status).to eq 422
        
          # We also want to check that the API lets us know what is wrong, so the frontend can prompt the user to fix it.
          json = JSON.parse(response.body)
          # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
          expect(json['name']).to include "can't be blank"
        end
        
        it "shoudn't create a new cat without a age" do
            cat_params = {
                  cat: {
              name: "tommy",
              enjoys: 'Meow Mix, and plenty of sunshine.'
            }
        }
                post '/cats', params: cat_params
            # This is a new test to make sure that our status is correct when the record can't be created
          # You can read more about HTTP response codes here: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
          expect(response.status).to eq 422
          json = JSON.parse(response.body)
          # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
          expect(json['age']).to include "can't be blank"
        end
        
         it "shoudn't create a new cat without an enjoys response" do
                cat_params = {
                  cat: {
              name: "tommy",
              age: 3
            }
        }
                post '/cats', params: cat_params
            # This is a new test to make sure that our status is correct when the record can't be created
          # You can read more about HTTP response codes here: https://en.wikipedia.org/wiki/List_of_HTTP_status_codes
          expect(response.status).to eq 422
          json = JSON.parse(response.body)
          # Errors are returned as an array because there could be more than one, if there are more than one validation failures on an attribute.
          expect(json['enjoys']).to include "can't be blank"
        end
 end