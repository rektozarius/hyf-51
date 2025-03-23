import mysql from 'mysql2/promise';
import * as create from './createDatabase.js';
import * as queries from './queries.js';
import { insertDummyData } from './insertData.js';


const main = async () => {
  // create pool
  const pool = mysql.createPool({
    host: 'localhost',
    user: 'hyfuser',
    password: 'hyfpassword',
    multipleStatements: 'true',
    waitForConnections: 'true',
    connectionLimit: 1,
  });

  try {
    // create db, tables
    await pool.query(create.createDb);
    await pool.query(create.createRecipes);
    await pool.query(create.createCategories);
    await pool.query(create.createIngredients);
    await pool.query(create.createSteps);
    await pool.query(create.createRecipeCategories);
    await pool.query(create.createRecipeIngredients);
    await pool.query(create.createRecipeSteps);

    // insert dummy data
    await pool.query(insertDummyData);

    // query data
    let [rows] = await pool.query(queries.vegetarianPotato);
    console.log('Here are the vegetarian recipes with potatoes as an ingredient: \n', rows, '\n');

    [rows] = await pool.query(queries.noBakeCake);
    console.log('Here are the cake recipes that require no baking: \n', rows, '\n');

    [rows] = await pool.query(queries.veganAndJapanese);
    console.log('Here are the all the vegan and japanese recipes: \n', rows, '\n')

  } catch (err) {
    console.log(err);
  } finally {
    pool.end();
  }
};

main();