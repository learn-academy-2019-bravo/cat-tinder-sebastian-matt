class CatsController < ApplicationController
    def index
        render json: Cat.all
    end
    def create
        # Create a new cat
        cat = Cat.create(cat_params)
    
        if cat.valid?
            render json: cat
        else
            render json: cat.errors, status: :unprocessable_entity
       end
    end

        # Handle strong parameters, so we are secure
    def cat_params
        params.require(:cat).permit(:name, :age, :enjoys)
    end
end
