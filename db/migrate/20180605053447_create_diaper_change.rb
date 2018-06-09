class CreateDiaperChange < ActiveRecord::Migration[5.2]
  def change
    create_table :diaper_changes do |t|
      t.timestamps
    end
  end
end
