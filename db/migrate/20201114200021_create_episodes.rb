class CreateEpisodes < ActiveRecord::Migration[6.0]
  def change
    create_table :episodes do |t|
      t.string :title
      t.integer :season
      t.text :description
      t.string :img_url

      t.timestamps
    end
  end
end
