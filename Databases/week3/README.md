# Databases Week 3

## Previous Week Table Definitions

### Categories
```javascript
export const createCategories = `
CREATE TABLE categories (
  category_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);`
```
### Ingredients
```javascript
export const createIngredients = `
CREATE TABLE ingredients (
  ingredient_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);`
```
### Recipes
```javascript
export const createRecipes = `
CREATE TABLE recipes (
  recipe_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);`
```
### Steps
```javascript
export const createSteps = `
CREATE TABLE steps (
  step_id INT AUTO_INCREMENT PRIMARY KEY,
  description TEXT NOT NULL
);`
```
### Recipe Categories
```javascript
export const createRecipeCategories = `
CREATE TABLE recipe_categories (
    recipe_id INT,
    category_id INT,
    PRIMARY KEY (recipe_id, category_id),
    FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id),
    FOREIGN KEY (category_id) REFERENCES categories(category_id)
);`
```
### Recipe Ingredients
```javascript
export const createRecipeIngredients = `
CREATE TABLE recipe_ingredients (
    recipe_id INT,
    ingredient_id INT,
    PRIMARY KEY (recipe_id, ingredient_id),
    FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id),
    FOREIGN KEY (ingredient_id) REFERENCES ingredients(ingredient_id)
);`
```
### Recipe Steps
```javascript
export const createRecipeSteps = `
CREATE TABLE recipe_steps (
    recipe_id INT,
    step_id INT,
    step_order INT NOT NULL,
    PRIMARY KEY (recipe_id, step_order),
    FOREIGN KEY (recipe_id) REFERENCES recipes(recipe_id),
    FOREIGN KEY (step_id) REFERENCES steps(step_id)
);`
```


## Exercise Questions

### Was your database already in 2NF / 3 NF?
#### 1NF  ✓
- Every Column Has Single Values

- All Values in a Column Are of the Same Type

- Every Column Has a Unique Name

- Order (of rows/columns) does not matter


#### 2NF  ✓
- No partial dependency (no column depends on part of the primary key)

#### 3NF  ✓
- No column depends on non-key column


### What changes did you have to do to normalize your database?
- No changes

### If you want to add thousands of recipes to your database, what challenges do you foresee?

- I have to make multiple joins across different tables to get detailed information about a recipe. If I have thousands of recipes, it might make my fetch queries really slow.

