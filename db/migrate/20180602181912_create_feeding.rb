class CreateFeeding < ActiveRecord::Migration[5.2]
  def change
    create_table :feedings do |t|
      t.string :food
      t.timestamps
    end
  end
end
