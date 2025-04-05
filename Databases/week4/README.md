# Prep exercise Week 4

## Discussion

### What made you decide when to embed information? What assumptions did you make?

I nested the ingredients, steps and categories inside a single recipe collection. As it stands, the database does not need to have a normalized structure. Steps change a lot between different recipes so it makes sense to embed the steps directly inside the recipe document. Categories and ingredients might repeat a lot, but they don't take up much space for such a simple database. If the db is expected to become some sort of a massive archive for recipes, then it would make sense to have a seperate ingredients collection and reference it inside the recipe document. Same for categories.

### If you were given MySQL and MongoDB as choices to build the recipe's database at the beginning, which one would you choose and why?

#### MongoDb
- If the database is intended to used for a website that displays recipes to users, then I would probably choose mongodb. Each recipe might have different information in it and some might have certain kinds of information missing(like units or amount of ingredient), so it makes more sense to use a flexible document based database.
- The possibility to fetch everything about a recipe with just one query