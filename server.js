import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
app.use(cors({ origin: ['http://localhost:5173', 'http://localhost:4173'] }));

const API_KEY  = process.env.GOOGLE_API_KEY;
const PLACE_ID = process.env.PLACE_ID;

app.get('/api/reviews', async (req, res) => {
  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total,name&key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.status !== 'OK') return res.status(502).json({ error: data.status });
    res.json(data.result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Reviews proxy running on http://localhost:${PORT}`));
