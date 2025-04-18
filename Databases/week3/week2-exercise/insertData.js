export const insertDummyData = `
INSERT INTO recipes (name) VALUES
('No-Bake Cheesecake'),
('Roasted Brussels Sprouts'),
('Mac & Cheese'),
('Roasted Garlic Potatoes'),
('Tamagoyaki Japanese Omelette');

INSERT INTO categories (name) VALUES
('No-Bake'),
('Cake'),
('Vegan'),
('Gluten-Free'),
('Japanese'),
('Vegetarian');

INSERT INTO ingredients (name) VALUES
('Condensed milk'),
('Cream Cheese'),
('Lemon Juice'),
('Pie Crust'),
('Cherry Jam'),
('Brussels Sprouts'),
('Lemon juice'),
('Sesame seeds'),
('Pepper'),
('Salt'),
('Olive oil'),
('Macaroni'),
('Butter'),
('Flour'),
('Milk'),
('Shredded Cheddar cheese'),
('Eggs'),
('Soy sauce'),
('Sugar'),
('Potatoes'),
('Garlic powder'),
('Parsley');

INSERT INTO steps (description) VALUES
('Beat Cream Cheese'),
('Add condensed Milk and blend'),
('Add Lemon Juice and blend'),
('Add the mix to the pie crust'),
('Spread the Cherry Jam'),
('Place in refrigerator for 3h.'),
('Preheat the oven'),
('Mix the ingredients in a bowl'),
('Spread the mix on baking sheet'),
('Bake for 30'''),
('Cook Macaroni for 8'''),
('Melt butter in a saucepan'),
('Add flour, salt, pepper and mix '),
('Add Milk and mix'),
('Cook until mix is smooth'),
('Add cheddar cheese'),
('Add the macaroni'),
('Beat the eggs'),
('Add soya sauce, sugar and salt'),
('Add oil to a sauce pan'),
('Bring to medium heat'),
('Add some mix to the sauce pan'),
('Let it cook for 1'''),
('Remove pan from fire'),
('Peel and cut potatoes into cubes'),
('Preheat oven to 400°F (200°C)'),
('Toss potatoes with olive oil, salt, pepper, and garlic powder'),
('Spread potatoes on a baking sheet in a single layer'),
('Roast for 25-30 minutes, flipping halfway through, until golden and crispy'),
('Sprinkle with fresh parsley before serving');

INSERT INTO recipe_categories (recipe_id, category_id) VALUES
(1, 1),
(1, 2),
(1, 6),
(2, 3),
(2, 4),
(3, 6),
(4, 6),
(5, 6),
(5, 5);

INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(1, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(2, 10),
(2, 11),
(3, 12),
(3, 13),
(3, 14),
(3, 10),
(3, 9),
(3, 15),
(3, 16),
(4, 20),
(4, 11),
(4, 10),
(4, 9),
(4, 21),
(4, 22),
(5, 17),
(5, 18),
(5, 19),
(5, 10),
(5, 11);

INSERT INTO recipe_steps (recipe_id, step_id, step_order) VALUES
(1, 1, 1),
(1, 2, 2),
(1, 3, 3),
(1, 4, 4),
(1, 5, 5),
(1, 6, 6),
(2, 7, 1),
(2, 8, 2),
(2, 9, 3),
(2, 10, 4),
(3, 11, 1),
(3, 12, 2),
(3, 13, 3),
(3, 14, 4),
(3, 15, 5),
(3, 16, 6),
(3, 17, 7),
(4, 25, 1),
(4, 26, 2),
(4, 27, 3),
(4, 28, 4),
(4, 29, 5),
(4, 30, 6),
(5, 18, 1),
(5, 19, 2),
(5, 20, 3),
(5, 21, 4),
(5, 22, 5),
(5, 23, 6),
(5, 20, 7),
(5, 22, 8),
(5, 23, 9),
(5, 24, 10);`