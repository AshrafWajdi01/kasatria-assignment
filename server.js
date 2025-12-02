// server.js
import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors()); 
app.use(express.static('public')); 

const SPREADSHEET_ID = '14q2ti-BUJ0-HQMYxiWPUP3hRXYCJUcDoiMSajgiSK0I';
const API_KEY = 'AIzaSyDaOlmf99IWrZdDcMLEZPAIbrO4DrBvdZM';

app.get('/sheetdata', async (req, res) => {
    try {
        const range = 'Data Template';
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${SPREADSHEET_ID}/values/${range}?key=${API_KEY}`;
        const response = await fetch(url);
        const data = await response.json();
        res.json(data); // send data to browser
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.listen(3000, () => console.log('Server running on http://localhost:3000'));
