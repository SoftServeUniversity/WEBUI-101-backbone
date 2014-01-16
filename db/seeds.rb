5.times do |i|
  Category.create(name: "category#{i}")
end

5.times do |n|
  Product.create(name: "Scout hat-#{n}",
                 price: n,
                 category_id: n)
end
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
