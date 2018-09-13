class CreateFeedbacks < ActiveRecord::Migration[5.2]
  def change
    create_table :feedbacks do |t|
      t.string :name
      t.string :email
      t.text :massage
      t.string :phone
      t.string :subject

      t.timestamps
    end
  end
end
