const mongoose = require('mongoose');
require('dotenv').config();

// Create category schema
const categorySchema = new mongoose.Schema({
	_id: false,
	name: { 
		type: String, 
		required: true
	}
});

// Create ingredient schema
const ingredientSchema = new mongoose.Schema({
	_id: false,
	name: { 
		type: String, 
		required: true,
	},
	amount: {
		type: String,
		required: true
	},
	unit: {
		type: String,
		enum: ['g', 'kg', 'ml', 'l', 'cup', 'tsp', 'tbsp', 'pinch', 'piece'],
		required: true
	}
});

// Create step schema
const stepSchema = new mongoose.Schema({
	_id: false,
	order: { 
		type: Number, 
		required: true,
		min: 1
	},
	description: { 
		type: String, 
		required: true,
	}
});

// Create recipe schema
const recipeSchema = new mongoose.Schema({
	name: { 
		type: String, 
		required: true,
	},
	description: {
		type: String,
		required: false,
	},
	categories: [categorySchema],
	ingredients: [ingredientSchema],
	steps: [stepSchema]
});

// Create recipe model
const recipe = mongoose.model('Recipes', recipeSchema);

// Create example recipes
const pancakeRecipe = new recipe({
  name: "Pancakes",
  description: "A simple and fluffy pancake recipe.",
  categories: [{ name: 'Breakfast' }],
  ingredients: [
    { name: "Flour", amount: "200", unit: "g" },
    { name: "Baking powder", amount: "2", unit: "tsp" },
    { name: "Salt", amount: "1", unit: "pinch" },
    { name: "Milk", amount: "300", unit: "ml" },
    { name: "Egg", amount: "1", unit: "piece" },
    { name: "Butter", amount: "30", unit: "g" },
    { name: "Sugar", amount: "50", unit: "g" }
  ],
  steps: [
    { order: 1, description: "Mix the dry ingredients together: flour, baking powder, salt, and sugar." },
    { order: 2, description: "In another bowl, whisk the egg and milk together." },
    { order: 3, description: "Melt the butter and add it to the wet ingredients." },
    { order: 4, description: "Combine wet and dry ingredients until just mixed." },
    { order: 5, description: "Heat a pan and pour the batter to form pancakes. Cook until golden on both sides." },
    { order: 6, description: "Serve with your favorite syrup or toppings." }
  ]
});

const bologneseRecipe = new recipe({
  name: "Spaghetti Bolognese",
  description: "A classic Italian pasta dish with a rich meat sauce.",
  categories: [{ name: 'Dinner' }],
  ingredients: [
    { name: "Spaghetti", amount: "200", unit: "g" },
    { name: "Ground beef", amount: "300", unit: "g" },
    { name: "Tomato sauce", amount: "400", unit: "ml" },
    { name: "Onion", amount: "1", unit: "piece" },
    { name: "Garlic", amount: "2", unit: "piece" },
    { name: "Olive oil", amount: "2", unit: "tbsp" },
    { name: "Salt", amount: "1", unit: "tsp" },
    { name: "Pepper", amount: "1", unit: "tsp" },
    { name: "Herbs (oregano, basil)", amount: "1", unit: "tsp" }
  ],
  steps: [
    { order: 1, description: "Cook the spaghetti according to package instructions." },
    { order: 2, description: "In a large pan, heat the olive oil and sauté the chopped onion and garlic until softened." },
    { order: 3, description: "Add the ground beef and cook until browned." },
    { order: 4, description: "Pour in the tomato sauce and add the herbs, salt, and pepper." },
    { order: 5, description: "Let the sauce simmer for 20 minutes to allow the flavors to meld." },
    { order: 6, description: "Serve the sauce over the cooked spaghetti and garnish with fresh herbs if desired." }
  ]
});

const stirFryRecipe = new recipe({
  name: "Vegetable Stir-Fry",
  description: "A quick and healthy stir-fry full of colorful veggies.",
  categories: [{ name: 'Lunch' }, { name: 'Vegetarian' }],
  ingredients: [
    { name: "Bell peppers", amount: "2", unit: "piece" },
    { name: "Carrot", amount: "1", unit: "piece" },
    { name: "Broccoli", amount: "1", unit: "piece" },
    { name: "Soy sauce", amount: "3", unit: "tbsp" },
    { name: "Sesame oil", amount: "1", unit: "tbsp" },
    { name: "Garlic", amount: "2", unit: "piece" },
    { name: "Ginger", amount: "1", unit: "tbsp" },
    { name: "Tofu", amount: "200", unit: "g" }
  ],
  steps: [
    { order: 1, description: "Cut the vegetables into bite-sized pieces." },
    { order: 2, description: "Press the tofu to remove excess moisture, then cut it into cubes." },
    { order: 3, description: "In a large pan, heat the sesame oil and sauté garlic and ginger until fragrant." },
    { order: 4, description: "Add the tofu cubes and cook until golden on all sides." },
    { order: 5, description: "Add the vegetables and stir-fry for 5-7 minutes until they are tender but still crisp." },
    { order: 6, description: "Pour in the soy sauce and stir to coat the vegetables and tofu." },
    { order: 7, description: "Serve hot over rice or noodles." }
  ]
});

const main = async () => {
	try {
		// Connect to db cluster
		await mongoose.connect(process.env.MONGODB_URL);

		// Save recipes
		await pancakeRecipe.save();
		await bologneseRecipe.save();
		await stirFryRecipe.save();

		// Find recipes in our db
		const recipes = await recipe.find().lean();

		// Display all recipes
		recipes.forEach((r) => {
			console.log(r);
		});

	} catch(error) {
		console.log(error);
	} finally {
		mongoose.disconnect();
	}
};

main();