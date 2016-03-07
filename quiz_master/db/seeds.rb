Quiz.create(name: "Sports Quiz",
  description: "This is a great sports quiz")
Quiz.create(name: "History Buffs",
  description: "For those who absolutely lurrrrrve history.")
Question.create(ask:
   "Which QB was not drafted in the 1st round of the 1983 NFL Entry Draft?",
  answer: "Boomer Esiason",
  dummy1: "John Elway",
  dummy2: "Jim Kelly",
  quiz_id: 1)
Question.create(ask:
   "In what year did Roger Maris break Babe Ruth's single season home run record?",
  answer: "1961",
  dummy1: "1960",
  dummy2: "1951",
  quiz_id: 1)
Question.create(ask:
   "Who was the last horse before American Pharaoh to win the Triple Crown?",
  answer: "Affirmed",
  dummy1: "Seattle Slew",
  dummy2: "Intrepid",
  quiz_id: 1)
Question.create(ask:
   "Which hockey dynasty has never won more than 3 consecutive Stanley Cups?",
  answer: "Edmonton Oilers",
  dummy1: "Montreal Canadiens",
  dummy2: "NY Islanders",
  quiz_id: 1)
Question.create(ask: "Who was the first female Prime Minister of Canada?",
  answer: "Kim Campbell",
  dummy1: "Flora MacDonald",
  dummy2: "Rita Johnson",
  quiz_id: 2)
Question.create(ask: "In what year did Christopher Columbus set sail for the New World?",
  answer: "1492",
  dummy1: "1493",
  dummy2: "1066",
  quiz_id: 2)
Question.create(ask: "In what year was the Republic of China established?",
  answer: "1949",
  dummy1: "1945",
  dummy2: "1959",
  quiz_id: 2)

# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
