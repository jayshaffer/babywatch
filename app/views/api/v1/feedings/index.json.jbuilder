json.feedings @feedings do |feeding|
    json.partial! 'feeding', feeding: feeding
end