# == Schema Information
#
# Table name: genres
#
#  id         :bigint           not null, primary key
#  genre      :string           not null
#  video_id   :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Genre < ApplicationRecord
  validates :genre, presence: true

  belongs_to :video,
             class_name: :Video,
             foreign_key: :video_id

  attr_reader :genre_videos
end
