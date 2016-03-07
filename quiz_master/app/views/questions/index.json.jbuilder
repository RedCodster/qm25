json.array!(@questions) do |question|
  json.extract! question, :id, :ask, :answer, :dummy1, :dummy2
  json.url question_url(question, format: :json)
end
