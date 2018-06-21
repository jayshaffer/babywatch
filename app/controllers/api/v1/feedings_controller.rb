module Api
    module V1
        class FeedingsController < ApplicationController 
            def index
                @feedings = Feeding.all.order('created_at DESC')
            end

            def show
                @feeding = Feeding.find(params[:id])
            end

            def create
                recent = Feeding.where('created_at > ?', Time.now - 10.minutes)
                @feeding = Feeding.create if recent.empty? 
            end
        end
    end
end
