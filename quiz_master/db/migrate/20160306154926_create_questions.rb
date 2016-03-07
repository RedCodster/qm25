class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.text :ask
      t.string :answer
      t.string :dummy1
      t.string :dummy2

      t.timestamps null: false
    end
  end
end
