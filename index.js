require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { GoogleGenerativeAI } = require("@google/generative-ai");

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" }); // Use latest model

const generationConfig = {
    temperature: 0.7,
    topP: 0.95,
    topK: 40,
    maxOutputTokens: 512,
    responseMimeType: "text/plain",
};

app.post("/weather", async (req, res) => {
    try {
        const { city } = req.body;
        if (!city) {
            return res.status(400).json({ error: "City name is required" });
        }

        // Requesting specific real-time weather details
        const prompt = `Provide the weather details for ${city}. Include temperature, humidity, wind speed, and conditions.`;

        const chatSession = model.startChat({
            generationConfig,
            history: [{ role: "user", parts: [{ text: city }] }],
        });

        const result = await chatSession.sendMessage("Provide the weather details for"+prompt);
        const responseText = await result.response.text();

        res.json({ response: responseText });
    } catch (error) {
        console.error("❌ AI Error:", error);
        res.status(500).json({ error: "Failed to fetch weather data", details: error.message });
    }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
