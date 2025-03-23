export const vegetarianPotato = `
SELECT r.name AS vegetarianPotato FROM recipes AS r
JOIN recipe_categories AS c ON r.recipe_id = c.recipe_id
JOIN recipe_ingredients AS i ON r.recipe_id = i.recipe_id
WHERE c.category_id = 6 AND i.ingredient_id = 20;`

export const noBakeCake = `
SELECT r.name AS noBakeCake FROM recipes AS r
JOIN recipe_categories AS c1 ON r.recipe_id = c1.recipe_id
JOIN recipe_categories AS c2 ON r.recipe_id = c2.recipe_id
WHERE c1.category_id = 1 AND c2.category_id = 2;`

export const veganAndJapanese = `
SELECT r.name AS veganAndJapanese, c.category_id AS 'Category ID' FROM recipes AS r
JOIN recipe_categories AS c ON r.recipe_id = c.recipe_id
WHERE c.category_id IN (3, 5);`