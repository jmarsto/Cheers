class AddBeers < ActiveRecord::Migration[5.2]
  def change
    create_table :beers do |t|
      t.string :name, null: false
      t.string :style, null: false
      t.string :ABV

      t.timestamps null: false
    end

  end
end
