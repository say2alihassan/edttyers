import fetch from 'node-fetch';

export default async function handler(req, res) {
  const API_KEY  = process.env.GOOGLE_API_KEY;
  const PLACE_ID = process.env.PLACE_ID;

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=reviews,rating,user_ratings_total,name&key=${API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    if (data.status !== 'OK') return res.status(502).json({ error: data.status });
    res.json(data.result);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reviews' });
  }
}
