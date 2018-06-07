# == Schema Information
#
# Table name: events
#
#  id         :bigint(8)        not null, primary key
#  title      :string           not null
#  img_url    :string           not null
#  start_time :datetime         not null
#  end_time   :datetime         not null
#  address    :string           not null
#  city       :string           not null
#  zipcode    :string           not null
#  price      :float            not null
#  details    :text             not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

require 'test_helper'

class EventTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
