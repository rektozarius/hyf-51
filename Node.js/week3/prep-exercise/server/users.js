import newDatabase from './database.js';
import 'dotenv/config';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

// Change this boolean to true if you wish to keep your
// users between restart of your application
const isPersistent = true;
const database = newDatabase({isPersistent});

export const register = async (req, res) => {
  const {username, password} = req.body;
  const saltRounds = 12;
  
  if (!username || !password) {
    return res.status(400).json({message: 'Missing username or password'});
  };

  const isUser = database.getByUserName(username);
  if (isUser) {
    return res.status(400).json({message: 'User already exists'});
  };
    
  const hash = await bcrypt.hash(password, saltRounds);
  const storedObject = database.create({username: username, password: hash});
  return res.status(200).json({id: storedObject.id, username: storedObject.username});
};

export const login = async (req, res) => {
  const {username, password} = req.body;

  if (!username || !password) {
    return res.status(400).json({message: 'Missing username or password'});
  };

  const storedObject = database.getByUserName(username);
  if (!storedObject) {
    return res.status(400).json({message: 'User does not exist'});
  };

  const isPasswordValid = await bcrypt.compare(password, storedObject.password);
  if (!isPasswordValid) {
    return res.status(400).json({message: 'Password does not match'});
  };

  const token = jwt.sign({ id: storedObject.id }, process.env.SECRET_KEY, { algorithm: 'HS256' });
  return res.status(201).json({token: token});
};

export const profile = (req, res) => {
	const authHeader = req.headers.authorization;
	let token = '';
	
	if (authHeader.startsWith('Bearer ')) {
		token = authHeader.substring(7, authHeader.length);

		try {
			const verifiedToken = jwt.verify(token, process.env.SECRET_KEY);
			const storedObject = database.getById(verifiedToken.id);
			return res.status(200).json({username: storedObject.username});
		} catch (err) {
			return res.status(401).json({message: 'Unauthorized'});
		};

	} else {
		return res.status(401).json({message: 'Invalid header'});
	};
};

export const logout = (req, res) => {
	res.status(204).end();
};
















// Create middlewares required for routes defined in app.js
// export const register = async (req, res) => {};

// You can also create helper functions in this file to help you implement logic
// inside middlewares
