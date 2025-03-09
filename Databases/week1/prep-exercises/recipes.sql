CREATE DATABASE IF NOT EXISTS recipes_db;
USE recipes_db;

CREATE TABLE recipes (
    recipe_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE categories (
    category_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE ingredients (
    ingredient_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

CREATE TABLE steps (
    step_id INT AUTO_INCREMENT PRIMARY KEY,
    description TEXT NOT NULL
);

CREATE TABLE recipe_categories (
    recipe_id INT,
    category_id INT,
    PRIMARY KEY (recipe_id, category_id),
    FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);

CREATE TABLE recipe_ingredients (
    recipe_id INT,
    ingredient_id INT,
    PRIMARY KEY (recipe_id, ingredient_id),
    FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id),
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(ingredient_id)
);

CREATE TABLE recipe_steps (
    recipe_id INT,
    step_id INT,
    step_order INT NOT NULL,
    PRIMARY KEY (recipe_id, step_id),
    FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id),
    FOREIGN KEY (step_id) REFERENCES steps(step_id)
);

INSERT INTO recipes (name) VALUES
('Miso Soup'),
('Matcha Cheesecake'),
('Vegetable Stir-Fry');

INSERT INTO categories (name) VALUES
('Japanese'),
('Cake'),
('Vegetarian');

INSERT INTO ingredients (name) VALUES
('Miso Paste'),
('Tofu'),
('Dashi Stock'),
('Green Onions'),
('Cream Cheese'),
('Sugar'),
('Matcha Powder'),
('Eggs'),
('Graham Crackers'),
('Butter'),
('Broccoli'),
('Carrots'),
('Bell Peppers'),
('Soy Sauce'),
('Sesame Oil');

INSERT INTO steps (description) VALUES
('Boil dashi stock in a pot.'),
('Dissolve miso paste in the stock.'),
('Add tofu and simmer for 5 minutes.'),
('Garnish with chopped green onions.'),
('Crush graham crackers and mix with melted butter.'),
('Press the mixture into the bottom of a cake pan.'),
('Beat cream cheese, sugar, and matcha powder until smooth.'),
('Add eggs and mix well.'),
('Pour the mixture over the crust and bake at 160°C for 1 hour.'),
('Chop all vegetables into bite-sized pieces.'),
('Heat sesame oil in a pan and stir-fry vegetables.'),
('Add soy sauce and cook for 5 minutes.');

INSERT INTO recipe_categories (recipe_id, category_id) VALUES
(1, 1),
(2, 2),
(2, 1),
(3, 3);

INSERT INTO recipe_ingredients (recipe_id, ingredient_id) VALUES
(1, 1),
(1, 2),
(1, 3),
(1, 4),
(2, 5),
(2, 6),
(2, 7),
(2, 8),
(2, 9),
(2, 10),
(3, 11),  
(3, 12),  
(3, 13),  
(3, 14), 
(3, 15);

INSERT INTO recipe_steps (recipe_id, step_id, step_order) VALUES
(1, 1, 1), 
(1, 2, 2), 
(1, 3, 3), 
(1, 4, 4),
(2, 5, 1), 
(2, 6, 2),
(2, 7, 3),
(2, 8, 4), 
(2, 9, 5), 
(3, 10, 1),
(3, 11, 2),
(3, 12, 3);

