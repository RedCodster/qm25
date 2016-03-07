class Question < ActiveRecord::Base
	belongs_to :quiz

	validates :ask, presence: true
	validates :answer, presence: true
	validates :dummy1, presence: true
	validates :dummy2, presence: true


end
