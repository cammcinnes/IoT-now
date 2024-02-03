import OpenAI from "openai";
import express from "express";
import bodyParser from 'body-parser';
import cors from 'cors';
import fetch from 'node-fetch';
import {config} from './config.js';

const myKey = config.apiKey;

const openai = new OpenAI({
  apiKey: myKey,
});

// create an simple express api that calls the function above
const app = express()
const port = 3080

// Use body-parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Use cors middleware
app.use(cors());

// post request to open ai
app.post('/', async (req, res) => {
  const {message} = req.body;
  try {
      const completion = await openai.chat.completions.create({
        messages: [{ role: "user", content: `${message}` }],
        model: "gpt-3.5-turbo",
        max_tokens: 100,
        temperature: 0.5,
      });
  
      console.log(completion.choices[0]);
      res.json({
        message: completion.choices[0].text,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})