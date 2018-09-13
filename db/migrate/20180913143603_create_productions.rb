class CreateProductions < ActiveRecord::Migration[5.2]
  def change
    create_table :productions do |t|
      t.string :name
      t.decimal :price
      t.text :description
      t.numeric :amount

      t.timestamps
    end
  end
end
