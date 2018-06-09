module Api
    module V1
        class FeedingsController < ApplicationController 
            def index
                @feedings = Feeding.all
            end

            def show
                @feeding = Feeding.find(params[:id])
            end

            def create
                @feeding = Feeding.create
            end
        end
    end
end
